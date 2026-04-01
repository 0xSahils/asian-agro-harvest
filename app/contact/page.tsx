'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Users } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({ name: '', company: '', email: '', phone: '', country: '', product: '', message: '' });
  };

  return (
    <>
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-accent via-secondary to-tertiary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/contact-business-meeting.jpg"
            alt="Business meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl font-dm-sans">
            Have questions? We respond within 24 hours and are excited to explore how we can help your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-up">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-12">Contact Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">Head Office</h3>
                    <p className="text-muted-foreground leading-relaxed font-dm-sans text-sm">
                      Asian Agro Harvest Industries LLP<br />
                      New Delhi, India<br />
                      <span className="text-xs text-muted-foreground">Import Export Code: [IEC Pending]</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground font-dm-sans text-sm">
                      <a href="tel:+919876543210" className="hover:text-secondary transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="hover:text-secondary transition-colors">
                        +91 98765 43211
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground font-dm-sans text-sm">
                      <a href="mailto:sales@agroexport.com" className="hover:text-secondary transition-colors">
                        sales@asianagroharvest.com
                      </a>
                      <br />
                      <a href="mailto:info@agroexport.com" className="hover:text-secondary transition-colors">
                        info@asianagroharvest.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground font-dm-sans text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300">
                  <MessageSquare className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">Quick Chat</h3>
                    <p className="text-muted-foreground font-dm-sans text-sm">
                      <a href="https://wa.me/919876543210" className="hover:text-secondary transition-colors">
                        Message us on WhatsApp for quick responses
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Images */}
              <div className="mt-12">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Our Office</h3>
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/contact-modern-office.jpg"
                    alt="Modern office space"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 fade-in-up">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
                  >
                    <option value="">Select Country</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="UK">United Kingdom</option>
                    <option value="USA">United States</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
                  >
                    <option value="">Product Interest</option>
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="spices">Spices</option>
                    <option value="pulses">Pulses</option>
                    <option value="vegetables">Vegetables</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message / Special Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
                >
                  Send Inquiry
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We will respond to your inquiry within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Communication Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">We&apos;re Here to Help</h2>
            <p className="text-lg text-muted-foreground font-dm-sans">Dedicated team ready to discuss your agricultural sourcing needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up">
              <Image
                src="/images/contact-communication.jpg"
                alt="Customer communication team"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Responsive Support</h4>
                  <p className="text-white/80 mt-2">24/7 available for your inquiries and concerns</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/contact-business-meeting.jpg"
                alt="Business partnership meeting"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-playfair font-bold">Partnership Focus</h4>
                  <p className="text-white/80 mt-2">Building long-term relationships with our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
