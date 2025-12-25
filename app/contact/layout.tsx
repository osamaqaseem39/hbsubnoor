import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get Quote from Leading Packaging Strap Manufacturer | HB Sub Noor Industries',
  description: 'Contact leading packaging strap manufacturer for packaging strap solutions, quotes, and technical support. Get product information or request a quote from top packaging strap manufacturer. Located in Lahore, Pakistan.',
  keywords: [
    'contact packaging strap manufacturer',
    'packaging strap manufacturer contact',
    'get quote packaging strap',
    'strapping machine quote',
    'custom strap quote',
    'packaging consultation',
    'technical support packaging',
    'packaging strap manufacturer Lahore',
    'strapping machine supplier',
    'packaging strap inquiry',
    'request quote packaging',
    'packaging solutions contact'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/contact',
    title: 'Contact Us | Get Quote from Leading Packaging Strap Manufacturer | HB Sub Noor Industries',
    description: 'Contact leading packaging strap manufacturer for packaging strap solutions, quotes, and technical support. Ready to find the most cost-effective solution from top packaging strap manufacturer.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - Contact Us',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get Quote from Leading Packaging Strap Manufacturer',
    description: 'Contact leading packaging strap manufacturer for packaging strap solutions, quotes, and technical support. Ready to find the most cost-effective solution from top packaging strap manufacturer.',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

