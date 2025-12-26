import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Printed Packaging Straps | Branded Packaging Straps | HB Sub Noor Industries',
  description: 'Printed packaging straps turn your packaging into a mobile billboard. High-contrast, durable, fade-resistant printing for branding, security marking, and logistics communication. Quality printed straps from leading manufacturer. Custom logos, taglines, and handling instructions available.',
  keywords: [
    'printed strap',
    'branded strap',
    'custom printed strap',
    'logo strap',
    'printed packaging strap',
    'branded packaging strap',
    'tamper evident strap',
    'security marking strap',
    'custom logo strap',
    'printed PP strap',
    'printed PET strap',
    'printed packaging strap manufacturer',
    'quality printed straps',
    'premium printed strap',
    'branded packaging solutions'
  ],
  openGraph: {
    title: 'Printed Packaging Straps | Branded Packaging Straps | HB Sub Noor Industries',
    description: 'Printed packaging straps for branding and security. High-contrast, durable, fade-resistant printing available from leading manufacturer.',
    url: 'https://hbsubnoor.com/products/printed-strap',
    type: 'website',
    images: [
      {
        url: '/images/printed-strap.png',
        width: 1200,
        height: 630,
        alt: 'Printed Packaging Strap - HB Sub Noor Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printed Packaging Straps | Branded Packaging Straps',
    description: 'Printed packaging straps for branding and security. Custom logos and printing available from leading manufacturer.',
    images: ['/images/printed-strap.png'],
  },
  alternates: {
    canonical: '/products/printed-strap',
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

export default function PrintedStrapPage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Printed Strap",
    "description": "Printed packaging straps that turn your packaging into a mobile billboard with high-contrast, durable, fade-resistant printing for branding, security marking, and logistics communication. Quality printed straps from leading manufacturer.",
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
        "name": "What is a printed strap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A printed strap is a packaging strap with high-contrast, durable, fade-resistant printing that turns your packaging into a mobile billboard. It serves for branding, security marking, and logistics communication."
        }
      },
      {
        "@type": "Question",
        "name": "What can be printed on straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can print logos, taglines, brand names, handling instructions, serial codes, barcodes, and any custom design or text on the straps. The printing is high-contrast, durable, and fade-resistant."
        }
      },
      {
        "@type": "Question",
        "name": "How does printed strap help with security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Printed straps act as tamper-evident markers. If the strap is cut or replaced, it's immediately obvious, providing clear visual evidence of tampering and enhancing supply chain security."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of printed straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Printed straps provide brand integrity through visible branding, supply chain security through tamper-evident marking, and logistics communication through handling instructions and serial codes. They serve as mobile billboards for your brand."
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
        "name": "Printed Strap",
        "item": "https://hbsubnoor.com/products/printed-strap"
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
                <span className="text-sm font-semibold text-white">Packaging Straps</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                <span className="block">Printed</span>
                <span className="block drop-shadow-2xl">Strap</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Turn your packaging into a mobile billboard with high-contrast, durable printing
              </p>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <AnimateOnScroll animation="fadeInLeft" delay={0}>
          <section className="py-12 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary">
            <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Product Image */}
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-bg-card p-8 rounded-2xl shadow-2xl border border-border-accent/20 group-hover:shadow-3xl transition-all duration-300">
                  <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/printed-strap.png"
                      alt="Printed packaging strap with custom branding - HB Sub Noor Industries"
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
                  <span className="text-xs font-semibold text-text-heading">Branding Solution</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-text-heading">
                  <span className="block">Mobile Billboard</span>
                  <span className="block drop-shadow-2xl">for Your Brand</span>
                </h2>
                <p className="text-lg text-text-primary leading-relaxed">
                  Our printed straps turn your packaging into a powerful marketing tool and enhanced security feature. We use high-contrast, durable, and fade-resistant ink to ensure longevity and visibility throughout the supply chain.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Brand Identity</h3>
                      <p className="text-sm text-text-primary">Print logos, taglines, and brand messaging for consistent visibility</p>
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
                      <p className="text-sm text-text-primary">Clear visual indication if strap has been cut or replaced</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">Logistics Communication</h3>
                      <p className="text-sm text-text-primary">Handling instructions, serial codes, and tracking information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Focus */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20">
                <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">Application Focus</h3>
                <ul className="space-y-3 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Branding and brand identity reinforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Security marking and tamper-evident packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Logistics communication and handling instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bg-accent mt-1">•</span>
                    <span>Serial codes and tracking information</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-extrabold leading-tight mb-4">Key Business Benefits</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Brand Integrity and Supply Chain Security.</strong> Printing serves brand identity (logos, taglines), logistics (handling instructions, serial codes), and acts as a tamper-evident marker, clearly showing if the strap has been cut or replaced.
                </p>
                <p className="leading-relaxed">
                  Every package becomes a mobile billboard, enhancing brand visibility while providing critical security and logistics information.
                </p>
              </div>
            </div>

            {/* Printing Options */}
            <div className="bg-bg-card p-8 rounded-2xl shadow-xl border border-border-accent/20 mb-12">
              <h3 className="text-2xl font-extrabold leading-tight mb-6 text-text-heading">
                <span className="block">Printing</span>
                <span className="block drop-shadow-2xl">Options</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Brand Elements</h4>
                  <p className="text-text-primary">Logos, taglines, company names, brand colors</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Logistics Info</h4>
                  <p className="text-text-primary">Handling instructions, serial codes, barcodes</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-heading mb-2">Custom Designs</h4>
                  <p className="text-text-primary">Any custom text, graphics, or patterns</p>
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
                  <h4 className="font-bold text-lg text-text-heading mb-2">What is a printed strap?</h4>
                  <p className="text-text-primary">A printed strap is a packaging strap with high-contrast, durable, fade-resistant printing that turns your packaging into a mobile billboard. It serves for branding, security marking, and logistics communication.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What can be printed on straps?</h4>
                  <p className="text-text-primary">You can print logos, taglines, brand names, handling instructions, serial codes, barcodes, and any custom design or text on the straps. The printing is high-contrast, durable, and fade-resistant.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">How does printed strap help with security?</h4>
                  <p className="text-text-primary">Printed straps act as tamper-evident markers. If the strap is cut or replaced, it's immediately obvious, providing clear visual evidence of tampering and enhancing supply chain security.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-heading mb-2">What are the benefits of printed straps?</h4>
                  <p className="text-text-primary">Printed straps provide brand integrity through visible branding, supply chain security through tamper-evident marking, and logistics communication through handling instructions and serial codes. They serve as mobile billboards for your brand.</p>
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
                  Request Printing Quote
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

