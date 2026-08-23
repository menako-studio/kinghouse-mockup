import { describe, it, expect } from "vitest"
import { exportReservationsToCsv, exportExpensesToCsv } from "@/lib/erp/export"
import { INITIAL_RESERVATIONS, INITIAL_EXPENSES } from "@/lib/erp/initial-data"

describe("Distribution Feed & Export Engine", () => {
  it("generates well-formatted CSV for reservations", () => {
    const csv = exportReservationsToCsv(INITIAL_RESERVATIONS)

    expect(csv).toContain("Reservation ID,Property,Guest Name,Channel")
    expect(csv).toContain("RES-8921")
    expect(csv).toContain("Versatile House With Beautiful Garden Beyond")
    expect(csv).toContain("Hartono & Family")
    expect(csv).toContain("Airbnb")
  })

  it("generates well-formatted CSV for expenses", () => {
    const csv = exportExpensesToCsv(INITIAL_EXPENSES)

    expect(csv).toContain("Expense ID,Property,Category,Description,Amount (IDR)")
    expect(csv).toContain("EXP-101")
    expect(csv).toContain("PLN & Utilities")
    expect(csv).toContain("Token Listrik PLN")
  })
})
