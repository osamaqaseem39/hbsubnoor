import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import HomePageClient from './home-client';

export const metadata: Metadata = {
  title: 'Home | Industrial Packaging & Strap Solutions | HB Sub Noor Industries',
  description: 'HB Sub Noor Industries - Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions across Pakistan and globally.',
  keywords: [
    'industrial packaging',
    'strap solutions',
    'PP strap',
    'PET strap',
    'strapping machines',
    'semi-automatic strapping machine',
    'automatic strapping machine',
    'packaging materials',
    'polypropylene strap',
    'polyester strap',
    'HB Sub Noor',
    'packaging security',
    'industrial strap',
    'Pakistan packaging solutions',
    'packaging manufacturer Pakistan'
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
    title: 'HB Sub Noor Industries | Industrial Packaging & Strap Solutions',
    description: 'Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions across Pakistan and globally.',
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
    title: 'HB Sub Noor Industries | Industrial Packaging & Strap Solutions',
    description: 'Leading manufacturer of industrial packaging and strap solutions. Over 25 years of excellence in PP/PET strap materials and strapping machines.',
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
