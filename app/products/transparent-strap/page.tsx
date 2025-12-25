import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transparent Strap | Clear Packaging Straps | Professional Presentation | HB Sub Noor Industries',
  description: 'Transparent packaging straps for retail-facing goods where package design must remain visible. Sleek, professional, and discreet hold with tamper-evident properties. Perfect for retail packaging, cosmetics, and food boxes.',
  keywords: [
    'transparent strap',
    'clear strap',
    'transparent packaging strap',
    'clear packaging strap',
    'retail strap',
    'professional packaging strap',
    'tamper evident clear strap',
    'cosmetic packaging strap',
    'food packaging strap',
    'transparent PP strap',
    'transparent PET strap',
    'HB Sub Noor Industries transparent strap'
  ],
  openGraph: {
    title: 'Transparent Strap | Clear Packaging Straps | HB Sub Noor Industries',
    description: 'Transparent packaging straps for retail-facing goods. Professional presentation with tamper-evident properties.',
    url: 'https://hbsubnoor.com/products/transparent-strap',
    type: 'website',
    images: [
      {
        url: '/images/transparent-strap.png',
        width: 1200,
        height: 630,
        alt: 'Transparent Packaging Strap - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Strap | Clear Packaging Straps',
    description: 'Transparent packaging straps for retail-facing goods. Professional presentation available.',
    images: ['/images/transparent-strap.png'],
  },
  alternates: {
    canonical: '/products/transparent-strap',
  },
  authors: [{ name: 'HB Sub Noor Industries' }],
  creator: 'HB Sub Noor Industries',
  publisher: 'HB Sub Noor Industries',
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

export default function TransparentStrapPage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Transparent Strap",
    "description": "Transparent packaging straps designed for retail-facing goods or situations where the package design must remain clearly visible. Offers a sleek, professional, and discreet hold.",
    "brand": {
      "@type": "Brand",
      "name": "HB Sub Noor Industries",
      "logo": "https://hbsubnoor.com/images/favicon.png"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "HB Sub Noor Industries",
      "logo": "https://hbsubnoor.com/images/favicon.png"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PKR",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a transparent strap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A transparent strap is a clear packaging strap designed for retail-facing goods or situations where the package design must remain clearly visible. It offers a sleek, professional, and discreet hold while maintaining security."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of transparent straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transparent straps provide professional presentation while ensuring high-level security. Any tampering or cutting is immediately obvious against the plain package surface, simplifying inspection processes. They allow the package design to remain visible."
        }
      },
      {
        "@type": "Question",
        "name": "What applications are transparent straps best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transparent straps are ideal for retail packaging, cosmetic and food boxes, professional presentation, and any application where the package design must remain clearly visible to customers."
        }
      },
      {
        "@type": "Question",
        "name": "How does transparent strap provide tamper evidence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any tampering or cutting of the transparent strap is immediately obvious against the plain package surface, making it easy to detect if the package has been opened or compromised. This simplifies inspection processes and enhances security."
        }
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hbsubnoor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://hbsubnoor.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Transparent Strap",
        "item": "https://hbsubnoor.com/products/transparent-strap"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industrial-packaging-background.png"
              alt="Industrial packaging background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto relative z-10 max-w-7xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-black">Packaging Straps</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                Transparent Strap
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
                Sleek, professional, and discreet hold for retail-facing goods
              </p>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Product Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-bg-card p-8 rounded-2xl shadow-2xl border border-border-accent/20">
                  <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/transparent-strap.png"
                      alt="Transparent clear packaging strap - HB Sub Noor Industries"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/20 rounded-full">
                  <span className="text-xs font-semibold text-text-heading">Professional Presentation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                  Invisible Security, Visible Quality
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  This strap is designed for retail-facing goods or situations where the package design must remain clearly visible. It offers a sleek, professional, and discreet hold while maintaining high-level security.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Professional Look</h3>
                      <p className="text-sm text-text-primary">Package design remains clearly visible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Tamper Evidence</h3>
                      <p className="text-sm text-text-primary">Any cutting is immediately obvious</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Discreet Security</h3>
                      <p className="text-sm text-text-primary">High-level security without visual obstruction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Focus */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-text-heading">Application Focus</h3>
                <ul className="space-y-3 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Retail packaging where design visibility matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Cosmetic and beauty product boxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Food packaging and gift boxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Professional presentation requirements</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Key Business Benefits</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Professional Presentation and Tamper Evidence.</strong> Provides a professional look while ensuring high-level security. Any tampering or cutting is immediately obvious against the plain package surface, simplifying inspection processes.
                </p>
                <p className="leading-relaxed">
                  Perfect for businesses that need to maintain package design visibility while ensuring product security and integrity.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-text-heading">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Crystal Clear</h4>
                  <p className="text-text-primary">Maximum transparency for design visibility</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Tamper Evident</h4>
                  <p className="text-text-primary">Easy to detect any cutting or tampering</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Professional Grade</h4>
                  <p className="text-text-primary">High-quality finish for retail presentation</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-primary p-8 rounded-2xl border border-border-accent/20 mb-12">
              <h3 className="text-3xl font-bold mb-8 text-text-heading text-center">Frequently Asked Questions</h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a transparent strap?</h4>
                  <p className="text-text-primary">A transparent strap is a clear packaging strap designed for retail-facing goods or situations where the package design must remain clearly visible. It offers a sleek, professional, and discreet hold while maintaining security.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What are the benefits of transparent straps?</h4>
                  <p className="text-text-primary">Transparent straps provide professional presentation while ensuring high-level security. Any tampering or cutting is immediately obvious against the plain package surface, simplifying inspection processes. They allow the package design to remain visible.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What applications are transparent straps best for?</h4>
                  <p className="text-text-primary">Transparent straps are ideal for retail packaging, cosmetic and food boxes, professional presentation, and any application where the package design must remain clearly visible to customers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">How does transparent strap provide tamper evidence?</h4>
                  <p className="text-text-primary">Any tampering or cutting of the transparent strap is immediately obvious against the plain package surface, making it easy to detect if the package has been opened or compromised. This simplifies inspection processes and enhances security.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-bg-accent text-text-on-accent rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Transparent Strap Quote
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-bg-accent via-bg-accent/90 to-bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

