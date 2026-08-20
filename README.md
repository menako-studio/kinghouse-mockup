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

### 💼 For Property Owners & Pitching (CMS Dashboard & Admin Auth)
- **Production-Grade CMS Authorization & Security (`/login`, `/dashboard`)**:
  - Edge Runtime middleware route protection intercepts all `/dashboard/:path*` traffic.
  - Web Crypto HMAC-SHA256 session token verification with zero external dependencies.
  - HttpOnly, SameSite=Lax, Secure session cookie (`kinghouse_admin_session`, 7-day max-age).
  - Editorial Dark Login Portal (`/login`) with demo autofill helper.
  - Defense-in-depth Server Component session check in `app/dashboard/layout.tsx`.
- **Decoupled Layout & Independent Navigation (`SiteShell` & `DashboardHeader`)**:
  - `SiteShell` ensures public Header and Footer do not overlap or collide with administrative CMS routes.
  - `DashboardHeader` features dynamic breadcrumbs, live Airbnb iCal sync status, interactive System Alerts drawer, and Admin Profile Modal.
- **Complete CMS Management Suite**:
  - **Overview (`/dashboard`)**: Multi-channel OTA status, occupancy KPIs, and quick shortcuts.
  - **Properties (`/dashboard/properties`)**: Portfolio inventory and unit controls.
  - **SEO Manager (`/dashboard/seo`)**: Interactive per-property Meta Title & Description editor, real-time SERP preview, and SEO health checklist.
  - **Blog Manager (`/dashboard/blog`)**: Editorial CMS article repository with Google SEO quality score audit and publication controls.
  - **Bookings Hub (`/dashboard/bookings`)**: Multi-channel reservation table and active iCal calendar sync indicators.
  - **Revenue Analytics (`/dashboard/analytics`)**: Financial yield intelligence (ADR, RevPAR, Occupancy rate) and sub-area performance breakdown.
  - **Settings & Profile (`/dashboard/settings`)**: Admin profile credentials, session security inspect, and master iCal calendar feed exporter.
- **Dual Management Tiers**: Transparent comparison between **Exclusive Marketing (15%)** and **Full Asset Management (20%)**.
- **Audited Performance Metrics**: Real before/after case studies displaying occupancy rate lifts (28% → 82%) and revenue growth.
- **Property Audit Request Flow**: Interactive multi-step form with direct WhatsApp dispatch.

### 🌐 Universal English Localization
- Clean, high-end editorial English localization applied across all pages and CMS modules for consistent luxury hospitality presentation.

### 🚀 Search Engine Optimization (SEO) Maximization
- **Organization & LocalBusiness Schema**: Injected sitewide with accurate geo-coordinates.
- **VacationRental & FAQPage Schema**: Per-property rich snippets with real pricing, amenities, and FAQ.
- **BreadcrumbList Schema**: Structured navigational hierarchy for search engines.
- **Location Landing Pages (`/locations/[area]`)**: Dedicated local SEO pages for Jagakarsa, Tangerang, Palmerah, and Cikarang with TouristDestination schema.
- **Editorial Blog System (`/blog`)**: 6 targeted SEO articles with BlogPosting schema.

---

