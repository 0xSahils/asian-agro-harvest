'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Package, Truck, Building2, Shield, BarChart3, FileCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Export Management',
      description: 'End-to-end handling of your export orders with complete documentation and customs clearance support.',
      features: ['Order sourcing', 'Documentation', 'Quality checks', 'Packaging & labeling'],
    },
    {
      icon: Shield,
      title: 'Customs Clearance',
      description: 'Expert handling of HS codes, Bills of Lading, Certificates of Origin, and Phytosanitary certificates.',
      features: ['HS code classification', 'BOL preparation', 'COO issuance', 'Phytosanitary certs'],
    },
    {
      icon: Package,
      title: 'Freight Forwarding',
      description: 'Sea and air freight forwarding with partnerships with top logistics companies worldwide.',
      features: ['Sea freight', 'Air freight', 'Door-to-door', 'Real-time tracking'],
    },
    {
      icon: Building2,
      title: 'Warehousing',
      description: 'Safe storage facilities for both perishable and dry goods with climate control options.',
      features: ['Climate control', 'Secure storage', 'Inventory management', 'Cold storage'],
    },
    {
      icon: BarChart3,
      title: 'Import Procurement',
      description: 'Sourcing international goods and products for Indian buyers with quality assurance.',
      features: ['Product sourcing', 'Quality verification', 'Price negotiation', 'Delivery management'],
    },
    {
      icon: CheckCircle2,
      title: 'Quality Inspection',
      description: 'Lab-certified quality testing and inspection before dispatch to ensure premium standards.',
      features: ['Lab testing', 'Quality reports', 'Certifications', 'Pre-dispatch checks'],
    },
  ];

  const process = [
    { step: 1, title: 'Order Inquiry', desc: 'Receive and evaluate your requirements' },
    { step: 2, title: 'Product Sourcing', desc: 'Source the best products from our network' },
    { step: 3, title: 'Quality Check', desc: 'Lab-certified quality testing and verification' },
    { step: 4, title: 'Packaging', desc: 'Professional packaging and labeling' },
    { step: 5, title: 'Shipping', desc: 'Arrange freight and customs clearance' },
    { step: 6, title: 'Delivery', desc: 'Door-to-door delivery to your location' },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/services-documentation.jpg"
            alt="Export documentation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            Complete agricultural export solutions handling every step from source to delivery
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">COMPREHENSIVE SUPPORT</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">Complete Service Suite</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">We handle every aspect of your agricultural export journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 hover-lift fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-dm-sans text-sm">{service.description}</p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up">
              <Image
                src="/images/services-quality-management.jpg"
                alt="Quality management and testing"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Quality Management</h4>
                  <p className="text-white/80 mt-2">Lab-certified testing, compliance verification</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/processing-plant.jpg"
                alt="Processing and packaging"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Processing & Packaging</h4>
                  <p className="text-white/80 mt-2">Professional preparation for international markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Process</h2>

          {/* Process Flow */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {process.map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-xl p-6 border-2 border-primary text-center h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 w-6 h-6 text-primary -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-8">From inquiry to delivery - we manage everything</p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors inline-flex items-center gap-2"
            >
              Start Your Order <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">15+ Years Experience</h3>
                    <p className="text-muted-foreground">Proven track record in international agricultural trade</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Global Network</h3>
                    <p className="text-muted-foreground">Partners in 30+ countries for seamless logistics</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Quality Certified</h3>
                    <p className="text-muted-foreground">APEDA, FSSAI, IEC, ISO certified operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Dedicated support team for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center text-muted-foreground border border-border">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Service Image</p>
                <p className="text-sm">[Warehouse / Logistics]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Service Solutions?</h2>
          <p className="text-primary-lighter text-lg mb-8">
            We can tailor our services to meet your specific business requirements
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors inline-flex items-center gap-2"
          >
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
