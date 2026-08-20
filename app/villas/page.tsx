"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, SlidersHorizontal, MapPin, Sparkles, RefreshCw } from "lucide-react"
import { MANAGED_AREAS } from "@/lib/constants"
import { CURATED_VILLAS } from "@/lib/data"
import { VillaCard } from "@/components/villas/villa-card"
import { Button } from "@/components/ui/button"

function VillasCatalogContent() {
  const searchParams = useSearchParams()
  const initialArea = searchParams.get("area") || "all"
  const initialGuests = searchParams.get("guests") || "all"

  const [selectedArea, setSelectedArea] = useState(initialArea)
  const [selectedGuests, setSelectedGuests] = useState(initialGuests)
  const [sortBy, setSortBy] = useState<"recommended" | "price-asc" | "price-desc" | "rating">("recommended")

  const filteredVillas = useMemo(() => {
    return CURATED_VILLAS.filter((villa) => {
      if (selectedArea !== "all" && villa.areaSlug !== selectedArea) return false
      if (selectedGuests !== "all") {
        const requiredGuests = parseInt(selectedGuests, 10)
        if (villa.capacity.guests < requiredGuests) return false
      }
      return true
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price.idr - b.price.idr
      if (sortBy === "price-desc") return b.price.idr - a.price.idr
      if (sortBy === "rating") return b.rating - a.rating
      return 0 // default recommended
    })
  }, [selectedArea, selectedGuests, sortBy])

  const resetFilters = () => {
    setSelectedArea("all")
    setSelectedGuests("all")
    setSortBy("recommended")
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Editorial Catalog Header */}
      <section className="border-b border-[#EBEBEB] bg-[#FAFAFA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A69C8E]">
            Portofolio Terkurasi &bull; Jabodetabek 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] font-normal">
            Koleksi Properti KingHouse
          </h1>
          <p className="text-sm sm:text-base text-[#717171] max-w-2xl leading-relaxed">
            Setiap properti dikelola dengan standar Superhost Airbnb: kebersihan hotel bintang lima, foto editorial, perlengkapan lengkap, dan layanan concierge 24/7.
          </p>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="sticky top-20 z-30 border-b border-[#EBEBEB] bg-white/95 backdrop-blur-md py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Destination Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedArea("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                selectedArea === "all"
                  ? "bg-[#222222] text-white shadow-xs"
                  : "bg-[#FAFAFA] text-[#717171] border border-[#EBEBEB] hover:text-[#222222]"
              }`}
            >
              Semua Area
            </button>
            {MANAGED_AREAS.map((area) => (
              <button
                key={area.slug}
                onClick={() => setSelectedArea(area.slug)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                  selectedArea === area.slug
                    ? "bg-[#222222] text-white shadow-xs"
                    : "bg-[#FAFAFA] text-[#717171] border border-[#EBEBEB] hover:text-[#222222]"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Guest Count & Sort Dropdowns */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 bg-[#FAFAFA] border border-[#EBEBEB] rounded-lg px-3 py-1.5">
              <span className="text-[#717171] font-medium">Guests:</span>
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
                className="bg-transparent font-semibold text-[#222222] focus:outline-none cursor-pointer"
              >
                <option value="all">Any Capacity</option>
                <option value="4">4+ Guests</option>
                <option value="6">6+ Guests</option>
                <option value="8">8+ Guests</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5 bg-[#FAFAFA] border border-[#EBEBEB] rounded-lg px-3 py-1.5">
              <span className="text-[#717171] font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-semibold text-[#222222] focus:outline-none cursor-pointer"
              >
                <option value="recommended">Curated Top</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Villas Grid Showcase */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12">
        <div className="flex items-center justify-between mb-8 text-xs text-[#717171]">
          <span>
            Showing <strong className="text-[#222222]">{filteredVillas.length}</strong> architectural retreats
          </span>
          {(selectedArea !== "all" || selectedGuests !== "all") && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center text-[#222222] hover:text-[#A69C8E] font-medium"
            >
              <RefreshCw className="mr-1 h-3 w-3" /> Reset Filters
            </button>
          )}
        </div>

        {filteredVillas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredVillas.map((villa) => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] py-16 text-center space-y-4">
            <h3 className="font-serif text-2xl text-[#222222]">No Villas Match Your Criteria</h3>
            <p className="text-xs text-[#717171] max-w-md mx-auto">
              Try resetting your destination or guest filters to discover available sanctuaries in other coastal or forest enclaves.
            </p>
            <Button onClick={resetFilters} variant="outline" size="sm">
              Reset All Filters
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}

export default function VillasCatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-serif">Loading Portfolio...</div>}>
      <VillasCatalogContent />
    </Suspense>
  )
}
