'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { Globe, Ship, Users, TrendingUp, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function GlobalPresencePage() {
  const regions = [
    {
      region: 'Middle East & GCC',
      countries: 'UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman',
      specialty: 'Spices, Rice, Pulses',
      contact: 'Regional Hub: Dubai',
    },
    {
      region: 'Europe',
      countries: 'Netherlands, Germany, UK, Italy, France, Spain',
      specialty: 'Organic Produce, Specialty Grains',
      contact: 'Distribution: Rotterdam',
    },
    {
      region: 'Americas',
      countries: 'USA, Canada, Mexico, Brazil, Colombia',
      specialty: 'Premium Basmati, Spice Blends',
      contact: 'Logistics: Houston, New York',
    },
    {
      region: 'Asia-Pacific',
      countries: 'Singapore, Malaysia, Thailand, Australia, Vietnam',
      specialty: 'All Products, Fresh Produce',
      contact: 'Hub: Singapore',
    },
  ];

  const capabilities = [
    {
      icon: Ship,
      title: 'Shipping Network',
      desc: 'Direct relationships with major shipping lines for reliable maritime trade',
    },
    {
      icon: Users,
      title: 'Local Partners',
      desc: 'Trusted distributors and partners in key markets worldwide',
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      desc: 'Deep understanding of regional preferences and trade requirements',
    },
    {
      icon: MapPin,
      title: 'Port Access',
      desc: 'Strategic partnerships with major ports for efficient logistics',
    },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/global-world-map.jpg"
            alt="World map and global trade"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">Global Presence</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            Strategic reach across continents with efficient logistics and trusted partnerships
          </p>
        </div>
      </section>

      {/* Global Networks */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">WORLDWIDE REACH</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">Our Regional Markets</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">Serving buyers across diverse markets with tailored solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {regions.map((region, idx) => (
              <div
                key={region.region}
                className="bg-card rounded-2xl p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 hover-lift fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-4">{region.region}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Countries</p>
                    <p className="text-foreground text-sm mt-1 font-dm-sans">{region.countries}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Specialties</p>
                    <p className="text-foreground text-sm mt-1 font-dm-sans">{region.specialty}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Contact Point</p>
                    <p className="text-foreground text-sm mt-1 font-dm-sans">{region.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Global Capabilities */}
          <div className="mb-20">
            <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-8">Global Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 fade-in-up text-center"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h4 className="font-playfair font-bold text-foreground mb-2">{cap.title}</h4>
                    <p className="text-muted-foreground text-sm font-dm-sans">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Global Trade Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up">
              <Image
                src="/images/global-port-operations.jpg"
                alt="Port operations"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">International Shipping</h4>
                  <p className="text-white/80 mt-2">Reliable maritime trade across global ports</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/global-international-trade.jpg"
                alt="International business partnerships"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Business Partnerships</h4>
                  <p className="text-white/80 mt-2">Multicultural networks built on trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-tertiary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Expand to New Markets?</h2>
          <p className="text-lg text-white/90 mb-8 font-dm-sans max-w-2xl mx-auto">
            Let us help you navigate international markets and connect with reliable suppliers across continents.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 inline-block text-lg"
          >
            Start Global Trading
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
