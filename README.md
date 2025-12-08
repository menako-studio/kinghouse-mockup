# KingHouse - Professional Villa Management Platform

A modern, full-featured villa management website built with Next.js 15, TypeScript, and Tailwind CSS for the Jabodetabek region.

## 🌟 Features

### For Villa Owners
- Comprehensive property management services showcase
- Revenue optimization tools and analytics
- Owner dashboard (coming soon)
- Property listing management
- Booking and reservation system

### For Guests
- Advanced villa search and filtering
- High-quality property portfolios
- Secure booking system
- Guest reviews and ratings
- Interactive property maps

### General Features
- Modern, responsive design
- Bilingual support (Indonesian & English)
- SEO optimized
- Fast performance with Next.js 15
- Accessible UI components
- Professional animations

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with class-variance-authority
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Internationalization:** next-intl (ready)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kinghouse-mockup
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
kinghouse-mockup/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── villas/              # Villas listing page
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Navigation header
│   │   └── footer.tsx       # Site footer
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── badge.tsx
│   └── villas/              # Villa-specific components
│       ├── villa-card.tsx
│       └── search-bar.tsx
├── lib/
│   ├── constants.ts         # Site configuration & constants
│   ├── data.ts              # Mock data (villas)
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions
└── public/                  # Static assets

```

## 🎨 Color Theme

The project uses an amber/gold color palette to convey luxury and trust:

- **Primary:** `#d97706` (amber-600)
- **Secondary:** `#f59e0b` (amber-500)
- **Accent:** Various amber shades (50-900)

## 📄 Available Pages

- **/** - Homepage with hero, featured villas, services, testimonials
- **/villas** - Villa listing with advanced filters
- **/services** - Service packages and features
- **/about** - Company information, mission, team
- **/contact** - Contact form and information

## 🛠️ Development

### Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Adding New Components

1. Create component in appropriate directory:
   - UI components → `components/ui/`
   - Layout components → `components/layout/`
   - Feature components → `components/[feature]/`

2. Follow naming convention: kebab-case for files, PascalCase for components

3. Use TypeScript for type safety

### Adding New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` for the route
3. Optional: Add `layout.tsx` for page-specific layout

## 🔧 Configuration

### Site Configuration

Edit `lib/constants.ts` to update:
- Site name and description
- Contact information
- Social media links
- Service offerings
- Locations and amenities

### Mock Data

Update `lib/data.ts` to modify:
- Villa listings
- Pricing
- Images
- Property details

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repo to Vercel for automatic deployments
```

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` directory.

## 🔜 Roadmap

### Phase 1 (Current)
- ✅ Homepage with hero and features
- ✅ Villa listing with filters
- ✅ Services page
- ✅ About page
- ✅ Contact page
- ✅ Responsive design

### Phase 2 (Next)
- [ ] Owner dashboard
- [ ] Guest dashboard
- [ ] Booking system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin panel

### Phase 3 (Future)
- [ ] Backend API with Next.js API routes
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Authentication (NextAuth.js)
- [ ] Real-time booking availability
- [ ] WhatsApp integration
- [ ] Google Maps integration
- [ ] Analytics dashboard

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

## 📝 License

Proprietary - KingHouse © 2025

## 📞 Support

For support, email hello@kinghouse.id or contact through the website.

---

Built with ❤️ by Menako Studio
