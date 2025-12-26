'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useEffect, useState } from 'react';

export default function Products() {
  const productCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Packaging Solutions - HB Sub Noor Industries",
    "description": "Premium strapping machines (automatic & semi-automatic) and quality packaging straps (PP/PET). Custom sized, printed, coloured, and transparent straps available. Top-rated industrial packaging strap solutions from leading packaging strap manufacturer.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Custom Sized Strap",
          "url": "https://hbsubnoor.com/products/custom-sized-strap"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Printed Strap",
          "url": "https://hbsubnoor.com/products/printed-strap"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Coloured Strap",
          "url": "https://hbsubnoor.com/products/coloured-strap"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Transparent Strap",
          "url": "https://hbsubnoor.com/products/transparent-strap"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Fully Automatic Strapping Machine",
          "url": "https://hbsubnoor.com/products/fully-automatic-strapping-machine"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Semi Automatic Strapping Machine",
          "url": "https://hbsubnoor.com/products/semi-automatic-strapping-machine"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-8 md:py-12 px-4 overflow-hidden">
          {/* Animated Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industrial-packaging-background.png"
              alt="Industrial packaging background"
              fill
              className="object-cover object-center opacity-30 transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) scale(1.1)`,
              }}
              priority
            />
          </div>

          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
            }}></div>
          </div>

          <div className="container mx-auto relative z-10 max-w-7xl">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-black">Complete Packaging Solutions</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight animate-fade-in-up text-black">
                <span className="block">Premium</span>
                <span className="block drop-shadow-2xl">Packaging Products</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl lg:text-3xl text-black/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
                Straps & Machinery for Industrial Excellence
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">6</div>
                  <div className="text-base md:text-lg text-black/70 font-semibold">Product Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">25+</div>
                  <div className="text-base md:text-lg text-black/70 font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">50+</div>
                  <div className="text-base md:text-lg text-black/70 font-semibold">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strapping Machinery Section - Featured First */}
        <AnimateOnScroll animation="fadeInLeft" delay={0}>
          <section className="py-6 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                  Industrial Automation
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                  <span className="block">Professional</span>
                  <span className="block drop-shadow-2xl">Strapping Machinery</span>
                </h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  State-of-the-art automation solutions designed to boost productivity, reduce operational costs, and ensure consistent package security
                </p>
              </div>
            </div>

            {/* Category Details */}
            <div className="mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-bg-card via-bg-card to-bg-card/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-border-accent/20">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-text-heading">
                          <span className="block">Industrial Strapping</span>
                          <span className="block drop-shadow-2xl">Solutions</span>
                        </h3>
                        <p className="text-base md:text-lg text-text-primary leading-relaxed">
                          Professional strapping machinery engineered for industrial packaging operations. Available in fully automatic and semi-automatic configurations to meet diverse production needs with reliable performance, energy efficiency, and cost-effective operation.
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">⚡</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">High Speed</h4>
                          <p className="text-xs text-text-primary">Rapid cycle times for maximum throughput</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">🔒</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Reliable</h4>
                          <p className="text-xs text-text-primary">Consistent, secure sealing every time</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">💰</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Cost-Effective</h4>
                          <p className="text-xs text-text-primary">Reduce operational costs significantly</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">🌍</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Versatile</h4>
                          <p className="text-xs text-text-primary">Suitable for various industries</p>
                        </div>
                      </div>
                      
                      {/* Products */}
                      <div className="pt-6 border-t border-border-accent/20">
                        <h4 className="text-lg font-bold text-text-heading mb-4">Our Products</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <Link 
                            href="/products/fully-automatic-strapping-machine" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Fully Automatic
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <Link 
                            href="/products/semi-automatic-strapping-machine" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Semi Automatic
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                      <Image
                        src="/images/packaging-strap-machine.png"
                        alt="Industrial strapping machinery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </AnimateOnScroll>

        {/* Packaging Straps Section */}
        <AnimateOnScroll animation="fadeInRight" delay={0}>
          <section className="py-6 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                  Premium Strap Materials
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                  <span className="block">High-Performance</span>
                  <span className="block drop-shadow-2xl">Packaging Straps</span>
                </h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Polypropylene (PP) and Polyester (PET) straps engineered for maximum tensile strength, shock absorption, and reliable elongation recovery
                </p>
              </div>
            </div>

            {/* Category Details */}
            <div className="mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-bg-card via-bg-card to-bg-card/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-border-accent/20">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5 order-2 lg:order-1">
                      <Image
                        src="/images/packaging-straps-alt.png"
                        alt="Premium packaging straps collection"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-text-heading">
                          <span className="block">Premium Strap</span>
                          <span className="block drop-shadow-2xl">Materials</span>
                        </h3>
                        <p className="text-base md:text-lg text-text-primary leading-relaxed">
                          Premium packaging straps manufactured from high-grade Polypropylene (PP) and Polyester (PET) materials. Engineered for exceptional tensile strength, superior shock absorption, and reliable elongation recovery. Available in custom sizes, printed designs, vibrant colors, and transparent options.
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">💪</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">High Strength</h4>
                          <p className="text-xs text-text-primary">Maximum tensile strength for secure bundling</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">🎨</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Customizable</h4>
                          <p className="text-xs text-text-primary">Full customization options available</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">🛡️</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Durable</h4>
                          <p className="text-xs text-text-primary">Weather-resistant and long-lasting</p>
                        </div>
                        <div className="bg-bg-accent/10 p-3 rounded-xl">
                          <div className="text-xl font-bold text-bg-accent mb-1">♻️</div>
                          <h4 className="font-bold text-text-heading mb-0.5 text-sm">Eco-Friendly</h4>
                          <p className="text-xs text-text-primary">Recyclable materials used</p>
                        </div>
                      </div>
                      
                      {/* Products */}
                      <div className="pt-6 border-t border-border-accent/20">
                        <h4 className="text-lg font-bold text-text-heading mb-4">Our Products</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <Link 
                            href="/products/custom-sized-strap" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Custom Sized
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <Link 
                            href="/products/printed-strap" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Printed
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <Link 
                            href="/products/coloured-strap" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Coloured
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <Link 
                            href="/products/transparent-strap" 
                            className="group flex items-center justify-between p-4 bg-bg-accent/10 rounded-lg border border-border-accent/20 hover:border-bg-accent hover:bg-bg-accent/20 transition-all duration-300"
                          >
                            <span className="text-base font-semibold text-text-heading group-hover:text-bg-accent transition-colors">
                              Transparent
                            </span>
                            <svg className="w-4 h-4 text-bg-accent transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </AnimateOnScroll>

        {/* CTA Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-bg-cta via-bg-cta/90 to-bg-cta text-text-on-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white mb-2">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
                <span className="block">Ready to Secure</span>
                <span className="block drop-shadow-2xl">Your Packaging?</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              Contact us today for detailed product information, technical support, or to request a custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-black text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link 
                href="/company" 
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
              >
                Learn About Us
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          </section>
        </AnimateOnScroll>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923224722707"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Contact us on WhatsApp"
        >
          <div className="relative">
            {/* Pulse Animation Ring */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
            {/* Main Button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50">
              <svg
                className="w-8 h-8 md:w-9 md:h-9 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                Chat with us on WhatsApp
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
