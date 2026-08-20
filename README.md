# KingHouse - Short-Stay Property Management & Hospitality Platform

An editorial-grade property management, SEO CMS, and dual-audience booking platform built with Next.js 16 (Turbopack, React 19), Tailwind CSS v4, TypeScript, and Framer Motion for Greater Jakarta & Jabodetabek (Jagakarsa, Tangerang, Palmerah, Cikarang Selatan).

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0.7-black.svg)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)](https://www.typescriptlang.org/)

---

## 🌟 Key Platform Features

### 🌴 For Discerning Guests & Travelers
- **4 Real Curated Properties**: 
  - *Versatile House With Beautiful Garden Beyond* (Jagakarsa, Jakarta Selatan — 12 guests, 5BR)
  - *Sky House • Hotel-Style Bed + IKEA 5min* (Pinang, Tangerang — 2 guests, 1BR)
  - *Bright & Airy Apartment* (Palmerah, Jakarta Barat — 2 guests, 1BR)
  - *Skyline Luxury at Orange County* (Cikarang Selatan, Bekasi — 2 guests, 1BR)
- **Architectural Bento Gallery**: Dynamic 5-photo bento grid with fullscreen lightbox modal.
- **Dynamic IDR/USD Pricing**: Real-time rate calculation, cleaning fees, and service breakdown.
- **Location Proximity Maps**: Distances and drive times to MRT stations, KRL, industrial estates, and airports.
- **Events & Wedding Packages**: Dedicated garden wedding, corporate retreat, and party packages at the Jagakarsa private garden house.

### 💼 For Property Owners & Pitching (CMS Dashboard)
- **Interactive SEO CMS Dashboard (`/dashboard/seo`)**:
  - Per-property Meta Title & Description editor with real-time character count limits.
  - Live Google Desktop SERP Preview & OpenGraph card preview.
  - Live SEO Health Score checklist.
  - Explainer framework for pitching prospective property owners on how KingHouse drives +280% Airbnb search impressions.
- **Multi-Channel OTA Sync Prototype**: Real-time connection indicators for Airbnb, Booking.com, Agoda, and Direct WhatsApp booking.
- **Dual Management Tiers**: Transparent comparison between **Exclusive Marketing (15%)** and **Full Asset Management (20%)**.
- **Audited Performance Metrics**: Real before/after case studies displaying occupancy rate lifts (28% → 82%) and revenue growth.
- **Property Audit Request Flow**: Interactive multi-step form with direct WhatsApp dispatch.

### 🚀 Search Engine Optimization (SEO) Maximization
- **Organization & LocalBusiness Schema**: Injected sitewide with accurate geo-coordinates.
- **VacationRental & FAQPage Schema**: Per-property rich snippets with real pricing, amenities, and FAQ.
- **BreadcrumbList Schema**: Structured navigational hierarchy for search engines.
- **Location Landing Pages (`/locations/[area]`)**: Dedicated local SEO pages for Jagakarsa, Tangerang, Palmerah, and Cikarang with TouristDestination schema.
- **Editorial Blog System (`/blog`)**: 6 targeted SEO articles in Indonesian & English with BlogPosting schema.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.7 (App Router with Turbopack)
- **UI & Runtime:** React 19.2.0
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS variable tokens
- **Component Primitives:** Radix UI (`@radix-ui/react-slot`), CVA (`class-variance-authority`), `clsx`, `tailwind-merge`
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Typography:** Playfair Display (Serif Editorial) & Plus Jakarta Sans (Sans Body) via `next/font/google`
- **Hosting / Deploy:** 100% Free-Tier Vercel Hobby compatible

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### 2. Installation
```bash
# Clone the repository
git clone <repository-url>
cd kinghouse-mockup

# Install dependencies
npm install
```

### 3. Running Locally
```bash
# Start Turbopack development server
npm run dev

# Open http://localhost:3000
```

### 4. Build & Production Check
```bash
npm run build
```

---

## 🏗️ Project Architecture & Available Routes

```
kinghouse-mockup/
├── app/
│   ├── blog/                         # Blog index & dynamic [slug] article pages
│   ├── dashboard/                    # Multi-channel CMS & SEO pitch dashboard
│   │   ├── properties/               # Property portfolio management view
│   │   └── seo/                      # Interactive SEO editor & SERP preview
│   ├── events/                       # Garden wedding & event package pages
│   ├── locations/[area]/             # Local SEO landing pages (Jagakarsa, Cikarang, etc.)
│   │   └── villas/[slug]/            # Villa detail page with Bento gallery & schema
│   ├── owner-services/               # Management tiers, ROI metrics & audit form
│   ├── villas/                       # Catalog directory with filterable areas
│   ├── layout.tsx                    # Root shell with Header, Footer, and JSON-LD
│   └── page.tsx                      # Dual-path high-conversion homepage
├── components/
│   ├── bento/                        # Bento gallery & fullscreen lightbox modal
│   ├── blog/                         # Editorial blog card & layout components
│   ├── dashboard/                    # Sidebar, stat cards, channel badges, SEO editor
│   ├── home/                         # Hero slider, search bar, trust proof
│   ├── layout/                       # Header navigation & editorial footer
│   ├── owner/                        # Tiered pricing, metrics & lead audit form
│   └── villas/                       # Amenities, booking sidebar, map, villa cards
└── lib/
    ├── constants.ts                  # SITE_CONFIG, MANAGED_AREAS, SEO categories
    ├── data.ts                       # Real Airbnb properties, blog posts, events
    ├── types.ts                      # Universal domain TypeScript definitions
    └── utils.ts                      # VacationRental schema generator, currency formatters
```

---

## 📄 Available Routes

- `/` — Homepage with Dual Pathway (Guest vs Owner)
- `/villas` — Catalog with area and capacity filtering
- `/locations/[area]/villas/[slug]` — Dynamic Editorial Property Page with Bento Lightbox & Sticky Booking
- `/locations/[area]` — Local Area SEO Landing Pages (Jagakarsa, Tangerang, Palmerah, Cikarang)
- `/blog` — Blog Index with category filters and featured post hero
- `/blog/[slug]` — Individual Blog Article with BlogPosting JSON-LD and related posts
- `/events` — Events & Garden Wedding Overview
- `/events/[slug]` — Individual Event Package with package selection and WhatsApp ordering
- `/dashboard` — Multi-Channel Overview KPI Dashboard
- `/dashboard/seo` — Interactive SEO Manager & Live Google SERP Preview (Pitching Feature)
- `/dashboard/properties` — Property Portfolio Management View
- `/owner-services` — Property Management Tiers (15% vs 20%), Audit Request Form & Case Studies
- `/about` — Heritage, Operational Footprint & Leadership Team
- `/contact` — Direct Inquiry & WhatsApp Concierge Desk

---

## 📝 License

Proprietary — KingHouse Hospitality © 2026. All rights reserved.  
Built by Menako Studio.
