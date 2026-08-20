import { TrendingUp, DollarSign, Percent, Award, ArrowUpRight, BarChart3, Sparkles } from "lucide-react"

export default function DashboardAnalyticsPage() {
  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <BarChart3 className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>FINANCIAL INTELLIGENCE SUITE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Revenue & Occupancy Analytics
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Granular yield metrics, ADR (Average Daily Rate), and RevPAR benchmarked against Greater Jakarta market baseline.
          </p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">ADR (Avg Daily Rate)</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <DollarSign className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">Rp 845.000</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            +14.2% vs Jabodetabek baseline
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">RevPAR</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <TrendingUp className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">Rp 687.800</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            +22.8% vs unmanaged units
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Occupancy Rate</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <Percent className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">81.4%</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            +29.4% vs market average (52%)
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Gross Monthly Payout</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <Award className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">Rp 82.5 M</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            August 2026 Run Rate
          </span>
        </div>
      </div>

      {/* Sub-Area Breakdown */}
      <div className="rounded-3xl border border-[#EBE8E2] bg-white p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-6">
        <h3 className="font-serif text-xl text-[#18181A] font-normal">Portfolio Yield & Occupancy by Area</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#18181A]">Jagakarsa (South Jakarta)</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">86.2% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBE8E2] h-2 rounded-full overflow-hidden">
              <div className="bg-[#18181A] h-full rounded-full w-[86.2%] transition-all duration-1000" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Family weekend stays, large garden gatherings, Superhost badge priority.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#18181A]">Tangerang (Alam Sutera Corridor)</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">82.0% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBE8E2] h-2 rounded-full overflow-hidden">
              <div className="bg-[#18181A] h-full rounded-full w-[82.0%] transition-all duration-1000" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Business travelers, IKEA visitors, wedding guest overflows.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#18181A]">Palmerah (Central / West Jakarta)</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">79.5% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBE8E2] h-2 rounded-full overflow-hidden">
              <div className="bg-[#18181A] h-full rounded-full w-[79.5%] transition-all duration-1000" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Commuter professionals, transit stays near Sudirman & Palmerah Station.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#18181A]">Cikarang (Industrial & Expat Hub)</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">78.0% Occupancy</span>
            </div>
            <div className="w-full bg-[#EBE8E2] h-2 rounded-full overflow-hidden">
              <div className="bg-[#18181A] h-full rounded-full w-[78.0%] transition-all duration-1000" />
            </div>
            <p className="text-[11px] text-[#717171]">Driver: Multi-week corporate engineer contracts and Orange County amenities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

