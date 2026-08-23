import { describe, it, expect } from "vitest"
import {
  calculateUpsellOrder,
  generateUpsellWhatsAppUrl,
} from "@/lib/guest-guide/calculations"
import { GUEST_COMPENDIUMS, UPSELL_SERVICES } from "@/lib/guest-guide/data"

describe("Digital Guest Compendium & Upsell Engine", () => {
  it("contains valid compendiums for all 4 managed Jabodetabek properties", () => {
    const slugs = Object.keys(GUEST_COMPENDIUMS)
    expect(slugs).toHaveLength(4)
    expect(slugs).toContain("versatile-house-jagakarsa")
    expect(slugs).toContain("sky-house-tangerang")
    expect(slugs).toContain("bright-airy-apartment-palmerah")
    expect(slugs).toContain("skyline-luxury-orange-county-cikarang")

    slugs.forEach((slug) => {
      const comp = GUEST_COMPENDIUMS[slug]
      expect(comp.wifi.password).toBeTruthy()
      expect(comp.wifi.networkName).toBeTruthy()
      expect(comp.access.checkInTime).toBeTruthy()
      expect(comp.houseRules.length).toBeGreaterThan(0)
    })
  })

  it("calculates upsell order totals accurately", () => {
    const selected = [
      { serviceId: "late-checkout-2pm", quantity: 1 }, // 150,000
      { serviceId: "extra-bed-hotel", quantity: 2 },    // 150,000 * 2 = 300,000
    ]

    const order = calculateUpsellOrder(selected)
    expect(order.items).toHaveLength(2)
    expect(order.totalAmountIdr).toBe(450000)
  })

  it("formats WhatsApp concierge message with encoded URI parameters", () => {
    const selected = [{ serviceId: "late-checkout-2pm", quantity: 1 }]
    const order = calculateUpsellOrder(selected)

    const url = generateUpsellWhatsAppUrl(
      "6282123933218",
      "Versatile House",
      "Budi Santoso",
      order,
      "Mohon konfirmasi"
    )

    expect(url).toContain("https://wa.me/6282123933218")
    expect(url).toContain(encodeURIComponent("Versatile House"))
    expect(url).toContain(encodeURIComponent("Budi Santoso"))
    expect(url).toContain(encodeURIComponent("Late Check-Out (Until 14:00 WIB)"))
  })
})
