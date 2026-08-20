"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { RefreshCw } from "lucide-react"
import { MANAGED_AREAS } from "@/lib/constants"
import { CURATED_VILLAS } from "@/lib/data"
import { VillaCard } from "@/components/villas/villa-card"
import { Button } from "@/components/ui/button"

type SortOption = "recommended" | "price-asc" | "price-desc" | "rating"

function VillasCatalogContent() {
  const searchParams = useSearchParams()
  const initialArea = searchParams.get("area") || "all"
  const initialGuests = searchParams.get("guests") || "all"

  const [selectedArea, setSelectedArea] = useState(initialArea)
  const [selectedGuests, setSelectedGuests] = useState(initialGuests)
  const [sortBy, setSortBy] = useState<SortOption>("recommended")

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
      <section className="section-macro-spacing bg-[#FAFAFA] border-b border-[#EBEBEB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A69C8E]">
              Portfolio 2026
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#222222] font-normal leading-[1.1]">
              The KingHouse Collection
            </h1>
            <p className="text-base sm:text-lg text-[#717171] font-light leading-relaxed">
              Explore bespoke private villas across Jabodetabek, meticulously curated and operated to Airbnb Superhost standards.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Secondary Filter Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB] py-4 shadow-xs">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Area Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => setSelectedArea("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex-shrink-0 cursor-pointer ${
                selectedArea === "all"
                  ? "bg-[#222222] text-white shadow-xs"
                  : "bg-[#FAFAFA] text-[#717171] hover:bg-[#F2EFEB] hover:text-[#222222] border border-[#EBEBEB]"
              }`}
            >
              All Locations ({CURATED_VILLAS.length})
            </button>
            {MANAGED_AREAS.map((area) => {
              const count = CURATED_VILLAS.filter((v) => v.areaSlug === area.slug).length
              return (
                <button
                  key={area.slug}
                  onClick={() => setSelectedArea(area.slug)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex-shrink-0 cursor-pointer ${
                    selectedArea === area.slug
                      ? "bg-[#222222] text-white shadow-xs"
                      : "bg-[#FAFAFA] text-[#717171] hover:bg-[#F2EFEB] hover:text-[#222222] border border-[#EBEBEB]"
                  }`}
                >
                  {area.name} ({count})
                </button>
              )
            })}
          </div>

          {/* Guest Count & Sort Dropdowns */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 bg-[#FAFAFA] border border-[#EBEBEB] rounded-lg px-3 py-1.5">
              <span className="text-[#717171] font-medium">Capacity:</span>
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
                className="bg-transparent font-semibold text-[#222222] focus:outline-none cursor-pointer"
              >
                <option value="all">Any Guest Size</option>
                <option value="2">2+ Guests</option>
                <option value="4">4+ Guests</option>
                <option value="6">6+ Guests</option>
                <option value="8">8+ Guests</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5 bg-[#FAFAFA] border border-[#EBEBEB] rounded-lg px-3 py-1.5">
              <span className="text-[#717171] font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
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
