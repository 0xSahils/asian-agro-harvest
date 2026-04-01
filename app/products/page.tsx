'use client';

import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Grains', 'Spices', 'Pulses', 'Vegetables', 'Seeds', 'Processed'];

  const products = [
    {
      id: 1,
      name: 'Basmati Rice Premium',
      category: 'Grains',
      origin: 'Punjab, India',
      grade: 'Extra Long',
      description: 'Premium quality basmati rice with exceptional aroma and taste. Ideal for international food markets, hotels, and restaurants.',
      specs: [
        { label: 'Moisture Content', value: '< 12%' },
        { label: 'Shelf Life', value: '2 Years' },
        { label: 'Min Order', value: '500 kg' },
        { label: 'Packaging', value: '25kg, 50kg bags' },
      ],
    },
    {
      id: 2,
      name: 'Whole Wheat Flour',
      category: 'Grains',
      origin: 'Madhya Pradesh, India',
      grade: 'Premium',
      description: 'High-protein whole wheat flour, stone-ground for maximum nutrition and authentic flavor. Perfect for bakeries and food processors.',
      specs: [
        { label: 'Protein Content', value: '13-15%' },
        { label: 'Shelf Life', value: '18 Months' },
        { label: 'Min Order', value: '1 Ton' },
        { label: 'Packaging', value: '25kg bags' },
      ],
    },
    {
      id: 3,
      name: 'Indian Spice Blend',
      category: 'Spices',
      origin: 'Kerala, India',
      grade: 'Organic Certified',
      description: 'Authentic Indian spice blend with cumin, coriander, turmeric, and aromatic spices. Perfect for food manufacturing and culinary use.',
      specs: [
        { label: 'Moisture', value: '< 10%' },
        { label: 'Shelf Life', value: '2 Years' },
        { label: 'Min Order', value: '100 kg' },
        { label: 'Packaging', value: 'Custom available' },
      ],
    },
    {
      id: 4,
      name: 'Organic Lentils',
      category: 'Pulses',
      origin: 'Rajasthan, India',
      grade: 'A1 Premium',
      description: 'Certified organic lentils with superior quality, rich in protein and minerals. Sustainably sourced from Indian farms.',
      specs: [
        { label: 'Moisture', value: '< 11%' },
        { label: 'Shelf Life', value: '2 Years' },
        { label: 'Min Order', value: '500 kg' },
        { label: 'Packaging', value: '25kg, 50kg' },
      ],
    },
    {
      id: 5,
      name: 'Fresh Vegetables Mix',
      category: 'Vegetables',
      origin: 'Multiple States',
      grade: 'Grade A',
      description: 'Seasonal fresh vegetables including carrots, onions, potatoes, and tomatoes. Harvested fresh and delivered within 48 hours.',
      specs: [
        { label: 'Freshness', value: '< 48 hours' },
        { label: 'Shelf Life', value: '2-3 weeks' },
        { label: 'Min Order', value: '1 Ton' },
        { label: 'Packaging', value: 'Wooden crates' },
      ],
    },
    {
      id: 6,
      name: 'Mustard Seeds Premium',
      category: 'Seeds',
      origin: 'Gujarat, India',
      grade: 'Premium Grade',
      description: 'High-quality mustard seeds for oil production and spice blending. High oil content and superior germination rates.',
      specs: [
        { label: 'Oil Content', value: '40-45%' },
        { label: 'Shelf Life', value: '2 Years' },
        { label: 'Min Order', value: '500 kg' },
        { label: 'Packaging', value: '50kg bags' },
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-lighter max-w-2xl">
            Premium agricultural products from India, trusted by international buyers worldwide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background py-12 border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary"
              >
                {/* Product Image */}
                <div className="bg-muted h-64 flex items-center justify-center text-muted-foreground border-b border-border">
                  <div className="text-center">
                    <p className="font-semibold">[Product Image]</p>
                    <p className="text-sm mt-2">{product.name}</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-primary font-semibold text-sm mb-1">{product.origin}</p>
                      <p className="text-muted-foreground text-sm">Grade: {product.grade}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                  {/* Specs Table */}
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Specifications</h4>
                    <div className="space-y-2">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-center block"
                  >
                    Enquire About This Product
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Download Catalogue */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Download Our Complete Catalogue</h2>
            <p className="text-primary-lighter text-lg mb-8 max-w-2xl mx-auto">
              Get detailed information about all our products, specifications, pricing, and ordering details in one comprehensive PDF
            </p>
            <button className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors inline-flex items-center gap-2">
              <Download size={20} />
              Download PDF Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We can customize products, packaging, and delivery based on your specific requirements
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors inline-flex items-center gap-2"
          >
            Contact Our Sales Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
