import { describe, it, expect } from "vitest"
import {
  calculateReservationPayout,
  generateOwnerStatement,
  calculateADR,
  calculateRevPAR,
} from "@/lib/erp/calculations"
import { Reservation, ExpenseRecord } from "@/lib/erp/types"

describe("Hospitality ERP Financial Calculations", () => {
  it("calculates standard 15% management fee split correctly", () => {
    // Gross: 1.500.000, Cleaning Fee: 300.000 -> Accommodation Revenue: 1.200.000
    // Mgmt Fee: 15% of 1.200.000 = 180.000
    // Net Owner Payout: 1.500.000 - 180.000 - 300.000 = 1.020.000
    const result = calculateReservationPayout(1500000, 300000, "standard")

    expect(result.managementFeePercent).toBe(15)
    expect(result.managementFeeIdr).toBe(180000)
    expect(result.netOwnerPayoutIdr).toBe(1020000)
  })

  it("calculates premium 20% management fee split correctly", () => {
    // Gross: 2.000.000, Cleaning Fee: 0 -> Accommodation Revenue: 2.000.000
    // Mgmt Fee: 20% of 2.000.000 = 400.000
    // Net Owner Payout: 2.000.000 - 400.000 = 1.600.000
    const result = calculateReservationPayout(2000000, 0, "premium")

    expect(result.managementFeePercent).toBe(20)
    expect(result.managementFeeIdr).toBe(400000)
    expect(result.netOwnerPayoutIdr).toBe(1600000)
  })

  it("calculates ADR (Average Daily Rate) and RevPAR accurately", () => {
    const totalGross = 10000000
    const nightsBooked = 10
    const totalMonthNights = 30

    expect(calculateADR(totalGross, nightsBooked)).toBe(1000000)
    expect(calculateRevPAR(totalGross, totalMonthNights)).toBe(333333)
  })

  it("generates comprehensive Owner Statement with expense deduction", () => {
    const mockReservations: Reservation[] = [
      {
        id: "RES-1",
        propertyId: "villa-1",
        propertySlug: "versatile-house",
        propertyName: "Versatile House",
        guestName: "Guest A",
        channel: "Airbnb",
        checkIn: "2026-08-01",
        checkOut: "2026-08-04",
        nights: 3,
        guests: 4,
        grossPayoutIdr: 4500000,
        cleaningFeeIdr: 300000,
        feeTier: "standard",
        managementFeePercent: 15,
        managementFeeIdr: 630000,
        netOwnerPayoutIdr: 3570000,
        status: "Completed",
        createdAt: "2026-08-01T00:00:00Z",
      },
    ]

    const mockExpenses: ExpenseRecord[] = [
      {
        id: "EXP-1",
        propertyId: "villa-1",
        propertySlug: "versatile-house",
        propertyName: "Versatile House",
        category: "PLN & Utilities",
        description: "Token Listrik",
        amountIdr: 500000,
        date: "2026-08-05",
        recordedBy: "Staff",
      },
    ]

    const statement = generateOwnerStatement(
      "villa-1",
      "Versatile House",
      "Jagakarsa",
      "Pak Budi",
      "Agustus 2026",
      mockReservations,
      mockExpenses,
      "standard",
      31
    )

    expect(statement.statementId).toContain("VILLA-1")
    expect(statement.grossRevenueIdr).toBe(4500000)
    expect(statement.totalCleaningFeeIdr).toBe(300000)
    expect(statement.totalManagementFeeIdr).toBe(630000)
    expect(statement.totalExpensesIdr).toBe(500000)
    // Net remittance: 4.500.000 - 300.000 - 630.000 - 500.000 = 3.070.000
    expect(statement.netRemittanceToOwnerIdr).toBe(3070000)
    expect(statement.reservationsCount).toBe(1)
  })
})
