# KingHouse Implementation Guide

## Overview
This guide will help you complete the villa management platform and add backend functionality.

## Current Implementation Status

### ✅ Completed
1. **Frontend Structure**
   - Next.js 15 with App Router
   - TypeScript configuration
   - Tailwind CSS with custom theme
   - Responsive design

2. **Pages**
   - Homepage with hero, stats, featured villas, services, testimonials
   - Villa listing page with filters
   - Services page with pricing tiers
   - About page with team section
   - Contact page with form

3. **Components**
   - Reusable UI components (Button, Card, Input, Badge)
   - Layout components (Header, Footer)
   - Villa-specific components (VillaCard, SearchBar)

4. **Data Structure**
   - Type definitions for Villa, Booking, Review, User
   - Mock villa data
   - Constants for locations, amenities, services

## Next Steps

### Phase 1: Backend Implementation (Priority)

#### 1. Database Setup
Choose one of these options:

**Option A: PostgreSQL with Prisma**
```bash
npm install prisma @prisma/client
npx prisma init
```

Create schema in `prisma/schema.prisma`:
```prisma
model Villa {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description Json     // {en: string, id: string}
  location    String
  price       Json     // {daily, weekly, monthly}
  capacity    Json     // {bedrooms, bathrooms, guests}
  amenities   String[]
  images      String[]
  featured    Boolean  @default(false)
  available   Boolean  @default(true)
  rating      Float    @default(0)
  reviews     Int      @default(0)
  coordinates Json     // {lat, lng}
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  bookings    Booking[]
  reviews     Review[]
}

model Booking {
  id          String   @id @default(cuid())
  villaId     String
  villa       Villa    @relation(fields: [villaId], references: [id])
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  checkIn     DateTime
  checkOut    DateTime
  guests      Int
  totalPrice  Float
  status      String   // pending, confirmed, cancelled, completed
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Review {
  id          String   @id @default(cuid())
  villaId     String
  villa       Villa    @relation(fields: [villaId], references: [id])
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  rating      Int
  comment     String
  createdAt   DateTime @default(now())
}

model User {
  id        String    @id @default(cuid())
  name      String
  email     String    @unique
  phone     String?
  role      String    @default("guest") // guest, owner, admin
  avatar    String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  bookings  Booking[]
  reviews   Review[]
}
```

**Option B: MongoDB with Mongoose**
```bash
npm install mongoose
```

#### 2. API Routes
Create API endpoints in `app/api/`:

**Villa APIs:**
- `GET /api/villas` - List all villas with filters
- `GET /api/villas/[slug]` - Get single villa details
- `POST /api/villas` - Create villa (admin only)
- `PUT /api/villas/[id]` - Update villa
- `DELETE /api/villas/[id]` - Delete villa

**Booking APIs:**
- `GET /api/bookings` - List bookings (user/owner/admin)
- `GET /api/bookings/[id]` - Get booking details
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/[id]` - Update booking status
- `DELETE /api/bookings/[id]` - Cancel booking

**Review APIs:**
- `GET /api/reviews` - List reviews
- `POST /api/reviews` - Create review
- `DELETE /api/reviews/[id]` - Delete review

Example API route (`app/api/villas/route.ts`):
```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get('location')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  
  const villas = await prisma.villa.findMany({
    where: {
      ...(location && { location }),
      ...(minPrice && { price: { path: '$.daily', gte: Number(minPrice) }}),
      ...(maxPrice && { price: { path: '$.daily', lte: Number(maxPrice) }}),
      available: true
    }
  })
  
  return NextResponse.json(villas)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Validate user is admin
  
  const villa = await prisma.villa.create({
    data: body
  })
  
  return NextResponse.json(villa, { status: 201 })
}
```

#### 3. Authentication
Install NextAuth.js:
```bash
npm install next-auth @auth/prisma-adapter
```

Create `app/api/auth/[...nextauth]/route.ts`:
```typescript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Implement your auth logic
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Add user role to session
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

