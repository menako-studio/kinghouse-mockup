import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"
import { SITE_CONFIG, MANAGED_AREAS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#EBEBEB] bg-[#181818] text-[#A0A0A0]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white text-[#181818]">
                <span className="font-serif text-lg font-normal tracking-wider">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white">
                  KingHouse
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#888888] -mt-1 font-medium">
                  Property Management
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#A0A0A0] max-w-sm">
              Editorial-grade short-stay asset management and hospitality curation across Greater Jakarta (Jabodetabek) — Jagakarsa, Tangerang, Palmerah, and Cikarang.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white">
                <Star className="h-3.5 w-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="font-medium">Airbnb Superhost Standard Portfolio</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Area & Properties */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Jabodetabek Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {MANAGED_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{area.name} ({area.region})</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/villas" className="hover:text-white transition-colors text-white/70">
                  All Properties &rarr;
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.airbnbHostProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#D4AF37] hover:text-white transition-colors"
                >
                  Airbnb Host Profile <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Services & Features */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Services & Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/owner-services" className="hover:text-white transition-colors">
                  Owner Services & Tiered Fees (15% vs 20%)
                </Link>
              </li>
              <li>
                <Link href="/dashboard/seo" className="hover:text-white transition-colors text-[#D4AF37]">
                  SEO CMS Dashboard (Demo Pitch)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Editorial Blog & Market Insights
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Garden Weddings & Private Events
                </Link>
              </li>
              <li>
                <Link
                  href="/owner-services#audit"
                  className="hover:text-white transition-colors text-white font-medium"
                >
                  Free Property Yield Audit &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Direct Inquiries */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-white font-medium">Concierge & Management Desk</p>
              <p className="text-xs text-[#888888]">
                South Jakarta, Greater Jakarta, Indonesia
              </p>
              <a
                href="https://wa.me/628129252090?text=Hello%20KingHouse!%20I%20am%20interested%20in%20your%20property%20management%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#D4AF37] hover:text-white transition-colors"
              >
                WhatsApp Desk <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
              <p className="text-xs text-[#888888]">
                {SITE_CONFIG.contact.email}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#717171]">
          <p>&copy; {currentYear} KingHouse Hospitality Asset Management. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">CMS Dashboard</Link>
            <span className="text-[#444444]">|</span>
            <span className="text-[#888888]">Jabodetabek Property Management</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

