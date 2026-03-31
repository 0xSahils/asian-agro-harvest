'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Service } from '@/lib/types';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      try {
        await fetch(`/api/services/${id}`, { method: 'DELETE' });
        setServices(services.filter((s) => s.id !== id));
      } catch (error) {
        console.error('Failed to delete service:', error);
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground">Manage your services</p>
        </div>
        <Link href="/admin/services/new">
          <Button>Add Service</Button>
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : services.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">No services yet</p>
          <Link href="/admin/services/new">
            <Button>Create first service</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-6">
          {services.map((service) => (
            <Card key={service.id} className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Image Placeholder */}
                  <div className="w-full mb-4 bg-muted h-40 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <p className="text-muted-foreground text-sm">
                      Image placeholder
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    {service.price !== null && (
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-bold">${service.price}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-bold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-bold">
                        {service.featured ? 'Featured' : 'Hidden'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/admin/services/${service.id}`}>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(service.id!)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
