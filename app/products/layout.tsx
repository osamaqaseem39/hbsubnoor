import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Strapping Machines & Packaging Straps | Top Quality Products | HB Sub Noor Industries',
  description: 'Best strapping machines (automatic & semi-automatic) and best quality packaging straps (PP/PET). Best custom sized, printed, coloured, and transparent straps. Top-rated industrial packaging strap solutions from best packaging strap manufacturer.',
  keywords: [
    'best strapping machine',
    'best automatic strapping machine',
    'best semi-automatic strapping machine',
    'best packaging straps',
    'best PP strap',
    'best PET strap',
    'best custom sized strap',
    'best printed strap',
    'best coloured strap',
    'best transparent strap',
    'top quality strapping machines',
    'best quality packaging straps',
    'premium strapping machine',
    'best manufacturer strapping machines',
    'top-rated packaging solutions'
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
    title: 'Best Strapping Machines & Packaging Straps | Top Quality Products | HB Sub Noor Industries',
    description: 'Best strapping machines (automatic & semi-automatic) and best quality packaging straps (PP/PET). Top-rated industrial packaging strap solutions from best packaging strap manufacturer.',
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
    title: 'Best Strapping Machines & Packaging Straps | Top Quality Products',
    description: 'Best strapping machines (automatic & semi-automatic) and best quality packaging straps (PP/PET). Top-rated industrial packaging strap solutions from best packaging strap manufacturer.',
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

