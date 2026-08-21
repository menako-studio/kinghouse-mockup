import { Villa, Testimonial, ManagementTier, CaseStudy, BlogPost, VillaEvent } from "./types"

// ─── REAL MANAGED PROPERTIES (Jabodetabek) ───────────────────────────────────
// Source: https://www.airbnb.com/users/profile/1470743715397835749

export const CURATED_VILLAS: Villa[] = [
  {
    id: "villa-1",
    name: "Versatile House With Beautiful Garden Beyond",
    tagline: "Spacious 12-guest home with lush private garden in quiet South Jakarta",
    slug: "versatile-house-jagakarsa",
    area: "Jagakarsa",
    areaSlug: "jagakarsa",
    location: "Jagakarsa, Jakarta Selatan",
    propertyType: "entire-home",
    airbnbUrl: "https://www.airbnb.com/rooms/45834267",
    superhost: false,
    guestFavorite: false,
    rating: 4.9,
    reviewsCount: 68,
    price: {
      usd: 95,
      idr: 1500000,
      cleaningFeeIdr: 300000,
      serviceFeePercent: 14,
    },
    capacity: {
      guests: 12,
      bedrooms: 5,
      beds: 9,
      bathrooms: 3,
    },
    heroImage:
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    gallery: [
      {
        url: "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
        caption: "Lush private garden, swimming pool and tropical exterior facade of the Jagakarsa residence",
        category: "exterior",
      },
      {
        url: "/properties/versatile-house/VersatileHouse_LivingRoom_Lounge.jpg",
        caption: "Spacious open-plan living lounge with high ceiling and natural ventilation",
        category: "living",
      },
      {
        url: "/properties/versatile-house/VersatileHouse_MasterBedroom_GardenAccess.webp",
        caption: "Master bedroom retreat with plush bedding and direct garden access",
        category: "bedroom",
      },
      {
        url: "/properties/versatile-house/VersatileHouse_DiningRoom_Chandelier.jpg",
        caption: "Grand dining hall with chandelier lighting designed for family feasts & group gatherings",
        category: "living",
      },
      {
        url: "/properties/versatile-house/VersatileHouse_Bathroom_BathtubGardenView.webp",
        caption: "Luxury en-suite bathroom with deep soaking bathtub overlooking private greenery",
        category: "bathroom",
      },
    ],
    editorialDescription: {
      lead: "A generous five-bedroom family home nestled in Jagakarsa's leafy, low-traffic residential enclave. Built for togetherness — with a private garden, social kitchen, and enough sleeping space for up to 12 guests.",
      architecturalHighlights:
        "The property is designed around a central garden courtyard that acts as a natural air corridor, keeping the interior cool without heavy reliance on air conditioning. Generous ceiling heights and large jalousie windows flood every room with filtered natural light.",
      theSpace:
        "Five comfortable bedrooms sleep up to 12 guests across 9 beds, served by 3 full bathrooms. The fully equipped kitchen features a gas range, refrigerator, and ample counter space — ideal for preparing meals for the entire group. The garden beyond the living area is private, fenced, and has space for outdoor seating and children's play.",
    },
    amenities: [
      { name: "Private Garden", category: "outdoor", icon: "Leaf" },
      { name: "High-Speed WiFi", category: "essentials", icon: "Wifi" },
      { name: "Air Conditioning (all rooms)", category: "essentials", icon: "Wind" },
      { name: "Fully Equipped Kitchen", category: "essentials", icon: "UtensilsCrossed" },
      { name: "Washing Machine", category: "essentials", icon: "Sparkles" },
      { name: "Smart TV / Streaming", category: "essentials", icon: "Tv" },
      { name: "24/7 WhatsApp Support", category: "services", icon: "MessageSquare" },
      { name: "Self Check-in (Keybox)", category: "services", icon: "Key" },
      { name: "Free Parking (4 cars)", category: "essentials", icon: "Car" },
    ],
    nearbySpots: [
      { name: "Cinere Mall", category: "mall", distance: "3.5 km", travelTime: "10 min drive" },
      { name: "Fatmawati MRT Station", category: "transport", distance: "5 km", travelTime: "15 min drive" },
      { name: "Lotte Mart Depok", category: "mall", distance: "4 km", travelTime: "12 min drive" },
      { name: "Soekarno-Hatta Airport", category: "airport", distance: "35 km", travelTime: "55 min drive" },
    ],
    featured: true,
    architecturalStyle: "Modern Tropical",
    seoMeta: {
      metaTitle: "Versatile House With Garden — Jagakarsa, South Jakarta | KingHouse",
      metaDescription:
        "Spacious 5-bedroom home in Jagakarsa for up to 12 guests. Private garden, full kitchen, free parking. Managed by KingHouse on Airbnb. Perfect for family stays & gatherings.",
      focusKeyword: "rumah sewa jagakarsa jakarta selatan",
      ogImage:
        "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    },
  },
  {
    id: "villa-2",
    name: "Sky House • Hotel-Style Bed + IKEA 5min",
    tagline: "Premium hotel-feel room in the heart of Tangerang — just 5 minutes from IKEA",
    slug: "sky-house-tangerang",
    area: "Tangerang",
    areaSlug: "tangerang",
    location: "Pinang, Tangerang, Banten",
    propertyType: "private-room",
    airbnbUrl: "https://www.airbnb.com/rooms/1325106294978348497",
    superhost: false,
    guestFavorite: false,
    rating: 4.91,
    reviewsCount: 22,
    price: {
      usd: 19,
      idr: 299000,
      cleaningFeeIdr: 75000,
      serviceFeePercent: 14,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    heroImage:
      "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
    gallery: [
      {
        url: "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
        caption: "Hotel-grade queen bed with Scandinavian styling, fresh linens, and warm natural lighting",
        category: "bedroom",
      },
      {
        url: "/properties/sky-house/SkyHouse_IKEA_Dapur.webp",
        caption: "Modern IKEA-equipped shared kitchenette and pantry area",
        category: "kitchen",
      },
      {
        url: "/properties/sky-house/SkyHouse_Fasilitas_Gym.jpeg",
        caption: "Full resident fitness gym facilities with cardio equipment and weights",
        category: "exterior",
      },
      {
        url: "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
        caption: "Minimalist Scandinavian bedroom setup with ergonomic work corner",
        category: "living",
      },
      {
        url: "/properties/sky-house/SkyHouse_IKEA_Dapur.webp",
        caption: "Clean, functional dining and coffee preparation counter",
        category: "living",
      },
    ],
    editorialDescription: {
      lead: "A meticulously curated private room in Pinang, Tangerang — designed to feel like a boutique hotel stay at a fraction of the cost. Walking distance from IKEA Alam Sutera, perfect for business travelers and design lovers.",
      architecturalHighlights:
        "The room draws from Scandinavian minimalism: crisp white walls, warm-toned IKEA furniture, and layered warm lighting that creates a calm, hotel-like atmosphere. Every piece has been selected for both function and aesthetic harmony.",
      theSpace:
        "Your private room includes a premium queen-size bed with hotel-grade linens, a dedicated work desk, fast WiFi, and an en-suite bathroom with hot water and full toiletry set. Air conditioning keeps the room at a comfortable temperature year-round.",
    },
    amenities: [
      { name: "Hotel-Grade Queen Bed", category: "luxury", icon: "Bed" },
      { name: "High-Speed WiFi (100 Mbps)", category: "essentials", icon: "Wifi" },
      { name: "Air Conditioning", category: "essentials", icon: "Wind" },
      { name: "En-Suite Hot Shower", category: "essentials", icon: "Droplets" },
      { name: "Work Desk & Chair", category: "essentials", icon: "Monitor" },
      { name: "Smart TV / Netflix", category: "luxury", icon: "Tv" },
      { name: "Self Check-in", category: "services", icon: "Key" },
      { name: "Daily Linen Change", category: "services", icon: "Sparkles" },
    ],
    nearbySpots: [
      { name: "IKEA Alam Sutera", category: "mall", distance: "1.2 km", travelTime: "5 min drive" },
      { name: "Alam Sutera Mall", category: "mall", distance: "1.5 km", travelTime: "7 min drive" },
      { name: "BSD City", category: "landmark", distance: "8 km", travelTime: "20 min drive" },
      { name: "Soekarno-Hatta Airport", category: "airport", distance: "18 km", travelTime: "30 min drive" },
    ],
    featured: true,
    architecturalStyle: "Scandinavian Minimalist",
    seoMeta: {
      metaTitle: "Sky House Tangerang — Hotel-Style Room Near IKEA Alam Sutera | KingHouse",
      metaDescription:
        "Boutique hotel-feel private room in Pinang, Tangerang. 5 min from IKEA Alam Sutera. Premium bed, fast WiFi, en-suite bathroom. Book on Airbnb via KingHouse.",
      focusKeyword: "sewa kamar tangerang dekat ikea alam sutera",
      ogImage:
        "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
    },
  },
  {
    id: "villa-3",
    name: "Bright & Airy Apartment",
    tagline: "Central Jakarta West apartment filled with natural light and urban convenience",
    slug: "bright-airy-apartment-palmerah",
    area: "Palmerah",
    areaSlug: "palmerah",
    location: "Palmerah, Jakarta Barat",
    propertyType: "entire-apartment",
    airbnbUrl: "https://www.airbnb.com/rooms/1444158185166882045",
    superhost: false,
    guestFavorite: false,
    rating: 0,
    reviewsCount: 0,
    price: {
      usd: 18,
      idr: 280000,
      cleaningFeeIdr: 75000,
      serviceFeePercent: 14,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    heroImage:
      "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
    gallery: [
      {
        url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
        caption: "Sun-drenched master bedroom with wide city-view windows and queen hotel bed",
        category: "bedroom",
      },
      {
        url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide-2.webp",
        caption: "Comfortable bedroom lounge perspective featuring natural lighting and clean layout",
        category: "bedroom",
      },
      {
        url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
        caption: "Crisp white minimalist room aesthetic tailored for remote work and short-stay comfort",
        category: "living",
      },
      {
        url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide-2.webp",
        caption: "Warm afternoon natural light across the bedroom suite",
        category: "living",
      },
      {
        url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
        caption: "Air-conditioned modern suite in central Palmerah Jakarta Barat",
        category: "exterior",
      },
    ],
    editorialDescription: {
      lead: "A bright, cheerful apartment in the strategic Palmerah district of West Jakarta — minutes from Palmerah Station, Senayan, and major business corridors. New listing with first-class KingHouse hospitality standards.",
      architecturalHighlights:
        "The apartment maximizes its floor-to-ceiling windows to flood the interior with morning light, creating an energizing environment ideal for professionals working remotely or short business stays in the capital.",
      theSpace:
        "A complete entire apartment for two: cosy bedroom with fresh hotel linen, bright living-dining area, a kitchenette with refrigerator and cooking equipment, and a clean bathroom with hot water. Air conditioning and fast WiFi throughout.",
    },
    amenities: [
      { name: "Entire Private Apartment", category: "essentials", icon: "Home" },
      { name: "High-Speed WiFi", category: "essentials", icon: "Wifi" },
      { name: "Air Conditioning", category: "essentials", icon: "Wind" },
      { name: "Kitchenette", category: "essentials", icon: "UtensilsCrossed" },
      { name: "Hot Water Shower", category: "essentials", icon: "Droplets" },
      { name: "Smart TV", category: "luxury", icon: "Tv" },
      { name: "Self Check-in", category: "services", icon: "Key" },
      { name: "Free Street Parking", category: "essentials", icon: "Car" },
    ],
    nearbySpots: [
      { name: "Palmerah Station (KRL)", category: "transport", distance: "800 m", travelTime: "10 min walk" },
      { name: "Senayan City Mall", category: "mall", distance: "3 km", travelTime: "10 min drive" },
      { name: "Grand Indonesia", category: "mall", distance: "5 km", travelTime: "15 min drive" },
      { name: "Soekarno-Hatta Airport", category: "airport", distance: "30 km", travelTime: "50 min drive" },
    ],
    featured: false,
    architecturalStyle: "Urban Contemporary",
    seoMeta: {
      metaTitle: "Bright & Airy Apartment Palmerah, Jakarta Barat | KingHouse",
      metaDescription:
        "Entire modern apartment in Palmerah, West Jakarta. 10 min walk to Palmerah KRL Station. Bright interior, full amenities for 2 guests. New listing managed by KingHouse.",
      focusKeyword: "sewa apartemen palmerah jakarta barat airbnb",
      ogImage:
        "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
    },
  },
  {
    id: "villa-4",
    name: "Skyline Luxury at Orange County",
    tagline: "Executive apartment with skyline view inside Cikarang's premium Orange County complex",
    slug: "skyline-luxury-orange-county-cikarang",
    area: "Cikarang",
    areaSlug: "cikarang",
    location: "Cikarang Selatan, Bekasi",
    propertyType: "entire-apartment",
    airbnbUrl: "https://www.airbnb.com/rooms/1691723711820833674",
    superhost: false,
    guestFavorite: false,
    rating: 4.83,
    reviewsCount: 6,
    price: {
      usd: 29,
      idr: 450000,
      cleaningFeeIdr: 100000,
      serviceFeePercent: 14,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    heroImage:
      "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_PemandanganView.jpeg",
    gallery: [
      {
        url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_PemandanganView.jpeg",
        caption: "Panoramic skyline view from the high-floor Orange County luxury apartment balcony",
        category: "exterior",
      },
      {
        url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_KamarUtama.webp",
        caption: "Executive master bedroom suite with plush bedding and designer accent wall",
        category: "bedroom",
      },
      {
        url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_Kitchenette.webp",
        caption: "Sleek modern kitchenette equipped with microwave, induction stove and refrigerator",
        category: "kitchen",
      },
      {
        url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_FasilitasGym.webp",
        caption: "Exclusive resident fitness center and gymnasium inside Orange County complex",
        category: "exterior",
      },
      {
        url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_KamarUtama.webp",
        caption: "Hotel-grade comfort with blackout curtains and centralized climate control",
        category: "living",
      },
    ],
    editorialDescription: {
      lead: "A premium executive apartment inside the prestigious Orange County Cikarang complex — Indonesia's most sought-after expat industrial township. Ideal for professionals and executives working in the Jababeka, EJIP, or MM2100 industrial zones.",
      architecturalHighlights:
        "Orange County's signature architecture delivers a Southern California-inspired aesthetic with high ceilings, resort-style podium amenities, and sweeping industrial skyline views from upper floors.",
      theSpace:
        "Your executive apartment includes a plush bedroom with blackout curtains, a modern living area with smart TV, a well-appointed kitchenette with Nespresso, and a sleek rain-shower bathroom. Access to Orange County's pool, gym, and retail facilities is included.",
    },
    amenities: [
      { name: "Skyline City View", category: "luxury", icon: "Building" },
      { name: "Resort Pool Access", category: "outdoor", icon: "Waves" },
      { name: "Gym Access", category: "luxury", icon: "Dumbbell" },
      { name: "High-Speed WiFi (100 Mbps)", category: "essentials", icon: "Wifi" },
      { name: "Air Conditioning (Smart)", category: "essentials", icon: "Wind" },
      { name: "Nespresso Machine", category: "luxury", icon: "Coffee" },
      { name: "Rain Shower + Toiletries", category: "luxury", icon: "Droplets" },
      { name: "Smart TV / Netflix", category: "luxury", icon: "Tv" },
      { name: "24-Hour Building Security", category: "services", icon: "ShieldCheck" },
      { name: "Basement Parking", category: "essentials", icon: "Car" },
    ],
    nearbySpots: [
      { name: "Jababeka Industrial Estate", category: "landmark", distance: "5 km", travelTime: "12 min drive" },
      { name: "EJIP Industrial Park", category: "landmark", distance: "3 km", travelTime: "8 min drive" },
      { name: "MM2100 Industrial Town", category: "landmark", distance: "8 km", travelTime: "18 min drive" },
      { name: "Halim Perdanakusuma Airport", category: "airport", distance: "35 km", travelTime: "50 min drive" },
    ],
    featured: true,
    architecturalStyle: "Contemporary Executive",
    seoMeta: {
      metaTitle: "Skyline Luxury — Orange County Cikarang Apartment | KingHouse",
      metaDescription:
        "Executive apartment with skyline view inside Orange County, Cikarang Selatan. Perfect for expats & professionals near Jababeka & EJIP. Managed by KingHouse on Airbnb.",
      focusKeyword: "apartemen orange county cikarang expat airbnb",
      ogImage:
        "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_PemandanganView.jpeg",
    },
  },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    type: "owner",
    author: "Budi Santoso",
    roleOrLocation: "Owner, Versatile House Jagakarsa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote:
      "KingHouse transformed our family home in Jagakarsa into a steady income stream. From zero bookings to 80%+ occupancy in 3 months — their Airbnb SEO and listing optimization is genuinely impressive.",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    metricLift: "+80% Occupancy in 90 Days",
  },
  {
    id: "test-2",
    type: "guest",
    author: "David Lim",
    roleOrLocation: "Operations Manager, Singapore (Business Travel)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote:
      "Stayed at the Orange County apartment for 2 weeks while overseeing our Jababeka plant. The location is perfect, the apartment felt like a hotel suite, and KingHouse's WhatsApp support was instant. Will rebook.",
    propertyName: "Skyline Luxury at Orange County",
  },
  {
    id: "test-3",
    type: "owner",
    author: "Sari Wijaya",
    roleOrLocation: "Owner, Sky House Tangerang",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote:
      "I was skeptical at first, but the team's photography and copywriting completely changed how guests perceive our humble room. Rating jumped from 4.6 to 4.9 and bookings are now fully automated.",
    propertyName: "Sky House • Hotel-Style Bed + IKEA 5min",
    metricLift: "4.6 → 4.9 Rating",
  },
  {
    id: "test-4",
    type: "guest",
    author: "Ayu Pramesti",
    roleOrLocation: "Marketing Director, Jakarta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote:
      "Booked the Jagakarsa house for our team offsite — 10 colleagues, 5 days. The garden was perfect for morning sessions, the kitchen handled our catering, and the house was spotless on arrival. Effortless.",
    propertyName: "Versatile House With Beautiful Garden Beyond",
  },
]

// ─── MANAGEMENT TIERS ─────────────────────────────────────────────────────────

export const MANAGEMENT_TIERS: ManagementTier[] = [
  {
    id: "exclusive-marketing",
    name: "Exclusive Marketing",
    subtitle: "High-yield Airbnb distribution & revenue optimization for self-operating owners",
    feePercentage: 15,
    feeNote: "of gross rental revenue (performance-based)",
    description:
      "Designed for property owners who handle their own cleaning and operations, but want KingHouse's Airbnb SEO expertise, dynamic pricing, and professional listing management to maximize bookings.",
    idealFor: "Owners with existing cleaning support who want maximum Airbnb revenue without full management.",
    popular: false,
    features: [
      { title: "Professional photography & editorial listing copy", included: true, highlight: true },
      { title: "Airbnb SEO optimization (title, description, keywords)", included: true, highlight: true },
      { title: "Real-time dynamic pricing & competitor analysis", included: true },
      { title: "24/7 multilingual guest communication & vetting", included: true },
      { title: "Automated payment processing & damage protection", included: true },
      { title: "Monthly revenue & occupancy reporting dashboard", included: true },
      { title: "Turnkey housekeeping & linen management", included: false },
      { title: "Preventive maintenance coordination", included: false },
      { title: "Dedicated on-site check-in host", included: false },
      { title: "Guest concierge & local recommendations service", included: false },
    ],
  },
  {
    id: "full-management",
    name: "Full Asset Management",
    subtitle: "Completely hands-off, 360° turnkey operations for maximum ROI",
    feePercentage: 20,
    feeNote: "of gross rental revenue (zero-effort, fully managed)",
    badge: "Most Popular",
    description:
      "Our complete management model — we handle everything from Airbnb listing to guest checkout, cleaning coordination, maintenance, and monthly financial reporting. You receive passive income without lifting a finger.",
    idealFor: "Busy professionals and investors who want true passive income from their Jabodetabek property.",
    popular: true,
    features: [
      { title: "Professional photography & editorial listing copy", included: true, highlight: true },
      { title: "Airbnb SEO optimization (title, description, keywords)", included: true, highlight: true },
      { title: "Real-time dynamic pricing & competitor analysis", included: true },
      { title: "24/7 multilingual guest communication & vetting", included: true },
      { title: "Automated payment processing & damage protection", included: true },
      { title: "Monthly revenue & occupancy reporting dashboard", included: true },
      { title: "Turnkey housekeeping & fresh linen for every guest", included: true, highlight: true },
      { title: "Preventive maintenance & rapid repair coordination", included: true, highlight: true },
      { title: "Dedicated check-in coordination & key management", included: true, highlight: true },
      { title: "Guest concierge & local recommendations service", included: true, highlight: true },
    ],
  },
]

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    location: "Jagakarsa, Jakarta Selatan",
    image:
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    period: "90-Day Onboarding Performance",
    beforeMetrics: {
      occupancyRate: 28,
      monthlyRevenueIdr: 12000000,
      guestRating: 4.5,
    },
    afterMetrics: {
      occupancyRate: 82,
      monthlyRevenueIdr: 38000000,
      guestRating: 4.9,
      ebitdaMargin: 44,
    },
    summary:
      "Repositioned from an under-priced family home listing to a sought-after Jagakarsa group stay destination. Editorial photography, keyword-optimized copy, and dynamic weekend pricing tripled monthly revenue in 90 days.",
    quote: {
      text: "I had no idea our house could earn this much. KingHouse basically turned a burden into a business.",
      author: "Budi Santoso (Owner)",
    },
  },
  {
    id: "cs-2",
    propertyName: "Skyline Luxury at Orange County",
    location: "Cikarang Selatan, Bekasi",
    image:
      "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_PemandanganView.jpeg",
    period: "6-Month Revenue Review",
    beforeMetrics: {
      occupancyRate: 35,
      monthlyRevenueIdr: 8000000,
      guestRating: 4.6,
    },
    afterMetrics: {
      occupancyRate: 78,
      monthlyRevenueIdr: 22000000,
      guestRating: 4.83,
      ebitdaMargin: 41,
    },
    summary:
      "Targeted the high-demand expat-executive segment working in Cikarang's industrial zones. Premium positioning, Nespresso amenity add, and direct Jababeka/EJIP corporate keyword targeting doubled occupancy.",
    quote: {
      text: "The apartment now pays its own mortgage — and then some. The ROI has been remarkable.",
      author: "Property Owner, Cikarang",
    },
  },
]

// ─── TRUST PARTNERS ───────────────────────────────────────────────────────────

export const TRUST_PARTNERS = [
  { name: "Airbnb", badge: "Managed Host 2026", logoText: "Airbnb" },
  { name: "Booking.com", badge: "Coming Soon", logoText: "Booking.com" },
  { name: "Agoda", badge: "Coming Soon", logoText: "Agoda" },
  { name: "Google", badge: "Google Verified Business", logoText: "Google" },
  { name: "WhatsApp Business", badge: "Verified Business", logoText: "WhatsApp" },
]

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────

const AUTHOR_KINGHOUSE = {
  name: "KingHouse Team",
  role: "Property Management Experts",
  avatar:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "5 Cara Memaksimalkan Pendapatan Airbnb di Jagakarsa, Jakarta Selatan",
    slug: "maksimalkan-pendapatan-airbnb-jagakarsa",
    excerpt:
      "Jagakarsa menyimpan potensi Airbnb yang masih under-the-radar. Dengan strategi SEO listing yang tepat, foto profesional, dan dynamic pricing, properti di sini bisa menghasilkan Rp 30-50 juta per bulan.",
    content: `Jagakarsa adalah salah satu kecamatan paling hijau di Jakarta Selatan — tenang, sejuk, dan semakin diminati tamu yang mencari alternatif menginap di luar hotel berbintang. Namun banyak pemilik properti di sini belum memaksimalkan potensinya di Airbnb.

## 1. Optimalkan Judul Listing dengan Kata Kunci Strategis

Judul Airbnb Anda adalah elemen SEO nomor satu. Hindari judul generik seperti "Rumah Nyaman di Jakarta". Gunakan spesifik: lokasi, keunggulan unik, dan target tamu. Contoh: *"Spacious 5BR Family Home • Private Garden • Quiet Jagakarsa"*.

## 2. Foto Profesional adalah Investasi Wajib

Data Airbnb menunjukkan listing dengan foto profesional mendapatkan 40% lebih banyak klik. Di Jagakarsa, tonjolkan taman hijau, suasana tenang, dan ruang keluarga yang lapang — elemen yang tidak bisa ditemukan di apartemen tengah kota.

## 3. Dynamic Pricing Sesuai Musim dan Event

Harga flat sepanjang tahun adalah kesalahan terbesar. Naikkan harga 20-35% di akhir pekan, libur nasional, dan musim liburan (Juni-Juli, Desember). Gunakan tools seperti PriceLabs atau biarkan KingHouse mengelolanya.

## 4. Targetkan Segmen Tamu yang Tepat

Rumah besar di Jagakarsa cocok untuk: arisan keluarga, team offsite perusahaan, ulang tahun kelompok, dan keluarga besar yang berlibur. Buat deskripsi yang berbicara langsung pada segmen ini.

## 5. Respons Cepat = Lebih Banyak Booking

Airbnb memprioritaskan listing dengan response rate tinggi (>90%) dan response time <1 jam. Aktifkan notifikasi atau gunakan layanan manajemen seperti KingHouse yang merespons tamu 24/7.`,
    category: "owner-tips",
    publishedAt: "2026-07-15",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    tags: ["jagakarsa", "airbnb", "tips owner", "jakarta selatan", "optimasi listing"],
    seoKeywords: [
      "airbnb jagakarsa",
      "sewa rumah jagakarsa",
      "properti airbnb jakarta selatan",
      "tips listing airbnb indonesia",
    ],
    readTime: 5,
    featured: true,
  },
  {
    id: "blog-2",
    title: "Mengapa Cikarang Adalah Hidden Gem Investasi Properti Airbnb di Indonesia",
    slug: "cikarang-hidden-gem-investasi-airbnb",
    excerpt:
      "Puluhan ribu ekspatriat bekerja di kawasan industri Cikarang setiap tahun — dan mereka membutuhkan akomodasi berkualitas. Pelajari mengapa ROI Airbnb di Cikarang bisa melampaui lokasi populer seperti Bali.",
    content: `Cikarang Selatan adalah pusat industri terbesar di Asia Tenggara. Kawasan ini menampung lebih dari 4,000 perusahaan multinasional dengan puluhan ribu ekspatriat yang rotasi setiap 3-12 bulan. Namun stok Airbnb berkualitas di sini masih sangat terbatas.

## Kenapa Cikarang Berbeda dari Destinasi Wisata?

Di destinasi wisata, Anda bersaing dengan ratusan listing. Di Cikarang, segmen ekspatriat korporat hampir tidak punya pilihan selain hotel bisnis yang mahal atau apartemen long-stay yang kaku. Di sinilah peluang Airbnb paling besar.

## Siapa Tamu di Cikarang?

- **Ekspatriat baru** yang belum mendapatkan hunian tetap (stay 1-4 minggu)
- **Tim audit & konsultan** dari perusahaan manufaktur global
- **Teknisi commissioning** dari industri otomotif, elektronik, kimia
- **Keluarga yang menemani** rotasi kerja pasangan

## Apa yang Mereka Cari?

Kenyamanan setara hotel dengan privasi apartemen: dapur lengkap, laundry, WiFi cepat, parkir aman, dan dekat kawasan industri (Jababeka, EJIP, MM2100, KIC).

## ROI yang Kompetitif

Dengan harga sewa Airbnb Rp 400.000–700.000/malam dan occupancy 70-85% dari segmen korporat, sebuah unit apartemen 1BR di Cikarang dapat menghasilkan Rp 18-25 juta bersih per bulan — mengalahkan banyak properti di kota besar.`,
    category: "airbnb-seo",
    publishedAt: "2026-07-28",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    tags: ["cikarang", "investasi properti", "airbnb", "bekasi", "ekspat"],
    seoKeywords: [
      "airbnb cikarang",
      "investasi properti cikarang",
      "sewa apartemen orange county",
      "properti ekspat cikarang bekasi",
    ],
    readTime: 6,
    featured: true,
  },
  {
    id: "blog-3",
    title: "Airbnb SEO: Cara Listing Properti Anda Muncul di Halaman 1 Pencarian",
    slug: "airbnb-seo-tips-halaman-1-pencarian",
    excerpt:
      "Airbnb memiliki algoritma pencarian sendiri yang menentukan mana listing yang ditampilkan. Pelajari faktor-faktor kunci dan cara KingHouse mengoptimalkan setiap listing untuk mendapatkan lebih banyak klik dan booking.",
    content: `Airbnb Search Algorithm (atau yang disebut internal sebagai 'Superhost Algorithm') mempertimbangkan puluhan sinyal untuk menentukan ranking listing. Berikut faktor-faktor yang paling berpengaruh.

## Faktor Utama Airbnb SEO

### 1. Completeness Score (Skor Kelengkapan)
Listing dengan semua field terisi — deskripsi lengkap, foto minimal 20, semua amenitas terdaftar, house rules jelas — mendapat boost signifikan di ranking.

### 2. Response Rate & Response Time
Host dengan response rate >90% dan response time <1 jam mendapat label "Responsive" dan diprioritaskan Airbnb. Ini adalah faktor yang paling mudah dikontrol.

### 3. Acceptance Rate
Sering menolak permintaan booking? Algoritma akan menurunkan ranking Anda. Kuncinya: hanya tampilkan ketersediaan yang memang Anda siap terima.

### 4. Review Score dan Volume
Rating tinggi (>4.8) dan jumlah review yang banyak adalah social proof terkuat. Minta tamu untuk memberikan review setelah checkout — jangan tunggu mereka ingat sendiri.

### 5. Pricing Competitiveness
Listing dengan harga terlalu jauh di atas rata-rata pasar lokal cenderung mendapat lebih sedikit klik. Dynamic pricing yang dikalibrasi ke pasar sangat penting.

### 6. Instant Book
Listing dengan fitur Instant Book (tidak memerlukan konfirmasi host) mendapat prioritas tampilan di hasil pencarian.

## Bagaimana KingHouse Mengoptimalkan SEO Airbnb Klien Kami

Kami melakukan audit SEO menyeluruh untuk setiap properti baru: judul dan deskripsi berbasis riset kata kunci, foto profesional dengan caption SEO-friendly, kelengkapan 100%, dan setup Instant Book. Hasilnya rata-rata peningkatan tayangan 3-5x dalam 30 hari pertama.`,
    category: "airbnb-seo",
    publishedAt: "2026-08-05",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    tags: ["airbnb seo", "optimasi listing", "algoritma airbnb", "tips host"],
    seoKeywords: [
      "cara optimasi listing airbnb",
      "airbnb seo indonesia",
      "tips host airbnb",
      "cara naik ranking airbnb",
    ],
    readTime: 7,
    featured: false,
  },
  {
    id: "blog-4",
    title: "Tangerang vs BSD City: Mana Lokasi Airbnb dengan ROI Lebih Tinggi?",
    slug: "tangerang-vs-bsd-city-roi-airbnb",
    excerpt:
      "Tangerang dan BSD City sama-sama menjanjikan untuk investasi Airbnb — tapi dengan profil tamu yang berbeda. Analisis lengkap occupancy rate, harga rata-rata, dan tipe properti terbaik di masing-masing lokasi.",
    content: `Wilayah Tangerang Raya mencakup berbagai micromarket dengan karakteristik yang sangat berbeda. Dua yang paling sering dibandingkan oleh investor Airbnb adalah **Tangerang Kota** (area Pinang, Cipondoh) dan **BSD City** (Serpong, Tangerang Selatan).

## Tangerang Kota (Pinang, Cipondoh)

**Profil Tamu Dominan**: Pelancong bisnis ke kawasan industri Tangerang, keluarga yang mengunjungi sanak saudara, wisatawan transit Bandara Soetta.

**Harga Rata-rata**: Rp 250.000–450.000/malam (tipe kamar/studio)

**Occupancy**: 65-75% (konsisten sepanjang tahun)

**Keunggulan**: Dekat Bandara Soetta (30 menit), harga sewa unit rendah → margin lebih tinggi, demand dari segmen bisnis yang stabil.

## BSD City (Serpong, Tangerang Selatan)

**Profil Tamu Dominan**: Profesional muda, keluarga urban, wisatawan yang menghadiri event di ICE BSD, keluarga yang mengunjungi mahasiswa.

**Harga Rata-rata**: Rp 400.000–800.000/malam (apartment/townhouse)

**Occupancy**: 60-70% (lebih tinggi di akhir pekan dan musim event)

**Keunggulan**: Demand premium lebih tinggi, properti modern, IKEA dan mall world-class sebagai anchor.

## Kesimpulan

Tangerang Kota lebih cocok untuk **investor value** yang mencari yield konsisten dengan modal lebih rendah. BSD City lebih cocok untuk **investor premium** yang mengejar harga malam lebih tinggi dan profil tamu lebih premium. KingHouse mengelola properti di kedua area — hubungi kami untuk analisis properti Anda.`,
    category: "revenue-management",
    publishedAt: "2026-08-10",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=85",
    tags: ["tangerang", "bsd city", "investasi airbnb", "analisis pasar", "roi properti"],
    seoKeywords: [
      "airbnb tangerang",
      "airbnb bsd city",
      "investasi properti tangerang selatan",
      "roi airbnb jabodetabek",
    ],
    readTime: 6,
    featured: false,
  },
  {
    id: "blog-5",
    title: "Panduan Lengkap: Cara Sewa Apartemen Jakarta Barat via Airbnb",
    slug: "panduan-sewa-apartemen-jakarta-barat-airbnb",
    excerpt:
      "Jakarta Barat — khususnya Palmerah — menawarkan akomodasi Airbnb yang strategis: dekat stasiun KRL, pusat bisnis Senayan, dan Grand Indonesia. Ini panduan lengkap untuk tamu yang ingin menginap di sini.",
    content: `Jakarta Barat sering diabaikan sebagai destinasi Airbnb — padahal kawasan Palmerah dan sekitarnya menawarkan posisi yang sangat strategis untuk wisatawan bisnis dan keluarga yang berkunjung ke Jakarta.

## Mengapa Palmerah?

Palmerah terletak di perbatasan Jakarta Barat dan Pusat — memberikan akses mudah ke:
- **Senayan & SCBD**: 10-15 menit via Tol Dalam Kota
- **Sudirman-Thamrin CBD**: 15-20 menit
- **Tanah Abang**: 10 menit
- **Palmerah KRL Station**: jalan kaki 5-10 menit

## Apa yang Harus Diperhatikan Saat Booking di Airbnb Jakarta Barat?

### 1. Pilih Listing dengan Foto Profesional
Foto adalah indikator langsung kualitas manajemen properti. Listing dengan foto amatir sering mencerminkan standar kebersihan dan pelayanan yang tidak konsisten.

### 2. Cek Lokasi Persisnya di Map
"Jakarta Barat" cukup luas. Pastikan listing benar-benar di kawasan yang dekat dengan tujuan Anda — bukan di pinggiran yang membutuhkan 30+ menit perjalanan ke pusat.

### 3. Baca Ulasan Tamu Sebelumnya
Fokus pada ulasan yang menyebut kebersihan, respons host, dan keakuratan deskripsi. Ini tiga faktor yang paling menentukan kenyamanan stay Anda.

### 4. Konfirmasi Check-in & Parking
Tanyakan prosedur check-in (self check-in atau perlu bertemu host?) dan ketersediaan parkir sebelum booking — terutama jika membawa kendaraan.

## KingHouse-Managed Properties di Jakarta Barat

Bright & Airy Apartment kami di Palmerah dikelola dengan standar hotel: foto profesional, deskripsi akurat, respons 24/7, dan kebersihan terverifikasi. Booking langsung melalui Airbnb untuk harga terbaik.`,
    category: "jabodetabek-guide",
    publishedAt: "2026-08-14",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85",
    tags: ["jakarta barat", "palmerah", "airbnb", "panduan tamu", "sewa apartemen"],
    seoKeywords: [
      "airbnb jakarta barat",
      "sewa apartemen palmerah",
      "airbnb dekat senayan",
      "penginapan jakarta barat murah",
    ],
    readTime: 5,
    featured: false,
  },
  {
    id: "blog-6",
    title: "Dari 28% ke 82% Occupancy: Kisah Sukses Rumah di Jagakarsa",
    slug: "kisah-sukses-jagakarsa-occupancy-82-persen",
    excerpt:
      "Bagaimana sebuah rumah keluarga biasa di Jagakarsa berhasil meraih occupancy 82% dalam 90 hari pertama bersama KingHouse? Ini adalah studi kasus lengkap transformasi listing Airbnb.",
    content: `Pak Budi mendekati KingHouse dengan frustrasi. Rumah 5 kamarnya di Jagakarsa sudah terdaftar di Airbnb selama 8 bulan — namun occupancy-nya stagnan di 28%, jauh di bawah potensinya.

## Masalah yang Ditemukan

Setelah audit menyeluruh, kami menemukan lima masalah utama:

1. **Foto amatir** yang gelap dan tidak merepresentasikan luas rumah sebenarnya
2. **Judul generik**: "Rumah Bagus di Jakarta" tanpa keyword spesifik
3. **Deskripsi dangkal** tanpa menyebut kapasitas, fasilitas, atau keunggulan lokasi
4. **Harga flat** Rp 750.000/malam sepanjang tahun — terlalu murah di weekend, terlalu mahal di weekday
5. **Response time 6-12 jam** membuat Airbnb menurunkan ranking listing

## Apa yang Kami Lakukan

### Minggu 1: Audit & Repositioning
Kami memotret ulang seluruh properti dengan kamera profesional dan natural light. 24 foto mencakup setiap sudut: taman, dapur, semua kamar, ruang tamu, dan area parkir.

### Minggu 2: Listing Overhaul
Judul baru: *"Spacious 5BR Family Home • Lush Private Garden • Quiet Jagakarsa, South Jakarta"*

Deskripsi baru menyasar segmen keluarga besar, arisan, dan team offsite — lengkap dengan jarak ke toll, mall, dan stasiun MRT terdekat.

### Minggu 3: Pricing Strategy
Implementasi dynamic pricing: Rp 1.200.000–1.800.000/malam (weekday vs weekend vs peak holiday). Ini meningkatkan average nightly rate dari Rp 750K ke Rp 1.45 juta.

### Ongoing: 24/7 Guest Communication
Tim KingHouse merespons semua inquiry dalam <30 menit, meningkatkan response rate ke 98%.

## Hasil Setelah 90 Hari

- Occupancy: **28% → 82%**
- Monthly Revenue: **Rp 12 juta → Rp 38 juta**
- Average Rating: **4.5 → 4.9**
- Response Rate: **62% → 98%**

*"Saya tidak menyangka bisa secepat ini. KingHouse benar-benar mengubah cara pandang saya tentang properti sebagai aset."* — Pak Budi, Owner`,
    category: "owner-tips",
    publishedAt: "2026-08-18",
    author: AUTHOR_KINGHOUSE,
    heroImage:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1600&q=85",
    tags: ["studi kasus", "occupancy", "jagakarsa", "sukses airbnb", "manajemen properti"],
    seoKeywords: [
      "studi kasus airbnb jagakarsa",
      "meningkatkan occupancy airbnb",
      "manajemen properti jakarta",
      "kinghouse property management",
    ],
    readTime: 8,
    featured: true,
  },
]

