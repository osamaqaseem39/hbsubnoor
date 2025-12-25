import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Packaging Strap Services | Top Industrial Packaging Strap Solutions & Support | HB Sub Noor Industries',
  description: 'Best packaging strap services from top packaging strap manufacturer. Best custom strap manufacturing, best strapping machinery solutions, best technical support, and best supply chain solutions. Top-rated packaging strap services across Pakistan and globally from best packaging strap manufacturer.',
  keywords: [
    'best packaging services',
    'best custom manufacturing',
    'best strapping machine solutions',
    'best technical support packaging',
    'best supply chain solutions',
    'top packaging consultation',
    'best industrial packaging services',
    'best custom strap manufacturing',
    'best packaging machinery support',
    'top-rated packaging services',
    'best manufacturer services',
    'premium packaging solutions',
    'best packaging services Pakistan'
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
    title: 'Best Packaging Strap Services | Top Industrial Packaging Strap Solutions & Support | HB Sub Noor Industries',
    description: 'Best packaging strap services from top packaging strap manufacturer. Best custom strap manufacturing, best strapping machinery solutions, and best technical support available from best packaging strap manufacturer.',
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
    title: 'Best Packaging Strap Services | Top Industrial Packaging Strap Solutions & Support',
    description: 'Best packaging strap services from top packaging strap manufacturer. Best custom strap manufacturing, best strapping machinery solutions, and best technical support available.',
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

