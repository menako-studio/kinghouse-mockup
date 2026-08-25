import type { Metadata } from "next"
import { Philosopher, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { SiteShell } from "@/components/layout/site-shell"
import { LocalizationProvider } from "@/lib/context/localization-context"

const philosopher = Philosopher({
  weight: ["400", "700"],
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
    default: "KingHouse | Premium Short-Stay Property Management Jabodetabek",
    template: "%s | KingHouse",
  },
  description:
    "KingHouse manages premium short-stay properties across Greater Jakarta (Jagakarsa, Tangerang, Palmerah, and Cikarang) on Airbnb. Maximize occupancy rates and revenue through editorial listings, dynamic pricing, and 24/7 guest concierge.",
  keywords: [
    "KingHouse",
    "property management jakarta",
    "airbnb property management jabodetabek",
    "short stay villa jakarta selatan",
    "airbnb management indonesia",
    "villa management south jakarta",
    "airbnb jagakarsa",
    "airbnb cikarang",
    "airbnb tangerang",
    "airbnb palmerah",
    "short term rental asset management",
    "maximize airbnb occupancy",
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
    title: "KingHouse — Editorial Short-Stay Property Management in Jabodetabek",
    description:
      "Maximize property occupancy and revenue on Airbnb with KingHouse. Editorial photography, keyword-optimized SEO, dynamic pricing, and 24/7 guest care.",
    type: "website",
    locale: "en_US",
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
    title: "KingHouse — Editorial Short-Stay Property Management",
    description:
      "Maximize property occupancy and revenue on Airbnb with KingHouse. Editorial photography, keyword-optimized SEO, dynamic pricing, and 24/7 guest care.",
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
    <html lang="id" className={`${philosopher.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--bg-main)] font-sans text-[var(--text-primary)] antialiased selection:bg-[#B8934C] selection:text-white">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LocalizationProvider>
          <SiteShell>
            {children}
          </SiteShell>
        </LocalizationProvider>
      </body>
    </html>
  )
}


