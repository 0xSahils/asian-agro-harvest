# Admin Panel & E-Commerce Platform Setup Guide

## Overview

This project includes:
- **Public Website**: Homepage, Products, and Services listing pages
- **Admin Panel**: Dashboard to manage products and services
- **API Routes**: RESTful API for CRUD operations
- **Authentication**: Simple email/password login for admin

## Current Status

The project is built with mock data and in-memory storage. All APIs are ready to be connected to Supabase.

## Default Admin Credentials (Demo)

- **Email**: `admin@example.com`
- **Password**: `password123`

## Project Structure

```
/app
├── page.tsx                 # Homepage
├── products/page.tsx        # Products listing
├── services/page.tsx        # Services listing
├── admin/
│   ├── login/page.tsx       # Admin login page
│   ├── dashboard/page.tsx   # Admin dashboard
│   ├── products/
│   │   ├── page.tsx         # Products management
│   │   ├── new/page.tsx     # Create product
│   │   └── [id]/page.tsx    # Edit product
│   └── services/
│       ├── page.tsx         # Services management
│       ├── new/page.tsx     # Create service
│       └── [id]/page.tsx    # Edit service
├── api/
│   ├── products/
│   │   ├── route.ts         # GET/POST products
│   │   └── [id]/route.ts    # PUT/DELETE product
│   ├── services/
│   │   ├── route.ts         # GET/POST services
│   │   └── [id]/route.ts    # PUT/DELETE service
│   └── auth/
│       ├── login/route.ts   # Login endpoint
│       └── logout/route.ts  # Logout endpoint
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   ├── auth.ts              # Auth utilities
│   └── api-client.ts        # API client functions
└── components/
    ├── ProductForm.tsx      # Product form component
    └── ServiceForm.tsx      # Service form component
```

## Features

### Public Website
- Clean, professional homepage
- Products listing page with cards
- Services listing page with cards
- Navigation between pages
- Image placeholders (add your real images)
- Featured products/services on homepage

### Admin Panel
- Login page with demo credentials
- Protected dashboard
- Full CRUD operations for products
- Full CRUD operations for services
- Image URL input fields (ready for integration)
- Featured/Hidden toggle for items

## Connecting to Supabase

### Step 1: Create Database Tables

Run these SQL queries in your Supabase SQL editor:

```sql
-- Create admin_users table
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255),
  category VARCHAR(100),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create services table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2),
  image_url VARCHAR(255),
  duration VARCHAR(100) NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert demo admin user (password: password123)
INSERT INTO admin_users (email, password_hash)
VALUES ('admin@example.com', '$2b$12$...');  -- Use bcrypt hash
```

### Step 2: Install Dependencies

Install required packages for Supabase:

```bash
npm install @supabase/supabase-js bcryptjs
```

### Step 3: Add Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 4: Update API Routes

Replace the mock implementations in `/app/api/*` with actual Supabase queries using the `@supabase/supabase-js` client.

Example for products API:

```typescript
import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return []
        },
        setAll() {},
      },
    }
  )

  const { data, error } = await supabase
    .from('products')
    .select('*')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}
```

### Step 5: Update Auth Routes

Update `/app/api/auth/login/route.ts` to use Supabase:

```typescript
import { createServerClient } from '@supabase/ssr'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return []
        },
        setAll() {},
      },
    }
  )

  // Query admin user
  const { data: user, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('email', email)
    .single()

  if (error || !user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }

  // Verify password
  const isValid = await bcrypt.compare(password, user.password_hash)

  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }

  // Create session and return token
  const response = NextResponse.json({
    success: true,
    user: { id: user.id, email: user.email },
    token: 'jwt-token-here',
  })

  response.cookies.set('auth-token', 'jwt-token-here', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })

  return response
}
```

## UI/UX Features

✅ **Professional Design**: Clean, minimal aesthetic - not AI-generated looking
✅ **Image Placeholders**: All images are blank spaces with alt text - ready for you to add real images
✅ **Responsive**: Mobile-first design, works on all screen sizes
✅ **Accessible**: Semantic HTML, proper form labels, keyboard navigation
✅ **Content-Focused**: Emphasis on text content and user experience

## Image Management

Currently, image URLs are accepted as input fields. To implement full image uploading:

1. Install image handling package:
   ```bash
   npm install next-cloudinary  # or similar
   ```

2. Update ProductForm.tsx and ServiceForm.tsx to include file uploads
3. Integrate with Supabase Storage or external image CDN

## Running Locally

```bash
npm install
npm run dev
```

Visit:
- Homepage: `http://localhost:3000`
- Products: `http://localhost:3000/products`
- Services: `http://localhost:3000/services`
- Admin Login: `http://localhost:3000/admin/login`

## API Endpoints

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Services
- `GET /api/services` - List all services
- `POST /api/services` - Create service
- `PUT /api/services/[id]` - Update service
- `DELETE /api/services/[id]` - Delete service

### Auth
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

## Next Steps

1. ✅ Fork/Clone this repository
2. ✅ Set up Supabase project
3. ✅ Create database tables (SQL provided above)
4. ✅ Add environment variables
5. ✅ Replace API route implementations with Supabase queries
6. ✅ Update auth to use bcrypt password verification
7. ✅ Add real images to your products/services
8. ✅ Deploy to Vercel

## Notes

- Image placeholders use CSS to display blank spaces with alt text
- You can manually upload images to any CDN (Cloudinary, Imgix, etc.) and paste URLs
- All data is currently stored in-memory; connecting to Supabase will persist it
- Authentication is ready for bcrypt password hashing
- The design focuses on content and usability over visual effects
