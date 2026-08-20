import Image from "next/image"
import Link from "next/link"
import { Star, ArrowUpRight, Bed, Bath, Users } from "lucide-react"
import { Villa } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface VillaCardProps {
  villa: Villa
  priority?: boolean
}

export function VillaCard({ villa, priority = false }: VillaCardProps) {
  return (
    <div className="group flex flex-col space-y-4">
      {/* 4:5 Aspect Ratio Image Card with Hidden Overflow & 1.03x Hover Zoom */}
      <Link
        href={`/locations/${villa.areaSlug}/villas/${villa.slug}`}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] block"
      >
        <Image
          src={villa.heroImage}
          alt={villa.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
          {villa.guestFavorite ? (
            <Badge variant="superhost" className="text-[11px] font-medium tracking-tight">
              Guest Favorite
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-[11px] font-medium">
              {villa.architecturalStyle}
            </Badge>
          )}

          <div className="flex items-center space-x-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#222222] shadow-xs backdrop-blur-xs">
            {villa.rating > 0 ? (
              <>
                <Star className="h-3 w-3 fill-[#222222] text-[#222222]" />
                <span>{villa.rating.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-[10px] text-[#A69C8E]">New</span>
            )}
          </div>
        </div>

        {/* Bottom Location Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-black/40 p-2.5 backdrop-blur-sm text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-light truncate">{villa.location}</span>
          <span className="shrink-0 flex items-center text-[10px] font-medium uppercase tracking-wider">
            Details <ArrowUpRight className="ml-0.5 h-3 w-3" />
          </span>
        </div>
      </Link>

      {/* Meta Content */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <Link
              href={`/locations/${villa.areaSlug}/villas/${villa.slug}`}
              className="text-base font-semibold tracking-tight text-[#222222] hover:underline line-clamp-1"
            >
              {villa.name}
            </Link>
            <p className="text-xs text-[#717171] line-clamp-1">{villa.tagline}</p>
          </div>
        </div>

        {/* Spec Icons */}
        <div className="flex items-center space-x-4 text-xs text-[#717171] pt-0.5">
          <span className="flex items-center space-x-1">
            <Users className="h-3.5 w-3.5 text-[#A69C8E]" />
            <span>{villa.capacity.guests} Guests</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center space-x-1">
            <Bed className="h-3.5 w-3.5 text-[#A69C8E]" />
            <span>{villa.capacity.bedrooms} Bedrooms</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center space-x-1">
            <Bath className="h-3.5 w-3.5 text-[#A69C8E]" />
            <span>{villa.capacity.bathrooms} Baths</span>
          </span>
        </div>

        {/* Pricing & Direct Booking Link */}
        <div className="flex items-baseline justify-between pt-1 border-t border-[#F0F0F0]">
          <div>
            <span className="font-semibold text-sm text-[#222222]">
              {formatCurrency(villa.price.idr, "IDR")}
            </span>
            <span className="text-xs text-[#717171]"> / night</span>
            <span className="block text-[10px] text-[#A69C8E]">
              ≈ {formatCurrency(villa.price.usd, "USD")}/night
            </span>
          </div>

          <a
            href={villa.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold text-[#222222] hover:text-[#A69C8E] transition-colors"
          >
            Book on Airbnb <ArrowUpRight className="ml-0.5 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
