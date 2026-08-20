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
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { ChannelBadge } from "@/components/dashboard/channel-badge"
import { formatCurrency } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Manajemen Properti — KingHouse CMS",
  description: "Daftar unit properti Jabodetabek yang dikelola KingHouse.",
}

export default function DashboardPropertiesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-6">
        <div>
          <h1 className="font-serif text-3xl text-[#222222]">Portofolio Properti</h1>
          <p className="text-sm text-[#717171] mt-1">
            Semua unit Airbnb aktif yang dikelola oleh KingHouse Hospitality Group di Jabodetabek
          </p>
        </div>
        <div className="text-xs text-[#717171] bg-white border border-[#EBEBEB] px-4 py-2 rounded-xl">
          <strong className="text-[#222222]">4 Unit</strong> Terhubung ke Airbnb
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CURATED_VILLAS.map((villa) => (
          <div
            key={villa.id}
            className="rounded-3xl border border-[#EBEBEB] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full">
                    {villa.area}
                  </span>
                  <span className="text-[10px] font-semibold bg-white/90 text-[#222222] backdrop-blur-md px-3 py-1 rounded-full">
                    {villa.architecturalStyle}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[11px] text-white/80 uppercase tracking-wider">Tarif Malam</p>
                    <p className="font-serif text-2xl font-semibold">
                      {formatCurrency(villa.price.idr, "IDR")}
                    </p>
                  </div>
                  {villa.rating > 0 ? (
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{villa.rating.toFixed(2)}</span>
                      <span className="text-white/70 font-normal">({villa.reviewsCount})</span>
                    </div>
                  ) : (
                    <span className="text-xs bg-emerald-600/90 backdrop-blur-sm px-2.5 py-1 rounded-lg font-medium">
                      Listing Baru
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#222222] leading-snug line-clamp-1">
                    {villa.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-[#717171] mt-1">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>{villa.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#717171] leading-relaxed line-clamp-2">
                  {villa.editorialDescription.lead}
                </p>

                {/* Specs */}
                <div className="flex items-center space-x-4 text-xs text-[#717171] pt-3 border-t border-[#F5F4F0]">
                  <span className="flex items-center space-x-1">
                    <Users className="h-3.5 w-3.5 text-[#A69C8E]" />
                    <span>{villa.capacity.guests} Tamu</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center space-x-1">
                    <Bed className="h-3.5 w-3.5 text-[#A69C8E]" />
                    <span>{villa.capacity.bedrooms} Kamar</span>
                  </span>
                  <span>&bull;</span>
                  <span>{villa.capacity.beds} Bed</span>
                </div>

                {/* Channel Status */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A69C8E] mb-2">
                    Koneksi Channel OTA
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
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#222222] text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-[#333333] transition-colors"
              >
                <Search className="h-3.5 w-3.5 text-[#A69C8E]" />
                <span>Kelola SEO</span>
              </Link>
              <a
                href={villa.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 border border-[#EBEBEB] text-[#222222] px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#FAFAFA] transition-colors"
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
