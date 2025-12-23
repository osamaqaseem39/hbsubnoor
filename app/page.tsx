'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-20 md:py-32 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial-packaging-background.png"
            alt="Industrial packaging and strap solutions background - HB Sub Noor Industries"
            fill
            className="object-cover opacity-30 transition-transform duration-700 ease-out"
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

        <div className="container mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-black">25+ Years of Excellence</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up text-black">
                <span className="block">HB SUB NOOR</span>
                <span className="block drop-shadow-2xl">
                  INDUSTRIES
                </span>
              </h1>

              {/* Subheading */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black drop-shadow-lg">
                  The Future of Industrial
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  Packaging Security
                </p>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-black/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Elevate Your Logistics. Secure Your Future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-black text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get a Quote
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link 
                  href="/products" 
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-black/30 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                  View Products
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-extrabold text-black">25+</div>
                  <div className="text-sm text-black/70 font-medium">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-extrabold text-black">1000+</div>
                  <div className="text-sm text-black/70 font-medium">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-extrabold text-black">50+</div>
                  <div className="text-sm text-black/70 font-medium">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Images */}
            <div className="relative h-[500px] lg:h-[700px] hidden lg:block">
              {/* Strapping Machine - Top Right */}
              <div className="absolute top-10 right-10 bg-bg-accent/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-all duration-300 animate-float hover:scale-105">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="/images/semi-automatic-strapping-machine.png"
                    alt="Semi-automatic strapping machine for industrial packaging - HB Sub Noor Industries"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="font-bold text-black text-xl">Strap</div>
                  <div className="text-black/70 text-base">Machinery</div>
                </div>
              </div>

              {/* PP Strap - Bottom Left */}
              <div className="absolute bottom-20 left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 transform -rotate-3 hover:rotate-0 transition-all duration-300 animate-float hover:scale-105" style={{ animationDelay: '0.5s' }}>
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <Image
                    src="/images/polypropylene-pp-strapping-material.png"
                    alt="Polypropylene PP strap material roll for secure packaging - HB Sub Noor Industries"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="font-bold text-black text-xl">PP Strap</div>
                  <div className="text-black/60 text-base">Material</div>
                </div>
              </div>

              {/* Floating Card 3 - Global Reach */}
              <div className="absolute top-1/2 right-0 bg-gradient-to-br from-white to-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-black/30 transform rotate-6 hover:rotate-0 transition-all duration-300 animate-float hover:scale-105" style={{ animationDelay: '1s' }}>
                <div className="text-6xl mb-3">🌍</div>
                <div className="font-bold text-black text-xl">Global</div>
                <div className="text-black/70 text-base">Reach</div>
              </div>

              {/* Central Highlight Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-black/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Product Marquee */}
      <ProductMarquee />

      {/* Company Overview */}
      <section className="py-16 px-4 bg-bg-primary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-heading">
            Welcome to HB Sub Noor Industries
          </h2>
          <p className="text-lg text-text-primary leading-relaxed mb-6">
            A global leader in comprehensive packaging and strap solutions. With over <strong>25 years of operational excellence</strong>, we deliver intelligent, cost-effective systems engineered to protect your goods, streamline your operations, and enhance your brand integrity.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-4 bg-bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-heading">
            Our Core Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-bg-card p-8 rounded-lg shadow-lg border-l-4 border-border-accent">
              <h3 className="text-2xl font-bold mb-4 text-text-heading">
                High-Performance Packaging Straps
              </h3>
              <p className="text-text-primary leading-relaxed">
                Manufacturing top-of-the-line custom plastic poly strap (Polypropylene/Polyester) known for being <strong>Easy to Use, Safe, Reliable, and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-bg-card p-8 rounded-lg shadow-lg border-l-4 border-border-accent">
              <h3 className="text-2xl font-bold mb-4 text-text-heading">
                Automated Strapping Machinery
              </h3>
              <p className="text-text-primary leading-relaxed">
                Dealing in state-of-the-art automatic and semi-automatic strapping machines designed to boost productivity and reduce operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-bg-cta text-text-on-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for detailed product information, technical support, or to request a custom quote.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-bg-accent text-text-on-accent px-8 py-3 rounded-lg font-semibold hover:bg-bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
