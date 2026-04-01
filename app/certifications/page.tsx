'use client';

import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { Award, Shield, Leaf, CheckCircle2 } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      icon: Award,
      name: 'IEC Registration',
      desc: 'Import Export Code',
      why: 'Official government authorization for international trade',
    },
    {
      icon: Shield,
      name: 'APEDA Certification',
      desc: 'Agricultural and Processed Food Products Export Development Authority',
      why: 'Ensures compliance with agricultural export standards',
    },
    {
      icon: CheckCircle2,
      name: 'FSSAI License',
      desc: 'Food Safety and Standards Authority of India',
      why: 'Guarantees food safety and quality compliance',
    },
    {
      icon: Award,
      name: 'ISO Certification',
      desc: 'International Organization for Standardization',
      why: 'Demonstrates quality management system excellence',
    },
    {
      icon: Shield,
      name: 'Phytosanitary Certificates',
      desc: 'Plant Health Certification',
      why: 'Ensures products are free from pests and diseases',
    },
    {
      icon: Leaf,
      name: 'Organic Certification',
      desc: 'Certified Organic Products',
      why: 'Verification of organic farming practices and standards',
    },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Certifications & Compliance</h1>
          <p className="text-xl text-primary-lighter max-w-2xl">
            Quality you can trust. Verified by international standards.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <Icon className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{cert.desc}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{cert.why}</p>
                  <button className="text-primary font-semibold hover:text-primary-light transition-colors text-sm">
                    View Certificate →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Quality Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 'Farm', desc: 'Direct sourcing from certified farms' },
              { step: 'Testing', desc: 'Comprehensive lab testing' },
              { step: 'Packaging', desc: 'Professional packaging & labeling' },
              { step: 'Certified Export', desc: 'All international certifications' },
            ].map((item, idx) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.step}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">International Compliance</h2>
            <p className="text-primary-lighter text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              We comply with EU, FDA, and Gulf food safety regulations. All products undergo rigorous testing and inspection to meet international standards. Our commitment to quality ensures your complete satisfaction.
            </p>
            <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors">
              Download Compliance Documents
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
