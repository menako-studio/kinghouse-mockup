"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  Cookie,
} from "lucide-react"
import { useLocalization } from "@/lib/context/localization-context"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLocalization()

  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setTimeout(() => {
        setEmail("")
        setIsSubscribed(false)
      }, 4000)
    }
  }

  return (
    <footer className="w-full">
      {/* 1. Top Newsletter Banner (Exact Nakula Style from footer.png) */}
      <div className="relative overflow-hidden bg-[#24221F] py-14 lg:py-16">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
            alt="KingHouse Luxury Property"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Headline */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.12em] text-white leading-tight">
                {t("newsletterHeadline")}
              </h2>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="w-full max-w-md rounded-lg bg-white/95 backdrop-blur-md p-6 shadow-2xl">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#222222] mb-1">
                {t("subscribeNewsletter")}
              </h3>
              <p className="text-xs text-[#666666] mb-4">
                Receive handpicked villa collections, seasonal promotions, and owner yield reports.
              </p>

              {isSubscribed ? (
                <div className="flex items-center space-x-2 rounded-md bg-[#FAF8F3] p-3 text-xs font-semibold text-[#8C7F5F] border border-[#8C7F5F]/30">
                  <CheckCircle2 className="h-4 w-4 text-[#8C7F5F]" />
                  <span>Thank you for subscribing to KingHouse!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-[10px] uppercase tracking-widest font-semibold text-[#777777] mb-1">
                      EMAIL
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("emailPlaceholder")}
                      required
                      className="w-full rounded border border-[#E0DCD3] bg-[#FAFAF8] px-3.5 py-2.5 text-xs text-[#222222] placeholder:text-[#999999] focus:border-[#8C7F5F] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded bg-[#8C7F5F] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#776B4E] transition-colors shadow-sm"
                  >
                    {t("signUp")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body (Exact Nakula Olive/Khaki Palette #8C7F5F) */}
      <div className="bg-[#8C7F5F] text-[#F5F2EB] pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Column 1: Monogram & ABOUT US */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stylized Brand Emblem */}
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-transform group-hover:scale-105">
                  <span className="font-serif text-2xl font-bold tracking-widest">K</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.2em] text-white uppercase font-normal">
                    KINGHOUSE
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#E0DACB]">
                    Hospitality Management
                  </span>
                </div>
              </Link>

              {/* ABOUT US Links */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("aboutUs")}
                </h4>
                <ul className="space-y-2 text-xs font-light text-[#F0EBE0]">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/owner-services#audit" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      T&C
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/owner-services" className="hover:text-white font-medium text-white transition-colors">
                      Management Enquiry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: RESERVATION, GUEST ASSISTANCE, MANAGEMENT */}
            <div className="lg:col-span-5 space-y-6">
              {/* RESERVATION */}
              <div className="space-y-1.5">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("reservation")}
                </h4>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Mail className="h-3 w-3 opacity-70" />
                  <span>reservation@kinghouse.id</span>
                </p>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Phone className="h-3 w-3 opacity-70" />
                  <span>+62 821 2393 3218</span>
                </p>
              </div>

              {/* GUEST ASSISTANCE */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("guestAssistance")}
                </h4>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Mail className="h-3 w-3 opacity-70" />
                  <span>concierge@kinghouse.id</span>
                </p>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Phone className="h-3 w-3 opacity-70" />
                  <span>+62 811 3855 855</span>
                </p>
              </div>

              {/* MANAGEMENT */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("management")}
                </h4>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Mail className="h-3 w-3 opacity-70" />
                  <span>management@kinghouse.id</span>
                </p>
                <p className="text-xs font-light text-[#F0EBE0] flex items-center space-x-2">
                  <Phone className="h-3 w-3 opacity-70" />
                  <span>+62 812 3557 7779</span>
                </p>
              </div>
            </div>

            {/* Column 3: OFFICE, HOURS, CONNECT WITH US */}
            <div className="lg:col-span-4 space-y-6">
              {/* OFFICE */}
              <div className="space-y-1.5">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("office")}
                </h4>
                <p className="text-xs font-light text-[#F0EBE0] leading-relaxed">
                  Jalan Jagakarsa No. 9, Jakarta Selatan,<br />
                  DKI Jakarta, 12620 - Indonesia
                </p>
              </div>

              {/* HOURS */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("hours")}
                </h4>
                <p className="text-xs font-light text-[#F0EBE0]">
                  08:00 - 18:00 (GMT+7)<br />
                  Monday - Friday
                </p>
              </div>

              {/* CONNECT WITH US */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  {t("connectWithUs")}
                </h4>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8C7F5F] hover:bg-[#FAF8F3] hover:scale-105 transition-transform"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com/kinghouse.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8C7F5F] hover:bg-[#FAF8F3] hover:scale-105 transition-transform"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://tiktok.com/@kinghouse.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8C7F5F] hover:bg-[#FAF8F3] hover:scale-105 transition-transform"
                  >
                    <span className="font-bold text-xs">TT</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8C7F5F] hover:bg-[#FAF8F3] hover:scale-105 transition-transform"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 3. Bottom Bar & Floating Interactive Buttons */}
          <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E0DACB]">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
                title="Cookie Settings"
                aria-label="Cookie Settings"
              >
                <Cookie className="h-4 w-4" />
              </button>
              <p>&copy; {currentYear} KingHouse Villa & Property Asset Management. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/stay" className="hover:text-white transition-colors">
                Guest Guide
              </Link>
              <span>&bull;</span>
              <Link href="/login" className="hover:text-white transition-colors">
                Admin Portal
              </Link>
              <span>&bull;</span>
              <a
                href="https://wa.me/6282123933218?text=Hello%20KingHouse!%20I%20am%20interested%20in%20your%20villa%20and%20property%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
                title="WhatsApp Direct Concierge"
                aria-label="WhatsApp Direct Concierge"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
