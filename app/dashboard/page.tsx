import Link from "next/link"
import Image from "next/image"
import {
  TrendingUp,
  Users,
  Star,
  DollarSign,
  ArrowUpRight,
  Search,
  ExternalLink,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  CalendarCheck,
} from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { StatCard } from "@/components/dashboard/stat-card"
import { ChannelBadge } from "@/components/dashboard/channel-badge"
import { formatCurrency } from "@/lib/utils"

export default function DashboardOverviewPage() {
  const totalReviews = CURATED_VILLAS.reduce((acc, v) => acc + v.reviewsCount, 0)
  const averageRating = (
    CURATED_VILLAS.filter((v) => v.rating > 0).reduce((acc, v) => acc + v.rating, 0) /
    CURATED_VILLAS.filter((v) => v.rating > 0).length
  ).toFixed(2)

  return (
    <div className="space-y-10 animate-sana-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E4DC]">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E4DC] text-[10px] font-semibold tracking-wider text-[#222225]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#8C7F5F] uppercase">SUMMER 2026 EDITION</span>
            <span className="text-[#D5CFC3]">&bull;</span>
            <span>PORTFOLIO CMS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl text-[#222225] font-semibold tracking-tight">
            Asset Management & Yield Suite
          </h1>
          <p className="text-sm text-[#6B6862] max-w-2xl font-light leading-relaxed">
            Real-time multi-channel distribution analytics, occupancy algorithms, and SEO orchestration across Greater Jakarta properties.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/dashboard/seo"
            className="inline-flex items-center space-x-2 bg-[#222225] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#19191B] transition-all shadow-xs cursor-pointer"
          >
            <Search className="h-3.5 w-3.5 text-[#DFC58E]" />
            <span>SEO Pitch Manager</span>
          </Link>
          <a
            href="https://www.airbnb.com/users/profile/1470743715397835749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border border-[#E8E4DC] text-[#222225] px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#FAF8F5] hover:border-[#D5CFC3] transition-all shadow-xs"
          >
            <span>Airbnb Host Profile</span>
            <ExternalLink className="h-3.5 w-3.5 text-[#6B6862]" />
          </a>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Estimated Monthly Revenue"
          value="Rp 82.5 M"
          change="+34.2%"
          trend="up"
          period="vs previous month"
          icon={DollarSign}
          subtitle="4 Managed Units (Jabodetabek)"
        />
        <StatCard
          title="Occupancy Rate"
          value="81.4%"
          change="+18.5%"
          trend="up"
          period="vs regional baseline (52%)"
          icon={TrendingUp}
          subtitle="Target: >75% Superhost benchmark"
        />
        <StatCard
          title="Average Portfolio Rating"
          value={`${averageRating} ★`}
          change="+0.2"
          trend="up"
          period={`${totalReviews} verified guest reviews`}
          icon={Star}
          subtitle="Airbnb Superhost Standard"
        />
        <StatCard
          title="Total Guests Hosted"
          value="148"
          change="+26 guests"
          trend="up"
          period="this month"
          icon={Users}
          subtitle="Response Time: < 15 minutes"
        />
      </div>

      {/* Multi-Channel Distribution Pitch Section */}
      <div className="rounded-3xl border border-[#E8E4DC] bg-white p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#B8934C]/[0.06] to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FAF8F5] pb-6 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#222225]">
                <Layers className="h-3.5 w-3.5 text-[#8C7F5F]" />
              </div>
              <h3 className="text-xl text-[#222225] font-semibold">
                Multi-Channel OTA Synchronization
              </h3>
            </div>
            <p className="text-xs text-[#6B6862] leading-relaxed">
              Two-way iCal & direct booking distribution prevents double-booking while expanding market reach.
            </p>
          </div>
          <span className="text-[10px] font-semibold text-[#222225] bg-[#FAF8F5] border border-[#E8E4DC] px-3 py-1.5 rounded-full self-start sm:self-auto uppercase tracking-wider">
            Architecture 2.0 (Little Hotelier Calibrated)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <ChannelBadge channel="airbnb" status="connected" syncTime="Realtime iCal" />
          <ChannelBadge channel="booking" status="available" syncTime="Engine Ready" />
          <ChannelBadge channel="agoda" status="available" syncTime="Engine Ready" />
          <ChannelBadge channel="direct" status="connected" syncTime="WhatsApp / Direct" />
        </div>
      </div>

      {/* Managed Properties Table */}
      <div className="rounded-3xl border border-[#E8E4DC] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAF8F5]">
          <div className="space-y-1">
            <h3 className="text-xl text-[#222225] font-semibold">Portfolio Properties</h3>
            <p className="text-xs text-[#6B6862]">
              Live operational metrics, pricing tiers, and active status for each Airbnb listing
            </p>
          </div>
          <Link
            href="/dashboard/properties"
            className="text-xs font-semibold text-[#8C7F5F] hover:text-[#222225] flex items-center space-x-1.5 transition-colors"
          >
            <span>View All Details</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E8E4DC] bg-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider text-[#6B6862]">
                <th className="py-4 px-6">Property & Location</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Nightly Rate</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6">Rating & Reviews</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF8F5] text-xs">
              {CURATED_VILLAS.map((villa) => (
                <tr key={villa.id} className="hover:bg-[#FAF8F5]/90 transition-colors group">
                  {/* Property Name & Thumb */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative h-12 w-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#FAF8F5] border border-[#E8E4DC] shadow-xs group-hover:scale-105 transition-transform">
                        <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#222225] hover:text-[#8C7F5F] transition-colors line-clamp-1 max-w-[200px] sm:max-w-[260px]">
                          {villa.name}
                        </p>
                        <p className="text-[11px] text-[#8C7F5F] font-medium">{villa.location}</p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#FAF8F5] text-[#222225] border border-[#E8E4DC]">
                      {villa.propertyType === "entire-home"
                        ? "5BR Sanctuary Villa"
                        : villa.propertyType === "private-room"
                        ? "Private Room"
                        : "Entire Apartment"}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-6 font-semibold text-[#222225]">
                    {formatCurrency(villa.price.idr, "IDR")}
                  </td>

                  {/* Capacity */}
                  <td className="py-4 px-6 text-[#6B6862]">
                    {villa.capacity.guests} Guests &bull; {villa.capacity.beds} Beds
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-6">
                    {villa.rating > 0 ? (
                      <div className="flex items-center space-x-1 font-semibold text-[#222225]">
                        <Star className="h-3.5 w-3.5 fill-[#B8934C] text-[#B8934C]" />
                        <span>{villa.rating.toFixed(2)}</span>
                        <span className="text-[#6B6862] font-normal">({villa.reviewsCount})</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        New Listing
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <Link
                        href="/dashboard/seo"
                        className="px-3 py-1.5 rounded-xl border border-[#E8E4DC] hover:border-[#222225] text-[11px] font-semibold transition-colors bg-white hover:bg-[#FAF8F5]"
                      >
                        SEO
                      </Link>
                      <a
                        href={villa.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-xl text-[#6B6862] hover:text-[#222225] hover:bg-[#FAF8F5] transition-colors"
                        title="View on Airbnb"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
