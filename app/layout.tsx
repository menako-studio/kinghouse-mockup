import type { Metadata } from "next"
import { Philosopher, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { SiteShell } from "@/components/layout/site-shell"
import { LocalizationProvider } from "@/lib/context/localization-context"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { PageViewTracker } from "@/components/analytics/page-view-tracker"
import { SITE_CONFIG } from "@/lib/constants"

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
    default: "KingHouse Management | Editorial Short-Stay & Villa Property Management Jabodetabek",
    template: "%s | KingHouse Management",
  },
  description:
    "KingHouse Management (kinghousemanagement.com) adalah jasa manajemen properti sewa harian dan villa profesional di Jabodetabek (Jagakarsa Jakarta Selatan, Tangerang, Palmerah Jakarta Barat, Cikarang). Maksimalkan pendapatan properti dan okupansi Airbnb dengan dynamic pricing, fotografi editorial, dan 24/7 guest concierge.",
  keywords: [
    "KingHouse Management",
    "King House Management",
    "KingHouse",
    "King House Property Management",
    "kinghousemanagement.com",
    "www.kinghousemanagement.com",
    "kinghouse",

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
    "jasa kelola villa jabodetabek",
    "manajemen apartemen harian",
  ],
  authors: [{ name: "KingHouse Management" }],
  creator: "KingHouse Management",
  publisher: "KingHouse Management",
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "KingHouse Management — Editorial Short-Stay Property Management in Jabodetabek",
    description:
      "Maximize property occupancy and revenue on Airbnb with KingHouse Management. Editorial photography, keyword-optimized SEO, dynamic pricing, and 24/7 guest concierge.",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: "KingHouse Management",
    url: SITE_CONFIG.baseUrl,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "KingHouse Management — Curated Short-Stay Hospitality in Greater Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingHouse Management — Editorial Short-Stay Property Management",
    description:
      "Maximize property occupancy and revenue on Airbnb with KingHouse Management. Editorial photography, keyword-optimized SEO, dynamic pricing, and 24/7 guest care.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    ],
  },
}

const comprehensiveSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
      name: "KingHouse Management",
      alternateName: [
        "King House Management",
        "KingHouse",
        "King House Property Management",
        "kinghousemanagement.com",
        "www.kinghousemanagement.com",
      ],

      url: SITE_CONFIG.baseUrl,
      description:
        "KingHouse Management adalah jasa manajemen properti sewa harian dan villa profesional di Jabodetabek (Jakarta Selatan, Tangerang, Jakarta Barat, Cikarang).",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_CONFIG.baseUrl}/villas?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.baseUrl}/#organization`,
      name: "KingHouse Management",
      alternateName: [
        "King House Management",
        "KingHouse",
        "King House Property Management",
      ],
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl}/favicon.ico`,
      description:
        "KingHouse Management adalah perusahaan manajemen properti sewa jangka pendek profesional di Jabodetabek, Indonesia. Kami mengoptimalkan listing Airbnb klien melalui fotografi editorial, SEO listing, dynamic pricing, dan operasional end-to-end.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+6282123933218",
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
        "https://www.tiktok.com/@kinghouse.id",
        "https://instagram.com/kinghouse.id",
        "https://www.airbnb.com/users/profile/1470743715397835749",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.baseUrl}/#localbusiness`,
      name: "KingHouse Management — Property & Villa Operations",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      telephone: "+6282123933218",
      email: "ptkreasiusmangosse@gmail.com",
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
      url: SITE_CONFIG.baseUrl,
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
        {/* Google Analytics 4 & Google Tag Manager */}
        <GoogleAnalytics />
        {/* Virtual Page View Route Tracker */}
        <PageViewTracker />
        
        {/* Unified Schema.org Structured Data */}
        <Script
          id="structured-data-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(comprehensiveSchema) }}
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



