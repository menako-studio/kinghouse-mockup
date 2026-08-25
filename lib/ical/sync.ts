import { parseIcalString, ParsedIcalEvent } from "./parser"
import { Reservation, ChannelType } from "@/lib/erp/types"
import { calculateReservationPayout } from "@/lib/erp/calculations"
import { CURATED_VILLAS } from "@/lib/data"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export interface PropertyIcalConfig {
  propertyId: string
  propertySlug: string
  propertyName: string
  inboundIcalUrl?: string
  channel: ChannelType
}

/**
 * Syncs external iCal feed for a specific property
 */
export async function syncPropertyIcal(
  propertySlug: string,
  icalUrl: string,
  channel: ChannelType = "Airbnb"
): Promise<{ success: boolean; importedCount: number; reservations: Reservation[]; error?: string }> {
  try {
    const villa = CURATED_VILLAS.find((v) => v.slug === propertySlug || v.id === propertySlug)
    if (!villa) {
      return { success: false, importedCount: 0, reservations: [], error: "Property not found." }
    }

    const response = await fetch(icalUrl, {
      headers: {
        "User-Agent": "KingHouse-Hospitality-Sync/1.0",
      },
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      return {
        success: false,
        importedCount: 0,
        reservations: [],
        error: `Failed to fetch iCal feed (Status: ${response.status})`,
      }
    }

    const icsText = await response.text()
    const parsedEvents = parseIcalString(icsText)

    const newReservations: Reservation[] = parsedEvents.map((evt, idx) => {
      const checkInDate = new Date(evt.dtStart)
      const checkOutDate = new Date(evt.dtEnd)
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime())
      const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))

      const estimatedNightlyRate = villa.price.idr
      const grossPayoutIdr = estimatedNightlyRate * nights
      const cleaningFeeIdr = villa.price.cleaningFeeIdr
      const payout = calculateReservationPayout(grossPayoutIdr, cleaningFeeIdr, "standard")

      const guestName = evt.summary.replace(/^Reserved\s*-\s*/i, "").trim() || `OTA Guest (#${idx + 1})`

      return {
        id: `SYNC-${evt.uid.replace(/[^a-zA-Z0-9]/g, "").substring(0, 10)}`,
        propertyId: villa.id,
        propertySlug: villa.slug,
        propertyName: villa.name,
        guestName,
        channel,
        checkIn: evt.dtStart,
        checkOut: evt.dtEnd,
        nights,
        guests: 2,
        grossPayoutIdr,
        cleaningFeeIdr,
        feeTier: "standard",
        managementFeePercent: payout.managementFeePercent,
        managementFeeIdr: payout.managementFeeIdr,
        netOwnerPayoutIdr: payout.netOwnerPayoutIdr,
        status: "Confirmed",
        notes: `Auto-synced via ${channel} iCal feed. UID: ${evt.uid}`,
        createdAt: new Date().toISOString(),
      }
    })

    // Upsert into Supabase if configured
    const supabase = getSupabaseServerClient()
    if (supabase && newReservations.length > 0) {
      const recordsToUpsert = newReservations.map((r) => ({
        id: r.id,
        property_id: r.propertyId,
        property_slug: r.propertySlug,
        property_name: r.propertyName,
        guest_name: r.guestName,
        guest_phone: null,
        guest_email: null,
        channel: r.channel,
        check_in: r.checkIn,
        check_out: r.checkOut,
        nights: r.nights,
        guests: r.guests,
        gross_payout_idr: r.grossPayoutIdr,
        cleaning_fee_idr: r.cleaningFeeIdr,
        fee_tier: r.feeTier,
        management_fee_percent: r.managementFeePercent,
        management_fee_idr: r.managementFeeIdr,
        net_owner_payout_idr: r.netOwnerPayoutIdr,
        status: r.status,
        notes: r.notes,
        created_at: r.createdAt,
      }))

      await supabase.from("reservations").upsert(recordsToUpsert, { onConflict: "id" })
    }

    return {
      success: true,
      importedCount: newReservations.length,
      reservations: newReservations,
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to execute iCal sync"
    return {
      success: false,
      importedCount: 0,
      reservations: [],
      error: errorMessage,
    }
  }
}
