'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919876543210'; // Replace with your WhatsApp number
  const message = encodeURIComponent('Hi, I am interested in your agricultural products.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover-lift transition-all duration-300 animate-bounce"
      title="Contact us on WhatsApp"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
