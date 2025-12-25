import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Quote | HB Sub Noor Industries',
  description: 'Get in touch with HB Sub Noor Industries for packaging solutions, quotes, and technical support. Contact us today for detailed product information, technical support, or to request a custom quote. Located in Lahore, Pakistan.',
  keywords: [
    'contact HB Sub Noor',
    'packaging company contact',
    'get quote packaging',
    'packaging solutions contact',
    'HB Sub Noor Industries contact',
    'packaging manufacturer contact',
    'strapping machine quote',
    'custom strap quote',
    'packaging consultation',
    'technical support packaging',
    'Lahore packaging company'
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
    title: 'Contact Us | Get a Quote | HB Sub Noor Industries',
    description: 'Get in touch with HB Sub Noor Industries for packaging solutions, quotes, and technical support. Ready to find the most cost-effective and secure packaging solution for your business.',
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
    title: 'Contact Us | Get a Quote | HB Sub Noor Industries',
    description: 'Get in touch for packaging solutions, quotes, and technical support. Ready to find the most cost-effective packaging solution.',
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

