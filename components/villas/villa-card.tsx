"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Villa } from "@/lib/types"
import { MapPin, Users, Bed, Bath, Star } from "lucide-react"

interface VillaCardProps {
  villa: Villa
  locale?: "en" | "id"
}

export function VillaCard({ villa, locale = "id" }: VillaCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={villa.images[0]}
          alt={villa.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {villa.featured && (
          <Badge className="absolute top-4 right-4 bg-amber-500">
            {locale === "en" ? "Featured" : "Unggulan"}
          </Badge>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur">
            <Star className="h-3 w-3 mr-1 fill-amber-500 text-amber-500" />
            {villa.rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
            {villa.name}
          </h3>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {villa.location}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {villa.description[locale]}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{villa.capacity.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{villa.capacity.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{villa.capacity.guests}</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-amber-600">
            {formatPrice(villa.price.daily)}
          </span>
          <span className="text-sm text-gray-600">
            {locale === "en" ? "/ night" : "/ malam"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/villas/${villa.slug}`}>
            {locale === "en" ? "View Details" : "Lihat Detail"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
