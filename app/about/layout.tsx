import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Best Packaging Strap Manufacturer | Top Industrial Packaging Strap Manufacturer | HB Sub Noor Industries',
  description: 'About best packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology. Best quality packaging strap manufacturer building trust through innovation. Learn about best packaging strap manufacturer journey, mission, and values.',
  keywords: [
    'about best packaging strap manufacturer',
    'best packaging strap manufacturer story',
    'top packaging strap manufacturer history',
    'best industrial packaging strap manufacturer about',
    'leading manufacturer company',
    'best quality manufacturer',
    'top-rated manufacturer',
    'premium packaging manufacturer about',
    'best manufacturer mission',
    'best manufacturer vision',
    'top manufacturer excellence',
    'best manufacturer values'
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
    title: 'About Best Packaging Strap Manufacturer | Top Industrial Packaging Strap Manufacturer | HB Sub Noor Industries',
    description: 'About best packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology and innovation.',
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
    title: 'About Best Packaging Strap Manufacturer | Top Industrial Packaging Strap Manufacturer',
    description: 'About best packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology.',
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

