'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Truck, Users, TrendingUp, Globe, Handshake, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WhyUsPage() {
  const advantages = [
    { 
      icon: Handshake, 
      title: 'Direct Relationships', 
      desc: 'We work directly with farmers, eliminating middlemen and ensuring fair prices for all parties',
      image: '/images/why-us-trust-reliability.jpg'
    },
    { 
      icon: Award, 
      title: 'Quality First', 
      desc: 'Every product undergoes rigorous lab testing and international certification before delivery',
      image: '/images/product-quality-check.jpg'
    },
    { 
      icon: Zap, 
      title: 'Complete Transparency', 
      desc: 'Full visibility into sourcing, quality reports, documentation, and shipping at every step',
      image: '/images/services-documentation.jpg'
    },
    { 
      icon: Globe, 
      title: 'Global Logistics', 
      desc: 'Reliable shipping to 50+ countries with real-time tracking and comprehensive support',
      image: '/images/export-container-ship.jpg'
    },
    { 
      icon: Users, 
      title: 'Expert Support', 
      desc: 'Dedicated team available 24/7 for inquiries, issues, and post-delivery assistance',
      image: '/images/contact-communication.jpg'
    },
    { 
      icon: Truck, 
      title: 'Professional Packaging', 
      desc: 'Export-ready packaging and labeling that meets all international regulatory standards',
      image: '/images/premium-packaging.jpg'
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Farsi",
      company: "Gulf Foods Trading Co.",
      country: "UAE",
      quote: "Asian Agro Harvest has consistently delivered top-quality basmati rice. Their direct-to-farm approach ensures we get the best prices without compromising on quality."
    },
    {
      name: "Maria Rodriguez",
      company: "Iberia Imports",
      country: "Spain",
      quote: "The transparency in their documentation and tracking process is unmatched. We always know exactly where our shipment is and when it will arrive."
    },
    {
      name: "David Chen",
      company: "Pacific Rim Distributors",
      country: "Singapore",
      quote: "Their professional packaging and strict adherence to international standards make customs clearance a breeze. Highly recommended partner."
    }
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-tertiary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/why-us-trust-reliability.jpg"
            alt="Trust and reliability"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">Why Choose Asian Agro Harvest?</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            Built on transparency, quality, and commitment to building lasting partnerships
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-tertiary font-playfair font-bold text-sm uppercase tracking-widest">OUR ADVANTAGES</span>
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4 mt-3">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground font-dm-sans max-w-2xl mx-auto">Six key reasons why leading importers trust us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-tertiary hover:shadow-xl transition-all duration-300 hover-lift fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-40 bg-gradient-to-br from-tertiary to-secondary opacity-20" />
                  <div className="p-8 -mt-12 relative z-10">
                    <Icon className="w-12 h-12 text-tertiary mb-4" />
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-3">{adv.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-dm-sans">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Advantage Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up">
              <Image
                src="/images/why-us-innovation-tech.jpg"
                alt="Innovation and technology"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Modern Infrastructure</h4>
                  <p className="text-white/80 mt-2">Equipped with technology for efficient operations</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/about-office-team.jpg"
                alt="Professional team"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Expert Team</h4>
                  <p className="text-white/80 mt-2">Dedicated professionals with agricultural expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-gradient-to-r from-tertiary/10 to-secondary/10 rounded-3xl p-12 border border-tertiary/20">
            <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-12">Why We&apos;re Different</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-playfair font-bold text-foreground mb-4">Traditional Exporters</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">✗</span>
                    <span className="text-muted-foreground">Multiple middlemen involved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">✗</span>
                    <span className="text-muted-foreground">Limited transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">✗</span>
                    <span className="text-muted-foreground">Slow communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">✗</span>
                    <span className="text-muted-foreground">Generic approach</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-bold text-secondary mb-4">Asian Agro Harvest</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Direct farmer partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Complete visibility throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Customized solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers That Speak */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Numbers That Speak</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Orders Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-muted h-64 md:h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm">[Case Study Image]</p>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Case Study</h2>
                <p className="text-xl text-primary font-bold mb-4">
                  500 Tons of Basmati Rice Delivered to UAE in 21 Days
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A major UAE food distributor needed 500 tons of premium basmati rice within a tight timeline. We coordinated with multiple farmers, conducted quality testing, arranged packaging, cleared customs, and delivered to their warehouse - all within 21 days. The client was extremely satisfied with quality and timing.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-bold text-foreground">Result:</span> <span className="text-muted-foreground">100% on-time delivery with zero quality issues</span></p>
                  <p className="text-sm"><span className="font-bold text-foreground">Client Satisfaction:</span> <span className="text-muted-foreground">Repeat orders for next 3 years</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-tertiary via-secondary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-white/90 mb-8 font-dm-sans max-w-2xl mx-auto">
            Join dozens of satisfied buyers who trust us for quality agricultural exports.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 inline-block text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
