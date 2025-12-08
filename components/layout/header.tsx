"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locale, setLocale] = useState<"en" | "id">("id")

  const navigation = [
    { name: { en: "Home", id: "Beranda" }, href: "/" },
    { name: { en: "Villas", id: "Villa" }, href: "/villas" },
    { name: { en: "Services", id: "Layanan" }, href: "/services" },
    { name: { en: "About", id: "Tentang" }, href: "/about" },
    { name: { en: "Contact", id: "Kontak" }, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700">
            <span className="text-xl font-bold text-white">K</span>
          </div>
          <span className="text-xl font-bold text-gray-900">KingHouse</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-amber-600"
            >
              {item.name[locale]}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <button
            onClick={() => setLocale(locale === "en" ? "id" : "en")}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            <Globe className="h-4 w-4" />
            {locale === "en" ? "ID" : "EN"}
          </button>
          <Button variant="outline" asChild>
            <Link href="/owner-login">
              {locale === "en" ? "Owner Login" : "Login Pemilik"}
            </Link>
          </Button>
          <Button asChild>
            <Link href="/villas">
              {locale === "en" ? "Book Now" : "Pesan Sekarang"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name[locale]}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/owner-login">
                  {locale === "en" ? "Owner Login" : "Login Pemilik"}
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/villas">
                  {locale === "en" ? "Book Now" : "Pesan Sekarang"}
                </Link>
              </Button>
              <button
                onClick={() => setLocale(locale === "en" ? "id" : "en")}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Globe className="h-4 w-4" />
                {locale === "en" ? "Bahasa Indonesia" : "English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
