"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, MessageSquareQuote } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { label: "Villas", href: "/villas" },
    { label: "Owner Services", href: "/owner-services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#EBEBEB] bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Architectural Monogram Logo */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center border border-[#222222] bg-[#222222] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#222222]">
            <span className="font-serif text-lg font-normal tracking-wider">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#222222]">
              KingHouse
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#717171] -mt-1 font-medium">
              Villa Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? "text-[#222222] font-semibold border-b border-[#222222] pb-1"
                    : "text-[#717171] hover:text-[#222222]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Action CTAs: Dual Funnel Access */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-xs uppercase tracking-wider text-[#717171] hover:text-[#222222]"
          >
            <Link href="/owner-services">
              For Property Owners
            </Link>
          </Button>

          <Button
            variant="default"
            size="sm"
            asChild
            className="text-xs uppercase tracking-wider font-semibold"
          >
            <Link href="/villas">
              Explore Collection
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center text-[#222222] focus:outline-none"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 px-6 py-8 flex flex-col justify-between border-t border-[#EBEBEB]">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl text-[#222222] hover:text-[#A69C8E] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#EBEBEB] space-y-3">
              <Button asChild className="w-full justify-center" size="lg">
                <Link href="/villas">Explore Villas</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-center" size="lg">
                <Link href="/owner-services">Partner with Us (Owner Services)</Link>
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#EBEBEB] text-xs text-[#717171] space-y-2">
            <p>Direct Inquiries & WhatsApp Concierge:</p>
            <a
              href="https://wa.me/6281234567890?text=Hello%20KingHouse%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#222222] font-medium"
            >
              +62 812-3456-7890 <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