### 🎨 Sana Labs Summer-2026 Aesthetic Design System
- **Ultra-Refined Minimalist Aesthetics**: Inspired by [Sana Labs Summer-2026](https://sanalabs.com/products/sana-learn/summer-2026), combining warm editorial beige (`#F8F7F4`), deep obsidian dark (`#0A090D`), radiant champagne gold (`#C5A880`), and glowing coral-plum ambient meshes (`#FF3B70` / `#2D0C1A`).
- **Glassmorphism & Hairline Precision**: Frosted glass panels (`backdrop-blur-xl`), hairline border accents (`border-white/[0.08]` and `border-[#EBE8E2]`), and subtle inner shadow glow.
- **Silky Micro-Interactions**: Ambient radial gradient pulses, smooth hover card elevation physics, and live indicator pings.
- **Sana-Styled `/login` Portal**: Mesmerizing dark obsidian atmosphere with glowing ambient orbs, glass pill badge, and 1-click credential auto-fill.
- **Sana-Styled `/dashboard` Suite**: Clean luxury workspace with glowing navigation capsules, live iCal sync badge, and editorial table layouts.

### 📞 Official Corporate Contact
- **WhatsApp Concierge & Desk**: `082123933218` / `+62 821-2393-3218` (`https://wa.me/6282123933218`)
- **Corporate Email**: `ptkreasiusmangosse@gmail.com`

---

## 🔐 Administrative Authentication & Credentials

The CMS Dashboard is protected and only accessible with administrative credentials.

### Default Admin Credentials:
| Field | Default Value | Notes |
| :--- | :--- | :--- |
| **Login URL** | `/login` | Redirects to `/dashboard` upon successful authorization |
| **Admin Email** | `ptkreasiusmangosse@gmail.com` | Configurable via `ADMIN_EMAIL` |
| **Admin Password** | `KingHouse2026!Admin` | Configurable via `ADMIN_PASSWORD` |

### Environment Variables:
```env
# Optional overrides for production deployment
ADMIN_EMAIL=ptkreasiusmangosse@gmail.com
ADMIN_PASSWORD=KingHouse2026!Admin
AUTH_SECRET=kinghouse-hospitality-production-secret-key-2026-secure-jwt-hmac-token
```


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
npm run lint
```

---

## 🏗️ Project Architecture & Available Routes

```
kinghouse-mockup/
├── app/
│   ├── api/auth/                     # Auth REST API handlers (login, logout, me)
│   ├── blog/                         # Blog index & dynamic [slug] article pages
│   ├── dashboard/                    # Protected CMS & SEO pitch dashboard
│   │   ├── analytics/                # Financial intelligence (ADR, RevPAR, Occupancy)
│   │   ├── blog/                     # CMS blog post editor & SEO content scores
│   │   ├── bookings/                 # iCal synchronization hub & reservation ledger
│   │   ├── properties/               # Property portfolio management view
│   │   ├── seo/                      # Interactive SEO editor & SERP preview
│   │   ├── settings/                 # Admin profile, session security & iCal export
│   │   └── layout.tsx                # Dashboard layout with top bar & dark sidebar
│   ├── events/                       # Garden wedding & event package pages
│   ├── locations/[area]/             # Local SEO landing pages (Jagakarsa, Cikarang, etc.)
│   │   └── villas/[slug]/            # Villa detail page with Bento gallery & schema
│   ├── login/                        # Editorial Admin Login Portal
│   ├── owner-services/               # Management tiers, ROI metrics & audit form
│   ├── villas/                       # Catalog directory with filterable areas
│   ├── layout.tsx                    # Root shell with SiteShell & Organization JSON-LD
│   └── page.tsx                      # Dual-path high-conversion homepage
├── components/
│   ├── bento/                        # Bento gallery & fullscreen lightbox modal
│   ├── blog/                         # Editorial blog card & layout components
│   ├── dashboard/                    # Sidebar, dashboard-header, stat cards, SEO editor
│   ├── home/                         # Hero slider, search bar, trust proof
│   ├── layout/                       # Header navigation, footer & SiteShell layout isolation
│   ├── owner/                        # Tiered pricing, metrics & lead audit form
│   ├── ui/                           # Radix/CVA UI primitives (button, badge, input)
│   └── villas/                       # Amenities, booking sidebar, map, villa cards
├── lib/
│   ├── auth.ts                       # HMAC Web Crypto session signing & cookie helpers
│   ├── auth-server.ts                # Server Component session retrieval helper
│   ├── constants.ts                  # SITE_CONFIG, MANAGED_AREAS, SEO categories
│   ├── data.ts                       # Real Airbnb properties, blog posts, events
│   ├── types.ts                      # Universal domain TypeScript definitions
│   └── utils.ts                      # VacationRental schema generator, currency formatters
└── middleware.ts                     # Edge runtime route protection for /dashboard
```

---

## 📄 Available Routes

- `/` — Homepage with Dual Pathway (Guest vs Owner)
- `/login` — Editorial Admin Login Portal
- `/villas` — Catalog with area and capacity filtering
- `/locations/[area]/villas/[slug]` — Dynamic Editorial Property Page with Bento Lightbox & Sticky Booking
- `/locations/[area]` — Local Area SEO Landing Pages (Jagakarsa, Tangerang, Palmerah, Cikarang)
- `/blog` — Blog Index with category filters and featured post hero
- `/blog/[slug]` — Individual Blog Article with BlogPosting JSON-LD and related posts
- `/events` — Events & Garden Wedding Overview
- `/events/[slug]` — Individual Event Package with package selection and WhatsApp ordering
- `/dashboard` — Multi-Channel Overview KPI Dashboard (Protected)
- `/dashboard/properties` — Property Portfolio Management View (Protected)
- `/dashboard/seo` — Interactive SEO Manager & Live Google SERP Preview (Protected)
- `/dashboard/blog` — Editorial Content Manager & SEO Quality Score (Protected)
- `/dashboard/bookings` — Distribution Calendar & Airbnb iCal Sync (Protected)
- `/dashboard/analytics` — Revenue, RevPAR & Occupancy Intelligence (Protected)
- `/dashboard/settings` — Admin Profile, Session Security & API Config (Protected)
- `/owner-services` — Property Management Tiers (15% vs 20%), Audit Request Form & Case Studies
- `/about` — Heritage, Operational Footprint & Leadership Team
- `/contact` — Direct Inquiry & WhatsApp Concierge Desk
- `/api/auth/login` — POST admin login handler
- `/api/auth/logout` — POST admin session clearance handler
- `/api/auth/me` — GET active authenticated admin session

---

## 📝 License

Proprietary — KingHouse Hospitality © 2026. All rights reserved.  
Built by Menako Studio.
