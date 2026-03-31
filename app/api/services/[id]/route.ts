import { NextRequest, NextResponse } from 'next/server';
import { Service } from '@/lib/types';

// Mock database
let services: Service[] = [
  {
    id: '1',
    name: 'Consultation',
    description: 'Professional consultation with expert advisors',
    price: null,
    image_url: null,
    duration: '1 hour',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Premium Support',
    description: 'Priority support for all your needs',
    price: 49.99,
    image_url: null,
    duration: 'Monthly',
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
    const index = services.findIndex((s) => s.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    services[index] = { ...services[index], ...body };
    return NextResponse.json(services[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update service' },
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
    const index = services.findIndex((s) => s.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    services = services.filter((s) => s.id !== id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 400 }
    );
  }
}
