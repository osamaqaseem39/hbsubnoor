import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Packaging Straps & Strapping Machines | HB Sub Noor Industries',
  description: 'Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery. Custom sized, printed, coloured, and transparent straps. Fully automatic and semi-automatic strapping machines. PP and PET strap materials.',
  keywords: [
    'packaging straps',
    'strapping machines',
    'PP strap',
    'PET strap',
    'custom sized strap',
    'printed strap',
    'coloured strap',
    'transparent strap',
    'automatic strapping machine',
    'semi automatic strapping machine',
    'packaging solutions',
    'industrial straps',
    'HB Sub Noor Industries products',
    'packaging materials Pakistan'
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
    title: 'Products | Packaging Straps & Strapping Machines | HB Sub Noor Industries',
    description: 'Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery.',
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
    title: 'Products | Packaging Straps & Strapping Machines',
    description: 'Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery.',
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

