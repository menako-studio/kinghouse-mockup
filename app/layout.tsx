import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
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
  title: "KingHouse | Editorial Hospitality & Curated Villa Asset Management",
  description: "KingHouse pairs world-class architectural villa curation with institutional asset management. Frictionless Airbnb bookings for discerning guests and high-yield operational excellence for luxury property owners.",
  keywords: [
    "KingHouse",
    "luxury villa management",
    "architectural villas",
    "Airbnb Superhost management",
    "Bali villa rentals",
    "high-yield property management",
    "editorial hospitality",
    "luxury vacation rentals",
  ],
  authors: [{ name: "KingHouse Hospitality Group" }],
  openGraph: {
    title: "KingHouse — Curated Villas, Managed to Perfection",
    description: "Editorial hospitality meets institutional villa asset management.",
    type: "website",
    locale: "en_US",
    siteName: "KingHouse",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "KingHouse Flagship Architectural Villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingHouse — Curated Villas, Managed to Perfection",
    description: "Editorial hospitality meets institutional villa asset management.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--bg-main)] font-sans text-[var(--text-primary)] antialiased selection:bg-[#222222] selection:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
