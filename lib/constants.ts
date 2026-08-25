// KingHouse — Core Site Configuration & Metadata
// Covers: Jabodetabek region (Jakarta, Tangerang, Bekasi, Cikarang)

export const SITE_CONFIG = {
  name: "KingHouse",
  domain: "kinghouse.id",
  tagline: "Professional Short-Stay Property Management in Greater Jakarta",
  description: {
    en: "KingHouse manages premium short-stay properties across Jabodetabek — Jakarta Selatan, Tangerang, Jakarta Barat, and Cikarang — on Airbnb. We maximize your occupancy rate and revenue through editorial listings, dynamic pricing, and end-to-end guest management.",
    id: "KingHouse mengelola properti sewa jangka pendek premium di seluruh Jabodetabek — Jakarta Selatan, Tangerang, Jakarta Barat, dan Cikarang — melalui Airbnb. Kami memaksimalkan tingkat hunian dan pendapatan Anda.",
  },
  contact: {
    email: "ptkreasiusmangosse@gmail.com",
    phone: "+62 821-2393-3218",
    whatsapp: "+62 821-2393-3218",
    whatsappMessage: "Hello KingHouse, I am interested in your property management services.",
    address: "Jakarta, Indonesia",
  },
  social: {
    tiktok: "https://www.tiktok.com/@kinghouse.id",
  },
  airbnbHostProfile:
    "https://www.airbnb.com/users/profile/1470743715397835749?previous_page_name=PdpHomeMarketplace",
} as const

// Managed areas in Jabodetabek
export const MANAGED_AREAS = [
  {
    name: "Jagakarsa",
    slug: "jagakarsa",
    region: "Jakarta Selatan",
    description:
      "Quiet, tree-lined enclave in South Jakarta. Ideal for families and longer stays with easy Toll access.",
    highlight: "Large family homes with private gardens",
  },
  {
    name: "Tangerang",
    slug: "tangerang",
    region: "Banten",
    description:
      "Rapidly growing satellite city with strong demand from business travelers and IKEA/Alam Sutera expats.",
    highlight: "Hotel-style comfort near business hubs",
  },
  {
    name: "Palmerah",
    slug: "palmerah",
    region: "Jakarta Barat",
    description:
      "Central Jakarta Barat with excellent connectivity — minutes from Palmerah Station and Sudirman.",
    highlight: "Urban convenience in Central Jakarta",
  },
  {
    name: "Cikarang",
    slug: "cikarang",
    region: "Bekasi",
    description:
      "Indonesia's premier industrial zone. High demand from expat professionals and business travelers at Orange County.",
    highlight: "Premium apartments for expat executives",
  },
] as const

export type AreaSlug = (typeof MANAGED_AREAS)[number]["slug"]

// Canonical list of all managed property types
export const PROPERTY_TYPES = [
  "Entire Home",
  "Private Room",
  "Entire Apartment",
  "Villa",
] as const

// Standard amenities offered across managed properties
export const STANDARD_AMENITIES = [
  "High-Speed WiFi",
  "Air Conditioning",
  "Hot Water",
  "Smart TV / Netflix",
  "Fully Equipped Kitchen",
  "Washing Machine",
  "24/7 Guest Support",
  "Self Check-in",
] as const

// Management service tiers for owner-facing pages
export const MANAGEMENT_SERVICES = {
  owners: [
    {
      title: "Listing Optimization & SEO",
      description:
        "Editorial-grade photography, keyword-optimized Airbnb titles & descriptions, and structured data markup to rank higher in search.",
      icon: "Search",
    },
    {
      title: "Dynamic Revenue Management",
      description:
        "AI-powered nightly pricing calibrated against Jabodetabek market demand, competitor rates, and seasonal calendars.",
      icon: "TrendingUp",
    },
    {
      title: "End-to-End Operations",
      description:
        "Housekeeping coordination, linen management, maintenance requests, and restocking — handled without bothering you.",
      icon: "Settings",
    },
    {
      title: "24/7 Guest Communication",
      description:
        "Instant multilingual response to all guest inquiries, check-in coordination, and in-stay support on your behalf.",
      icon: "MessageSquare",
    },
  ],
  guests: [
    {
      title: "Verified Properties",
      description:
        "Every listing is personally inspected, photographed, and approved by the KingHouse team before going live.",
      icon: "ShieldCheck",
    },
    {
      title: "Seamless Airbnb Booking",
      description:
        "Book securely through Airbnb with instant confirmation, transparent pricing, and buyer protection.",
      icon: "CalendarCheck",
    },
    {
      title: "Hotel-Grade Cleanliness",
      description:
        "Professional turnover cleaning with fresh hotel-grade linens and toiletries before every check-in.",
      icon: "Sparkles",
    },
    {
      title: "24/7 Concierge Support",
      description:
        "Reach our team anytime via WhatsApp for local recommendations, transport, or any in-stay requests.",
      icon: "Headphones",
    },
  ],
} as const

// Blog categories for SEO content strategy
export const BLOG_CATEGORIES = [
  { slug: "owner-tips", label: "Owner Tips" },
  { slug: "airbnb-seo", label: "Airbnb SEO" },
  { slug: "jabodetabek-guide", label: "Jabodetabek Guide" },
  { slug: "revenue-management", label: "Revenue Management" },
  { slug: "guest-experience", label: "Guest Experience" },
] as const
