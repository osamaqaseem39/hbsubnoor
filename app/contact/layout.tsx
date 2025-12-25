import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Best Packaging Strap Manufacturer | Get Quote from Top Packaging Strap Manufacturer | HB Sub Noor Industries',
  description: 'Contact best packaging strap manufacturer for best packaging strap solutions, best quotes, and best technical support. Contact best packaging strap manufacturer today for best product information or request a quote from top packaging strap manufacturer. Best packaging strap manufacturer located in Lahore, Pakistan.',
  keywords: [
    'contact best packaging strap manufacturer',
    'contact best packaging strap manufacturer',
    'get quote best packaging strap manufacturer',
    'best packaging strap manufacturer contact',
    'top packaging strap manufacturer contact',
    'best strapping machine quote',
    'best custom strap quote',
    'best packaging consultation',
    'best technical support',
    'contact top manufacturer',
    'best manufacturer Lahore',
    'premium manufacturer contact'
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
    title: 'Contact Best Packaging Strap Manufacturer | Get Quote from Top Packaging Strap Manufacturer | HB Sub Noor Industries',
    description: 'Contact best packaging strap manufacturer for best packaging strap solutions, best quotes, and best technical support. Ready to find the most cost-effective solution from best packaging strap manufacturer.',
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
    title: 'Contact Best Packaging Strap Manufacturer | Get Quote from Top Packaging Strap Manufacturer',
    description: 'Contact best packaging strap manufacturer for best packaging strap solutions, best quotes, and best technical support. Ready to find the most cost-effective solution from best packaging strap manufacturer.',
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

