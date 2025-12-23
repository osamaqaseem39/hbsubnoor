import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coloured Strap | Color-Coded Packaging Straps | Warehouse Management | HB Sub Noor Industries',
  description: 'Coloured packaging straps for warehouse management, tracking, and safety protocols. Use different colors for inventory management (FIFO), product identification, destination coding, and safety marking. Reduces staging and shipping errors.',
  keywords: [
    'coloured strap',
    'colored strap',
    'color coded strap',
    'colored packaging strap',
    'warehouse management strap',
    'inventory management strap',
    'FIFO strap',
    'safety coded strap',
    'product identification strap',
    'colored PP strap',
    'colored PET strap',
    'HB Sub Noor Industries colored strap'
  ],
  openGraph: {
    title: 'Coloured Strap | Color-Coded Packaging Straps | HB Sub Noor Industries',
    description: 'Coloured packaging straps for warehouse management, tracking, and safety protocols. Full spectrum colors available.',
    url: 'https://hbsubnoor.com/products/coloured-strap',
    type: 'website',
    images: [
      {
        url: '/images/polypropylene-pp-strapping-material.png',
        width: 1200,
        height: 630,
        alt: 'Coloured Packaging Strap - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coloured Strap | Color-Coded Packaging Straps',
    description: 'Coloured packaging straps for warehouse management and tracking. Full spectrum colors available.',
    images: ['/images/polypropylene-pp-strapping-material.png'],
  },
  alternates: {
    canonical: '/products/coloured-strap',
  },
};

export default function ColouredStrapPage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Coloured Strap",
    "description": "Coloured packaging straps that serve as powerful tools for warehouse management, tracking, and safety protocols through visual identification.",
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
        "name": "What is a coloured strap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A coloured strap is a packaging strap available in various colors that serves as a powerful tool for warehouse management, tracking, and safety protocols through visual identification."
        }
      },
      {
        "@type": "Question",
        "name": "How can coloured straps improve warehouse efficiency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Different colors can designate product type, destination, inspection status, or hazard level, enabling rapid visual identification and significantly reducing staging and shipping errors. This is especially useful for FIFO (First In First Out) inventory management."
        }
      },
      {
        "@type": "Question",
        "name": "What colors are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coloured straps are available in a full spectrum of colors. You can choose from standard colors or request custom colors to match your specific warehouse management or branding needs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main applications of coloured straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coloured straps are used for inventory management (FIFO), quick visual product/destination identification, internal safety coding, hazard level designation, and inspection status marking."
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
        "name": "Coloured Strap",
        "item": "https://hbsubnoor.com/products/coloured-strap"
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
                Coloured Strap
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
                Powerful tool for warehouse management, tracking, and safety protocols
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
                      src="/images/polypropylene-pp-strapping-material.png"
                      alt="Coloured packaging strap in various colors - HB Sub Noor Industries"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/20 rounded-full">
                  <span className="text-xs font-semibold text-text-heading">Visual Management</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                  Color-Coded Efficiency
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  More than just aesthetics, colored strap is a powerful tool for warehouse management, tracking, and safety protocols. Different colors enable rapid visual identification and significantly reduce staging and shipping errors.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Inventory Management</h3>
                      <p className="text-sm text-text-primary">FIFO tracking and product type identification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Error Reduction</h3>
                      <p className="text-sm text-text-primary">Quick visual identification reduces staging and shipping mistakes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Safety Coding</h3>
                      <p className="text-sm text-text-primary">Designate hazard levels and inspection status</p>
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
                    <span>Inventory management (FIFO - First In First Out)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Quick visual product/destination identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Internal safety coding and hazard designation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Inspection status and quality control marking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Key Business Benefits</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Efficiency and Error Reduction.</strong> Different colors can designate product type, destination, inspection status, or hazard level, enabling rapid visual identification and significantly reducing staging and shipping errors.
                </p>
                <p className="leading-relaxed">
                  Transform your warehouse operations with a simple, effective color-coding system that improves accuracy and speeds up processing times.
                </p>
              </div>
            </div>

            {/* Color Options */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-text-heading">Color Options & Uses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-3">Standard Colors</h4>
                  <p className="text-text-primary mb-2">Full spectrum available including:</p>
                  <ul className="space-y-1 text-text-primary text-sm">
                    <li>• Red, Blue, Green, Yellow</li>
                    <li>• Orange, Purple, Black, White</li>
                    <li>• Custom colors on request</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-3">Common Uses</h4>
                  <ul className="space-y-2 text-text-primary text-sm">
                    <li>• <strong>Product Type:</strong> Different colors for different product categories</li>
                    <li>• <strong>Destination:</strong> Color code by shipping destination</li>
                    <li>• <strong>Priority:</strong> Urgent vs. standard orders</li>
                    <li>• <strong>Hazard Level:</strong> Safety and handling requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-primary p-8 rounded-2xl border border-border-accent/20 mb-12">
              <h3 className="text-3xl font-bold mb-8 text-text-heading text-center">Frequently Asked Questions</h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a coloured strap?</h4>
                  <p className="text-text-primary">A coloured strap is a packaging strap available in various colors that serves as a powerful tool for warehouse management, tracking, and safety protocols through visual identification.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">How can coloured straps improve warehouse efficiency?</h4>
                  <p className="text-text-primary">Different colors can designate product type, destination, inspection status, or hazard level, enabling rapid visual identification and significantly reducing staging and shipping errors. This is especially useful for FIFO (First In First Out) inventory management.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What colors are available?</h4>
                  <p className="text-text-primary">Coloured straps are available in a full spectrum of colors. You can choose from standard colors or request custom colors to match your specific warehouse management or branding needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What are the main applications of coloured straps?</h4>
                  <p className="text-text-primary">Coloured straps are used for inventory management (FIFO), quick visual product/destination identification, internal safety coding, hazard level designation, and inspection status marking.</p>
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
                  Request Color Samples
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

