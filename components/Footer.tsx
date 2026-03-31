'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-lg font-playfair">AAH</span>
              </div>
              <span className="font-bold text-lg font-playfair">Asian Agro Harvest</span>
            </div>
            <p className="text-sm text-white/80 font-dm-sans">
              Connecting Indian fields to the world with premium agricultural products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-lighter hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                'Premium Rice',
                'Wheat & Grains',
                'Indian Spices',
                'Pulses',
                'Fresh Vegetables',
                'Oil Seeds',
              ].map((product) => (
                <li key={product}>
                  <span className="text-sm text-primary-lighter">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-lighter">
                  New Delhi, India
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-lighter">
                  +91 XX XXXX XXXX
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-lighter">
                  info@agroexport.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-primary-light py-8">
          <p className="text-sm text-primary-lighter text-center mb-4">
            Certified & Trusted Global Standards
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">APEDA</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">FSSAI</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">IEC</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">ISO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-light pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-primary-lighter">
            © 2024 Asian Agro Harvest Industries LLP. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-10 rounded flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-10 rounded flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
