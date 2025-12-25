import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Values | HB Sub Noor Industries',
  description: 'Three decades of transforming industrial packaging through cutting-edge technology and unwavering commitment to quality. Building trust through innovation and excellence. Learn about our journey, mission, vision, and core values.',
  keywords: [
    'about HB Sub Noor',
    'packaging company history',
    'industrial packaging manufacturer',
    'strap solutions company',
    'packaging industry Pakistan',
    'quality packaging manufacturer',
    'HB Sub Noor Industries about',
    'packaging company mission',
    'packaging company vision',
    'industrial packaging excellence'
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
    title: 'About Us | Our Story & Values | HB Sub Noor Industries',
    description: 'Three decades of transforming industrial packaging through cutting-edge technology and unwavering commitment to quality. Building trust through innovation and excellence.',
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
    title: 'About Us | Our Story & Values | HB Sub Noor Industries',
    description: 'Three decades of transforming industrial packaging through cutting-edge technology and unwavering commitment to quality.',
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

