'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import AnimateOnScroll from './AnimateOnScroll';
import { useEffect, useState } from 'react';

interface ProductsSectionProps {
  showHero?: boolean;
  variant?: 'full' | 'compact';
}

export default function ProductsSection({ showHero = false, variant = 'full' }: ProductsSectionProps) {
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
      {showHero && (
        <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-12 md:py-16 px-4 overflow-hidden">
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

          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
            }}></div>
          </div>

          <div className="container mx-auto relative z-10 max-w-7xl">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-lg md:text-xl font-semibold text-white">Our Products</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight animate-fade-in-up text-white">
                <span className="block">Comprehensive</span>
                <span className="block drop-shadow-2xl">Packaging Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid Section */}
      <AnimateOnScroll animation="fadeInRight" delay={0}>
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
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
          {/* Packaging Straps Products Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                Packaging Straps
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                <span className="block">Packaging Straps</span>
              </h3>
            </div>
            <div className="mb-8 sm:mb-10 text-center">
              <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
                Premium quality PP and PET packaging straps designed for industrial use. Choose from transparent, colored, printed, or custom-sized options to meet your specific packaging requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
              <ProductCard
                href="/products/custom-sized-strap"
                imageSrc="/images/custom-sized-strap.png"
                imageAlt="Custom sized packaging strap"
                title="Custom Sized Strap"
                description="Engineered to fit exact product geometry for specialized goods and irregularly shaped packages."
              />
              <ProductCard
                href="/products/printed-strap"
                imageSrc="/images/printed-packaging-straps.png"
                imageAlt="Printed packaging strap"
                title="Printed Strap"
                description="High-contrast, durable printing for branding, security marking, and logistics communication."
              />
              <ProductCard
                href="/products/coloured-strap"
                imageSrc="/images/coloured-strap.png"
                imageAlt="Coloured packaging strap"
                title="Coloured Strap"
                description="Visual identification tool for warehouse management, tracking, and safety protocols."
              />
              <ProductCard
                href="/products/transparent-strap"
                imageSrc="/images/transparent-staps.png"
                imageAlt="Transparent packaging strap"
                title="Transparent Strap"
                description="Sleek, professional hold for retail-facing goods where package design must remain visible."
              />
            </div>
          </div>

          {/* Strapping Machinery Products Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                Strapping Machinery
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                <span className="block">Strapping</span>
                <span className="block drop-shadow-2xl">Machinery</span>
              </h3>
            </div>
            <div className="mb-8 sm:mb-10 text-center">
              <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
                Professional-grade strapping machines for industrial packaging operations. From high-speed fully automatic systems to portable semi-automatic units for flexible production needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <ProductCard
                href="/products/fully-automatic-strapping-machine"
                imageSrc="/images/automatic-strapping-machine.png"
                imageAlt="Fully automatic strapping machine"
                title="Fully Automatic Strapping Machine"
                description="High-speed automation for production line integration with maximum throughput and energy-efficient operation."
                variant="long-title"
              />
              <ProductCard
                href="/products/semi-automatic-strapping-machine"
                imageSrc="/images/semi-automatic strapping machine.png"
                imageAlt="Semi automatic strapping machine"
                title="Semi Automatic Strapping Machine"
                description="Cost-effective, portable solution with rapid 2.5-second cycle time and adjustable tension (15-45 Kgs)."
                variant="long-title"
              />
            </div>
          </div>
        </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      {variant === 'full' && (
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <section className="py-8 px-4 bg-bg-cta text-text-on-accent">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white mb-2">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
                <span className="block">Ready to Secure</span>
                <span className="block drop-shadow-2xl">Your Packaging?</span>
              </h2>
            </div>
            <p className="text-xl mb-6 text-white/90">
              Contact us today for detailed product information, technical support, or to request a custom quote.
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
          </section>
        </AnimateOnScroll>
      )}
    </>
  );
}

