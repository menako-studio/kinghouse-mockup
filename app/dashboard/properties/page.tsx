import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Search,
  Star,
  Users,
  Bed,
  MapPin,
  Sparkles,
} from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { ChannelBadge } from "@/components/dashboard/channel-badge"
import { formatCurrency } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Property Management — KingHouse CMS",
  description: "Managed Jabodetabek villa and apartment portfolio under KingHouse Hospitality.",
}

export default function DashboardPropertiesPage() {
  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>PORTFOLIO ASSETS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Property Portfolio
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            All active Airbnb listings managed by KingHouse Hospitality Group across Jabodetabek.
          </p>
        </div>
        <div className="text-xs text-[#717171] bg-white border border-[#EBE8E2] px-4 py-2 rounded-2xl shadow-xs self-start sm:self-auto">
          <strong className="text-[#18181A] font-semibold">4 Units</strong> Synced to Airbnb
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CURATED_VILLAS.map((villa) => (
          <div
            key={villa.id}
            className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {villa.area}
                  </span>
                  <span className="text-[10px] font-semibold bg-white/95 text-[#18181A] backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                    {villa.architecturalStyle}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[10px] text-white/75 uppercase tracking-wider font-semibold">Nightly Rate</p>
                    <p className="font-serif text-2xl font-normal text-white">
                      {formatCurrency(villa.price.idr, "IDR")}
                    </p>
                  </div>
                  {villa.rating > 0 ? (
                    <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
                      <Star className="h-3.5 w-3.5 fill-[#C5A880] text-[#C5A880]" />
                      <span>{villa.rating.toFixed(2)}</span>
                      <span className="text-white/70 font-normal">({villa.reviewsCount})</span>
                    </div>
                  ) : (
                    <span className="text-xs bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-full font-medium text-white">
                      New Listing
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#18181A] font-normal leading-snug line-clamp-1">
                    {villa.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-[#717171] mt-1">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A880]" />
                    <span>{villa.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#717171] leading-relaxed line-clamp-2 font-light">
                  {villa.editorialDescription.lead}
                </p>

                {/* Specs */}
                <div className="flex items-center space-x-4 text-xs text-[#717171] pt-3 border-t border-[#F4F3EE]">
                  <span className="flex items-center space-x-1.5">
                    <Users className="h-3.5 w-3.5 text-[#C5A880]" />
                    <span>{villa.capacity.guests} Guests</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center space-x-1.5">
                    <Bed className="h-3.5 w-3.5 text-[#C5A880]" />
                    <span>{villa.capacity.bedrooms} Bedrooms</span>
                  </span>
                  <span>&bull;</span>
                  <span>{villa.capacity.beds} Beds</span>
                </div>

                {/* Channel Status */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#717171] mb-2">
                    OTA Channel Connectivity
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <ChannelBadge channel="airbnb" status="connected" />
                    <ChannelBadge channel="booking" status="coming_soon" />
                    <ChannelBadge channel="agoda" status="coming_soon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <Link
                href="/dashboard/seo"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#18181A] text-white py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-xs"
              >
                <Search className="h-3.5 w-3.5 text-[#C5A880]" />
                <span>Manage SEO</span>
              </Link>
              <a
                href={villa.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 border border-[#EBE8E2] text-[#18181A] px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#F8F7F4] hover:border-[#DAD5CC] transition-all shadow-xs"
              >
                <span>Airbnb</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#717171]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


