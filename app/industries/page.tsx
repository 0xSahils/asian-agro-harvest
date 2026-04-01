'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { Store, BarChart3, ChefHat, Package, Building2, Flame } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesPage() {
  const buyers = [
    {
      icon: Store,
      title: 'Wholesalers & Distributors',
      desc: 'Bulk agricultural products for distribution networks',
      products: 'Rice, Wheat, Pulses, Spices, Oil Seeds',
    },
    {
      icon: BarChart3,
      title: 'Retail Chains & Supermarkets',
      desc: 'Packaged products with custom branding and packaging',
      products: 'Premium Rice, Flour, Spice Blends, Organic Pulses',
    },
    {
      icon: Package,
      title: 'Food Processors & Manufacturers',
      desc: 'Raw materials for food processing and manufacturing',
      products: 'Grains, Spices, Seeds, Dried Vegetables',
    },
    {
      icon: ChefHat,
      title: 'Hotels, Restaurants & Catering (HORECA)',
      desc: 'Premium quality ingredients for hospitality industry',
      products: 'Basmati Rice, Fresh Vegetables, Specialty Spices',
    },
    {
      icon: Building2,
      title: 'Government & Institutional Buyers',
      desc: 'Large volume supplies for government procurement',
      products: 'Essential commodities, pulses, grains',
    },
    {
      icon: BarChart3,
      title: 'International Importers',
      desc: 'Direct exports with full documentation and logistics',
      products: 'All product categories with custom packaging',
    },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/industries-food-manufacturers.jpg"
            alt="Food manufacturing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            Customized solutions for food manufacturers, retailers, restaurants, and importers worldwide
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">CUSTOMER BASE</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">We have customized solutions for every type of buyer</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {buyers.map((buyer, idx) => {
              const Icon = buyer.icon;
              return (
                <div
                  key={buyer.title}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 hover-lift fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">{buyer.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-dm-sans text-sm">{buyer.desc}</p>
                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <p className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">Suitable Products:</p>
                    <p className="text-sm text-muted-foreground font-dm-sans">{buyer.products}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Industry Showcase Images */}
          <div className="mt-20">
            <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-8">Our Reach Across Industries</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up">
                <Image
                  src="/images/industries-food-manufacturers.jpg"
                  alt="Food manufacturers"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-playfair font-bold">Food Manufacturing</h4>
                    <p className="text-white/80 mt-2">Raw materials for processors and manufacturers</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/industries-restaurants-hospitality.jpg"
                  alt="Restaurant and hospitality"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-playfair font-bold">Hotels & Restaurants</h4>
                    <p className="text-white/80 mt-2">Premium ingredients for hospitality sector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Source Agricultural Products?</h2>
          <p className="text-lg text-white/90 mb-8 font-dm-sans max-w-2xl mx-auto">
            Whatever your industry or scale, we have solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 inline-block text-lg"
          >
            Discuss Your Needs
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
