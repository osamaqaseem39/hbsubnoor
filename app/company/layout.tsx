import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company | Excellence in Operations | HB Sub Noor Industries',
  description: 'Excellence in every aspect of operations. Committed to quality, innovation, and building lasting partnerships with industry leaders worldwide. Quality assurance excellence, trusted by industry leaders, and a message from leadership.',
  keywords: [
    'HB Sub Noor Industries company',
    'packaging company Pakistan',
    'industrial packaging manufacturer',
    'quality assurance packaging',
    'packaging industry leader',
    'trusted packaging company',
    'packaging company excellence',
    'industrial strap manufacturer',
    'packaging solutions company',
    'HB Sub Noor company profile'
  ],
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
  alternates: {
    canonical: '/company',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hbsubnoor.com/company',
    title: 'Company | Excellence in Operations | HB Sub Noor Industries',
    description: 'Excellence in every aspect of operations. Committed to quality, innovation, and building lasting partnerships with industry leaders worldwide.',
    siteName: 'HB Sub Noor Industries',
    images: [
      {
        url: '/images/hb-sub-noor-industries-logo.png',
        width: 1200,
        height: 630,
        alt: 'HB Sub Noor Industries - Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | Excellence in Operations | HB Sub Noor Industries',
    description: 'Excellence in every aspect of operations. Committed to quality, innovation, and building lasting partnerships.',
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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

