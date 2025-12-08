"use client"

import { useState } from "react"
import { VillaCard } from "@/components/villas/villa-card"
import { SearchBar } from "@/components/villas/search-bar"
import { MOCK_VILLAS } from "@/lib/data"
import { LOCATIONS, AMENITIES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal, X } from "lucide-react"

export default function VillasPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 })

  const filteredVillas = MOCK_VILLAS.filter((villa) => {
    if (selectedLocation && villa.location !== selectedLocation) return false
    if (villa.price.daily < priceRange.min || villa.price.daily > priceRange.max) return false
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every((amenity) =>
        villa.amenities.includes(amenity)
      )
      if (!hasAllAmenities) return false
    }
    return true
  })

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    )
  }

  const clearFilters = () => {
    setSelectedLocation(null)
    setSelectedAmenities([])
    setPriceRange({ min: 0, max: 10000000 })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Temukan Villa Impian Anda
          </h1>
          <p className="mb-8 text-lg text-amber-50">
            {filteredVillas.length} villa tersedia di Jabodetabek
          </p>
          <SearchBar />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`lg:w-80 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-md">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Filter</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-amber-600 hover:text-amber-700"
                >
                  Reset
                </Button>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="mb-3 font-medium text-gray-900">Lokasi</h3>
                <div className="space-y-2">
                  {LOCATIONS.map((location) => (
                    <button
                      key={location}
                      onClick={() =>
                        setSelectedLocation(
                          selectedLocation === location ? null : location
                        )
                      }
                      className={`w-full rounded-lg border px-4 py-2 text-left text-sm transition-colors ${
                        selectedLocation === location
                          ? "border-amber-600 bg-amber-50 text-amber-700"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="mb-3 font-medium text-gray-900">Harga per Malam</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Min</label>
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({ ...priceRange, min: Number(e.target.value) })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max</label>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({ ...priceRange, max: Number(e.target.value) })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h3 className="mb-3 font-medium text-gray-900">Fasilitas</h3>
                <div className="space-y-2">
                  {AMENITIES.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Villas Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <p className="text-sm text-gray-600">
                {filteredVillas.length} villa ditemukan
              </p>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Active Filters */}
            {(selectedLocation || selectedAmenities.length > 0) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedLocation && (
                  <Badge className="flex items-center gap-1">
                    {selectedLocation}
                    <button onClick={() => setSelectedLocation(null)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedAmenities.map((amenity) => (
                  <Badge key={amenity} className="flex items-center gap-1">
                    {amenity}
                    <button onClick={() => toggleAmenity(amenity)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Villas Grid */}
            {filteredVillas.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredVillas.map((villa) => (
                  <VillaCard key={villa.id} villa={villa} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-12 text-center shadow-sm">
                <p className="text-lg text-gray-600">
                  Tidak ada villa yang sesuai dengan filter Anda
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Reset Filter
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
