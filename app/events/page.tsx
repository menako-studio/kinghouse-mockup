import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Briefcase, Cake, Users, ArrowRight, Star, CheckCircle2 } from "lucide-react"
import { VILLA_EVENTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Events & Wedding Venue — Jagakarsa Garden House | KingHouse",
  description:
    "Selenggarakan pernikahan, corporate retreat, atau pesta ulang tahun di rumah taman privat Jagakarsa. Kapasitas hingga 50 tamu, kebun tropis 500m², dan dukungan penuh dari tim KingHouse.",
  keywords: [
    "venue pernikahan jagakarsa",
    "wedding venue jakarta selatan",
    "corporate retreat jakarta",
    "venue garden party jakarta",
    "sewa tempat pesta ulang tahun jakarta",
    "venue akad nikah garden jakarta",
  ],
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Garden Wedding & Events — Jagakarsa Private House | KingHouse",
    description:
      "Venue privat di taman tropis Jagakarsa, Jakarta Selatan. Ideal untuk pernikahan intimate, corporate retreat, dan perayaan. Tanpa markup venue.",
    url: "/events",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Garden Wedding at Jagakarsa KingHouse Property",
      },
    ],
  },
}

const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; label: string; color: string }
> = {
  wedding: {
    icon: Heart,
    label: "Pernikahan",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  corporate: {
    icon: Briefcase,
    label: "Corporate Retreat",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  birthday: {
    icon: Cake,
    label: "Ulang Tahun",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "intimate-gathering": {
    icon: Users,
    label: "Gathering",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  wellness: {
    icon: Star,
    label: "Wellness",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
}

const eventsPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KingHouse Event Packages",
  description:
    "Event packages available at KingHouse managed properties in Jagakarsa, South Jakarta",
  url: "https://kinghouse.id/events",
  numberOfItems: VILLA_EVENTS.length,
  itemListElement: VILLA_EVENTS.map((event, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: event.title,
    url: `https://kinghouse.id/events/${event.slug}`,
  })),
}

export default function EventsPage() {
  const weddingEvents = VILLA_EVENTS.filter((e) => e.category === "wedding")
  const corporateEvents = VILLA_EVENTS.filter((e) => e.category === "corporate")
  const otherEvents = VILLA_EVENTS.filter((e) => !["wedding", "corporate"].includes(e.category))

  return (
    <main className="min-h-screen bg-white">
      <script
        id="events-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
          alt="Garden wedding venue at KingHouse Jagakarsa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-6 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Heart className="h-3.5 w-3.5 text-rose-300" />
            <span className="text-xs text-white font-medium">Venue Privat &bull; Tanpa Markup</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight mb-4 max-w-3xl">
            Events & Pernikahan
            <br />
            <span className="text-[#D4B896]">di Taman Privat Jagakarsa</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-light max-w-xl">
            Rayakan momen terpenting Anda di rumah taman tropis seluas 500m² di Jakarta Selatan.
            Privat, bebas markup, dan penuh kenangan.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/628129252090?text=Hello%20KingHouse!%20Saya%20tertarik%20untuk%20menyelenggarakan%20event%20di%20properti%20Jagakarsa.%20Boleh%20info%20ketersediaan%20dan%20paket%20yang%20tersedia?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-[#222222] px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#F5F4F0] transition-colors"
            >
              <span>Tanyakan Ketersediaan</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <span>Lihat Paket</span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-b border-[#EBEBEB] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "500m²", label: "Luas Taman Privat" },
              { value: "50 pax", label: "Kapasitas Tamu" },
              { value: "12 pax", label: "Akomodasi Menginap" },
              { value: "0%", label: "Markup Vendor" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl text-[#222222]">{stat.value}</p>
                <p className="text-xs text-[#A69C8E] mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] mb-4">
              Mengapa Memilih Venue Rumah Privat?
            </h2>
            <p className="text-[#717171] text-sm leading-relaxed">
              Berbeda dari gedung pernikahan komersial, venue rumah privat memberikan fleksibilitas
              penuh — vendor bebas, tidak ada noise dari event lain, dan kenyamanan menginap bagi
              keluarga inti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌿",
                title: "Taman Tropis Privat",
                desc: "Kebun hijau 500m² yang ditata alami — tidak ditemukan di gedung wedding komersial.",
              },
              {
                icon: "🎉",
                title: "Tanpa Corkage & Markup",
                desc: "Bawa caterer dan dekorator sendiri. Tidak ada biaya corkage atau potongan vendor.",
              },
              {
                icon: "🏠",
                title: "Menginap untuk Keluarga Inti",
                desc: "5 kamar tidur untuk 12 tamu menginap — keluarga dekat tidak perlu ke hotel.",
              },
              {
                icon: "📋",
                title: "Invoice Korporat",
                desc: "Untuk corporate event, tersedia invoice dan kuitansi resmi untuk reimbursement.",
              },
              {
                icon: "🛡️",
                title: "Privat & Eksklusif",
                desc: "Tidak ada tamu lain. Seluruh properti dan taman adalah milik Anda selama durasi event.",
              },
              {
                icon: "📍",
                title: "Mudah Dijangkau",
                desc: "30 menit dari CBD Jakarta via tol. Dekat Fatmawati MRT untuk tamu tanpa kendaraan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#EBEBEB] bg-white hover:shadow-sm transition-shadow"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-[#222222] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-[#717171] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section id="packages" className="py-20 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] mb-4">Paket Event Tersedia</h2>
            <p className="text-[#717171] text-sm max-w-lg mx-auto">
              Setiap paket dapat dikustomisasi sesuai kebutuhan. Hubungi kami untuk proposal harga spesifik.
            </p>
          </div>

          {/* Wedding Events */}
          {weddingEvents.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-5 w-5 text-rose-500" />
                <h3 className="font-serif text-2xl text-[#222222]">Pernikahan & Akad Nikah</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {weddingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Corporate Events */}
          {corporateEvents.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center space-x-2 mb-6">
                <Briefcase className="h-5 w-5 text-blue-500" />
                <h3 className="font-serif text-2xl text-[#222222]">Corporate Retreat & Offsite</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {corporateEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Other Events */}
          {otherEvents.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center space-x-2 mb-6">
                <Cake className="h-5 w-5 text-amber-500" />
                <h3 className="font-serif text-2xl text-[#222222]">Pesta & Perayaan</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#222222] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Ceritakan Event Impian Anda
          </h2>
          <p className="text-[#A69C8E] text-sm mb-8 max-w-md mx-auto">
            Tim KingHouse siap membantu merencanakan event Anda dari awal hingga hari-H. Konsultasi
            pertama gratis, tanpa komitmen.
          </p>
          <a
            href="https://wa.me/628129252090?text=Hello%20KingHouse!%20Saya%20ingin%20diskusikan%20rencana%20event%20di%20properti%20Jagakarsa%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#222222] px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#F5F4F0] transition-colors"
          >
            <span>Chat WhatsApp Sekarang</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}

// Inline Event Card Component
function EventCard({ event }: { event: (typeof VILLA_EVENTS)[number] }) {
  const config = CATEGORY_CONFIG[event.category]
  const Icon = config?.icon ?? Star
  const lowestPackage = event.packages.reduce((min, p) =>
    p.priceIdr < min.priceIdr ? p : min
  )

  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <article className="rounded-2xl overflow-hidden border border-[#EBEBEB] bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span
              className={`flex items-center space-x-1.5 text-[10px] font-semibold px-3 py-1 rounded-full border ${config?.color ?? "bg-white text-[#222222]"}`}
            >
              <Icon className="h-2.5 w-2.5" />
              <span>{config?.label ?? event.category}</span>
            </span>
            <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              Maks. {event.maxCapacity} tamu
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl text-[#222222] mb-2 group-hover:text-[#A69C8E] transition-colors">
            {event.title}
          </h3>
          <p className="text-xs text-[#717171] leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
          {/* Highlights */}
          <div className="space-y-1.5 mb-5">
            {event.highlights.slice(0, 3).map((h) => (
              <div key={h} className="flex items-start space-x-2">
                <CheckCircle2 className="h-3 w-3 text-[#A69C8E] mt-0.5 flex-shrink-0" />
                <span className="text-[11px] text-[#717171]">{h}</span>
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#EBEBEB]">
            <div>
              <p className="text-[10px] text-[#A69C8E] uppercase tracking-wider">Mulai dari</p>
              <p className="text-base font-semibold text-[#222222]">
                Rp {(lowestPackage.priceIdr / 1000000).toFixed(1)} jt
              </p>
            </div>
            <span className="flex items-center space-x-1 text-xs font-semibold text-[#222222] group-hover:gap-2 transition-all">
              <span>Detail Paket</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
