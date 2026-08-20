import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Star } from "lucide-react"

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
                  Villa Management
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#A0A0A0] max-w-sm">
              Editorial hospitality fused with institutional asset management. Curating Southeast Asia&apos;s most distinctive architectural villas for high-intent travelers and demanding property owners.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white">
                <Star className="h-3.5 w-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="font-medium">Airbnb Superhost Portfolio</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: For Guests */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Curated Escapes (B2C)
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/villas" className="hover:text-white transition-colors">
                  All Architectural Villas
                </Link>
              </li>
              <li>
                <Link href="/villas?area=canggu" className="hover:text-white transition-colors">
                  Canggu Coastal Ridge
                </Link>
              </li>
              <li>
                <Link href="/villas?area=uluwatu" className="hover:text-white transition-colors">
                  Uluwatu Cliffside
                </Link>
              </li>
              <li>
                <Link href="/villas?area=ubud" className="hover:text-white transition-colors">
                  Ubud Forest Sanctuary
                </Link>
              </li>
              <li>
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white transition-colors"
                >
                  Direct Airbnb Listings <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: For Owners */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Asset Management (B2B)
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/owner-services" className="hover:text-white transition-colors">
                  Overview & Value Proposition
                </Link>
              </li>
              <li>
                <Link href="/owner-services#pricing" className="hover:text-white transition-colors">
                  Management Fee Models (15% vs 20%)
                </Link>
              </li>
              <li>
                <Link href="/owner-services#case-studies" className="hover:text-white transition-colors">
                  Performance Proof & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/owner-services#audit" className="hover:text-white transition-colors text-white font-medium">
                  Request Free Property Audit &rarr;
                </Link>
              </li>
              <li>
                <Link href="/owner-services#onboarding" className="hover:text-white transition-colors">
                  3-Step Onboarding Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Inquiries & Office */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-white font-medium">Concierge & Management Desk</p>
              <p className="text-xs text-[#888888]">
                Jl. Batu Bolong No. 88, Canggu, Bali 80361
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#A69C8E] hover:text-white transition-colors"
              >
                WhatsApp Desk <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
              <p className="text-xs text-[#888888]">
                hello@kinghousevillas.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#717171]">
          <p>&copy; {currentYear} KingHouse Hospitality Asset Management Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-[#444444]">|</span>
            <span className="text-[#888888]">Designed with Editorial Precision</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
