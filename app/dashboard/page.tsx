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
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#A69C8E] mb-2">
            <span>Portfolio Performance</span>
            <span>&bull;</span>
            <span className="text-emerald-600 font-bold">Live Sync</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#222222]">
            Property Management CMS
          </h1>
          <p className="text-sm text-[#717171] mt-1">
            Performance summary and multi-channel metrics for KingHouse-managed Jabodetabek properties.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/seo"
            className="inline-flex items-center space-x-2 bg-[#222222] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#333333] transition-colors shadow-sm"
          >
            <Search className="h-4 w-4 text-[#A69C8E]" />
            <span>Open SEO Manager (Pitch)</span>
          </Link>
          <a
            href="https://www.airbnb.com/users/profile/1470743715397835749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border border-[#EBEBEB] text-[#222222] px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#FAFAFA] transition-colors"
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
          subtitle="4 Managed Units"
        />
        <StatCard
          title="Occupancy Rate"
          value="81.4%"
          change="+18.5%"
          trend="up"
          period="vs market average (52%)"
          icon={TrendingUp}
          subtitle="Jabodetabek Target: >75%"
        />
        <StatCard
          title="Average Rating"
          value={`${averageRating} ★`}
          change="+0.2"
          trend="up"
          period={`${totalReviews} total reviews`}
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
          subtitle="Response Time <15 min"
        />
      </div>

      {/* Multi-Channel Distribution Pitch Section */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5F4F0] pb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Layers className="h-4 w-4 text-[#A69C8E]" />
              <h3 className="font-serif text-xl text-[#222222]">
                Multi-Channel OTA Synchronization
              </h3>
            </div>
            <p className="text-xs text-[#717171]">
              Centralized calendar integration to prevent double-booking across all distribution channels.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-[#A69C8E] bg-[#F5F4F0] px-3 py-1.5 rounded-full self-start sm:self-auto">
            Feature 2.0 (Little Hotelier Architecture)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ChannelBadge channel="airbnb" status="connected" syncTime="Realtime iCal" />
          <ChannelBadge channel="booking" status="available" syncTime="Engine Ready" />
          <ChannelBadge channel="agoda" status="available" syncTime="Engine Ready" />
          <ChannelBadge channel="direct" status="connected" syncTime="WhatsApp / Direct" />
        </div>
      </div>

      {/* Managed Properties Table */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white overflow-hidden shadow-sm">
        <div className="p-6 sm:p-8 border-b border-[#EBEBEB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl text-[#222222]">Portfolio Properties</h3>
            <p className="text-xs text-[#717171]">
              Live performance metrics, nightly rates, and status for each Airbnb listing
            </p>
          </div>
          <Link
            href="/dashboard/properties"
            className="text-xs font-semibold text-[#222222] hover:underline flex items-center space-x-1"
          >
            <span>Manage All Properties</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBEBEB] bg-[#FAFAFA] text-[11px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Property & Location</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Nightly Rate</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6">Rating & Reviews</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBEBEB] text-xs">
              {CURATED_VILLAS.map((villa) => (
                <tr key={villa.id} className="hover:bg-[#FAFAFA]/80 transition-colors">
                  {/* Property Name & Thumb */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative h-11 w-14 rounded-xl overflow-hidden flex-shrink-0 bg-[#F5F4F0]">
                        <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#222222] hover:text-[#A69C8E] transition-colors line-clamp-1 max-w-[200px] sm:max-w-[260px]">
                          {villa.name}
                        </p>
                        <p className="text-[11px] text-[#A69C8E]">{villa.location}</p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#F5F4F0] text-[#222222]">
                      {villa.propertyType === "entire-home"
                        ? "5BR Private Villa"
                        : villa.propertyType === "private-room"
                        ? "Private Room"
                        : "Entire Apartment"}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-6 font-medium text-[#222222]">
                    {formatCurrency(villa.price.idr, "IDR")}
                  </td>

                  {/* Capacity */}
                  <td className="py-4 px-6 text-[#717171]">
                    {villa.capacity.guests} Guests &bull; {villa.capacity.beds} Beds
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-6">
                    {villa.rating > 0 ? (
                      <div className="flex items-center space-x-1 font-semibold text-[#222222]">
                        <Star className="h-3.5 w-3.5 fill-[#222222] text-[#222222]" />
                        <span>{villa.rating.toFixed(2)}</span>
                        <span className="text-[#A69C8E] font-normal">({villa.reviewsCount})</span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-[#A69C8E]">New Listing</span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <Link
                        href="/dashboard/seo"
                        className="px-3 py-1.5 rounded-lg border border-[#EBEBEB] hover:border-[#222222] text-[11px] font-semibold transition-colors"
                      >
                        SEO
                      </Link>
                      <a
                        href={villa.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[#717171] hover:text-[#222222] hover:bg-[#F5F4F0] transition-colors"
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

