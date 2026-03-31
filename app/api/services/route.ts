import { NextRequest, NextResponse } from 'next/server';
import { Service } from '@/lib/types';

// Mock database for services
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

export async function GET() {
  return NextResponse.json(services);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newService: Service = {
      ...body,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
    };
    services.push(newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 400 }
    );
  }
}
