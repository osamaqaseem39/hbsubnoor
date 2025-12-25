import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Packaging Strap Manufacturer Company | Leading Industrial Packaging Strap Manufacturer | HB Sub Noor Industries',
  description: 'Best packaging strap manufacturer company in Pakistan. Leading industrial packaging strap manufacturer with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders worldwide. Best quality assurance and innovation in packaging strap solutions.',
  keywords: [
    'best packaging strap manufacturer company',
    'best packaging strap manufacturer company Pakistan',
    'leading packaging strap manufacturer',
    'top packaging strap manufacturer',
    'best industrial packaging strap manufacturer',
    'top-rated packaging company',
    'best quality packaging manufacturer',
    'leading strap manufacturer company',
    'premium packaging manufacturer',
    'best manufacturer packaging solutions',
    'top manufacturer strapping machines',
    'best packaging company excellence'
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
    title: 'Best Packaging Strap Manufacturer Company | Leading Industrial Packaging Strap Manufacturer | HB Sub Noor Industries',
    description: 'Best packaging strap manufacturer company in Pakistan. Leading industrial packaging strap manufacturer with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders worldwide.',
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
    title: 'Best Packaging Strap Manufacturer Company | Leading Industrial Packaging Strap Manufacturer',
    description: 'Best packaging strap manufacturer company in Pakistan. Leading industrial packaging strap manufacturer with excellence in operations. Top-rated packaging strap manufacturer trusted by industry leaders.',
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

