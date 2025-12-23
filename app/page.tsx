'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import { useEffect, useState } from 'react';

export default function Home() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HB Sub Noor Industries",
    "url": "https://hbsubnoor.com",
    "description": "Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hbsubnoor.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-12 md:py-16 px-4 overflow-hidden min-h-screen flex items-center">
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
            <div className="text-center lg:text-left space-y-4">
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
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
            <div className="relative h-[500px] lg:h-[700px] hidden lg:block overflow-hidden">
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
                  <div className="font-bold text-black text-xl">Strapping</div>
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

      {/* About Us Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary relative overflow-hidden">
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
          {/* Section Header with Split Design */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-accent/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-text-heading">About Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">
                  Welcome to HB Sub Noor Industries
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent"></div>
              </div>
              <div className="flex-1 text-right">
                <div className="inline-block bg-gradient-to-br from-bg-accent/20 to-bg-accent/5 p-6 rounded-2xl backdrop-blur-sm border border-border-accent/30">
                  <div className="text-5xl font-extrabold text-bg-accent mb-2">25+</div>
                  <div className="text-lg font-semibold text-text-heading">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Story - Large Feature Card */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-10 md:p-12 rounded-3xl shadow-2xl border border-border-accent/20">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-2xl flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-heading">
                      A Legacy of Excellence
                    </h3>
                    <div className="space-y-3 text-lg text-text-primary leading-relaxed">
                      <p>
                        A global leader in comprehensive packaging and strap solutions. With over <strong className="text-text-heading text-xl">25 years of operational excellence</strong>, we deliver intelligent, cost-effective systems engineered to protect your goods, streamline your operations, and enhance your brand integrity.
                      </p>
                      <p>
                        We believe in winning customer confidence through <strong className="text-text-heading">Commitment, Quality, and Loyalty</strong>. Our journey from strategic market entry to global presence reflects our unwavering dedication to excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision - Side by Side Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl mb-4">
                    🎯
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed flex-1">
                  To provide our customers with the best and affordable custom plastic poly packaging straps, which are <strong className="text-white">Easy to Use, Safe, Reliable and Long Lasting</strong>.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent/50 to-bg-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-2xl shadow-xl border border-border-accent/20 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-bg-accent/20 rounded-xl flex items-center justify-center text-2xl mb-3">
                    👁️
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-heading">Our Vision</h3>
                </div>
                <p className="text-lg text-text-primary leading-relaxed flex-1">
                  To become a leading manufacturer of custom plastic poly packaging straps in the world by focusing on <strong className="text-text-heading">Quality</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Enhanced Stats Grid */}
          <div className="relative">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-text-heading">Why Choose Us?</h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Trusted by companies worldwide for our commitment to excellence and innovation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group bg-bg-card p-6 rounded-2xl shadow-lg border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bg-accent/20 to-bg-accent/10 rounded-2xl flex items-center justify-center text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  🏭
                </div>
                <div className="text-4xl font-extrabold text-bg-accent mb-2">30+</div>
                <div className="font-bold text-text-heading mb-1">Years</div>
                <div className="text-sm text-text-primary">Industry Experience</div>
              </div>

              <div className="group bg-bg-card p-6 rounded-2xl shadow-lg border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bg-accent/20 to-bg-accent/10 rounded-2xl flex items-center justify-center text-5xl mb-3 mx-auto group-hover:scale-110 transition-transform">
                  🌍
                </div>
                <div className="text-4xl font-extrabold text-bg-accent mb-2">50+</div>
                <div className="font-bold text-text-heading mb-1">Countries</div>
                <div className="text-sm text-text-primary">Global Reach</div>
              </div>

              <div className="group bg-bg-card p-6 rounded-2xl shadow-lg border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bg-accent/20 to-bg-accent/10 rounded-2xl flex items-center justify-center text-5xl mb-3 mx-auto group-hover:scale-110 transition-transform">
                  ✨
                </div>
                <div className="text-4xl font-extrabold text-bg-accent mb-2">Premium</div>
                <div className="font-bold text-text-heading mb-1">Quality</div>
                <div className="text-sm text-text-primary">Superior Products</div>
              </div>

              <div className="group bg-bg-card p-6 rounded-2xl shadow-lg border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bg-accent/20 to-bg-accent/10 rounded-2xl flex items-center justify-center text-5xl mb-3 mx-auto group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div className="text-4xl font-extrabold text-bg-accent mb-2">1000+</div>
                <div className="font-bold text-text-heading mb-1">Clients</div>
                <div className="text-sm text-text-primary">Trusted Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
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
          {/* Section Header with Split Design */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-accent/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-text-heading">Our Products</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">
                  Comprehensive Packaging Solutions
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent"></div>
              </div>
              <div className="flex-1 text-right">
                <div className="inline-block bg-gradient-to-br from-bg-accent/20 to-bg-accent/5 p-6 rounded-2xl backdrop-blur-sm border border-border-accent/30">
                  <div className="text-5xl font-extrabold text-bg-accent mb-2">2</div>
                  <div className="text-lg font-semibold text-text-heading">Main Categories</div>
                </div>
              </div>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl">
              Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery
            </p>
          </div>

          {/* Main Product Overview - Large Feature Card */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-10 md:p-12 rounded-3xl shadow-2xl border border-border-accent/20">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-2xl flex items-center justify-center text-3xl">
                    📦
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-heading">
                      Complete Packaging Ecosystem
                    </h3>
                    <div className="space-y-3 text-lg text-text-primary leading-relaxed">
                      <p>
                        We provide a comprehensive range of <strong className="text-text-heading text-xl">high-performance packaging straps</strong> and <strong className="text-text-heading text-xl">state-of-the-art strapping machinery</strong> designed to protect your goods, streamline operations, and enhance productivity.
                      </p>
                      <p>
                        From customizable Polypropylene (PP) and Polyester (PET) straps to fully automated and semi-automatic machines, we deliver intelligent, cost-effective solutions engineered for maximum efficiency and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories - Side by Side Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Packaging Straps Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-2xl shadow-xl border border-border-accent/20 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl mb-3">
                    📦
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-heading">Packaging Straps</h3>
                </div>
                <p className="text-lg text-text-primary leading-relaxed mb-4 flex-1">
                  High-performance Polypropylene (PP) and Polyester (PET) straps engineered for maximum tensile strength, shock absorption, and reliable elongation recovery.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bg-accent rounded-full"></div>
                    <span className="text-text-primary font-medium">Custom Sized Strap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bg-accent rounded-full"></div>
                    <span className="text-text-primary font-medium">Printed Strap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bg-accent rounded-full"></div>
                    <span className="text-text-primary font-medium">Coloured Strap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bg-accent rounded-full"></div>
                    <span className="text-text-primary font-medium">Transparent Strap</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-accent/20">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-text-heading">Customizable:</strong> Length, Width, Thickness, Colour, Printing
                  </p>
                </div>
              </div>
            </div>

            {/* Strapping Machinery Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl mb-4">
                    ⚙️
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Strapping Machinery</h3>
                </div>
                <p className="text-lg leading-relaxed mb-4 flex-1">
                  State-of-the-art automation solutions designed to boost productivity, reduce operational costs, and ensure consistent package security.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-lg">Fully Automatic</h4>
                    <p className="text-sm opacity-90">
                      High-speed automation for production line integration with maximum throughput and energy-efficient operation.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-lg">Semi Automatic</h4>
                    <p className="text-sm opacity-90">
                      Cost-effective, portable solution with rapid 2.5-second cycle time and adjustable tension (15-45 Kgs).
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    <strong>Perfect for:</strong> High-volume operations, diverse product sizes, and mobile packaging stations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="text-center">
            <Link 
              href="/products" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-bg-accent text-text-on-accent rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Products
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-bg-accent via-bg-accent/90 to-bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 bg-bg-cta text-text-on-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-6">
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
    </>
  );
}
