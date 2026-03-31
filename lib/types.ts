// Database types for Supabase integration
export interface Product {
  id?: string;
  created_at?: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  category: string;
  featured: boolean;
}

export interface Service {
  id?: string;
  created_at?: string;
  name: string;
  description: string;
  price: number | null;
  image_url: string | null;
  duration: string;
  featured: boolean;
}

export interface AdminUser {
  id?: string;
  created_at?: string;
  email: string;
  password_hash: string;
}

export interface AuthSession {
  user: {
    id: string;
    email: string;
  };
  expiresAt: number;
}
