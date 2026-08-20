import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "KingHouse | Manajemen Properti Sewa Profesional Jabodetabek",
    template: "%s | KingHouse",
  },
  description:
    "KingHouse mengelola properti Airbnb premium di Jagakarsa, Tangerang, Palmerah, dan Cikarang. Tingkatkan occupancy rate & pendapatan properti Anda dengan manajemen profesional — foto editorial, SEO listing, harga dinamis, & layanan tamu 24/7.",
  keywords: [
    "KingHouse",
    "manajemen properti airbnb",
    "property management jabodetabek",
    "sewa properti jakarta",
    "airbnb management indonesia",
    "villa management jakarta selatan",
    "airbnb jagakarsa",
    "airbnb cikarang",
    "airbnb tangerang",
    "airbnb palmerah",
    "short term rental management",
    "meningkatkan occupancy airbnb",
  ],
  authors: [{ name: "KingHouse" }],
  creator: "KingHouse",
  publisher: "KingHouse",
  metadataBase: new URL("https://kinghouse.id"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KingHouse — Manajemen Properti Airbnb Terpercaya di Jabodetabek",
    description:
      "Tingkatkan occupancy & pendapatan properti Anda di Airbnb dengan KingHouse. Foto profesional, SEO listing, dynamic pricing, & tamu care 24/7.",
    type: "website",
    locale: "id_ID",
    siteName: "KingHouse",
    url: "https://kinghouse.id",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "KingHouse — Managed Property in Jagakarsa, South Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingHouse — Manajemen Properti Airbnb Jabodetabek",
    description: "Tingkatkan occupancy & pendapatan properti Anda bersama KingHouse.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    ],
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kinghouse.id/#organization",
      name: "KingHouse",
      url: "https://kinghouse.id",
      logo: "https://kinghouse.id/logo.png",
      description:
        "KingHouse adalah perusahaan manajemen properti sewa jangka pendek profesional di Jabodetabek, Indonesia. Kami mengoptimalkan listing Airbnb klien melalui fotografi editorial, SEO listing, dynamic pricing, dan operasional end-to-end.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
        areaServed: "ID",
      },
      areaServed: [
        { "@type": "City", name: "Jakarta Selatan" },
        { "@type": "City", name: "Tangerang" },
        { "@type": "City", name: "Jakarta Barat" },
        { "@type": "City", name: "Cikarang" },
      ],
      sameAs: [
        "https://instagram.com/kinghouse.id",
        "https://www.airbnb.com/users/profile/1470743715397835749",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kinghouse.id/#localbusiness",
      name: "KingHouse Property Management",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.3494,
        longitude: 106.8431,
      },
      url: "https://kinghouse.id",
      priceRange: "Rp 280.000 - Rp 1.800.000 / malam",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--bg-main)] font-sans text-[var(--text-primary)] antialiased selection:bg-[#222222] selection:text-white">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
