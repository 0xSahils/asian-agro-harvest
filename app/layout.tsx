import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-playfair' });
const _dmSans = DM_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Asian Agro Harvest Industries LLP | Premium Agricultural Exports',
  description: 'Connecting Indian fields to the world. Premium agricultural exports from India trusted by 30+ countries. Quality assured rice, wheat, spices, pulses, and fresh produce.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Asian Agro Harvest Industries LLP',
    description: 'Premium agricultural exports from India - Trusted by 30+ countries',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_dmSans.variable}`}>
      <body className="font-dm-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
