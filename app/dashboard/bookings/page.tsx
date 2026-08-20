import { CalendarDays, CheckCircle2, Clock, Filter, ArrowUpRight, ShieldCheck, RefreshCw, Sparkles } from "lucide-react"

const UPCOMING_RESERVATIONS = [
  {
    id: "RES-8921",
    property: "Villa Jagakarsa (5BR Sanctuary)",
    guestName: "Hartono & Family",
    channel: "Airbnb",
    channelColor: "bg-rose-50/70 text-rose-800 border-rose-200",
    checkIn: "2026-08-22",
    checkOut: "2026-08-25",
    nights: 3,
    guests: 10,
    payout: "Rp 5.400.000",
    status: "Confirmed",
  },
  {
    id: "RES-8922",
    property: "KingHouse Studio Palmerah",
    guestName: "Adrian Kowalski",
    channel: "Airbnb",
    channelColor: "bg-rose-50/70 text-rose-800 border-rose-200",
    checkIn: "2026-08-23",
    checkOut: "2026-08-28",
    nights: 5,
    guests: 2,
    payout: "Rp 1.750.000",
    status: "Confirmed",
  },
  {
    id: "RES-8923",
    property: "Orange County Executive Cikarang",
    guestName: "Kenji Sato",
    channel: "Direct WhatsApp",
    channelColor: "bg-emerald-50/70 text-emerald-800 border-emerald-200",
    checkIn: "2026-08-24",
    checkOut: "2026-08-31",
    nights: 7,
    guests: 2,
    payout: "Rp 4.550.000",
    status: "Checked-in Ready",
  },
  {
    id: "RES-8924",
    property: "Serpong Minimalist Suite Tangerang",
    guestName: "Nadia Putri",
    channel: "Airbnb",
    channelColor: "bg-rose-50/70 text-rose-800 border-rose-200",
    checkIn: "2026-08-29",
    checkOut: "2026-08-31",
    nights: 2,
    guests: 2,
    payout: "Rp 840.000",
    status: "Confirmed",
  },
]

export default function DashboardBookingsPage() {
  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <CalendarDays className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>DISTRIBUTION & RESERVATIONS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Bookings & Calendar Hub
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Real-time synchronization across Airbnb iCal and Direct WhatsApp concierge reservations.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center space-x-2 bg-white border border-[#EBE8E2] text-[#18181A] px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#F8F7F4] hover:border-[#DAD5CC] transition-all shadow-xs cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5 text-[#717171]" />
            <span>Force iCal Sync</span>
          </button>
        </div>
      </div>

      {/* Sync Status Banner */}
      <div className="p-5 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
          <div>
            <p className="text-xs font-semibold text-[#18181A]">iCal Two-Way Synchronization Active</p>
            <p className="text-[11px] text-[#717171] font-light">Last synced 4 minutes ago with Airbnb Central API. 0 booking clashes detected.</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start md:self-auto uppercase tracking-wider">
          Protection: Instant Double-Booking Lock
        </span>
      </div>

      {/* Bookings Table */}
      <div className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#EBE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#F8F7F4]">
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-[#18181A] font-normal">Upcoming Reservations</h3>
            <p className="text-xs text-[#717171]">Confirmed guest stays across the Jabodetabek portfolio</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBE8E2] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Reservation & Guest</th>
                <th className="py-4 px-6">Property</th>
                <th className="py-4 px-6">Channel</th>
                <th className="py-4 px-6">Dates</th>
                <th className="py-4 px-6">Est. Payout</th>
                <th className="py-4 px-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-xs">
              {UPCOMING_RESERVATIONS.map((res) => (
                <tr key={res.id} className="hover:bg-[#FAFAF8]/90 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-[#18181A]">{res.guestName}</p>
                    <span className="text-[10px] text-[#717171] font-mono">{res.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-[#18181A] max-w-[220px] truncate">{res.property}</p>
                    <span className="text-[11px] text-[#717171]">{res.guests} Guests &bull; {res.nights} Nights</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${res.channelColor}`}>
                      {res.channel}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-[#18181A]">{res.checkIn} &rarr; {res.checkOut}</p>
                    <span className="text-[10px] text-[#C5A880] font-medium">{res.nights} nights stay</span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-[#18181A]">
                    {res.payout}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      <span>{res.status}</span>
                    </span>
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

