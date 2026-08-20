# PROJECT_STATE.md — KingHouse Hospitality Web Platform

> **Single Source of Truth (SSOT)** for AI Coding Agents (Claude 4.6 Sonnet, Gemini 3.7 Flash, Antigravity, etc.).  
> Read this document to understand architectural standards, technical stack, current implementation status, data schemas, and development workflows without rescanning the entire repository.

---

## 1. EXECUTIVE SUMMARY & SCOPE

### 1.1 Core Purpose & Scope
**KingHouse** is an editorial-grade property management, SEO CMS, and dual-path short-stay booking platform focused on **Jabodetabek** (Jagakarsa - Jakarta Selatan, Pinang - Tangerang, Palmerah - Jakarta Barat, and Cikarang Selatan - Bekasi).

The platform serves two primary user personas:
1. **Discerning Guests**: Seeking curated, hotel-standard short-stay accommodations and event venues with rich architectural bento photo galleries, IDR pricing, amenity breakdowns, proximity maps, and seamless Airbnb booking.
2. **Property Owners & Investors**: Pitching client property owners on how KingHouse maximizes occupancy rate (>75-80%) and revenue through editorial photography, keyword-optimized Airbnb SEO, dynamic pricing, and turnkey operations.

### 1.2 Active Managed Properties (Airbnb Host #1470743715397835749)
| # | Property Name | Area / Region | Capacity | Airbnb Room ID | Rating / Reviews |
|---|---|---|---|---|---|
| 1 | Versatile House With Beautiful Garden Beyond | Jagakarsa, Jakarta Selatan | 12 Guests, 5BR, 9 Beds | `45834267` | 4.90 ★ (68 reviews) |
| 2 | Sky House • Hotel-Style Bed + IKEA 5min | Pinang, Tangerang | 2 Guests, 1BR, 1 Bed | `1325106294978348497` | 4.91 ★ (22 reviews) |
| 3 | Bright & Airy Apartment | Palmerah, Jakarta Barat | 2 Guests, 1BR, 1 Bed | `1444158185166882045` | New Listing |
| 4 | Skyline Luxury at Orange County | Cikarang Selatan, Bekasi | 2 Guests, 1BR, 1 Bed | `1691723711820833674` | 4.83 ★ (6 reviews) |

### 1.3 Tech Stack Table

| Category | Technology | Version / Configuration | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.0.7` (`next dev --turbopack`) | Core fullstack framework & static page generation |
| **Runtime / Core** | React / React DOM | `19.2.0` | Modern React UI with Server/Client Components |
| **Language** | TypeScript | `^5.0` (Strict mode) | Type safety across schemas, state, and props |
| **Styling** | Tailwind CSS v4 + PostCSS | `@tailwindcss/postcss ^4`, `tailwindcss ^4` | CSS-in-JS utility engine (`@theme inline`) |
| **UI Primitives** | Radix UI Slot, CVA | `class-variance-authority ^0.7.1`, `clsx`, `tailwind-merge` | Headless, accessible components |
| **Animations** | Framer Motion | `^12.23.25` | Fluid micro-interactions and transitions |
| **Icons** | Lucide React | `^0.556.0` | Vector iconography |
| **Typography** | Playfair Display & Plus Jakarta Sans | `next/font/google` | Editorial serif headings & sans-serif UI body |
| **Structured Data** | Schema.org JSON-LD | VacationRental, Organization, LocalBusiness, FAQPage, BreadcrumbList, BlogPosting, Event, ItemList | Comprehensive Google Rich Results SEO |
| **Hosting** | Vercel (Hobby Tier) | 100% Free Tier Compatible | Zero external paid API dependencies |

---

## 2. PROJECT STRUCTURE & ROUTES

### 2.1 Complete Directory Tree

```
kinghouse-mockup/
├── app/
│   ├── blog/                         # Blog index page
│   │   ├── [slug]/page.tsx           # Individual blog post with BlogPosting JSON-LD
│   │   └── page.tsx                  # Blog catalog with category tabs & featured post
│   ├── dashboard/                    # CMS Dashboard for pitching & management
│   │   ├── properties/page.tsx       # Property portfolio management view
│   │   ├── seo/page.tsx              # Interactive SEO Editor & Live Google SERP preview
│   │   ├── layout.tsx                # Dashboard layout with dark collapsible sidebar
│   │   └── page.tsx                  # Portfolio KPIs & multi-channel OTA status
│   ├── events/                       # Events & garden wedding venue pages
│   │   ├── [slug]/page.tsx           # Event package detail with Event schema & WhatsApp CTA
│   │   └── page.tsx                  # Events overview categorized by Wedding/Corporate/Party
│   ├── locations/
│   │   └── [area]/                   # Dynamic area landing pages (Jagakarsa, Cikarang, etc.)
│   │       ├── villas/[slug]/page.tsx# Single property editorial detail page
│   │       └── page.tsx              # Area guide with TouristDestination JSON-LD
│   ├── owner-services/page.tsx       # Tiered fees (15% vs 20%), ROI case studies, audit form
│   ├── villas/page.tsx               # Property catalog with area filter pills
│   ├── about/page.tsx                # Company profile & hospitality standards
│   ├── contact/page.tsx              # Contact info & direct WhatsApp concierge
│   ├── globals.css                   # Tailwind v4 theme, variables & scrollbars
│   ├── layout.tsx                    # Root shell with Organization + LocalBusiness JSON-LD
│   └── page.tsx                      # Dual-path high-conversion homepage
├── components/
│   ├── bento/                        # Bento image gallery & lightbox modal
│   ├── blog/                         # BlogCard component (featured & standard variants)
│   ├── dashboard/                    # Dashboard sidebar, stat-card, channel-badge, seo-editor
│   ├── home/                         # Hero slider, search bar, trust proof
│   ├── layout/                       # Sticky header navigation & editorial footer
│   ├── owner/                        # Pricing tables, ROI metrics, lead audit form
│   ├── ui/                           # Badge, button, card, input primitives
│   └── villas/                       # Amenities grid, booking sidebar, map, villa card
└── lib/
    ├── constants.ts                  # SITE_CONFIG, MANAGED_AREAS, MANAGEMENT_SERVICES
    ├── data.ts                       # Real Airbnb properties, 6 blog posts, 3 event packages
    ├── types.ts                      # Domain models (Villa, BlogPost, VillaEvent, SeoMeta)
    └── utils.ts                      # VacationRental schema generator, currency formatters
