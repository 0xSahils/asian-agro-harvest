import { NextRequest, NextResponse } from 'next/server';

// Mock admin credentials - Replace with actual Supabase auth
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password123';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // This is a simple mock. In production, use proper authentication with Supabase
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json(
        {
          success: true,
          user: { id: '1', email },
          token: 'mock-token-' + Date.now(),
        },
        { status: 200 }
      );

      // Set HTTP-only cookie
      response.cookies.set('auth-token', 'mock-token-' + Date.now(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 400 });
  }
}
