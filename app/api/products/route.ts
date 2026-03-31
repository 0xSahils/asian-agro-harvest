import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/lib/types';

// Mock database for products
let products: Product[] = [
  {
    id: '1',
    name: 'Premium Widget',
    description: 'A high-quality widget for all your needs',
    price: 99.99,
    image_url: null,
    category: 'Electronics',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Deluxe Service',
    description: 'Complete package with support',
    price: 199.99,
    image_url: null,
    category: 'Services',
    featured: false,
    created_at: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newProduct: Product = {
      ...body,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
    };
    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 400 }
    );
  }
}