// ─── EVENTS & WEDDINGS ────────────────────────────────────────────────────────

export const VILLA_EVENTS: VillaEvent[] = [
  {
    id: "event-1",
    propertyId: "villa-1",
    propertySlug: "versatile-house-jagakarsa",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    title: "Private Garden Wedding & Intimate Celebration",
    slug: "garden-wedding-jagakarsa",
    category: "wedding",
    tagline: "An intimate garden wedding in the heart of South Jakarta's greenest enclave",
    description:
      "The lush private garden of our Jagakarsa property creates a magical backdrop for intimate weddings and akad nikah ceremonies. Surrounded by tropical greenery, with space for up to 50 seated guests, this is South Jakarta's best-kept secret for a private, garden-style celebration. No venue rental markup — book the entire home and garden as one.",
    maxCapacity: 50,
    heroImage:
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    gallery: [
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
      "/properties/versatile-house/VersatileHouse_LivingRoom_Lounge.jpg",
      "/properties/versatile-house/VersatileHouse_DiningRoom_Chandelier.jpg",
    ],
    packages: [
      {
        name: "Intimate Garden Akad",
        description: "Perfect for small akad nikah ceremonies of up to 30 guests",
        priceIdr: 5000000,
        priceNote: "includes 1-night property stay + garden setup",
        includes: [
          "Full property access (12 pax overnight)",
          "Garden ceremony area setup (30 chairs, floral arch)",
          "Sound system for MC and music",
          "3-hour photographer coordination area",
          "Bridal preparation room",
          "Catering coordination (bring your own caterer)",
          "Parking for 6 cars",
        ],
      },
      {
        name: "Full Garden Wedding",
        description: "Complete garden wedding experience for up to 50 guests",
        priceIdr: 9500000,
        priceNote: "includes 2-night stay, full setup, and coordination",
        includes: [
          "Full property access (12 pax, 2 nights)",
          "Garden wedding setup (50 chairs, premium floral backdrop)",
          "Indoor reception area with tables for 30",
          "PA system + wireless microphone",
          "Bridal suite with preparation area",
          "Vendor coordination (catering, MUA, photographer)",
          "Garden lighting setup (fairy lights + standing lamps)",
          "Parking for 10 cars + valet coordination",
          "Day-of KingHouse coordinator",
        ],
      },
    ],
    highlights: [
      "Private 500m² tropical garden — no shared venue",
      "Walking distance from Fatmawati MRT for guests",
      "Air-conditioned indoor backup space for 30 guests",
      "5BR sleeping accommodation for immediate family",
      "No corkage fee for outside catering",
      "Available weekdays and weekends",
    ],
  },
  {
    id: "event-2",
    propertyId: "villa-1",
    propertySlug: "versatile-house-jagakarsa",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    title: "Corporate Team Retreat & Offsite Workshop",
    slug: "corporate-retreat-jagakarsa",
    category: "corporate",
    tagline: "A focused, distraction-free offsite for your team in South Jakarta's green belt",
    description:
      "Escape the office without leaving the city. Our Jagakarsa home provides the ideal setting for team strategy sessions, quarterly reviews, and creative workshops — large enough for 12 participants to stay overnight, with dedicated indoor and outdoor session spaces.",
    maxCapacity: 30,
    heroImage:
      "/properties/versatile-house/VersatileHouse_LivingRoom_Lounge.jpg",
    gallery: [
      "/properties/versatile-house/VersatileHouse_LivingRoom_Lounge.jpg",
      "/properties/versatile-house/VersatileHouse_DiningRoom_Chandelier.jpg",
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    ],
    packages: [
      {
        name: "Day Offsite",
        description: "Full-day workshop package for teams of up to 20 (no overnight)",
        priceIdr: 3500000,
        priceNote: "8:00 AM – 8:00 PM, up to 20 attendees",
        includes: [
          "Full property access (day use)",
          "Indoor meeting area with whiteboard",
          "Garden breakout session area",
          "High-speed WiFi (100 Mbps)",
          "Coffee & tea station",
          "Parking for 8 cars",
          "2x projector screen setup",
        ],
      },
      {
        name: "2-Day Residential Offsite",
        description: "Overnight retreat package for teams of up to 12 participants",
        priceIdr: 7500000,
        priceNote: "1 night stay, full-day sessions both days",
        includes: [
          "Full property access (2 days, 1 night)",
          "12 overnight accommodation spots",
          "Indoor & outdoor session areas",
          "Whiteboard, projector, HDMI setup",
          "Morning yoga or team game facilitation (optional +Rp 500K)",
          "Full kitchen for self-catering or catering order",
          "High-speed WiFi (100 Mbps)",
          "Parking for 10 cars",
        ],
      },
    ],
    highlights: [
      "Quiet residential setting — no hotel lobby distractions",
      "Indoor + outdoor session flexibility",
      "Kitchen for self-catering or order catering in",
      "5 separate rooms for breakout groups",
      "30 minutes from Jakarta CBD via Toll",
      "Invoice & receipt available for corporate reimbursement",
    ],
  },
  {
    id: "event-3",
    propertyId: "villa-1",
    propertySlug: "versatile-house-jagakarsa",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    title: "Birthday & Milestone Celebration Party",
    slug: "birthday-celebration-jagakarsa",
    category: "birthday",
    tagline: "Celebrate life's biggest moments in a private garden setting, your way",
    description:
      "Why rent an overpriced venue when you can have an entire private home and garden for your party? Our Jagakarsa property is the perfect setting for milestone birthdays, graduation celebrations, and family reunions — with full indoor and outdoor flexibility.",
    maxCapacity: 40,
    heroImage:
      "/properties/versatile-house/VersatileHouse_DiningRoom_Chandelier.jpg",
    gallery: [
      "/properties/versatile-house/VersatileHouse_DiningRoom_Chandelier.jpg",
      "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
      "/properties/versatile-house/VersatileHouse_LivingRoom_Lounge.jpg",
    ],
    packages: [
      {
        name: "Garden Party",
        description: "Private garden party for up to 40 guests (day or evening)",
        priceIdr: 2500000,
        priceNote: "5-hour event window, garden + indoor access",
        includes: [
          "Full garden & indoor access (5 hours)",
          "Garden table & chair setup for 40",
          "Bluetooth speaker system",
          "Outdoor lighting for evening events",
          "Parking for 8 cars",
          "Dedicated KingHouse contact for day-of support",
        ],
      },
      {
        name: "Sleepover Celebration",
        description: "Extended overnight birthday package — party + stay for inner circle",
        priceIdr: 5500000,
        priceNote: "includes 1-night stay for 12 guests + event setup",
        includes: [
          "Full property access (overnight, 12 guests)",
          "Garden event setup",
          "Kitchen access for catering or home cooking",
          "Sound system",
          "Outdoor lighting setup",
          "Parking for 10 cars",
          "Breakfast coordination (optional +Rp 300K)",
        ],
      },
    ],
    highlights: [
      "Private — no strangers sharing your venue",
      "No corkage, no venue markup on catering",
      "BYO decorator or use our vendor network",
      "Garden + indoor combined for 40 guests",
      "Overnight stay for up to 12 close friends/family",
      "Easy access from South & Central Jakarta",
    ],
  },
]
