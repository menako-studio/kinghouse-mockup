# KingHouse - Luxury Villa Hospitality & Management Platform

An editorial-grade, ultra-luxury villa management and dual-audience booking platform built with Next.js 16 (Turbopack, React 19), Tailwind CSS v4, TypeScript, and Framer Motion for Bali's premier destinations (Seminyak, Canggu, Uluwatu, Ubud, Sanur, Pererenan).

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0.7-black.svg)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)](https://www.typescriptlang.org/)

---

## 🌟 Key Platform Features

### 🌴 For Discerning Guests
- **Architectural Bento Gallery**: Dynamic, responsive 5-photo bento grid showcasing exterior, living, pool, and master suites with category-filtered fullscreen Lightbox modal.
- **Dynamic Split Pricing**: Dual-currency real-time calculation (USD/IDR), cleaning fees, and service breakdown in sticky booking widget.
- **Location Proximity Maps**: Instant distance & travel times to beaches, beach clubs, gourmet dining, and Ngurah Rai International Airport.
- **Rich Amenity Categorization**: Comprehensive filters for Essentials, Luxury & Wellness, Outdoor Living, and Dedicated Staffing.
- **JSON-LD Schema Markup**: Integrated VacationRental structured data for maximum search engine rich snippets.

### 💼 For Villa Owners & Investors
- **Dual Management Tiers**: Transparent comparison between **Essential (15%)** and **Complete Management (20%)** with interactive fee calculators.
- **Audited Performance Metrics**: Real before/after case studies displaying occupancy rate lifts (+18-35%), EBITDA margins, and revenue growth.
- **Property Audit Request Flow**: Interactive multi-step form with direct WhatsApp VIP dispatch for instant consultations.
- **Onboarding Roadmap**: Structured 4-stage onboarding timeline from interior staging to global OTA distribution.

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
- **Architecture Documentation:** [PROJECT_STATE.md](file:///PROJECT_STATE.md) (Single Source of Truth for AI Agents & Developers)

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

### 4. Build & Production
```bash
npm run build
npm run start
```

---

## 🏗️ Project Architecture

```
kinghouse-mockup/
├── app/                              # Next.js App Router
│   ├── about/                        # Brand ethos, leadership & heritage
│   ├── contact/                      # Multichannel contact & direct WhatsApp
│   ├── locations/                    # Area landing pages
│   ├── owner-services/               # Management tiers, ROI metrics & audit form
│   ├── services/                     # In-villa chef, chauffeur, spa & yacht charter
│   ├── villas/                       # Villa directory & dynamic [slug] detail pages
│   ├── globals.css                   # Tailwind v4 theme, variables & scrollbars
│   ├── layout.tsx                    # Root shell with Header, Footer, and Fonts
│   └── page.tsx                      # Dual-path high-conversion homepage
├── components/                       # Domain-driven components
│   ├── bento/                        # Bento gallery & fullscreen lightbox modal
│   ├── home/                         # Hero slider, dual pathway, trust proof
│   ├── layout/                       # Header navigation & editorial footer
│   ├── owner/                        # Tiered pricing, metrics & lead audit form
│   ├── ui/                           # Button, Badge, Card, Input primitives
│   └── villas/                       # Amenities, booking sidebar, map, villa cards
├── lib/                              # Core logic & data models
│   ├── constants.ts                  # Navigation, locations & metadata
│   ├── data.ts                       # Rich mock datasets (Villas, Case Studies)
│   ├── types.ts                      # Universal domain TypeScript definitions
│   └── utils.ts                      # Currency formatters, date helpers, cn()
└── PROJECT_STATE.md                  # Comprehensive AI Agent & Project state SSOT
```

---

## 🎨 Editorial Design System

- **Monochromatic & Earthy Palette:**
  - Background: `#FFFFFF` (Main) / `#FAFAFA` (Secondary) / `#F4F3F0` (Tertiary)
  - Typography: `#222222` (Primary) / `#717171` (Muted)
  - Accent / Gold: `#A69C8E` (Warm Travertine) / `#EFECE6` (Soft Sand)
- **Macro-Whitespace & Transitions:** Generous section spacing (`section-macro-spacing`) with smooth architectural zoom effects (`hover-editorial-zoom`).

---

## 📄 Available Routes

- `/` — Homepage with Dual Pathway (Guest vs Owner)
- `/villas` — Catalog with multi-attribute filtering (Bedrooms, Price, Area, Style)
- `/villas/[slug]` — Dynamic Editorial Villa Page with Bento Lightbox & Sticky Booking
- `/owner-services` — Villa Management Tiers, Audit Request Form & Case Studies
- `/services` — Bespoke VIP Guest & Concierge Experiences
- `/about` — Heritage, Operational Footprint & Leadership Team
- `/contact` — Direct Inquiry, Office Map Coordinates & WhatsApp Gateway

---

## 🤝 Development & Guidelines

Please refer to [`PROJECT_STATE.md`](file:///PROJECT_STATE.md) for detailed guidelines on:
- Server vs Client Component boundaries
- Step-by-step workflow for new features and API route handlers
- Database persistence roadmap (Prisma + PostgreSQL / Supabase)

---

## 📝 License

Proprietary — KingHouse Hospitality © 2026. All rights reserved.  
Built by Menako Studio.
