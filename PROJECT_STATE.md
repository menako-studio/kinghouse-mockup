# PROJECT_STATE.md — KingHouse Hospitality Web Platform

> **Single Source of Truth (SSOT)** for AI Coding Agents (Claude 4.6 Sonnet, Gemini 3.7 Flash, Antigravity, etc.).  
> Read this document to understand architectural standards, technical stack, current implementation status, data schemas, and development workflows without rescanning the entire repository.

---

## 1. EXECUTIVE SUMMARY & SCOPE

### 1.1 Core Purpose & Scope
**KingHouse** is an editorial-grade property management, SEO CMS, 100% Free-Tier Hospitality ERP/POS, and dual-path short-stay booking platform focused on **Jabodetabek** (Jagakarsa - Jakarta Selatan, Pinang - Tangerang, Palmerah - Jakarta Barat, and Cikarang Selatan - Bekasi).

The platform serves two primary user personas:
1. **Discerning Guests**: Seeking curated, hotel-standard short-stay accommodations and event venues with rich architectural bento photo galleries, IDR pricing, amenity breakdowns, proximity maps, and seamless Airbnb booking.
2. **Property Owners & Operators**: Managing portfolio yield, occupancy, automated owner revenue statements (15% Standard vs 20% Premium), POS expense tracking, 1-click spreadsheet exports, and OTA 2-way calendar synchronization without any paid third-party API dependencies.

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
| **Framework** | Next.js (App Router) | `16.0.7` (`next dev --turbopack`) | Core fullstack framework & static/dynamic generation |
| **Runtime / Core** | React / React DOM | `19.2.0` | Modern React UI with Server/Client Components |
| **Language** | TypeScript | `^5.0` (Strict mode) | Type safety across schemas, state, and props |
| **Styling** | Tailwind CSS v4 + PostCSS | `@tailwindcss/postcss ^4`, `tailwindcss ^4` | CSS-in-JS utility engine (`@theme inline`) |
| **UI Primitives** | Radix UI Slot, CVA | `class-variance-authority ^0.7.1`, `clsx`, `tailwind-merge` | Headless, accessible components |
| **Animations** | Framer Motion | `^12.23.25` | Fluid micro-interactions and transitions |
| **Icons** | Lucide React | `^0.556.0` | Vector iconography |
| **Validation** | Zod | `^4.4.3` | Runtime schema validation for forms & API payloads |
| **Testing** | Vitest | `^4.1.11` | Automated unit testing for ERP, security, and feeds |
| **Security** | Web Crypto HMAC-SHA256 + Rate Limiter | In-Memory Sliding Window | Edge session protection and brute-force mitigation |
| **Hosting** | Vercel (Hobby Tier) | 100% Free Tier Compatible | Zero external paid API dependencies |

---

## 2. PROJECT STRUCTURE & ROUTES

### 2.1 Complete Directory Tree

```
kinghouse-mockup/
├── app/
│   ├── api/
│   │   ├── auth/                     # Login (with rate-limiting & Zod), logout, me routes
│   │   ├── erp/                      # Dynamic ERP endpoints (reservations, expenses)
│   │   └── ical/[villaSlug]/         # Dynamic RFC 5545 iCal calendar feeds
│   ├── blog/                         # Blog index & article reader with BlogPosting schema
│   ├── dashboard/                    # Hospitality ERP/POS & CMS Suite
│   │   ├── analytics/page.tsx        # Revenue intelligence, POS expense ledger, & print statements
│   │   ├── blog/page.tsx             # Blog article manager
│   │   ├── bookings/page.tsx         # Multi-channel reservations hub with 1-click CSV export
│   │   ├── properties/page.tsx       # Portfolio asset inventory & iCal sync setup wizard
│   │   ├── seo/page.tsx              # Interactive SEO Editor & Live Google SERP preview
│   │   ├── settings/page.tsx         # Admin credentials, security audit, & master feeds
│   │   ├── layout.tsx                # Dashboard layout with dark collapsible sidebar
│   │   └── page.tsx                  # Portfolio KPIs & multi-channel OTA status
│   ├── events/                       # Events & garden wedding venue pages
│   ├── locations/[area]/             # Dynamic area landing pages (TouristDestination schema)
│   ├── login/page.tsx                # Sana Labs styled administrative login portal
│   ├── owner-services/page.tsx       # Tiered fees (15% vs 20%), ROI case studies, audit form
│   ├── villas/                       # Property catalog & single villa editorial detail
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
├── lib/
│   ├── erp/                          # Calculations, types, export engine, seed data
│   │   ├── calculations.ts           # 15% vs 20% fee splits, ADR, RevPAR, owner statements
│   │   ├── export.ts                 # 1-click CSV and printable HTML statements
│   │   ├── initial-data.ts           # Realistic reservations and POS expenses seed
│   │   └── types.ts                  # ERP domain models (Reservation, ExpenseRecord, OwnerStatement)
│   ├── security/
│   │   └── rate-limiter.ts           # Zero-cost in-memory sliding window rate limiter
│   ├── validations/
│   │   └── index.ts                  # Zod validation schemas for forms, APIs, and auth
│   ├── auth.ts                       # HMAC-SHA256 session tokenization
│   ├── constants.ts                  # SITE_CONFIG, MANAGED_AREAS, MANAGEMENT_SERVICES
│   ├── data.ts                       # Real Airbnb properties, 6 blog posts, 3 event packages
│   ├── types.ts                      # Core domain models (Villa, BlogPost, VillaEvent, SeoMeta)
│   └── utils.ts                      # VacationRental schema generator, currency formatters
├── tests/
│   ├── erp-calculations.test.ts      # Automated unit tests for financial math & statement generator
│   ├── ical-feed.test.ts             # Automated unit tests for CSV and calendar feeds
│   └── validation-security.test.ts   # Automated unit tests for Zod schemas & rate limiter
└── middleware.ts                     # Edge security headers & route protection
```

