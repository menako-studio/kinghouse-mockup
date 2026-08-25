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
| **Typography** | Philosopher & Plus Jakarta Sans | Google Fonts (`next/font/google`) | Luxury editorial headers (`Philosopher`) & ultra-clean UI |
| **Localization** | Multi-Language & Multi-Currency Context | Custom `LocalizationProvider` | Real-time conversions (10 currencies) & i18n (9 languages: JA, ZH, FR, ES, DE, RU, ID, EN) |
| **Styling** | Tailwind CSS v4 + PostCSS | `@tailwindcss/postcss ^4`, `tailwindcss ^4` | Nakula Olive-Khaki (`#8C7F5F`) + KingHouse Gold (`#B8934C`) & Slate |
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
- [x] **Official Contact & Social Integration**: Desk & WhatsApp (`082123933218`), Email (`ptkreasiusmangosse@gmail.com`), and TikTok ([`@kinghouse.id`](https://www.tiktok.com/@kinghouse.id)).

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
  - **Enhanced Legibility**: CMS `/dashboard` and `/login` enforced 100% **Plus Jakarta Sans** (sans-serif) for high data legibility, numbers, and operational table scans.
- [x] **Live Two-Way OTA Synchronization** (`app/api/ical/[villaSlug]/route.ts`):
  - Dynamic RFC 5545 `.ics` calendar feed generation per villa for seamless import into Airbnb, Agoda, and Booking.com.
- [x] **Security Fortification & Runtime Validation** (`lib/security/`, `lib/validations/`, `middleware.ts`):
  - Zero-dependency in-memory sliding window rate limiting on `/api/auth/login` to thwart brute-force attacks.
  - Strict **Zod** schema validation across login, manual reservations, expenses, and SEO metadata.
  - HTTP defense-in-depth headers: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`.
- [x] **Automated Testing Suite (`tests/`, Vitest)**:
  - 12 comprehensive unit tests running and passing across ERP math, Zod schemas, rate limiters, and CSV exports.

### Phase 2.1 — Dynamic Notification Hub, Non-Tech Blog CRUD & Portal Modals (Completed)
- [x] **Dynamic System Alerts & In-App Floating Toasts** (`components/dashboard/notification-context.tsx`, `components/dashboard/dashboard-header.tsx`):
  - Bell notification dropdown with live unread counter badge, pulsing indicator, category-colored tags (Blog, Booking, POS, SEO, Sync, System), mark all as read, and clear alerts.
  - Real-time floating toast notifications triggered automatically on all CRUD actions across dashboard pages.
  - Persistent state in browser storage (`localStorage`).
- [x] **Non-Tech Friendly Editorial Blog CRUD Suite** (`app/dashboard/blog/page.tsx`):
  - Full Create, Read, Update, and Delete flow with auto-slugification, verified property photo picker presets, custom image URL inputs, and real-time SEO score calculation (0–100).
  - Tabbed interface switching between Form Editor and Live Card Preview.
  - 1-click status toggle button (Published vs Draft) directly from the article table.
  - Safe 2-step deletion modal dialog.
- [x] **Seamless React Portal Modal Architecture**:
  - Implemented `createPortal(..., document.body)` across all CMS modals (`/dashboard/blog`, `/dashboard/bookings`, `/dashboard/analytics`) to eliminate containing block transform clipping.
  - Full-viewport dark backdrop blur (`bg-black/60 backdrop-blur-md`) and unclipped elevated shadows (`shadow-[0_25px_70px_rgba(0,0,0,0.35)]`).
  - Fixed header + scrollable body + sticky footer pattern guaranteeing action buttons (Save / Cancel) are always visible.
### Phase 2.3 — Digital Guest Experience & In-Stay Upselling Platform (Vouch-Style) (Completed)
- [x] **Vouch-Style Digital Guest Compendium Suite** (`app/stay/[slug]/page.tsx`, `app/stay/page.tsx`):
  - Dedicated mobile-first digital house manual for all 4 managed Jabodetabek properties.
  - **High-Speed WiFi Card** (`components/stay/wifi-widget.tsx`): 1-click clipboard copy for SSID and Password with toast confirmation.
  - **Smart Lock & Access Guide**: PIN keypad instructions, parking guide, and check-in/out schedules.
  - **Appliance & House Rules Accordion** (`components/stay/guide-section.tsx`): Guides for Daikin AC, Ariston water heater, Samsung Netflix 4K, swimming pool safety, and quiet hours.
  - **Curated Neighborhood Guide**: Verified local food, 24-hour convenience stores, and emergency hospitals with direct Google Maps navigation.
  - **Printable Room Table QR Code Modal** (`components/stay/qr-modal.tsx`): High-res QR code generator for room table displays.
### Phase 2.4 — Little Hotelier Front-Desk Timeline Gantt & 2-Way Inbound iCal Sync (Completed)
- [x] **Front-Desk Visual Timeline Gantt Chart** (`components/dashboard/bookings-gantt-chart.tsx`, `app/dashboard/bookings/page.tsx`):
  - Interactive calendar timeline with property rows for 4 Jabodetabek properties.
  - Multi-channel color-coded reservation bars (Airbnb, Direct WhatsApp, Booking.com, Agoda, Walk-in).
  - Quick popup modal for guest details, nights, gross rent, and 15%/20% owner fee splits.
  - View Switcher toggle: `[📋 List Tabel]` vs `[📅 Visual Timeline Gantt]`.
- [x] **2-Way Inbound iCal Sync Engine** (`lib/ical/parser.ts`, `lib/ical/sync.ts`, `app/api/erp/ical-sync/route.ts`):
  - Zero-dependency RFC 5545 iCalendar `.ics` parser for multi-event OTA calendar feeds.
  - Automatic deduplication and auto-blocking of dates in Supabase `kinghouse.reservations`.
  - Inbound iCal sync modal on `/dashboard/bookings` with real-time feedback toast.
- [x] **Automated Testing Suite (`tests/`, Vitest)**:
  - 19 comprehensive unit tests passing across ERP calculations, 2-way iCal sync parser, guest compendiums, rate limiters, and Zod schemas.

### Phase 2.5 — Nakula Left-Sidebar Filtering & CMS Color Palette Standardization (Completed)
- [x] **Left-Sidebar Catalog & Events Filtering (`app/villas/page.tsx`, `app/events/page.tsx`)**:
  - Restructured layout to match reference designs (`properties.png` and `events.png`) with a sticky left sidebar filter (`w-full lg:w-72`) alongside a 2-column card grid.
  - Interactive multi-select checkboxes for property types & events, datepicker availability, destination dropdowns, room/capacity selectors, and Search with `[APPLY]` and `[CLEAR]` action buttons.
  - **Nakula Editorial 2-Col Grid**: Cards styled with bottom-left `Start From IDR X / Night` (or `/ Event`) price badges, bottom-right `↗` action buttons, meta lines, rating/reviews, `DOWNLOAD BROCHURE` buttons, capacity specs, and pill tags.
  - Retained rich editorial sections on `/villas` (About, Summary Table, Photo Strip, FAQ Accordion) and `/events` (Official Price Matrix and Stay Configurations).
- [x] **Complete CMS Suite & Login Color Palette Harmonization (`app/globals.css`)**:
  - Replaced legacy neon pinks (`#FF3B70`) and non-standard dark purple surfaces with official KingHouse Gold (`#B8934C`, `#DFC58E`), Nakula Khaki (`#8C7F5F`), and Luxury Charcoal (`#19191B`, `#222225`, `#28282B`).
  - Standardized all CMS pages (`/dashboard`, `/dashboard/bookings`, `/dashboard/analytics`, `/dashboard/blog`, `/dashboard/properties`, `/dashboard/seo`, `/dashboard/settings`) and `/login` to use consistent design tokens, glassmorphism, and border colors (`#E8E4DC`, `#FAF8F5`).

### Phase 2.6 — Property House Rules & Digital Compendium Synchronization (Completed)
- [x] **Sky House Tangerang (`sky-house-tangerang`) Verified Guidelines**:
  - **WiFi**: SSID `KINGSKYHOUSE22` | Password `120210120069#`.
  - **House Rules**: No smoking, No pets, Flush toilet, Switch off electricity points/AC when not in use, Keep room clean & hygienic, No noise pollution, Return items after use, Material damage charged, No eating/drinking on bed (stains subject to cleaning fee), Review request on checkout.
  - **Check-Out Guidelines**: Check-out 12:00 PM, turn off utilities, leave access card & key on table, lock doors & windows.
- [x] **Skyline Luxury at Orange County Cikarang (`skyline-luxury-orange-county-cikarang`) Verified Guidelines**:
  - **Access & Delivery**: Newport Building mailbox N0510, 5th floor unit, package delivery pickup at security lobby.
  - **WiFi**: SSID `N0510` | Password `Kinghouse`.
  - **Facilities & Waste**: Level 2 pool/gym/playground, trash disposal in KWH room near lift.
  - **House Rules & Safety**: No smoking 🚭, No pets, No parties/commercial use, Do not rearrange furniture, Respect neighbors.
  - **Electrical Safety Suggestion**: Prevent electrical overload by not using high-power appliances (stove, hair dryer, kettle) simultaneously; use one at a time.
- [x] **Versatile House Jagakarsa (`versatile-house-jagakarsa`) Verified Guidelines**:
  - **Rules**: No pets (service animals per Airbnb policy), No events for overnight stay, No indoor smoking (outdoor smoking in gazebo/garden), Quiet hours 10:00 PM – 6:00 AM, No commercial photography/filming without permit, Max 12 overnight guests (2 per bedroom).
  - **Schedule & Fees**: Check-in 3:00 PM (flexible), Check-out before 12:00 PM. Early check-in / late check-out Rp 950,000. Extra guest Rp 300,000/pax (>4 pax). Cleaning fee Rp 350,000.
### Phase 2.7 — Multi-Currency & Multi-Language Localization Engine (Completed)
- [x] **Universal Multi-Currency Conversion Engine** (`lib/context/localization-context.tsx`):
  - Real-time exchange rate calculation across 10 global currencies: IDR (Rp), USD ($), SGD (S$), AUD (A$), EUR (€), GBP (£), JPY (¥), CNY (¥), MYR (RM), AED (AED).
  - Floating and header dropdown selectors with persistent user preferences in `localStorage`.
- [x] **Multi-Language Internationalization (i18n)** (`lib/context/localization-context.tsx`):
  - Support for 9 languages: Indonesian (`ID`), English (`EN`), Japanese (`JA`), Mandarin Chinese (`ZH`), French (`FR`), Spanish (`ES`), German (`DE`), Russian (`RU`), and Arabic (`AR`).
- [x] **Multi-Channel Direct Booking & Price Comparison Modal** (`components/villas/booking-channel-modal.tsx`, `components/villas/booking-sidebar.tsx`):
  - Transparent price comparison between Direct Booking (0% extra commission, best rate guarantee) vs Airbnb, Agoda, and Booking.com.
  - 1-click WhatsApp concierge pre-filled message dispatch with check-in, check-out, and guest count.

### Phase 2.8 — Production Pre-Deployment Audit & Quality Assurance (Completed)
- [x] **Zero ESLint Errors**: Resolved all strict React 19 / Next.js 16 compiler linting errors and escaped entity issues.
- [x] **19/19 Automated Tests Passing**: Verified financial calculations, iCal parser, rate limiters, Zod security schemas, and digital compendiums.
- [x] **52/52 Routes Built Successfully**: Full Next.js production build (`next build`) validated across static generation (SSG) and dynamic endpoints.

---

## 4. VERIFICATION COMMANDS

```bash
# Run automated Vitest test suite (19 tests)
npm test

# Run TypeScript strict type verification
npx tsc --noEmit

# Run ESLint validation (0 errors)
npm run lint

# Run Next.js optimized production build
npm run build
```



