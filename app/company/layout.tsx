import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Packaging Strap Manufacturer | Industrial Packaging Solutions | HB Sub Noor Industries',
  description: 'Leading packaging strap manufacturer in Pakistan with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders worldwide. Quality assurance and innovation in packaging strap solutions.',
  keywords: [
    'packaging strap manufacturer',
    'packaging strap manufacturer Pakistan',
    'leading packaging strap manufacturer',
    'top packaging strap manufacturer',
    'industrial packaging strap manufacturer',
    'packaging strap manufacturer company',
    'quality packaging strap manufacturer',
    'strap manufacturer',
    'premium packaging strap manufacturer',
    'packaging strap solutions',
    'strapping machine manufacturer',
    'packaging strap company'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/company',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/company',
    title: 'Leading Packaging Strap Manufacturer | Industrial Packaging Solutions | HB Sub Noor Industries',
    description: 'Leading packaging strap manufacturer in Pakistan with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders worldwide.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading Packaging Strap Manufacturer | Industrial Packaging Solutions',
    description: 'Leading packaging strap manufacturer in Pakistan with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders.',
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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

