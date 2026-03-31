'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Product } from '@/lib/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
        setProducts(products.filter((p) => p.id !== id));
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your products</p>
        </div>
        <Link href="/admin/products/new">
          <Button>Add Product</Button>
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">No products yet</p>
          <Link href="/admin/products/new">
            <Button>Create first product</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-6">
          {products.map((product) => (
            <Card key={product.id} className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Image Placeholder */}
                  <div className="w-full mb-4 bg-muted h-40 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <p className="text-muted-foreground text-sm">
                      Image placeholder
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-bold">${product.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-bold">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-bold">
                        {product.featured ? 'Featured' : 'Hidden'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/admin/products/${product.id}`}>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(product.id!)}
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
