'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Heart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Farmer First',
      desc: 'Fair pricing and direct relationships with agricultural producers',
    },
    {
      icon: CheckCircle,
      title: 'Quality Obsessed',
      desc: 'Every product tested and certified to international standards',
    },
    {
      icon: Target,
      title: 'Transparency',
      desc: 'Complete visibility from farm to final customer delivery',
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      desc: 'Continuously improving processes and expanding capabilities',
    },
  ];

  const ourApproach = [
    {
      title: 'Direct Farmer Partnerships',
      desc: 'We work directly with select farmers, ensuring fair compensation and sustainable practices. No middlemen, just honest relationships.',
    },
    {
      title: 'Rigorous Quality Control',
      desc: 'Every batch undergoes laboratory testing. We follow international food safety standards (FSSAI, APEDA, ISO certifications).',
    },
    {
      title: 'Complete Documentation',
      desc: 'Full export documentation, certificates, and compliance handling. We manage everything so you can focus on your business.',
    },
    {
      title: 'Reliable Logistics',
      desc: 'Sea freight, air cargo, or door-to-door delivery. We handle shipping to any country with full tracking and insurance.',
    },
  ];

  const timeline = [
    { year: '2023', event: 'Company Founded', desc: 'Established Asian Agro Harvest Industries LLP with a vision to connect farmers to global markets.' },
    { year: '2023', event: 'First Partnerships', desc: 'Secured direct partnerships with over 500 farmers across India.' },
    { year: '2024', event: 'Export Licensing', desc: 'Obtained APEDA, FSSAI, and crucial international export certifications.' },
    { year: '2024', event: 'Global Launch', desc: 'Commenced first official export shipments with comprehensive quality control.' },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/about-mission-vision.jpg"
            alt="Sunrise over fields symbolizing mission"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">About Asian Agro Harvest Industries LLP</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            A new entrant committed to bringing authentic Indian agriculture to global markets with complete transparency
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl fade-in-up">
              <Image
                src="/images/about-office-team.jpg"
                alt="Our professional team"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="fade-in-down">
              <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">OUR BEGINNING</span>
              <h2 className="text-5xl font-playfair font-bold text-foreground mb-6 mt-3">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-dm-sans">
                Asian Agro Harvest Industries LLP is a new and dedicated player in agricultural exports. We're building our foundation on a simple principle: connect honest farmers with ethical global buyers, ensuring fair pricing and uncompromised quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-dm-sans">
                We manage the complete export journey—from sourcing premium products directly from farmers, through rigorous quality testing, to professional documentation and reliable shipping. Our goal is to make international agricultural trade transparent, trustworthy, and straightforward.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-dm-sans">
                Every product we export carries the promise of authenticity, quality, and fair value. We're not just traders—we're builders of lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">OUR FOUNDATION</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">Core Values</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">What guides every decision we make and every product we export</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 hover-lift fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-dm-sans">{value.desc}</p>
                </div>
              );
            })}
          </div>
          
          {/* Mission & Vision Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up">
              <Image
                src="/images/about-farmer-partnership.jpg"
                alt="Direct farmer partnerships"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Direct Farmer Partnerships</h4>
                  <p className="text-white/80 mt-2">Fair prices. Ethical relationships. Sustainable growth.</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/about-sustainable-farming.jpg"
                alt="Sustainable farming practices"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Sustainable Agriculture</h4>
                  <p className="text-white/80 mt-2">Eco-friendly practices. Soil health. Long-term growth.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-secondary font-playfair font-bold text-sm uppercase tracking-widest">OUR APPROACH</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">How We Work</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">A transparent four-step approach that ensures quality and reliability</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ourApproach.map((item, idx) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-secondary/10 to-tertiary/10 border border-secondary rounded-2xl p-8 hover:shadow-lg transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 font-playfair font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-dm-sans">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Section with Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-rural-community.jpg"
              alt="Rural farming community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-playfair font-bold mb-2">Building Community Value</h3>
                <p className="text-lg text-white/90">We invest in the communities we source from. Fair prices, training, and support create shared prosperity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-8 items-start">
                <div className="w-32 flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-grow border-l-2 border-primary pl-8 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.event}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Founder & MD', role: 'Managing Director', exp: '20+ years' },
              { name: 'Export Manager', role: 'Export Operations', exp: '15+ years' },
              { name: 'Quality Head', role: 'Quality Assurance', exp: '12+ years' },
              { name: 'Logistics Head', role: 'Supply Chain', exp: '10+ years' },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <div className="bg-muted h-48 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p className="text-sm">[Team Photo]</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.exp} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-primary-lighter text-lg mb-8">
            Join hundreds of satisfied buyers across the globe
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
