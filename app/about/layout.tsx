import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Leading Packaging Strap Manufacturer | HB Sub Noor Industries',
  description: 'Leading packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology. Quality packaging strap manufacturer building trust through innovation. Learn about our journey, mission, and values.',
  keywords: [
    'packaging strap manufacturer about',
    'packaging strap manufacturer story',
    'packaging strap manufacturer history',
    'industrial packaging strap manufacturer',
    'leading manufacturer company',
    'quality manufacturer',
    'packaging strap manufacturer mission',
    'packaging strap manufacturer vision',
    'manufacturer excellence',
    'packaging strap manufacturer values',
    'packaging company Pakistan',
    'strap manufacturer history'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/about',
    title: 'About Us | Leading Packaging Strap Manufacturer | HB Sub Noor Industries',
    description: 'Leading packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology and innovation.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - About Us',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Leading Packaging Strap Manufacturer',
    description: 'Leading packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology.',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