---

## 3. CURRENT STATUS & COMPLETED WORK

### Phase 1.0 - 1.9 (Completed)
- [x] **Core Editorial Hospitality Foundation**: Next.js 16 App Router, React 19, Tailwind v4, Google Fonts (*Playfair Display* & *Plus Jakarta Sans*).
- [x] **Real Property Assets**: 4 real Jabodetabek Airbnb properties with high-res photography galleries and dynamic pricing.
- [x] **SEO Schema Suite**: Organization, LocalBusiness, VacationRental, FAQPage, BreadcrumbList, TouristDestination, BlogPosting, Event JSON-LD schemas.
- [x] **Sana Labs Design System**: Minimalist luxury tokens, ambient glow meshes, frosted glassmorphism, and responsive bento layouts.
- [x] **Official Contact Integration**: Desk & WhatsApp (`082123933218`) and Email (`ptkreasiusmangosse@gmail.com`).

### Phase 2.0 — Production-Ready UMKM Hospitality ERP/POS & Fortified CMS (Completed)
- [x] **Hospitality ERP & Financial Calculation Engine** (`lib/erp/`):
  - Automated management commission fee splits: **15% Standard Full-Service** vs **20% Multi-Channel Premium**.
  - Net Owner Payout calculation with cleaning fee exemptions and operating expense deductions.
  - Granular yield metrics: ADR (Average Daily Rate), RevPAR, and occupancy percentage.
- [x] **POS Operational Expense Ledger** (`app/dashboard/analytics/` & `/api/erp/expenses`):
  - Per-property tracking for PLN tokens, laundry linen, guest amenities, maintenance, and staff costs.
  - Modal quick-entry for on-the-ground operational staff.
- [x] **Non-Tech Operator Friendly UI/UX & 1-Click Exports** (`lib/erp/export.ts`):
  - **1-Click CSV/Excel Download**: Instant spreadsheet generation for reservations and POS expenses.
  - **Printable Owner Payout Statements**: Official A4-formatted report generator with signature boxes and itemized revenue/expense breakdown.
  - Step-by-step modal guides for non-technical villa operators (e.g., Airbnb calendar import wizard).
- [x] **Live Two-Way OTA Synchronization** (`app/api/ical/[villaSlug]/route.ts`):
  - Dynamic RFC 5545 `.ics` calendar feed generation per villa for seamless import into Airbnb, Agoda, and Booking.com.
- [x] **Security Fortification & Runtime Validation** (`lib/security/`, `lib/validations/`, `middleware.ts`):
  - Zero-dependency in-memory sliding window rate limiting on `/api/auth/login` to thwart brute-force attacks.
  - Strict **Zod** schema validation across login, manual reservations, expenses, and SEO metadata.
  - HTTP defense-in-depth headers: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`.
- [x] **Automated Testing Suite (`tests/`, Vitest)**:
  - 12 comprehensive unit tests running and passing across ERP math, Zod schemas, rate limiters, and CSV exports.

---

## 4. VERIFICATION COMMANDS

```bash
# Run automated Vitest test suite
npm test

# Run TypeScript strict type verification
npx tsc --noEmit

# Run Next.js optimized production build
npm run build
```
