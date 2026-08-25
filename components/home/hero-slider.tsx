"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"

const HERO_SLIDES = [
  {
    image: "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    title: "Versatile House With Garden",
    location: "Jagakarsa, Jakarta Selatan",
    style: "Modern Tropical",
  },
  {
    image: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_KamarUtama.webp",
    title: "Skyline Luxury Orange County",
    location: "Cikarang Selatan, Bekasi",
    style: "Contemporary Executive",
  },
  {
    image: "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
    title: "Sky House Hotel-Style Bed",
    location: "Pinang, Tangerang",
    style: "Scandinavian Minimalist",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden bg-black select-none">
      {/* Background Auto-sliding Images */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
          }`}
          style={{ transition: "opacity 1.2s ease-in-out, transform 8s ease-out" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover brightness-[0.62]"
          />
        </div>
      ))}

      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      {/* Content Container */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-12 lg:px-12 lg:py-16">
        {/* Top Tag */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-[11px] font-medium tracking-widest uppercase text-white/90 backdrop-blur-md">
            <Sparkles className="mr-1.5 h-3 w-3 text-[#A69C8E]" />
            Editorial Hospitality & Asset Management
          </span>
        </div>

        {/* Center Main Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white">
            Curated Villas, <br />
            <span className="italic font-light text-[#EAE8E4]">Managed to Perfection.</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-white/80 font-light leading-relaxed">
            A discrete portfolio of architectural retreats for global travelers, paired with high-yield, institutional asset management for luxury property owners.
          </p>

          {/* Dual Conversion CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-[#222222] hover:bg-[#F2EFEB] hover:text-black border-none font-semibold text-xs uppercase tracking-widest px-8 shadow-xl"
            >
              <Link href="/villas">
                Explore Villas (B2C)
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outlineLight"
              asChild
              className="font-semibold text-xs uppercase tracking-widest px-8"
            >
              <Link href="/owner-services">
                Partner with Us (B2B)
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar: Slide Indicators & Architectural Meta */}
        <div className="flex items-end justify-between border-t border-white/15 pt-6 text-white">
          <div className="flex items-center space-x-3">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? "w-10 bg-white" : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="hidden sm:flex flex-col text-right">
            <span className="font-serif text-sm text-white">
              {HERO_SLIDES[currentSlide].title}
            </span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider">
              {HERO_SLIDES[currentSlide].location} &bull; {HERO_SLIDES[currentSlide].style}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
