# Quick Start Guide - KingHouse

## 🚀 Getting Started in 5 Minutes

### 1. Prerequisites
Ensure you have installed:
- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn
- Git
- VS Code (recommended)

### 2. Clone & Install
```bash
# Navigate to project directory
cd kinghouse-mockup

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📱 Explore the Site

### Available Pages
1. **Homepage** - http://localhost:3000
2. **All Villas** - http://localhost:3000/villas
3. **Villa Detail** - http://localhost:3000/villas/villa-emerald-bsd
4. **Services** - http://localhost:3000/services
5. **About** - http://localhost:3000/about
6. **Contact** - http://localhost:3000/contact

### Sample Villa Slugs
Try these villa detail pages:
- `/villas/villa-emerald-bsd`
- `/villas/villa-sapphire-bogor`
- `/villas/villa-ruby-tangsel`
- `/villas/villa-diamond-jaksel`

## 🎨 Customization Quick Tips

### Change Site Name & Logo
Edit `lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "YourName",  // Change this
  domain: "yoursite.com",
  // ...
}
```

### Add New Villa
Edit `lib/data.ts`:
```typescript
export const MOCK_VILLAS: Villa[] = [
  // Add your villa object here
  {
    id: "5",
    name: "Your Villa Name",
    slug: "your-villa-slug",
    // ... other properties
  }
]
```

### Change Colors
Edit `app/globals.css`:
```css
--color-primary: #d97706;  /* Change primary color */
--color-secondary: #f59e0b;  /* Change secondary color */
```

### Update Contact Info
Edit `lib/constants.ts`:
```typescript
contact: {
  email: "your@email.com",
  phone: "+62 xxx xxxx",
  whatsapp: "+62 xxx xxxx",
  address: "Your Address"
}
```

## 🛠️ Common Tasks

### Add a New Page
```bash
# Create new folder in app/
mkdir app/new-page

# Create page.tsx
touch app/new-page/page.tsx
```

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
    </main>
  )
}
```

### Add a New Component
```bash
# Create component file
touch components/ui/new-component.tsx
```

```typescript
// components/ui/new-component.tsx
export function NewComponent() {
  return <div>New Component</div>
}
```

### Update Navigation Menu
Edit `components/layout/header.tsx`:
```typescript
const navigation = [
  { name: { en: "New Page", id: "Halaman Baru" }, href: "/new-page" },
  // Add your menu item
]
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Clear Cache & Restart
```bash
# Remove .next folder
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

### TypeScript Errors
```bash
# Check for type errors
npm run build

# Or use VS Code TypeScript feature
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

## 📦 Build for Production

### Test Production Build Locally
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

## 📝 Project Structure Overview

```
kinghouse-mockup/
│
├── app/                    # All pages live here
│   ├── page.tsx           # Homepage (/)
│   ├── layout.tsx         # Root layout
│   ├── villas/            # Villa pages
│   ├── services/          # Services page
│   ├── about/             # About page
│   └── contact/           # Contact page
│
├── components/            # Reusable components
│   ├── layout/           # Header, Footer
│   ├── ui/               # Button, Card, Input, etc.
│   └── villas/           # Villa-specific components
│
├── lib/                  # Utilities & data
│   ├── constants.ts     # Site configuration
│   ├── data.ts          # Mock villa data
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper functions
│
└── public/              # Images, fonts, static files
```

## 🎯 Next Steps

### For Development
1. Read `IMPLEMENTATION.md` for backend setup
2. Set up database (PostgreSQL recommended)
3. Implement authentication
4. Add payment integration

### For Content
1. Replace mock villa data with real properties
2. Add actual images to `public/` folder
3. Update company information in About page
4. Customize services and pricing

### For Design
1. Replace placeholder images with real photos
2. Customize colors in `globals.css`
3. Add your logo to `public/` folder
4. Update favicon

## 🆘 Need Help?

### Documentation
- `README.md` - Overview & installation
- `IMPLEMENTATION.md` - Backend implementation guide
- `PROJECT_SUMMARY.md` - Complete project overview

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Common Issues
- **Images not loading?** Check image URLs in `lib/data.ts`
- **Styling broken?** Clear `.next` folder and rebuild
- **Type errors?** Check `lib/types.ts` for correct types

## ✅ Checklist for Launch

- [ ] Replace all mock data with real content
- [ ] Add real villa images
- [ ] Update contact information
- [ ] Set up domain name
- [ ] Configure environment variables
- [ ] Test on mobile devices
- [ ] Run production build locally
- [ ] Deploy to production
- [ ] Test all pages and features
- [ ] Set up analytics (Google Analytics)
- [ ] Configure SEO metadata
- [ ] Add sitemap.xml
- [ ] Test booking flow

## 🎉 You're Ready!

The site is running at http://localhost:3000

Happy building! 🚀

---

**Tip:** Keep this guide handy as you develop. Bookmark commonly used commands and file locations.
