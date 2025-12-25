import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packaging Strap Services | Industrial Packaging Solutions & Support | HB Sub Noor Industries',
  description: 'Comprehensive packaging strap services from leading packaging strap manufacturer. Custom strap manufacturing, premium strapping machinery solutions, expert technical support, and reliable supply chain solutions. Quality packaging strap services across Pakistan and globally.',
  keywords: [
    'packaging strap services',
    'custom strap manufacturing',
    'strapping machine solutions',
    'technical support packaging',
    'supply chain solutions',
    'packaging consultation',
    'industrial packaging services',
    'custom strap manufacturing',
    'packaging machinery support',
    'packaging services Pakistan',
    'strapping machine installation',
    'packaging solutions support',
    'strap manufacturing services'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/services',
    title: 'Packaging Strap Services | Industrial Packaging Solutions & Support | HB Sub Noor Industries',
    description: 'Comprehensive packaging strap services from leading packaging strap manufacturer. Custom strap manufacturing, premium strapping machinery solutions, and expert technical support available.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Strap Services | Industrial Packaging Solutions & Support',
    description: 'Comprehensive packaging strap services from leading packaging strap manufacturer. Custom strap manufacturing, premium strapping machinery solutions, and expert technical support available.',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

