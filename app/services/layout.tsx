import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Industrial Packaging Solutions & Support | HB Sub Noor Industries',
  description: 'End-to-end packaging solutions that combine superior products with expert service and support. Custom manufacturing, machinery solutions, technical support, and supply chain solutions. Comprehensive packaging services across Pakistan and globally.',
  keywords: [
    'packaging services',
    'custom manufacturing',
    'strapping machine solutions',
    'technical support packaging',
    'supply chain solutions',
    'packaging consultation',
    'industrial packaging services',
    'custom strap manufacturing',
    'packaging machinery support',
    'HB Sub Noor Industries services',
    'packaging solutions Pakistan'
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
    title: 'Services | Industrial Packaging Solutions & Support | HB Sub Noor Industries',
    description: 'End-to-end packaging solutions that combine superior products with expert service and support. Custom manufacturing, machinery solutions, and technical support available.',
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
    title: 'Services | Industrial Packaging Solutions & Support',
    description: 'End-to-end packaging solutions with expert service and support. Custom manufacturing and machinery solutions available.',
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

