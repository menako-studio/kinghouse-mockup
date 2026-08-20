import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { VillaCard } from "@/components/villas/villa-card"
import { Button } from "@/components/ui/button"

export function CuratedGrid() {
  const featuredVillas = CURATED_VILLAS.slice(0, 3)

  return (
    <section className="section-macro-spacing bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EBEBEB] gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A69C8E]">
                Collection 2026
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222]">
              Architectural Sanctuaries
            </h2>
            <p className="text-sm sm:text-base text-[#717171] leading-relaxed">
              Every residence in the KingHouse portfolio undergoes a 120-point architectural and hospitality audit before curation.
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="self-start md:self-auto text-xs uppercase tracking-wider font-semibold"
          >
            <Link href="/villas">
              View All {CURATED_VILLAS.length} Villas <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* 3-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredVillas.map((villa, idx) => (
            <VillaCard key={villa.id} villa={villa} priority={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
