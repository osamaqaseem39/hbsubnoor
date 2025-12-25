'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Best Industrial Packaging Strap Solutions",
    "provider": {
      "@type": "Organization",
      "name": "HB Sub Noor Industries",
      "logo": "https://hbsubnoor.com/images/favicon.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Best Packaging Strap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Manufacturing",
            "description": "Custom-sized, colored, and printed packaging straps tailored to specific requirements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machinery Solutions",
            "description": "State-of-the-art automatic and semi-automatic strapping machines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Support",
            "description": "Comprehensive technical support and consultation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Supply Chain Solutions",
            "description": "Nationwide and international distribution network"
          }
        }
      ]
    }
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
        "name": "Services",
        "item": "https://hbsubnoor.com/services"
      }
    ]
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial-packaging-background.png"
            alt="Industrial packaging background"
            fill
            className="object-cover opacity-20 transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) scale(1.1)`,
            }}
            priority
          />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-black">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-black">
            Comprehensive Packaging
            <span className="block">Solutions & Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            End-to-end packaging solutions that combine superior products with expert service and support
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="pt-8 pb-4 px-4 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-0">
            <p className="text-xl text-text-primary leading-relaxed max-w-4xl mx-auto">
              At HB Sub Noor Industries, we provide end-to-end packaging solutions that combine superior products with expert service and support. Our commitment extends beyond manufacturing to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">Our Services</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Everything you need for complete packaging solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Custom Manufacturing */}
            <div className="group bg-bg-card p-6 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">
                Custom Manufacturing
              </h2>
              <p className="text-text-primary leading-relaxed mb-6">
                We specialize in manufacturing custom-sized, colored, and printed packaging straps tailored to your specific requirements. Our flexible production capabilities ensure you get exactly what you need.
              </p>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Custom dimensions (length, width, thickness)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Brand-specific color matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>High-quality printing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Material selection (PP/PET)</span>
                </li>
              </ul>
            </div>

            {/* Machinery Solutions */}
            <div className="group bg-bg-card p-8 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🔧
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">
                Machinery Solutions
              </h2>
              <p className="text-text-primary leading-relaxed mb-6">
                We provide state-of-the-art automatic and semi-automatic strapping machines designed to optimize your packaging operations and reduce costs.
              </p>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Fully automatic systems for high-volume operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Semi-automatic machines for flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Installation and setup support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Training and technical support</span>
                </li>
              </ul>
            </div>

            {/* Technical Support */}
            <div className="group bg-bg-card p-8 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">
                Technical Support
              </h2>
              <p className="text-text-primary leading-relaxed mb-6">
                Our expert team provides comprehensive technical support to help you optimize your packaging operations and troubleshoot any issues.
              </p>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>On-site consultation and assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Maintenance and repair services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>

            {/* Supply Chain Solutions */}
            <div className="group bg-bg-card p-8 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                📦
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">
                Supply Chain Solutions
              </h2>
              <p className="text-text-primary leading-relaxed mb-6">
                We understand the importance of reliable supply chains. Our distribution network ensures timely delivery across Pakistan and internationally.
              </p>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Nationwide distribution network</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>International shipping capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Flexible delivery schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-text-on-accent font-bold text-xs">✓</span>
                  </div>
                  <span>Bulk order management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Why Choose Our Services?</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto opacity-90">
              Intelligent solutions that deliver exceptional value
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-base opacity-90 leading-relaxed">
                Intelligent solutions that reduce operational costs while maintaining quality
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
              <p className="text-base opacity-90 leading-relaxed">
                Quick turnaround times and dependable service delivery
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-xl font-bold mb-3">Long-Term Partnership</h3>
              <p className="text-base opacity-90 leading-relaxed">
                Building lasting relationships based on trust and quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-8 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">Quality Assurance Excellence</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Rigorous testing and certification processes ensure every product exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-bg-card p-4 rounded-xl border border-border-accent/20">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-xl font-bold mb-2 text-text-heading">Material Testing</h3>
              <p className="text-sm text-text-primary">Comprehensive analysis of tensile strength, elongation, and durability</p>
            </div>
            <div className="bg-bg-card p-6 rounded-xl border border-border-accent/20">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2 text-text-heading">ISO Standards</h3>
              <p className="text-sm text-text-primary">Adherence to international quality management systems</p>
            </div>
            <div className="bg-bg-card p-6 rounded-xl border border-border-accent/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2 text-text-heading">Batch Inspection</h3>
              <p className="text-sm text-text-primary">Every production batch undergoes thorough quality checks</p>
            </div>
            <div className="bg-bg-card p-6 rounded-xl border border-border-accent/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-text-heading">Global Compliance</h3>
              <p className="text-sm text-text-primary">Products meet regulatory requirements across all markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-heading">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-primary mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your packaging needs and discover how we can help optimize your operations.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-bg-accent text-text-on-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
