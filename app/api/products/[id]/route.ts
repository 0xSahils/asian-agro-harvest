import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/lib/types';

// Mock database (same instance as parent route)
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    products[index] = { ...products[index], ...body };
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    products = products.filter((p) => p.id !== id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 400 }
    );
  }
}
