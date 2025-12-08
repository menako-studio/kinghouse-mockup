"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Users } from "lucide-react"

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  locale?: "en" | "id";
}

export function SearchBar({ onSearch, locale = "id" }: SearchBarProps) {
  const [filters, setFilters] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: ""
  })

  const handleSearch = () => {
    onSearch?.(filters)
  }

  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-xl">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder={locale === "en" ? "Location" : "Lokasi"}
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            placeholder={locale === "en" ? "Check-in" : "Check-in"}
            value={filters.checkIn}
            onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            placeholder={locale === "en" ? "Check-out" : "Check-out"}
            value={filters.checkOut}
            onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="number"
            placeholder={locale === "en" ? "Guests" : "Tamu"}
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: e.target.value })}
            className="pl-10"
            min="1"
          />
        </div>
      </div>

      <Button onClick={handleSearch} className="mt-4 w-full md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        {locale === "en" ? "Search Villas" : "Cari Villa"}
      </Button>
    </div>
  )
}
