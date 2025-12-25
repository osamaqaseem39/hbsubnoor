import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fully Automatic Strapping Machine | High-Speed Automation | HB Sub Noor Industries',
  description: 'Fully automatic strapping machine for high-speed production line integration. Automatic strapping machine auto-detects packages, tightens to precise settings, and fastens straps with heat-weld closure. Energy-efficient machine with auto-shutoff sensors from leading manufacturer. Ideal for 24/7 operations.',
  keywords: [
    'fully automatic strapping machine',
    'automatic strapping machine',
    'high-speed strapping machine',
    'production line strapping',
    'automated packaging machine',
    'industrial strapping machine',
    'automatic PP strap machine',
    'heat weld strapping machine',
    'energy efficient strapping machine',
    'automatic strapping machine manufacturer',
    'quality automatic machine',
    'premium automatic strapping machine',
    'industrial automation equipment',
    '24/7 strapping machine'
  ],
  openGraph: {
    title: 'Fully Automatic Strapping Machine | High-Speed Automation | HB Sub Noor Industries',
    description: 'Fully automatic strapping machine for high-speed production line integration. Automatic machine auto-detects and straps packages automatically from leading manufacturer.',
    url: 'https://hbsubnoor.com/products/fully-automatic-strapping-machine',
    type: 'website',
    images: [
      {
        url: '/images/fully-automatic-strapping-machine-alt.png',
        width: 1200,
        height: 630,
        alt: 'Fully Automatic Strapping Machine - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fully Automatic Strapping Machine | High-Speed Automation',
    description: 'Fully automatic strapping machine for production line integration. High-speed automation available from leading manufacturer.',
    images: ['/images/fully-automatic-strapping-machine-alt.png'],
  },
  alternates: {
    canonical: '/products/fully-automatic-strapping-machine',
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

export default function FullyAutomaticStrappingMachinePage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fully Automatic Strapping Machine",
    "description": "Fully automatic strapping machine - high-speed automation solution engineered for production line integration and maximum throughput. Automatic machine automatically detects packages, tightens to precise settings, and fastens straps with heat-weld closure from leading manufacturer.",
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
        "name": "What is a fully automatic strapping machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fully automatic strapping machine is a high-speed automation solution that automatically detects packages, allots straps, tightens them to precise settings, and fastens them around packages using heat-weld closure. It's designed for production line integration and maximum throughput."
        }
      },
      {
        "@type": "Question",
        "name": "How does the automatic detection work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine features built-in sensors that automatically detect when a package enters the strapping area. The motor auto-switches on when a product is detected and switches off when idle to conserve energy, restarting automatically upon the next product detection."
        }
      },
      {
        "@type": "Question",
        "name": "What is heat-weld closure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Heat-weld closure is an instantaneous sealing method that creates a secure, permanent seal by melting and fusing the strap ends together. This provides superior strength and reliability compared to mechanical seals."
        }
      },
      {
        "@type": "Question",
        "name": "What operations are fully automatic machines best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fully automatic strapping machines are ideal for busy, high-volume, and 24/7 industrial operations requiring consistent, perfect strap placement for product and pallet stability. They're perfect for production line integration where maximum throughput is essential."
        }
      },
      {
        "@type": "Question",
        "name": "Is the machine energy efficient?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the machine features built-in sensors that automatically switch the motor off when idle to conserve energy, restarting automatically upon product detection. This makes it highly energy-efficient for continuous operations."
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
        "name": "Fully Automatic Strapping Machine",
        "item": "https://hbsubnoor.com/products/fully-automatic-strapping-machine"
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
                <span className="text-sm font-semibold text-black">Strapping Machinery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                Fully Automatic Strapping Machine
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
                High-speed automation for production line integration and maximum throughput
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
                      src="/images/fully-automatic-strapping-machine-alt.png"
                      alt="Fully automatic strapping machine - HB Sub Noor Industries"
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
                  <span className="text-xs font-semibold text-text-heading">High-Speed Automation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                  Maximum Throughput, Zero Manual Intervention
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  This high-speed automation solution is engineered for production line integration and maximum throughput. The machine automatically detects packages, allots straps, tightens to precise settings, and fastens them with a secure heat-weld closure.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Auto-Detection</h3>
                      <p className="text-sm text-text-primary">Built-in sensors automatically detect packages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Heat-Weld Closure</h3>
                      <p className="text-sm text-text-primary">Instantaneous, secure, permanent seal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Energy Efficient</h3>
                      <p className="text-sm text-text-primary">Auto-shutoff when idle, restarts automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Function & Operation */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-text-heading">Function</h3>
                <p className="text-text-primary leading-relaxed mb-4">
                  Capable of detecting the package, automatically allotting, tightening (to a precise setting), and fastening polypropylene straps around packages. The entire process is fully automated with no manual intervention required.
                </p>
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Automatic package detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Precise tension control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Automatic strap feeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Heat-weld sealing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Operation</h3>
                <p className="leading-relaxed mb-4">
                  Utilizes an instantaneous heat-weld closure for a secure, permanent seal. Features inbuilt sensors that auto-switch the motor off when idle to conserve energy, restarting automatically upon product detection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Heat-weld closure for permanent seal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Energy-efficient auto-shutoff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Automatic restart on detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Production line integration ready</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Ideal For</h3>
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                Ideal for busy, high-volume, and 24/7 industrial operations requiring consistent, perfect strap placement for product and pallet stability. Perfect for production line integration where maximum throughput and reliability are essential.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2">High-Volume Operations</h4>
                  <p className="text-text-primary text-sm">Maximum throughput for busy production lines</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">24/7 Operations</h4>
                  <p className="text-text-primary text-sm">Designed for continuous operation</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Consistent Quality</h4>
                  <p className="text-text-primary text-sm">Perfect strap placement every time</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-primary p-8 rounded-2xl border border-border-accent/20 mb-12">
              <h3 className="text-3xl font-bold mb-8 text-text-heading text-center">Frequently Asked Questions</h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a fully automatic strapping machine?</h4>
                  <p className="text-text-primary">A fully automatic strapping machine is a high-speed automation solution that automatically detects packages, allots straps, tightens them to precise settings, and fastens them around packages using heat-weld closure. It's designed for production line integration and maximum throughput.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">How does the automatic detection work?</h4>
                  <p className="text-text-primary">The machine features built-in sensors that automatically detect when a package enters the strapping area. The motor auto-switches on when a product is detected and switches off when idle to conserve energy, restarting automatically upon the next product detection.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is heat-weld closure?</h4>
                  <p className="text-text-primary">Heat-weld closure is an instantaneous sealing method that creates a secure, permanent seal by melting and fusing the strap ends together. This provides superior strength and reliability compared to mechanical seals.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What operations are fully automatic machines best for?</h4>
                  <p className="text-text-primary">Fully automatic strapping machines are ideal for busy, high-volume, and 24/7 industrial operations requiring consistent, perfect strap placement for product and pallet stability. They're perfect for production line integration where maximum throughput is essential.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">Is the machine energy efficient?</h4>
                  <p className="text-text-primary">Yes, the machine features built-in sensors that automatically switch the motor off when idle to conserve energy, restarting automatically upon product detection. This makes it highly energy-efficient for continuous operations.</p>
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
                  Request Machine Quote
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

