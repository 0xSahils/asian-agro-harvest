'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { ArrowRight, Globe, Award, TrendingUp, Users, Truck, CheckCircle, Leaf } from 'lucide-react';

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => setCount(count + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [count, end]);

  return <>{count}</>;
};

export default function Home() {
  const whatWeDo = [
    { 
      icon: Leaf,
      title: 'Authentic Sourcing',
      desc: 'We partner directly with select Indian farmers to source the finest agricultural products from trusted producers'
    },
    { 
      icon: CheckCircle,
      title: 'Quality Excellence',
      desc: 'Every product undergoes rigorous testing and quality checks to meet international standards and customer expectations'
    },
    { 
      icon: Truck,
      title: 'Efficient Logistics',
      desc: 'We handle complete export documentation, customs clearance, and shipping to ensure timely delivery worldwide'
    },
    { 
      icon: Award,
      title: 'Certified Compliance',
      desc: 'Full APEDA, FSSAI, and ISO certification compliance ensures your products meet all international requirements'
    },
  ];

  const products = [
    { name: 'Basmati Rice', category: 'Premium Grains', desc: 'Extra-long grain, aromatic rice perfect for international markets' },
    { name: 'Wheat & Flour', category: 'Staple Grains', desc: 'High-protein whole wheat for flour production and food manufacturing' },
    { name: 'Indian Spices', category: 'Spices & Seasonings', desc: 'Authentic turmeric, cumin, coriander, and specialty blends' },
    { name: 'Lentils & Pulses', category: 'Protein Sources', desc: 'Organic certified lentils, chickpeas, and mixed pulses' },
    { name: 'Fresh Produce', category: 'Vegetables & Fruits', desc: 'Seasonal fresh vegetables with proper cold chain management' },
    { name: 'Oil Seeds', category: 'Agricultural Seeds', desc: 'Mustard, sunflower, and sesame seeds for global buyers' },
  ];

  const ourCapabilities = [
    { title: 'Product Sourcing', desc: 'Direct partnerships with verified farmers and producers across India' },
    { title: 'Quality Assurance', desc: 'Lab testing, certifications, and compliance with international food safety standards' },
    { title: 'Export Documentation', desc: 'Complete handling of certificates, permits, and international trade paperwork' },
    { title: 'Logistics & Shipping', desc: 'Sea freight, air cargo, and door-to-door delivery to any country' },
    { title: 'Packaging Solutions', desc: 'Professional packaging and labeling for international market requirements' },
    { title: 'Customer Support', desc: '24/7 support for orders, tracking, and post-delivery assistance' },
  ];

  const whyChooseUs = [
    { title: 'Direct Farm Access', desc: 'We work with select farmers ensuring quality from source to port' },
    { title: 'Competitive Pricing', desc: 'Fair prices that reflect true value without middleman markups' },
    { title: 'Complete Transparency', desc: 'Full visibility into sourcing, quality tests, and shipping of your products' },
    { title: 'Export Expertise', desc: 'Full knowledge of international compliance, regulations, and market requirements' },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/rice-field-sunrise.jpg"
            alt="Golden rice fields at sunrise"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 bg-accent text-primary font-playfair text-sm rounded-full font-bold">Starting Fresh with Quality</span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Bringing India's Agricultural Treasures to the World
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-xl font-dm-sans">
                At Asian Agro Harvest, we're building a new standard in agricultural exports. Connecting ethical farmers with discerning global buyers. Quality-first, transparency-driven, partnership-focused.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 inline-flex items-center justify-center gap-2 hover-lift text-lg shadow-lg"
                >
                  Our Products <ArrowRight size={24} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-playfair font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 text-center text-lg hover-lift"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative h-96 fade-in-down rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/farm-landscape-aerial.jpg"
                alt="Aerial view of organized farm fields"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-playfair font-bold text-center mb-4 fade-in-up">What We Do</h2>
          <p className="text-center text-white/90 text-lg mb-16 max-w-2xl mx-auto font-dm-sans">
            We've built our foundation on four core pillars to deliver exceptional agricultural exports
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 fade-in-up hover:bg-white/20 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm font-dm-sans leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-primary/30 via-primary-light/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden fade-in-up shadow-xl">
              <Image
                src="/images/farm-workers-team.jpg"
                alt="Indian farm workers and farmers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="fade-in-down">
              <span className="text-accent font-playfair font-bold text-sm uppercase tracking-widest">WHO WE ARE</span>
              <h2 className="text-5xl font-playfair font-bold text-foreground mb-6 mt-3">Building Trust Through Quality</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-dm-sans">
                Asian Agro Harvest Industries LLP is a new entrant committed to revolutionizing agricultural exports from India. We start with a simple promise: authentic products, transparent pricing, and partnership-first approach.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-dm-sans">
                We directly connect with select Indian farmers and producers, ensuring each product meets international standards. Our expertise spans sourcing, quality assurance, documentation, and logistics—everything needed to bring Indian agriculture to global markets.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded mb-6">
                <p className="text-foreground font-dm-sans text-sm">
                  <strong>Our Commitment:</strong> Fair prices for farmers, competitive rates for buyers, and zero compromises on quality.
                </p>
              </div>
              <Link
                href="/about"
                className="text-primary font-playfair font-bold hover:text-accent transition-colors inline-flex items-center gap-2 text-lg hover-lift"
              >
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 via-tertiary/10 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">WHAT WE SOURCE</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">Our Product Range</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">Premium agricultural products sourced from trusted Indian farmers and producers, export-ready and quality-assured</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, idx) => (
              <div
                key={product.name}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary hover:shadow-2xl transition-all duration-300 hover-lift fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-56 bg-gradient-to-br from-secondary to-secondary-light relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                    <Leaf className="w-32 h-32" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-playfair font-bold text-secondary mb-3 uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-dm-sans">{product.desc}</p>
                  <Link
                    href="/products"
                    className="text-secondary font-playfair font-bold hover:text-primary transition-colors inline-flex items-center gap-2 text-lg"
                  >
                    Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Product Images Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Our Products in Detail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up">
                <Image
                  src="/images/colorful-spices.jpg"
                  alt="Colorful Indian spices"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-playfair font-bold">Premium Spices</h4>
                    <p className="text-white/80 text-sm">Authentic Indian spice blends</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/premium-packaging.jpg"
                  alt="Premium packaging"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-playfair font-bold">Export Ready</h4>
                    <p className="text-white/80 text-sm">Professional packaging & labeling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-primary bg-primary text-white font-playfair font-bold rounded-lg hover:bg-primary-light transition-all duration-300 text-lg hover-lift inline-block"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-accent font-playfair font-bold text-sm uppercase tracking-widest">HOW WE HELP</span>
            <h2 className="text-5xl font-playfair font-bold mb-4 mt-3">Our Capabilities</h2>
            <p className="text-xl text-white/90 font-dm-sans max-w-2xl mx-auto">Complete agricultural export solutions handling every step from farm to final delivery</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ourCapabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-playfair font-bold mb-3">{cap.title}</h3>
                <p className="text-white/80 leading-relaxed font-dm-sans">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Services Images */}
          <div className="mt-20">
            <h3 className="text-3xl font-playfair font-bold text-center mb-8">See Us In Action</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up">
                <Image
                  src="/images/export-container-ship.jpg"
                  alt="Cargo ship container loading"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-playfair font-bold">Shipping & Logistics</h4>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/storage-facility.jpg"
                  alt="Storage facility"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-playfair font-bold">Storage & Safety</h4>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/laboratory-testing.jpg"
                  alt="Quality testing"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-playfair font-bold">Quality Testing</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-accent/30 via-accent-light/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-playfair font-bold text-foreground text-center mb-4 fade-in-up">Why Partner With Us</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg font-dm-sans max-w-2xl mx-auto">Built on transparency, quality, and commitment to building long-term relationships</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={reason.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-tertiary hover:shadow-2xl transition-all duration-300 text-center hover-lift fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-tertiary" />
                </div>
                <h3 className="text-lg font-playfair font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Section with Images */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-12">Building Trust Through Action</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <Image
                  src="/images/harvesting-crops.jpg"
                  alt="Farmers harvesting crops"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-playfair font-bold">Direct Farmer Partnerships</h4>
                    <p className="text-white/80 mt-2">Fair treatment and competitive rates for growers</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <Image
                  src="/images/product-quality-check.jpg"
                  alt="Quality inspection"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-playfair font-bold">Quality Assurance</h4>
                    <p className="text-white/80 mt-2">Rigorous testing at every stage of processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-12 text-lg font-dm-sans font-bold fade-in-up">We are committed to meeting international standards</p>
          <div className="flex flex-wrap justify-center gap-8 items-center mb-12">
            {['APEDA', 'FSSAI', 'ISO Certified', 'Export License', 'Quality Assured'].map((cert, idx) => (
              <div key={cert} className="flex items-center justify-center fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="px-6 py-3 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-full border-2 border-secondary hover:shadow-lg transition-all duration-300 hover-lift">
                  <span className="text-sm font-playfair font-bold">{cert}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certification Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/certifications-quality.jpg"
              alt="International certifications and quality standards"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-tertiary via-tertiary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="text-5xl font-playfair font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-dm-sans max-w-2xl mx-auto">
            Contact us today to discuss your agricultural sourcing needs. We're here to find the right solutions for your business.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 inline-block text-lg hover-lift shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
