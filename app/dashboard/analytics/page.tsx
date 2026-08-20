import { TrendingUp, DollarSign, Percent, Award, ArrowUpRight, BarChart3 } from "lucide-react"

export default function DashboardAnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#A69C8E] mb-2">
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Financial Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#222222]">
            Revenue & Occupancy Analytics
          </h1>
          <p className="text-sm text-[#717171] mt-1">
            Granular yield metrics, ADR (Average Daily Rate), and RevPAR benchmarked against Greater Jakarta averages.
          </p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#EBEBEB] shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#717171] uppercase tracking-wider">ADR (Avg Daily Rate)</span>
            <DollarSign className="h-4 w-4 text-[#A69C8E]" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">Rp 845.000</p>
          <span className="text-xs font-medium text-emerald-600">+14.2% vs Jabodetabek baseline</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#EBEBEB] shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#717171] uppercase tracking-wider">RevPAR</span>
            <TrendingUp className="h-4 w-4 text-[#A69C8E]" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">Rp 687.800</p>
          <span className="text-xs font-medium text-emerald-600">+22.8% vs unmanaged units</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#EBEBEB] shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#717171] uppercase tracking-wider">Occupancy Rate</span>
            <Percent className="h-4 w-4 text-[#A69C8E]" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">81.4%</p>
          <span className="text-xs font-medium text-emerald-600">+29.4% vs market average (52%)</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#EBEBEB] shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#717171] uppercase tracking-wider">Gross Monthly Payout</span>
            <Award className="h-4 w-4 text-[#A69C8E]" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">Rp 82.5 M</p>
          <span className="text-xs font-medium text-emerald-600">August 2026 Run Rate</span>
        </div>
      </div>

      {/* Sub-Area Breakdown */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="font-serif text-xl text-[#222222]">Portfolio Yield by Area</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#222222]">Jagakarsa (South Jakarta)</span>
              <span className="font-bold text-emerald-700">86.2% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBEBEB] h-2 rounded-full overflow-hidden">
              <div className="bg-[#222222] h-full rounded-full w-[86.2%]" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Family weekend stays, large garden gatherings, superhost badge.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#222222]">Tangerang (Alam Sutera Corridor)</span>
              <span className="font-bold text-emerald-700">82.0% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBEBEB] h-2 rounded-full overflow-hidden">
              <div className="bg-[#222222] h-full rounded-full w-[82.0%]" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Business travelers, IKEA visitors, wedding guest overflows.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#222222]">Palmerah (Central / West Jakarta)</span>
              <span className="font-bold text-emerald-700">79.5% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBEBEB] h-2 rounded-full overflow-hidden">
              <div className="bg-[#222222] h-full rounded-full w-[79.5%]" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Commuter professionals, transit stays near Sudirman & Palmerah Station.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#222222]">Cikarang (Industrial & Expat Hub)</span>
              <span className="font-bold text-emerald-700">78.0% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBEBEB] h-2 rounded-full overflow-hidden">
              <div className="bg-[#222222] h-full rounded-full w-[78.0%]" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Multi-week corporate engineer contracts and Orange County amenities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
