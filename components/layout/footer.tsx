import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700">
                <span className="text-xl font-bold text-white">K</span>
              </div>
              <span className="text-xl font-bold text-white">KingHouse</span>
            </Link>
            <p className="text-sm mb-6">
              Layanan manajemen villa profesional di Jabodetabek untuk mengoptimalkan pendapatan properti Anda.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/villas" className="hover:text-amber-500 transition-colors">Cari Villa</Link></li>
              <li><Link href="/services" className="hover:text-amber-500 transition-colors">Layanan Kami</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog & Tips</Link></li>
              <li><Link href="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="text-white font-semibold mb-4">Untuk Pemilik</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/owner-login" className="hover:text-amber-500 transition-colors">Login Pemilik</Link></li>
              <li><Link href="/list-property" className="hover:text-amber-500 transition-colors">Daftarkan Properti</Link></li>
              <li><Link href="/owner-dashboard" className="hover:text-amber-500 transition-colors">Dashboard</Link></li>
              <li><Link href="/pricing" className="hover:text-amber-500 transition-colors">Paket Layanan</Link></li>
              <li><Link href="/success-stories" className="hover:text-amber-500 transition-colors">Kisah Sukses</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-amber-500 transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-amber-500 transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm lg:flex-row">
            <p>&copy; {currentYear} KingHouse. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-amber-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
