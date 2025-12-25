import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import HomePageClient from './home-client';

export const metadata: Metadata = {
  title: 'Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries',
  description: 'Leading packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, premium strapping machines (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence. Quality industrial packaging strap solutions globally.',
  keywords: [
    'packaging strap manufacturer',
    'strapping machine manufacturer',
    'PP strap manufacturer',
    'PET strap manufacturer',
    'automatic strapping machine',
    'semi-automatic strapping machine',
    'packaging strap manufacturer Pakistan',
    'industrial packaging strap manufacturer',
    'leading strap manufacturer',
    'quality packaging straps',
    'strapping machine Pakistan',
    'packaging strap solutions',
    'premium strapping machines',
    'industrial strapping equipment'
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
    title: 'Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries',
    description: 'Leading packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, premium strapping machines (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence.',
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
    title: 'Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries',
    description: 'Leading packaging strap manufacturer of PP/PET strap materials and premium strapping machines. Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence.',
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