```

---

## 3. CORE DOMAIN SCHEMAS (`lib/types.ts`)

### 3.1 `Villa` Schema
Represents a managed property in Jabodetabek:
- `id`, `name`, `tagline`, `slug`, `area`, `areaSlug`, `location`
- `propertyType`: `"entire-home" | "private-room" | "entire-apartment" | "villa"`
- `airbnbUrl`, `bookingComUrl?`, `agodaUrl?`
- `rating`, `reviewsCount`, `superhost`, `guestFavorite`
- `price`: `{ usd, idr, cleaningFeeIdr, serviceFeePercent }`
- `capacity`: `{ guests, bedrooms, beds, bathrooms }`
- `gallery`: `Array<{ url, caption, category }>`
- `editorialDescription`: `{ lead, architecturalHighlights, theSpace }`
- `amenities`, `nearbySpots`, `featured`, `architecturalStyle`
- `seoMeta?`: `{ metaTitle, metaDescription, focusKeyword, ogImage, canonicalUrl }`

### 3.2 `BlogPost` Schema
- `id`, `title`, `slug`, `excerpt`, `content`, `category`, `publishedAt`
- `author`: `{ name, role, avatar }`
- `heroImage`, `tags`, `seoKeywords`, `readTime`, `featured`

### 3.3 `VillaEvent` Schema
- `id`, `propertyId`, `propertySlug`, `propertyName`, `title`, `slug`, `category`
- `tagline`, `description`, `maxCapacity`, `heroImage`, `gallery`
- `packages`: `Array<{ name, description, priceIdr, priceNote, includes }>`
- `highlights`: `string[]`

---

## 4. CURRENT STATUS & COMPLETED WORK

### Phase 1.0 & Phase 1.5 (Completed)
- [x] **Constants Modernization**: Replaced stale Jakarta mocks with real Jabodetabek data in `lib/constants.ts` (Commit `c7e38ba`).
- [x] **Data Layer Migration**: Replaced 4 mock Bali villas with 4 real Airbnb properties, added 6 SEO blog posts, 3 event packages in `lib/data.ts` (Commit `907cac1`).
- [x] **SEO Schema Maximization**: Organization + LocalBusiness JSON-LD in `app/layout.tsx`, BreadcrumbList + FAQPage in villa detail page, VacationRental geo coordinates (Commit `50bfda0`).
- [x] **Blog System**: Built `/blog` index with category filtering and `/blog/[slug]` article reader with BlogPosting schema (Commit `597c5c7`).
- [x] **Events & Weddings**: Built `/events` catalog and `/events/[slug]` package booking with Event schema (Commit `b4b6df2`).
- [x] **CMS Dashboard Prototype**: Built `/dashboard`, `/dashboard/seo` (interactive SEO pitch editor with live Google SERP preview), `/dashboard/properties`, and multi-channel badges (Commit `746696d`).
- [x] **Location Landing Pages**: Built `/locations/[area]` for local SEO across 4 areas with TouristDestination schema (Commit `adf7397`).
- [x] **Navigation & Route Polish**: Updated header, footer, hero slider, search bar, catalog, and contact details with real Jabodetabek routes (Commit `8b8f5e4`).

---

## 5. PHASE 2.0 ROADMAP (Future Scope)

The following items are planned for Phase 2.0 when backend infrastructure is added:
1. **Database & Auth Integration**: Supabase / PostgreSQL with NextAuth for property owner portal logins.
2. **Real Multi-Channel OTA Sync**: iCal two-way synchronization with Airbnb, Booking.com, and Agoda APIs.
3. **Payment Gateway Integration**: Midtrans / Xendit integration for direct credit card, QRIS, and bank transfer deposits.
4. **Automated WhatsApp Guest Concierge**: WhatsApp Business Cloud API integration for automated check-in guide dispatches.
