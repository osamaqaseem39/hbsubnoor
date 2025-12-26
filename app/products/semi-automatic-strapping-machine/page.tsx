import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Semi Automatic Strapping Machine | Portable Strapping Machine | HB Sub Noor Industries',
  description: 'Semi automatic strapping machine - portable, cost-effective solution with rapid 2.5-second cycle time. Semi automatic machine with adjustable tension 15-45 Kgs from leading manufacturer. Compatible with 9mm, 12mm, and 15.5mm straps. Perfect for diverse product sizes and mobile packaging stations.',
  keywords: [
    'semi automatic strapping machine',
    'portable strapping machine',
    'cost effective strapping machine',
    'semi auto strapping machine',
    'mobile strapping machine',
    'portable packaging machine',
    'semi automatic PP strap machine',
    'adjustable tension strapping machine',
    'semi automatic strapping machine manufacturer',
    'quality semi automatic machine',
    'premium semi automatic machine',
    'industrial strapping equipment',
    '2.5 second cycle strapping'
  ],
  openGraph: {
    title: 'Semi Automatic Strapping Machine | Portable Strapping Machine | HB Sub Noor Industries',
    description: 'Semi automatic strapping machine - portable, cost-effective solution with rapid 2.5-second cycle time from leading manufacturer. Perfect for mobile packaging.',
    url: 'https://hbsubnoor.com/products/semi-automatic-strapping-machine',
    type: 'website',
    images: [
      {
        url: '/images/semi-automatic-strapping-machine.png',
        width: 1200,
        height: 630,
        alt: 'Semi Automatic Strapping Machine - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semi Automatic Strapping Machine | Portable Strapping Machine',
    description: 'Semi automatic strapping machine - portable, cost-effective with rapid cycle time from leading manufacturer.',
    images: ['/images/semi-automatic-strapping-machine.png'],
  },
  alternates: {
    canonical: '/products/semi-automatic-strapping-machine',
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

export default function SemiAutomaticStrappingMachinePage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Semi Automatic Strapping Machine",
      "description": "Semi automatic strapping machine - cost-effective, portable solution offering flexibility without compromising on sealing integrity or speed. Rapid 2.5-second cycle time with adjustable tension from 15-45 Kgs from leading manufacturer.",
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
        "name": "What is a semi automatic strapping machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A semi automatic strapping machine is a cost-effective, portable solution where operators manually feed the strap over the product, and the machine instantly and reliably executes the tensioning and sealing process. It offers flexibility without compromising on sealing integrity or speed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cycle time of a semi automatic machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The semi automatic strapping machine has a rapid 2.5-second cycle time per strap, making it highly efficient for various packaging operations."
        }
      },
      {
        "@type": "Question",
        "name": "What tension range does the machine support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine features adjustable tension range from 15 to 45 Kgs, allowing you to customize the strap tension based on your product requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What strap widths are compatible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The semi automatic strapping machine is compatible with 9mm, 12mm, and 15.5mm strap widths, providing flexibility for different packaging needs."
        }
      },
      {
        "@type": "Question",
        "name": "What applications are semi automatic machines best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semi automatic machines are excellent for diverse product sizes and mobile packaging stations. They're suitable for a wide variety of goods including Paper, Corrugated Box, Plastic, Ceramic, Wood, Light Aluminum, and Steel."
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
        "name": "Semi Automatic Strapping Machine",
        "item": "https://hbsubnoor.com/products/semi-automatic-strapping-machine"
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
              className="object-cover object-center opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto relative z-10 max-w-7xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-black">Strapping Machinery</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                <span className="block">Semi Automatic</span>
                <span className="block drop-shadow-2xl">Strapping Machine</span>
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
                Portable, cost-effective solution with rapid 2.5-second cycle time
              </p>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <AnimateOnScroll animation="fadeInRight" delay={0}>
          <section className="py-12 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary">
            <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Product Image */}
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-bg-card p-8 rounded-2xl shadow-2xl border border-border-accent/20 group-hover:shadow-3xl transition-all duration-300">
                  <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/semi-automatic-strapping-machine.png"
                      alt="Semi automatic strapping machine - HB Sub Noor Industries"
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
                  <span className="text-xs font-semibold text-text-heading">Portable Solution</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-text-heading">
                  <span className="block">Flexibility Meets</span>
                  <span className="block drop-shadow-2xl">Efficiency</span>
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  A cost-effective, portable solution offering flexibility without compromising on sealing integrity or speed. Operators manually feed the strap over the product, and the machine instantly and reliably executes the tensioning and sealing process.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Rapid Cycle</h3>
                      <p className="text-sm text-text-primary">2.5 seconds per strap</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Adjustable Tension</h3>
                      <p className="text-sm text-text-primary">15-45 Kgs range</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Portable Design</h3>
                      <p className="text-sm text-text-primary">Perfect for mobile packaging stations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20">
                <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">Function</h3>
                <p className="text-text-primary leading-relaxed mb-4">
                  Operators manually feed the strap over the product, and the machine instantly and reliably executes the tensioning and sealing process. This provides flexibility for diverse product sizes while maintaining consistent quality.
                </p>
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Manual strap feeding for flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Automatic tensioning and sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Reliable sealing integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Portable and mobile</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-extrabold leading-tight mb-4">
                  <span className="block">Key Technical</span>
                  <span className="block drop-shadow-2xl">Specs</span>
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong>Cycle Time:</strong> Rapid 2.5 seconds per strap
                  </li>
                  <li>
                    <strong>Tension Range:</strong> Adjustable from 15 to 45 Kgs
                  </li>
                  <li>
                    <strong>Strap Width:</strong> Compatible with 9mm, 12mm, and 15.5mm strap
                  </li>
                  <li>
                    <strong>Design:</strong> Portable and cost-effective
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Suitability */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">
                <span className="block">Application</span>
                <span className="block drop-shadow-2xl">Suitability</span>
              </h3>
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                Excellent for diverse product sizes and mobile packaging stations. Suitable for a wide variety of goods including:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Materials</h4>
                  <ul className="space-y-1 text-text-primary text-sm">
                    <li>• Paper</li>
                    <li>• Corrugated Box</li>
                    <li>• Plastic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">More Materials</h4>
                  <ul className="space-y-1 text-text-primary text-sm">
                    <li>• Ceramic</li>
                    <li>• Wood</li>
                    <li>• Light Aluminum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Ideal For</h4>
                  <ul className="space-y-1 text-text-primary text-sm">
                    <li>• Diverse product sizes</li>
                    <li>• Mobile packaging stations</li>
                    <li>• Flexible operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-primary p-8 rounded-2xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-8 text-text-heading text-center">
                <span className="block">Frequently Asked</span>
                <span className="block drop-shadow-2xl">Questions</span>
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a semi automatic strapping machine?</h4>
                  <p className="text-text-primary">A semi automatic strapping machine is a cost-effective, portable solution where operators manually feed the strap over the product, and the machine instantly and reliably executes the tensioning and sealing process. It offers flexibility without compromising on sealing integrity or speed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is the cycle time of a semi automatic machine?</h4>
                  <p className="text-text-primary">The semi automatic strapping machine has a rapid 2.5-second cycle time per strap, making it highly efficient for various packaging operations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What tension range does the machine support?</h4>
                  <p className="text-text-primary">The machine features adjustable tension range from 15 to 45 Kgs, allowing you to customize the strap tension based on your product requirements.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What strap widths are compatible?</h4>
                  <p className="text-text-primary">The semi automatic strapping machine is compatible with 9mm, 12mm, and 15.5mm strap widths, providing flexibility for different packaging needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What applications are semi automatic machines best for?</h4>
                  <p className="text-text-primary">Semi automatic machines are excellent for diverse product sizes and mobile packaging stations. They're suitable for a wide variety of goods including Paper, Corrugated Box, Plastic, Ceramic, Wood, Light Aluminum, and Steel.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#F9A634] text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#e8951f]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Machine Quote
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9A634] via-[#e8951f] to-[#F9A634] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
          </section>
        </AnimateOnScroll>
      </div>
    </>
  );
}

