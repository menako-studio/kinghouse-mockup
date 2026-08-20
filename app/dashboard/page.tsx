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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#EBE8E2]">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F4F3EE] border border-[#EBE8E2] text-[10px] font-semibold tracking-wider text-[#18181A]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#C5A880] uppercase">SUMMER 2026 EDITION</span>
            <span className="text-[#DAD5CC]">&bull;</span>
            <span>PORTFOLIO CMS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Asset Management & Yield Suite
          </h1>
          <p className="text-sm text-[#717171] max-w-2xl font-light leading-relaxed">
            Real-time multi-channel distribution analytics, occupancy algorithms, and SEO orchestration across Greater Jakarta properties.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/dashboard/seo"
            className="inline-flex items-center space-x-2 bg-[#18181A] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            <Search className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>SEO Pitch Manager</span>
          </Link>
          <a
            href="https://www.airbnb.com/users/profile/1470743715397835749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border border-[#EBE8E2] text-[#18181A] px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#FAFAF8] hover:border-[#DAD5CC] transition-all shadow-xs"
          >
            <span>Airbnb Host Profile</span>
            <ExternalLink className="h-3.5 w-3.5 text-[#717171]" />
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
      <div className="rounded-3xl border border-[#EBE8E2] bg-white p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#C5A880]/[0.06] to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F4F3EE] pb-6 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#F8F7F4] border border-[#EBE8E2] text-[#18181A]">
                <Layers className="h-3.5 w-3.5 text-[#C5A880]" />
              </div>
              <h3 className="font-serif text-xl text-[#18181A] font-normal">
                Multi-Channel OTA Synchronization
              </h3>
            </div>
            <p className="text-xs text-[#717171] leading-relaxed">
              Two-way iCal & direct booking distribution prevents double-booking while expanding market reach.
            </p>
          </div>
          <span className="text-[10px] font-semibold text-[#18181A] bg-[#F4F3EE] border border-[#EBE8E2] px-3 py-1.5 rounded-full self-start sm:self-auto uppercase tracking-wider">
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
      <div className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#EBE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#F8F7F4]">
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-[#18181A] font-normal">Portfolio Properties</h3>
            <p className="text-xs text-[#717171]">
              Live operational metrics, pricing tiers, and active status for each Airbnb listing
            </p>
          </div>
          <Link
            href="/dashboard/properties"
            className="text-xs font-semibold text-[#18181A] hover:text-[#C5A880] flex items-center space-x-1.5 transition-colors"
          >
            <span>View All Details</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBE8E2] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Property & Location</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Nightly Rate</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6">Rating & Reviews</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-xs">
              {CURATED_VILLAS.map((villa) => (
                <tr key={villa.id} className="hover:bg-[#FAFAF8]/90 transition-colors group">
                  {/* Property Name & Thumb */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative h-12 w-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#F4F3EE] border border-[#EBE8E2] shadow-xs group-hover:scale-105 transition-transform">
                        <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#18181A] hover:text-[#C5A880] transition-colors line-clamp-1 max-w-[200px] sm:max-w-[260px]">
                          {villa.name}
                        </p>
                        <p className="text-[11px] text-[#C5A880] font-medium">{villa.location}</p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#F4F3EE] text-[#18181A] border border-[#EBE8E2]">
                      {villa.propertyType === "entire-home"
                        ? "5BR Sanctuary Villa"
                        : villa.propertyType === "private-room"
                        ? "Private Room"
                        : "Entire Apartment"}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-6 font-semibold text-[#18181A]">
                    {formatCurrency(villa.price.idr, "IDR")}
                  </td>

                  {/* Capacity */}
                  <td className="py-4 px-6 text-[#717171]">
                    {villa.capacity.guests} Guests &bull; {villa.capacity.beds} Beds
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-6">
                    {villa.rating > 0 ? (
                      <div className="flex items-center space-x-1 font-semibold text-[#18181A]">
                        <Star className="h-3.5 w-3.5 fill-[#18181A] text-[#18181A]" />
                        <span>{villa.rating.toFixed(2)}</span>
                        <span className="text-[#888888] font-normal">({villa.reviewsCount})</span>
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
                        className="px-3 py-1.5 rounded-xl border border-[#EBE8E2] hover:border-[#18181A] text-[11px] font-semibold transition-colors bg-white hover:bg-[#F8F7F4]"
                      >
                        SEO
                      </Link>
                      <a
                        href={villa.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-xl text-[#717171] hover:text-[#18181A] hover:bg-[#F4F3EE] transition-colors"
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


