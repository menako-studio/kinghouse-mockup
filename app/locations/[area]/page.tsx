import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Sparkles, ArrowRight, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react"
import { MANAGED_AREAS } from "@/lib/constants"
import { CURATED_VILLAS } from "@/lib/data"
import { VillaCard } from "@/components/villas/villa-card"

interface PageProps {
  params: Promise<{
    area: string
  }>
}

export async function generateStaticParams() {
  return MANAGED_AREAS.map((area) => ({
    area: area.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area } = await params
  const areaData = MANAGED_AREAS.find((a) => a.slug === area)

  if (!areaData) {
    return { title: "Area Tidak Ditemukan | KingHouse" }
  }

  const title = `Sewa Properti & Airbnb di ${areaData.name}, ${areaData.region} | KingHouse`
  const description = `${areaData.description} Temukan akomodasi terkurasi di ${areaData.name} yang dikelola dengan standar Superhost KingHouse di Airbnb.`

  return {
    title,
    description,
    keywords: [
      `sewa properti ${areaData.slug}`,
      `airbnb ${areaData.slug}`,
      `penginapan ${areaData.name}`,
      `homestay ${areaData.name} ${areaData.region}`,
      "kinghouse",
    ],
    alternates: { canonical: `/locations/${areaData.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${areaData.slug}`,
      type: "website",
    },
  }
}

export default async function AreaLandingPage({ params }: PageProps) {
  const { area } = await params
  const areaData = MANAGED_AREAS.find((a) => a.slug === area)

  if (!areaData) {
    notFound()
  }

  const villasInArea = CURATED_VILLAS.filter((v) => v.areaSlug === area)

  // Local TouristDestination & ItemList Schema
  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${areaData.name}, ${areaData.region}`,
    description: areaData.description,
    url: `https://kinghouse.id/locations/${areaData.slug}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: areaData.region,
    },
    includesAttraction: villasInArea.map((villa) => ({
      "@type": "VacationRental",
      name: villa.name,
      url: `https://kinghouse.id/locations/${villa.areaSlug}/villas/${villa.slug}`,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        id="area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-[#FAFAFA] border-b border-[#EBEBEB] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-[#717171] mb-8">
            <Link href="/" className="hover:text-[#222222]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/villas" className="hover:text-[#222222]">Properti</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#222222] font-semibold">{areaData.name}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white border border-[#EBEBEB] rounded-full px-3.5 py-1 text-xs font-semibold text-[#222222]">
              <MapPin className="h-3.5 w-3.5 text-[#A69C8E]" />
              <span>{areaData.region}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] font-normal leading-tight">
              Properti Terkurasi di
              <br />
              <span className="text-[#A69C8E]">{areaData.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#717171] font-light leading-relaxed">
              {areaData.description}
            </p>

            <div className="flex items-center space-x-2 pt-2 text-xs text-[#222222] font-medium">
              <Sparkles className="h-4 w-4 text-[#A69C8E]" />
              <span>Keunggulan Area: <strong>{areaData.highlight}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings in this Area */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#222222]">
                Unit di {areaData.name}
              </h2>
              <p className="text-xs text-[#717171] mt-1">
                Tersedia {villasInArea.length} properti terverifikasi dengan standar Superhost KingHouse
              </p>
            </div>
            <span className="text-xs text-[#A69C8E] font-medium uppercase tracking-wider">
              {villasInArea.length} Pilihan
            </span>
          </div>

          {villasInArea.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {villasInArea.map((villa) => (
                <VillaCard key={villa.id} villa={villa} priority />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#EBEBEB] p-12 text-center text-sm text-[#717171]">
              Unit baru di {areaData.name} sedang dalam proses kurasi.
            </div>
          )}
        </div>
      </section>

      {/* Area Local SEO Context & Why Stay Here */}
      <section className="bg-[#FAFAFA] border-y border-[#EBEBEB] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A69C8E]">
                Panduan Lokal Area
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222]">
                Kenapa Memilih Menginap di {areaData.name}?
              </h2>
              <p className="text-sm text-[#717171] leading-relaxed">
                {areaData.name} menawarkan keunikan yang berbeda dari pusat kota Jakarta. Dengan
                aksesibilitas yang strategis dan karakter kawasan yang khas, unit di area ini
                menjadi pilihan utama bagi tamu yang membutuhkan ketenangan, ruang yang lebih lega,
                atau kedekatan dengan kawasan bisnis dan industri.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Kebersihan standar hotel berbintang dengan linen segar setiap tamu",
                  "Self check-in fleksibel dengan dukungan concierge WhatsApp 24/7",
                  "WiFi cepat dan meja kerja yang ideal untuk remote work",
                  "Pemesanan transparan dan terproteksi langsung melalui Airbnb",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#222222]">
                    <CheckCircle2 className="h-4 w-4 text-[#A69C8E] mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#EBEBEB] bg-white p-8 space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 pb-4 border-b border-[#F5F4F0]">
                  <ShieldCheck className="h-6 w-6 text-[#A69C8E]" />
                  <div>
                    <h3 className="font-serif text-lg text-[#222222]">
                      Punya Properti di {areaData.name}?
                    </h3>
                    <p className="text-xs text-[#717171]">
                      Maksimalkan occupancy rate bersama KingHouse
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#717171] leading-relaxed">
                  Kami mengelola seluruh proses: mulai dari fotografi editorial, optimasi SEO listing
                  di Airbnb, penetapan harga dinamis, hingga pembersihan turnover dan layanan tamu 24/7.
                </p>

                <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] text-xs space-y-1">
                  <p className="font-semibold text-[#222222]">Potensi Revenue di {areaData.name}:</p>
                  <p className="text-[#717171]">
                    Rata-rata <strong>Rp 15 - 45 juta / bulan</strong> dengan tingkat hunian &gt;75%.
                  </p>
                </div>

                <a
                  href={`https://wa.me/628129252090?text=Hello%20KingHouse!%20Saya%20memiliki%20properti%20di%20${areaData.name}%20dan%20ingin%20konsultasi%20manajemen%20Airbnb.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-[#222222] text-white py-3 rounded-xl text-xs font-semibold hover:bg-[#333333] transition-colors"
                >
                  <span>Konsultasi Properti di {areaData.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="font-serif text-2xl text-[#222222] mb-8">
            Jelajahi Area Lainnya di Jabodetabek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANAGED_AREAS.filter((a) => a.slug !== area).map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="group p-6 rounded-2xl border border-[#EBEBEB] bg-white hover:border-[#222222] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#A69C8E] font-medium">{other.region}</span>
                  <ArrowRight className="h-4 w-4 text-[#A69C8E] group-hover:translate-x-1 group-hover:text-[#222222] transition-all" />
                </div>
                <h3 className="font-serif text-xl text-[#222222] mb-1 group-hover:text-[#A69C8E] transition-colors">
                  {other.name}
                </h3>
                <p className="text-xs text-[#717171] line-clamp-2">{other.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
