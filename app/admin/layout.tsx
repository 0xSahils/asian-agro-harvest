'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    const session = localStorage.getItem('admin_session');
    if (session && pathname !== '/admin/login') {
      try {
        const parsed = JSON.parse(session);
        if (parsed.expiresAt > Date.now()) {
          setIsAuthenticated(true);
          setUserEmail(parsed.user.email);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('Invalid session');
      }
    }

    if (pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    setLoading(false);
  }, [router, pathname]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('admin_session');
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated && pathname !== '/admin/login') {
    return null;
  }

  if (pathname === '/admin/login') {
    return children;
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-foreground">Admin</h2>
          <p className="text-sm text-muted-foreground">{userEmail}</p>
        </div>

        <nav className="space-y-2 p-4">
          <Link href="/admin/dashboard">
            <Button
              variant={pathname === '/admin/dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button
              variant={pathname === '/admin/products' ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              Products
            </Button>
          </Link>
          <Link href="/admin/services">
            <Button
              variant={pathname === '/admin/services' ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              Services
            </Button>
          </Link>
        </nav>

        <div className="absolute bottom-4 left-4 right-8">
          <Button onClick={handleLogout} variant="outline" className="w-full">
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
