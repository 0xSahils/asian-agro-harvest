'use client';

import { Phone, Mail, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

export default function TopBar() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={16} />
              <span>+91 XX XXXX XXXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} />
              <span>info@agroexport.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={16} />
              <span>Mon–Sat, 9AM–6PM</span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-muted-foreground" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-sm font-medium cursor-pointer border-0 p-0 focus:outline-none text-foreground"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
