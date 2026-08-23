import { NextRequest, NextResponse } from "next/server"
import { CURATED_VILLAS } from "@/lib/data"
import { INITIAL_RESERVATIONS } from "@/lib/erp/initial-data"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ villaSlug: string }> }
) {
  const { villaSlug } = await params
  const villa = CURATED_VILLAS.find((v) => v.slug === villaSlug || v.id === villaSlug)

  if (!villa) {
    return new NextResponse("Property calendar not found", { status: 404 })
  }

  // Filter reservations for this villa
  const villaReservations = INITIAL_RESERVATIONS.filter(
    (r) => (r.propertySlug === villaSlug || r.propertyId === villa.id) && r.status !== "Cancelled"
  )

  const now = new Date()
  const timestamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"

  // Build RFC 5545 iCalendar content
  let icsLines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KingHouse Hospitality//EN",
    `X-WR-CALNAME:KingHouse - ${villa.name}`,
    "X-WR-CALDESC:Real-time availability calendar feed for OTA synchronization",
    "X-WR-TIMEZONE:Asia/Jakarta",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ]

  villaReservations.forEach((res) => {
    const dtStart = res.checkIn.replace(/-/g, "")
    const dtEnd = res.checkOut.replace(/-/g, "")

    icsLines.push(
      "BEGIN:VEVENT",
      `UID:${res.id}@kinghouse.id`,
      `DTSTAMP:${timestamp}`,
      `DTSTART;VALUE=DATE:${dtStart}`,
      `DTEND;VALUE=DATE:${dtEnd}`,
      `SUMMARY:Reserved - KingHouse (${res.channel})`,
      `DESCRIPTION:Channel: ${res.channel} | Stay for ${res.guests} guests | Booking Ref: ${res.id}`,
      "STATUS:CONFIRMED",
      "TRANSP:OPAQUE",
      "END:VEVENT"
    )
  })

  icsLines.push("END:VCALENDAR")

  const icsBody = icsLines.join("\r\n")

  return new NextResponse(icsBody, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${villaSlug}-calendar.ics"`,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}
