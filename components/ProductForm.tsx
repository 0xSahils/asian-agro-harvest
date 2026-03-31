'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Product } from '@/lib/types';

interface ProductFormProps {
  productId?: string;
  onSuccess?: () => void;
}

export default function ProductForm({ productId, onSuccess }: ProductFormProps) {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    image_url: null,
    category: '',
    featured: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      setError('Failed to load product');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = productId ? `/api/products/${productId}` : '/api/products';
      const method = productId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error('Failed to save product');

      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/admin/products');
      }
    } catch (error) {
      setError('Failed to save product');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">
        {productId ? 'Edit Product' : 'Add Product'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <Input
            type="text"
            value={product.name}
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
            placeholder="Enter product name"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            placeholder="Enter product description"
            rows={4}
            disabled={loading}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <Input
              type="number"
              step="0.01"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: parseFloat(e.target.value) })
              }
              placeholder="0.00"
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Input
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              placeholder="e.g., Electronics"
              disabled={loading}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <Input
            type="text"
            value={product.image_url || ''}
            onChange={(e) =>
              setProduct({ ...product, image_url: e.target.value || null })
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
            checked={product.featured}
            onChange={(e) =>
              setProduct({ ...product, featured: e.target.checked })
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
            {loading ? 'Saving...' : 'Save Product'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/products')}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
