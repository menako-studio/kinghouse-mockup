export interface ParsedIcalEvent {
  uid: string
  dtStart: string // YYYY-MM-DD
  dtEnd: string   // YYYY-MM-DD
  summary: string
  description?: string
  status?: string
}

/**
 * Parses a standard RFC 5545 iCalendar (.ics) string into structured event objects
 */
export function parseIcalString(icsText: string): ParsedIcalEvent[] {
  if (!icsText || typeof icsText !== "string") return []

  const lines = icsText
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")

  const events: ParsedIcalEvent[] = []
  let inEvent = false
  let currentEvent: Partial<ParsedIcalEvent> = {}

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line === "BEGIN:VEVENT") {
      inEvent = true
      currentEvent = {}
      continue
    }

    if (line === "END:VEVENT") {
      if (inEvent && currentEvent.uid && currentEvent.dtStart && currentEvent.dtEnd) {
        events.push({
          uid: currentEvent.uid,
          dtStart: currentEvent.dtStart,
          dtEnd: currentEvent.dtEnd,
          summary: currentEvent.summary || "Reserved (OTA)",
          description: currentEvent.description,
          status: currentEvent.status || "CONFIRMED",
        })
      }
      inEvent = false
      currentEvent = {}
      continue
    }

    if (!inEvent) continue

    // Parse UID
    if (line.startsWith("UID:")) {
      currentEvent.uid = line.substring(4).trim()
    }
    // Parse DTSTART (supports DTSTART;VALUE=DATE:20260901 or DTSTART:20260901T150000Z)
    else if (line.startsWith("DTSTART")) {
      const parts = line.split(":")
      if (parts.length >= 2) {
        const rawDate = parts[1].trim()
        currentEvent.dtStart = formatIcalDate(rawDate)
      }
    }
    // Parse DTEND
    else if (line.startsWith("DTEND")) {
      const parts = line.split(":")
      if (parts.length >= 2) {
        const rawDate = parts[1].trim()
        currentEvent.dtEnd = formatIcalDate(rawDate)
      }
    }
    // Parse SUMMARY
    else if (line.startsWith("SUMMARY:")) {
      currentEvent.summary = line.substring(8).trim()
    }
    // Parse DESCRIPTION
    else if (line.startsWith("DESCRIPTION:")) {
      currentEvent.description = line.substring(12).trim()
    }
    // Parse STATUS
    else if (line.startsWith("STATUS:")) {
      currentEvent.status = line.substring(7).trim()
    }
  }

  return events
}

/**
 * Normalizes iCal date string (e.g. 20260901 or 20260901T150000Z) to YYYY-MM-DD
 */
export function formatIcalDate(raw: string): string {
  if (!raw) return ""

  // Extract YYYYMMDD
  const clean = raw.replace(/[^0-9]/g, "")
  if (clean.length >= 8) {
    const year = clean.substring(0, 4)
    const month = clean.substring(4, 6)
    const day = clean.substring(6, 8)
    return `${year}-${month}-${day}`
  }

  return raw
}
