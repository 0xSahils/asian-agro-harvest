'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Product, Service } from '@/lib/types';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, servicesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/services'),
        ]);

        const productsData = await productsRes.json();
        const servicesData = await servicesRes.json();

        setProducts(productsData);
        setServices(servicesData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin panel
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">Products</h2>
            <p className="text-4xl font-bold text-primary">{products.length}</p>
            <p className="text-muted-foreground text-sm mt-2">
              Total products
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">Services</h2>
            <p className="text-4xl font-bold text-primary">{services.length}</p>
            <p className="text-muted-foreground text-sm mt-2">
              Total services
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}
