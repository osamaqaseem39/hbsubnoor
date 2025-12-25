import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Strapping Machines & Quality Packaging Straps | HB Sub Noor Industries',
  description: 'Premium strapping machines (automatic & semi-automatic) and quality packaging straps (PP/PET). Custom sized, printed, coloured, and transparent straps available. Top-rated industrial packaging strap solutions from leading packaging strap manufacturer.',
  keywords: [
    'strapping machine',
    'automatic strapping machine',
    'semi-automatic strapping machine',
    'packaging straps',
    'PP strap',
    'PET strap',
    'custom sized strap',
    'printed strap',
    'coloured strap',
    'transparent strap',
    'quality strapping machines',
    'premium packaging straps',
    'industrial strapping equipment',
    'packaging strap manufacturer',
    'strapping machine supplier'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/products',
    title: 'Premium Strapping Machines & Quality Packaging Straps | HB Sub Noor Industries',
    description: 'Premium strapping machines (automatic & semi-automatic) and quality packaging straps (PP/PET). Top-rated industrial packaging strap solutions from leading packaging strap manufacturer.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/polypropylene-pp-strapping-material.png',
        width: 1200,
        height: 630,
        alt: 'Packaging Straps & Strapping Machines - HB Sub Noor Industries',
        type: 'image/png',
      },
      {
        url: '/images/semi-automatic-strapping-machine.png',
        width: 1200,
        height: 630,
        alt: 'Semi-automatic strapping machine - HB Sub Noor Industries',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Strapping Machines & Quality Packaging Straps',
    description: 'Premium strapping machines (automatic & semi-automatic) and quality packaging straps (PP/PET). Top-rated industrial packaging strap solutions from leading packaging strap manufacturer.',
    images: ['/images/polypropylene-pp-strapping-material.png'],
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

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

