import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { Star, ShieldCheck, ChevronRight, Bed, Bath, Users, Sparkles, MapPin, ArrowLeft } from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { BentoGallery } from "@/components/bento/bento-gallery"
import { BookingSidebar } from "@/components/villas/booking-sidebar"
import { AmenitiesGrid } from "@/components/villas/amenities-grid"
import { LocationProximityMap } from "@/components/villas/location-proximity-map"
import { SchemaMarkup } from "@/components/villas/schema-markup"
import { Badge } from "@/components/ui/badge"

interface PageProps {
  params: Promise<{
    area: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return CURATED_VILLAS.map((villa) => ({
    area: villa.areaSlug,
    slug: villa.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const villa = CURATED_VILLAS.find((v) => v.slug === resolvedParams.slug)

  if (!villa) {
    return { title: "Villa Not Found | KingHouse" }
  }

  return {
    title: `${villa.name} — Luxury Villa in ${villa.area} | KingHouse`,
    description: `${villa.editorialDescription.lead} Book on Airbnb with KingHouse Superhost management.`,
    openGraph: {
      title: `${villa.name} — ${villa.tagline}`,
      description: villa.editorialDescription.lead,
      images: [{ url: villa.heroImage, width: 1200, height: 800, alt: villa.name }],
    },
  }
}

export default async function VillaDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const villa = CURATED_VILLAS.find((v) => v.slug === resolvedParams.slug)

  if (!villa) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* SEO VacationRental JSON-LD Schema */}
      <SchemaMarkup villa={villa} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#717171] mb-6">
          <Link href="/" className="hover:text-[#222222] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/villas" className="hover:text-[#222222] transition-colors">Villas</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#222222] font-medium">{villa.name}</span>
        </nav>

        {/* Header Info */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal">
              {villa.name}
            </h1>
            <Badge variant="accent" className="text-xs uppercase tracking-wider self-start sm:self-auto py-1 px-3">
              {villa.architecturalStyle}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#222222]">
            {/* Rating & Reviews */}
            <div className="flex items-center space-x-1 font-semibold">
              <Star className="h-4 w-4 fill-[#222222] text-[#222222]" />
              <span>{villa.rating.toFixed(2)}</span>
              <span className="text-[#717171] font-normal">({villa.reviewsCount} reviews)</span>
            </div>

            <span>&bull;</span>

            {/* Superhost Badge */}
            {villa.superhost && (
              <div className="flex items-center space-x-1.5 font-medium">
                <Sparkles className="h-3.5 w-3.5 text-[#A69C8E]" />
                <span>Airbnb Superhost</span>
              </div>
            )}

            <span>&bull;</span>

            {/* Micro Location */}
            <div className="flex items-center space-x-1 text-[#717171]">
              <MapPin className="h-3.5 w-3.5" />
              <span>{villa.location}</span>
            </div>
          </div>
        </div>

        {/* 1. Bento-Box Image Gallery (Airbnb style 1 + 4 Grid) */}
        <div className="mb-12">
          <BentoGallery images={villa.gallery} propertyName={villa.name} />
        </div>

        {/* 2-Column Split: Editorial Content (Left) & Sticky Booking Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left Column (Editorial & Amenities) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Micro-Data Specs Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-[#EBEBEB]">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl text-[#222222]">
                  Entire Architectural Villa Managed by KingHouse
                </h2>
                <div className="flex items-center space-x-4 text-xs sm:text-sm text-[#717171]">
                  <span>{villa.capacity.guests} Guests</span>
                  <span>&bull;</span>
                  <span>{villa.capacity.bedrooms} Bedrooms</span>
                  <span>&bull;</span>
                  <span>{villa.capacity.beds} Beds</span>
                  <span>&bull;</span>
                  <span>{villa.capacity.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>

            {/* Editorial Overview & Lead */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-[#222222] font-light leading-relaxed">
                {villa.editorialDescription.lead}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-xl text-[#222222]">Architectural Highlights</h3>
                <p className="text-sm text-[#717171] leading-relaxed">
                  {villa.editorialDescription.architecturalHighlights}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-xl text-[#222222]">The Space & Materials</h3>
                <p className="text-sm text-[#717171] leading-relaxed">
                  {villa.editorialDescription.theSpace}
                </p>
              </div>
            </div>

            {/* In-House Hospitality Commitment Badge */}
            <div className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 flex items-start space-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#222222] text-white">
                <ShieldCheck className="h-5 w-5 text-[#A69C8E]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#222222]">KingHouse Superhost Standard</h4>
                <p className="text-xs text-[#717171] leading-relaxed">
                  Every stay includes daily housekeeping, linen changes, private butler service on demand, and 24/7 WhatsApp concierge backing.
                </p>
              </div>
            </div>

            {/* 2-Column Amenities Grid */}
            <AmenitiesGrid amenities={villa.amenities} />

            {/* Location & Proximity Map */}
            <LocationProximityMap
              location={villa.location}
              area={villa.area}
              nearbySpots={villa.nearbySpots}
            />
          </div>

          {/* Right Column (Sticky Booking Sidebar) */}
          <div className="lg:col-span-5">
            <BookingSidebar villa={villa} />
          </div>
        </div>
      </div>
    </main>
  )
}
