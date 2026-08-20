"use client"

import { useState } from "react"
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles, Calendar, Users, HelpCircle } from "lucide-react"
import { Villa } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BookingSidebarProps {
  villa: Villa
}

export function BookingSidebar({ villa }: BookingSidebarProps) {
  const [checkIn, setCheckIn] = useState("2026-09-10")
  const [checkOut, setCheckOut] = useState("2026-09-15")
  const [guestCount, setGuestCount] = useState("2")

  // Calculate nights & fees (IDR primary)
  const nights = 5
  const baseTotal = villa.price.idr * nights
  const cleaningFee = villa.price.cleaningFeeIdr
  const serviceFee = Math.round(baseTotal * (villa.price.serviceFeePercent / 100))
  const estimatedTotal = baseTotal + cleaningFee + serviceFee

  const whatsappMessage = encodeURIComponent(
    `Hello KingHouse! I am interested in booking ${villa.name} in ${villa.area} for ${nights} nights (${checkIn} to ${checkOut}) for ${guestCount} guests. Please share availability and details.`
  )
  const whatsappUrl = `https://wa.me/628129252090?text=${whatsappMessage}`

  return (
    <div className="sticky top-28 rounded-2xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      {/* Price Header */}
      <div className="flex items-baseline justify-between pb-6 border-b border-[#EBEBEB]">
        <div>
          <div className="flex items-baseline space-x-1">
            <span className="font-serif text-3xl font-normal text-[#222222]">
              {formatCurrency(villa.price.idr, "IDR")}
            </span>
            <span className="text-sm text-[#717171]"> / night</span>
          </div>
          <span className="text-xs text-[#A69C8E] block">
            ≈ {formatCurrency(villa.price.usd, "USD")}/night
          </span>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-1 text-xs font-semibold text-[#222222]">
            <span>★ {villa.rating.toFixed(2)}</span>
            <span className="text-[#717171] font-normal">({villa.reviewsCount} reviews)</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#717171] block">
            Airbnb Superhost
          </span>
        </div>
      </div>

      {/* Date & Guest Selector Box (Airbnb Style) */}
      <div className="my-6 overflow-hidden rounded-xl border border-[#EBEBEB] divide-y divide-[#EBEBEB]">
        <div className="grid grid-cols-2 divide-x divide-[#EBEBEB] bg-[#FAFAFA]">
          <div className="p-3">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-xs text-[#222222] font-medium focus:outline-none cursor-pointer pt-0.5"
            />
          </div>
          <div className="p-3">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-xs text-[#222222] font-medium focus:outline-none cursor-pointer pt-0.5"
            />
          </div>
        </div>

        <div className="p-3 bg-white">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
            Guests
          </label>
          <select
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            className="w-full bg-transparent text-xs text-[#222222] font-medium focus:outline-none cursor-pointer pt-0.5"
          >
            {Array.from({ length: villa.capacity.guests }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Primary & Secondary Conversion CTAs */}
      <div className="space-y-3">
        {/* Primary Solid Dark CTA */}
        <Button
          size="lg"
          asChild
          className="w-full h-13 bg-[#222222] text-white hover:bg-black font-semibold text-xs uppercase tracking-widest shadow-md transition-all active:scale-[0.99]"
        >
          <a
            href={villa.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2"
          >
            <span>Check Availability on Airbnb</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>

        {/* Secondary Outline WhatsApp CTA */}
        <Button
          size="lg"
          variant="outline"
          asChild
          className="w-full h-12 text-xs uppercase tracking-wider font-semibold border-[#222222]"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2"
          >
            <MessageSquare className="h-4 w-4 text-[#25D366]" />
            <span>Chat via WhatsApp Concierge</span>
          </a>
        </Button>
      </div>

      <p className="mt-4 text-center text-[11px] text-[#717171]">
        You won&apos;t be charged yet &bull; Direct booking finalized securely on Airbnb
      </p>

      {/* Pricing Breakdown */}
      <div className="mt-6 pt-6 border-t border-[#EBEBEB] space-y-2.5 text-xs text-[#717171]">
        <div className="flex justify-between">
          <span className="underline decoration-dotted">
            {formatCurrency(villa.price.usd, "USD")} x {nights} nights
          </span>
          <span className="text-[#222222] font-medium">{formatCurrency(baseTotal, "USD")}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline decoration-dotted">Cleaning & Linen Preparation</span>
          <span className="text-[#222222] font-medium">{formatCurrency(cleaningFee, "USD")}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline decoration-dotted">Airbnb Service Fee (est.)</span>
          <span className="text-[#222222] font-medium">{formatCurrency(serviceFee, "USD")}</span>
        </div>

        <div className="flex justify-between pt-3 border-t border-[#EBEBEB] text-sm font-semibold text-[#222222]">
          <span>Estimated Total (USD)</span>
          <span>{formatCurrency(estimatedTotal, "USD")}</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-[#EBEBEB] space-y-2 text-[11px] text-[#717171]">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-4 w-4 text-[#A69C8E]" />
          <span>Best Price Guarantee & Verified Airbnb Superhost</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-[#A69C8E]" />
          <span>KingHouse dedicated on-site butler & daily housekeeping</span>
        </div>
      </div>
    </div>
  )
}