### Phase 2: Dashboard Implementation

#### 1. Owner Dashboard
Create `app/owner/dashboard/page.tsx`:

Features:
- Property overview
- Booking calendar
- Revenue analytics
- Performance metrics
- Guest reviews
- Property management

Components needed:
- Statistics cards
- Line charts (use recharts or chart.js)
- Booking calendar (use react-big-calendar)
- Data tables

#### 2. Guest Dashboard
Create `app/guest/dashboard/page.tsx`:

Features:
- Current bookings
- Booking history
- Saved villas
- Reviews written
- Profile management

#### 3. Admin Panel
Create `app/admin/page.tsx`:

Features:
- Villa management (CRUD)
- User management
- Booking oversight
- Analytics and reports
- Content management

### Phase 3: Advanced Features

#### 1. Payment Integration
Use Midtrans (Indonesia) or Stripe:

```bash
npm install midtrans-client
# or
npm install @stripe/stripe-js stripe
```

Create payment API:
```typescript
// app/api/payment/create/route.ts
import midtransClient from 'midtrans-client'

export async function POST(request: Request) {
  const { bookingId, amount } = await request.json()
  
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  })
  
  const parameter = {
    transaction_details: {
      order_id: bookingId,
      gross_amount: amount
    }
  }
  
  const transaction = await snap.createTransaction(parameter)
  return NextResponse.json(transaction)
}
```

#### 2. Email Notifications
Install Resend or Nodemailer:

```bash
npm install resend
```

Create email templates in `emails/`:
- Booking confirmation
- Booking reminder
- Payment receipt
- Review request

#### 3. WhatsApp Integration
Use WhatsApp Business API or Twilio:

```bash
npm install twilio
```

#### 4. Real-time Updates
Use Server-Sent Events or Pusher:

```bash
npm install pusher pusher-js
```

#### 5. Image Upload
Use Cloudinary or AWS S3:

```bash
npm install cloudinary
# or
npm install @aws-sdk/client-s3
```

### Phase 4: Optimization & SEO

#### 1. Performance
- Implement image optimization (next/image)
- Add loading states and skeletons
- Implement lazy loading
- Use React.memo for expensive components
- Add caching strategies

#### 2. SEO Improvements
- Generate dynamic sitemaps
- Add structured data (JSON-LD)
- Optimize meta tags per page
- Implement Open Graph tags
- Add robots.txt

Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const villas = await getVillas()
  
  return [
    {
      url: 'https://kinghouse.id',
      lastModified: new Date(),
    },
    ...villas.map((villa) => ({
      url: `https://kinghouse.id/villas/${villa.slug}`,
      lastModified: villa.updatedAt,
    })),
  ]
}
```

#### 3. Analytics
Add Google Analytics:

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Phase 5: Testing & Deployment

#### 1. Testing
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest
```

Create tests for:
- Components
- API routes
- Utility functions
- Integration tests

#### 2. Deployment

**Vercel (Recommended):**
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

**Alternative: Docker**
Create `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## Recommended Packages

### Essential
- `@prisma/client` - Database ORM
- `next-auth` - Authentication
- `zod` - Schema validation
- `react-hook-form` - Form handling
- `date-fns` - Date utilities

### UI Enhancements
- `recharts` - Charts and graphs
- `react-big-calendar` - Booking calendar
- `react-hot-toast` - Notifications
- `swiper` - Image carousels
- `react-loading-skeleton` - Loading states

### Utilities
- `cloudinary` - Image hosting
- `resend` - Email service
- `pusher` - Real-time updates
- `sharp` - Image processing

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# Required
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Optional (add as needed)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MIDTRANS_SERVER_KEY=
CLOUDINARY_URL=
RESEND_API_KEY=
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Support

For questions or issues during implementation, refer to:
1. This documentation
2. Official package documentation
3. Stack Overflow
4. GitHub Issues

---

Good luck with your implementation! 🚀
