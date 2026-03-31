'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Service } from '@/lib/types';

interface ServiceFormProps {
  serviceId?: string;
  onSuccess?: () => void;
}

export default function ServiceForm({ serviceId, onSuccess }: ServiceFormProps) {
  const router = useRouter();
  const [service, setService] = useState<Service>({
    name: '',
    description: '',
    price: null,
    image_url: null,
    duration: '',
    featured: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/services/${serviceId}`);
      if (!res.ok) throw new Error('Failed to fetch service');
      const data = await res.json();
      setService(data);
    } catch (error) {
      setError('Failed to load service');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = serviceId ? `/api/services/${serviceId}` : '/api/services';
      const method = serviceId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(service),
      });

      if (!res.ok) throw new Error('Failed to save service');

      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/admin/services');
      }
    } catch (error) {
      setError('Failed to save service');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">
        {serviceId ? 'Edit Service' : 'Add Service'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Name
          </label>
          <Input
            type="text"
            value={service.name}
            onChange={(e) =>
              setService({ ...service, name: e.target.value })
            }
            placeholder="Enter service name"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={service.description}
            onChange={(e) =>
              setService({ ...service, description: e.target.value })
            }
            placeholder="Enter service description"
            rows={4}
            disabled={loading}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Price (Optional)
            </label>
            <Input
              type="number"
              step="0.01"
              value={service.price === null ? '' : service.price}
              onChange={(e) =>
                setService({
                  ...service,
                  price: e.target.value ? parseFloat(e.target.value) : null,
                })
              }
              placeholder="0.00"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <Input
              type="text"
              value={service.duration}
              onChange={(e) =>
                setService({ ...service, duration: e.target.value })
              }
              placeholder="e.g., 1 hour, Monthly"
              disabled={loading}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <Input
            type="text"
            value={service.image_url || ''}
            onChange={(e) =>
              setService({ ...service, image_url: e.target.value || null })
            }
            placeholder="Paste image URL here"
            disabled={loading}
          />
          <p className="text-sm text-muted-foreground mt-1">
            Leave blank for now - you can add images later
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={service.featured}
            onChange={(e) =>
              setService({ ...service, featured: e.target.checked })
            }
            disabled={loading}
            className="rounded"
          />
          <label htmlFor="featured" className="text-sm font-medium">
            Mark as featured
          </label>
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Service'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/services')}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
