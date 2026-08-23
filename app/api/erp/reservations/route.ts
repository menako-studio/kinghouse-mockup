import { NextRequest, NextResponse } from "next/server"
import { ReservationSchema } from "@/lib/validations"
import { calculateReservationPayout } from "@/lib/erp/calculations"
import { INITIAL_RESERVATIONS } from "@/lib/erp/initial-data"
import { Reservation } from "@/lib/erp/types"

// In-memory store initialized with realistic seed data
let reservationsStore: Reservation[] = [...INITIAL_RESERVATIONS]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const propertyId = searchParams.get("propertyId")
  const channel = searchParams.get("channel")

  let filtered = [...reservationsStore]
  if (propertyId) {
    filtered = filtered.filter((r) => r.propertyId === propertyId || r.propertySlug === propertyId)
  }
  if (channel) {
    filtered = filtered.filter((r) => r.channel.toLowerCase() === channel.toLowerCase())
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    reservations: filtered,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const parseResult = ReservationSchema.safeParse(body)

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Data reservasi tidak valid."
      return NextResponse.json({ error: firstError, issues: parseResult.error.issues }, { status: 400 })
    }

    const data = parseResult.data

    // Automatically compute net payout and commission breakdown
    const payoutCalculations = calculateReservationPayout(
      data.grossPayoutIdr,
      data.cleaningFeeIdr,
      data.feeTier
    )

    const newReservation: Reservation = {
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      propertyId: data.propertyId,
      propertySlug: data.propertyName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      propertyName: data.propertyName,
      guestName: data.guestName,
      guestPhone: data.guestPhone,
      guestEmail: data.guestEmail,
      channel: data.channel,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      nights: data.nights,
      guests: data.guests,
      grossPayoutIdr: data.grossPayoutIdr,
      cleaningFeeIdr: data.cleaningFeeIdr,
      feeTier: data.feeTier,
      managementFeePercent: payoutCalculations.managementFeePercent,
      managementFeeIdr: payoutCalculations.managementFeeIdr,
      netOwnerPayoutIdr: payoutCalculations.netOwnerPayoutIdr,
      status: data.status,
      notes: data.notes,
      createdAt: new Date().toISOString(),
    }

    reservationsStore.unshift(newReservation)

    return NextResponse.json({
      success: true,
      message: "Reservasi berhasil ditambahkan ke kalender ERP.",
      reservation: newReservation,
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Gagal memproses data reservasi." },
      { status: 500 }
    )
  }
}
