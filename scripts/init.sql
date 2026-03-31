-- ═══════════════════════════════════════════════════════════════════════════
-- Database Schema for Admin Panel & E-Commerce Platform
-- Run this in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────────────────
-- 1. ADMIN USERS TABLE
-- ─────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for email lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- ─────────────────────────────────────────────────────────────────────────
-- 2. PRODUCTS TABLE
-- ─────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- ─────────────────────────────────────────────────────────────────────────
-- 3. SERVICES TABLE
-- ─────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2),
  image_url VARCHAR(500),
  duration VARCHAR(100) NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(featured);
CREATE INDEX IF NOT EXISTS idx_services_created_at ON services(created_at DESC);

-- ─────────────────────────────────────────────────────────────────────────
-- 4. SAMPLE DATA (OPTIONAL)
-- ─────────────────────────────────────────────────────────────────────────

-- Insert sample admin user
-- Note: Replace password hash with actual bcrypt hash
-- For demo: password123 = $2b$12$e5owJNBVoQCqS3F5A2Ej1OPJY1y5JkYmyJdVl5fGFqPvL7Ow8lCra
INSERT INTO admin_users (email, password_hash)
VALUES ('admin@example.com', '$2b$12$e5owJNBVoQCqS3F5A2Ej1OPJY1y5JkYmyJdVl5fGFqPvL7Ow8lCra')
ON CONFLICT (email) DO NOTHING;

-- Insert sample products
INSERT INTO products (name, description, price, category, featured)
VALUES
  (
    'Premium Widget',
    'A high-quality widget for all your needs. Designed with precision and built to last.',
    99.99,
    'Electronics',
    true
  ),
  (
    'Deluxe Package',
    'Complete package with comprehensive support and premium features included.',
    199.99,
    'Services',
    false
  )
ON CONFLICT DO NOTHING;

-- Insert sample services
INSERT INTO services (name, description, price, duration, featured)
VALUES
  (
    'Professional Consultation',
    'Get expert advice from our team of professionals. Personalized guidance for your needs.',
    NULL,
    '1 hour',
    true
  ),
  (
    'Premium Support Package',
    '24/7 priority support with guaranteed response times and dedicated support team.',
    49.99,
    'Monthly',
    false
  )
ON CONFLICT DO NOTHING;

-- ─────────────────────────────────────────────────────────────────────────
-- 5. VIEW TABLES (OPTIONAL - For debugging)
-- ─────────────────────────────────────────────────────────────────────────

-- View all admin users
-- SELECT id, email, created_at FROM admin_users;

-- View all products
-- SELECT id, name, price, featured, created_at FROM products;

-- View all services
-- SELECT id, name, price, duration, featured, created_at FROM services;

-- ─────────────────────────────────────────────────────────────────────────
-- 6. CLEANUP COMMANDS (IF NEEDED)
-- ─────────────────────────────────────────────────────────────────────────

-- Delete all products
-- DELETE FROM products;

-- Delete all services
-- DELETE FROM services;

-- Delete all admin users
-- DELETE FROM admin_users;

-- Drop all tables (WARNING: Deletes all data!)
-- DROP TABLE IF EXISTS admin_users CASCADE;
-- DROP TABLE IF EXISTS products CASCADE;
-- DROP TABLE IF EXISTS services CASCADE;

-- ═══════════════════════════════════════════════════════════════════════════
-- NOTES:
-- ═════════════════════════════════════════════════════════════════════════════
-- 1. Copy/paste the CREATE TABLE statements to your Supabase SQL editor
-- 2. The sample data is optional - only for testing
-- 3. The password hash above is bcrypt hash of "password123"
-- 4. For production, generate new bcrypt hash for your actual password
-- 5. All timestamps use timezone-aware datetimes
-- 6. Indexes improve query performance for filtered queries
-- ═════════════════════════════════════════════════════════════════════════════
