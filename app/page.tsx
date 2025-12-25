import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import HomePageClient from './home-client';

export const metadata: Metadata = {
  title: 'Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries',
  description: 'Best packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, best strapping machine manufacturer (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence. Best quality industrial packaging strap solutions globally.',
  keywords: [
    'best manufacturer strapping machine',
    'best strapping machine manufacturer',
    'best packaging strap manufacturer',
    'best PP strap manufacturer',
    'best PET strap manufacturer',
    'best automatic strapping machine',
    'best semi-automatic strapping machine',
    'top packaging strap manufacturer Pakistan',
    'best industrial packaging strap manufacturer',
    'leading strap manufacturer',
    'best quality packaging straps',
    'best strapping machine Pakistan',
    'top-rated packaging solutions',
    'best manufacturer packaging materials',
    'premium strapping machine manufacturer'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com',
    title: 'Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries',
    description: 'Best packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, best strapping machine manufacturer (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - Industrial Packaging & Strap Solutions',
        type: 'image/png',
      },
      {
        url: '/images/semi-automatic-strapping-machine.png',
        width: 1200,
        height: 630,
        alt: 'Semi-automatic strapping machine - HB Sub Noor Industries',
        type: 'image/png',
      },
      {
        url: '/images/polypropylene-pp-strapping-material.png',
        width: 1200,
        height: 630,
        alt: 'Polypropylene PP strap material - HB Sub Noor Industries',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries',
    description: 'Best packaging strap manufacturer of PP/PET strap materials and best strapping machine manufacturer. Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence.',
    images: ['/images/hb-sub-noor-industries-logo.png'],
    creator: '@hbsubnoor',
    site: '@hbsubnoor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return <HomePageClient />;
}
