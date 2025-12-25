import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Sized Packaging Straps | Quality Custom Straps | HB Sub Noor Industries',
  description: 'Custom sized packaging straps engineered to fit exact product geometry. Quality custom straps for specialized goods, irregularly shaped packages, and heavy-duty applications. Custom packaging straps from leading manufacturer. Available in PP and PET materials.',
  keywords: [
    'custom sized strap',
    'custom packaging strap',
    'custom length strap',
    'custom width strap',
    'irregular package strap',
    'specialized packaging strap',
    'custom PP strap',
    'custom PET strap',
    'custom packaging strap manufacturer',
    'custom strap supplier',
    'bespoke packaging strap',
    'custom strap Pakistan',
    'tailored packaging strap',
    'quality custom straps'
  ],
  openGraph: {
    title: 'Custom Sized Packaging Straps | Quality Custom Straps | HB Sub Noor Industries',
    description: 'Custom sized packaging straps engineered to fit exact product geometry. Quality custom straps for specialized goods and irregularly shaped packages from leading manufacturer.',
    url: 'https://hbsubnoor.com/products/custom-sized-strap',
    type: 'website',
    images: [
      {
        url: '/images/custom-sized-strap-alt.png',
        width: 1200,
        height: 630,
        alt: 'Custom Sized Packaging Strap - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Sized Packaging Straps | Quality Custom Straps',
    description: 'Custom sized packaging straps engineered to fit exact product geometry. Quality custom straps for specialized goods from leading manufacturer.',
    images: ['/images/custom-sized-strap-alt.png'],
  },
  alternates: {
    canonical: '/products/custom-sized-strap',
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

export default function CustomSizedStrapPage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Sized Strap",
    "description": "Custom sized packaging straps engineered to fit exact product geometry, crucial for specialized goods or irregularly shaped packages. Quality custom straps from leading manufacturer.",
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a custom sized strap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom sized strap is a packaging strap engineered to fit the exact dimensions and geometry of your product, moving beyond standard dimensions to provide a perfect fit for specialized goods or irregularly shaped packages."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of custom sized straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom sized straps eliminate material waste, provide custom-level security hold, optimize unitization, and often result in reduced shipping volume and cost due to superior stability. They are perfect for products that don't fit standard dimensions."
        }
      },
      {
        "@type": "Question",
        "name": "What materials are available for custom sized straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom sized straps are available in both Polypropylene (PP) and Polyester (PET) materials, offering maximum tensile strength, shock absorption, and reliable elongation recovery."
        }
      },
      {
        "@type": "Question",
        "name": "How do I order custom sized straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact HB Sub Noor Industries with your specific requirements including product dimensions, weight, and application details. Our team will provide a customized solution and quote."
        }
      },
      {
        "@type": "Question",
        "name": "What applications are custom sized straps best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom sized straps are ideal for securing products that don't fit standard dimensions, heavy-duty applications, custom pallet unitization, and specialized industrial packaging requirements."
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
        "name": "Custom Sized Strap",
        "item": "https://hbsubnoor.com/products/custom-sized-strap"
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
                Custom Sized Strap
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
                Engineered to fit exact product geometry for specialized goods and irregularly shaped packages
              </p>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Product Image */}
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-bg-card p-8 rounded-2xl shadow-2xl border border-border-accent/20 group-hover:shadow-3xl transition-all duration-300">
                  <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/custom-sized-strap-alt.png"
                      alt="Custom sized packaging strap - HB Sub Noor Industries"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-text-heading shadow-lg">
                        Click to view larger
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/20 rounded-full">
                  <span className="text-xs font-semibold text-text-heading">Custom Solution</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                  Perfect Fit for Every Product
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  Our custom sized straps move beyond standard dimensions, engineering straps to fit the exact product geometry. This solution is crucial for specialized goods or irregularly shaped packages that require precise fitting.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Optimized Unitization</h3>
                      <p className="text-sm text-text-primary">Eliminates material waste and provides custom-level security hold</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Cost Savings</h3>
                      <p className="text-sm text-text-primary">Reduced shipping volume and cost due to superior stability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Perfect Fit</h3>
                      <p className="text-sm text-text-primary">Designed for products that don't fit standard dimensions</p>
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
                    <span>Secure products that do not fit standard dimensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Heavy-duty applications requiring precise fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Custom pallet unitization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Specialized industrial packaging</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Key Business Benefits</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Optimized Unitization and Cost Savings.</strong> Custom sized straps eliminate material waste, provide a custom-level security hold, and often result in reduced shipping volume and cost due to superior stability.
                </p>
                <p className="leading-relaxed">
                  Perfect for businesses looking to optimize their packaging efficiency while maintaining the highest security standards.
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-text-heading">Specifications & Customization</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Materials</h4>
                  <p className="text-text-primary">PP (Polypropylene) or PET (Polyester)</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Dimensions</h4>
                  <p className="text-text-primary">Custom length, width, and thickness</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Colors</h4>
                  <p className="text-text-primary">Full spectrum available</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-primary p-8 rounded-2xl border border-border-accent/20 mb-12">
              <h3 className="text-3xl font-bold mb-8 text-text-heading text-center">Frequently Asked Questions</h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a custom sized strap?</h4>
                  <p className="text-text-primary">A custom sized strap is a packaging strap engineered to fit the exact dimensions and geometry of your product, moving beyond standard dimensions to provide a perfect fit for specialized goods or irregularly shaped packages.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What are the benefits of custom sized straps?</h4>
                  <p className="text-text-primary">Custom sized straps eliminate material waste, provide custom-level security hold, optimize unitization, and often result in reduced shipping volume and cost due to superior stability. They are perfect for products that don't fit standard dimensions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What materials are available for custom sized straps?</h4>
                  <p className="text-text-primary">Custom sized straps are available in both Polypropylene (PP) and Polyester (PET) materials, offering maximum tensile strength, shock absorption, and reliable elongation recovery.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">How do I order custom sized straps?</h4>
                  <p className="text-text-primary">Contact HB Sub Noor Industries with your specific requirements including product dimensions, weight, and application details. Our team will provide a customized solution and quote.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What applications are custom sized straps best for?</h4>
                  <p className="text-text-primary">Custom sized straps are ideal for securing products that don't fit standard dimensions, heavy-duty applications, custom pallet unitization, and specialized industrial packaging requirements.</p>
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
                  Request Custom Quote
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

