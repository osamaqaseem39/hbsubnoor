'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Products() {
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
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-12 md:py-16 px-4 overflow-hidden">
        {/* Animated Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial-packaging-background.png"
            alt="Industrial packaging background"
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

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="text-center space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-black">Our Products</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up text-black">
              <span className="block">Comprehensive</span>
              <span className="block drop-shadow-2xl">Packaging Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Complete ecosystem of packaging security with customizable strap materials and high-speed application machinery
            </p>
          </div>
        </div>
      </section>

      {/* Packaging Straps Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-text-heading">Packaging Straps</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-text-heading leading-tight">
                  High-Performance Strap Materials
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-bg-accent to-transparent"></div>
              </div>
              <div className="flex-1 text-right">
                <div className="inline-block bg-gradient-to-br from-bg-accent/20 to-bg-accent/5 p-4 rounded-xl backdrop-blur-sm border border-border-accent/30">
                  <div className="text-3xl font-extrabold text-bg-accent mb-1">4</div>
                  <div className="text-sm font-semibold text-text-heading">Strap Types</div>
                </div>
              </div>
            </div>
            <p className="text-base text-text-secondary max-w-3xl">
              Polypropylene (PP) and Polyester (PET) straps engineered for maximum tensile strength, shock absorption, and reliable elongation recovery
            </p>
          </div>

          {/* Product Image Showcase */}
          <div className="mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-2xl shadow-2xl border border-border-accent/20">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/polypropylene-pp-strapping-material.png"
                      alt="Polypropylene PP strap material roll"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/20 rounded-full">
                      <span className="text-xs font-semibold text-text-heading">Premium Material</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-heading">
                      Polypropylene (PP) Straps
                    </h3>
                    <p className="text-base text-text-primary leading-relaxed">
                      High-performance straps engineered for maximum tensile strength, shock absorption, and reliable elongation recovery. Perfect for securing packages during transport and storage.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-bg-accent/10 rounded-full text-sm text-text-heading font-medium">Customizable</span>
                      <span className="px-3 py-1 bg-bg-accent/10 rounded-full text-sm text-text-heading font-medium">Durable</span>
                      <span className="px-3 py-1 bg-bg-accent/10 rounded-full text-sm text-text-heading font-medium">Cost-Effective</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strap Types Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Custom Sized Strap */}
            <Link href="/products/custom-sized-strap" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-4 rounded-xl shadow-xl border border-border-accent/20 h-full flex flex-col group-hover:shadow-2xl transition-all">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl font-bold mb-3">
                    1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-text-heading group-hover:text-bg-accent transition-colors">Custom Sized Strap</h3>
                </div>
                <p className="text-base text-text-primary leading-relaxed mb-4 flex-1">
                  Engineered to fit exact product geometry, crucial for specialized goods or irregularly shaped packages.
                </p>
                <div className="space-y-2 pt-4 border-t border-border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Optimized unitization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Eliminates material waste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Custom-level security</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-accent/20 flex items-center gap-2 text-bg-accent font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Printed Strap */}
            <Link href="/products/printed-strap" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-4 rounded-xl shadow-xl h-full flex flex-col group-hover:shadow-2xl transition-all">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold mb-3">
                    2
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">Printed Strap</h3>
                </div>
                <p className="text-base leading-relaxed mb-3 flex-1">
                  Turn your packaging into a mobile billboard with high-contrast, durable, fade-resistant printing.
                </p>
                <div className="space-y-2 pt-3 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">Brand identity & logos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">Tamper-evident marking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">Logistics communication</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2 text-white font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Coloured Strap */}
            <Link href="/products/coloured-strap" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-xl shadow-xl border border-border-accent/20 h-full flex flex-col group-hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl font-bold mb-3">
                    3
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-text-heading group-hover:text-bg-accent transition-colors">Coloured Strap</h3>
                </div>
                <p className="text-base text-text-primary leading-relaxed mb-4 flex-1">
                  Powerful tool for warehouse management, tracking, and safety protocols through visual identification.
                </p>
                <div className="space-y-2 pt-4 border-t border-border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Inventory management (FIFO)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Quick visual identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Error reduction</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-accent/20 flex items-center gap-2 text-bg-accent font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Transparent Strap */}
            <Link href="/products/transparent-strap" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-xl shadow-xl border border-border-accent/20 h-full flex flex-col group-hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl font-bold mb-3">
                    4
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-text-heading group-hover:text-bg-accent transition-colors">Transparent Strap</h3>
                </div>
                <p className="text-base text-text-primary leading-relaxed mb-4 flex-1">
                  Sleek, professional, and discreet hold designed for retail-facing goods where package design must remain visible.
                </p>
                <div className="space-y-2 pt-4 border-t border-border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Professional presentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Tamper evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-bg-accent rounded-full"></div>
                    <span className="text-sm text-text-primary font-medium">Retail packaging</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-accent/20 flex items-center gap-2 text-bg-accent font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Customization Options */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-6 rounded-2xl shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Customization Options Available</h3>
              <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-3">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-colors">
                  <p className="font-bold text-lg mb-1">Length</p>
                  <p className="text-sm opacity-90">Custom Sized</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-colors">
                  <p className="font-bold text-lg mb-1">Width</p>
                  <p className="text-sm opacity-90">9mm - 15.5mm</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-colors">
                  <p className="font-bold text-lg mb-1">Thickness</p>
                  <p className="text-sm opacity-90">Variable</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-colors">
                  <p className="font-bold text-lg mb-1">Colour</p>
                  <p className="text-sm opacity-90">Full Spectrum</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-colors">
                  <p className="font-bold text-lg mb-1">Printing</p>
                  <p className="text-sm opacity-90">Custom Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-text-heading">Strapping Machinery</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-text-heading leading-tight">
                  Industrial Strapping Machinery
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-bg-accent to-transparent"></div>
              </div>
              <div className="flex-1 text-right">
                <div className="inline-block bg-gradient-to-br from-bg-accent/20 to-bg-accent/5 p-4 rounded-xl backdrop-blur-sm border border-border-accent/30">
                  <div className="text-3xl font-extrabold text-bg-accent mb-1">2</div>
                  <div className="text-sm font-semibold text-text-heading">Machine Types</div>
                </div>
              </div>
            </div>
            <p className="text-base text-text-secondary max-w-3xl">
              State-of-the-art automation solutions designed to boost productivity, reduce operational costs, and ensure consistent package security
            </p>
          </div>

          {/* Machinery Cards with Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Fully Automatic */}
            <Link href="/products/fully-automatic-strapping-machine" className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-bg-card p-6 rounded-2xl shadow-2xl border border-border-accent/20 group-hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5 mb-6">
                    <Image
                      src="/images/semi-automatic-strapping-machine.png"
                      alt="Fully automatic strapping machine"
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-text-heading">High-Speed Automation</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-heading group-hover:text-bg-accent transition-colors">
                    Fully Automatic Strapping Machine
                  </h3>
                </div>
                <p className="text-base text-text-primary leading-relaxed mb-4">
                  High-speed automation solution engineered for production line integration and maximum throughput.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-bg-accent/10 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-text-heading">Function</h4>
                    <p className="text-sm text-text-primary leading-relaxed">
                      Automatically detects packages, allots, tightens to precise settings, and fastens polypropylene straps around packages.
                    </p>
                  </div>
                  
                  <div className="bg-bg-accent/10 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-text-heading">Operation</h4>
                    <p className="text-sm text-text-primary leading-relaxed">
                      Utilizes instantaneous heat-weld closure for secure, permanent seal. Features auto-switch sensors that conserve energy when idle.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border-accent/20">
                    <h4 className="font-bold mb-2 text-text-heading">Ideal For</h4>
                    <p className="text-sm text-text-primary leading-relaxed">
                      High-volume, 24/7 industrial operations requiring consistent, perfect strap placement for product and pallet stability.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border-accent/20 flex items-center gap-2 text-bg-accent font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Semi Automatic */}
            <Link href="/products/semi-automatic-strapping-machine" className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-6 rounded-2xl shadow-2xl group-hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="relative h-[300px] rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm mb-6">
                    <Image
                      src="/images/semi-automatic-strapping-machine.png"
                      alt="Semi automatic strapping machine"
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <span className="text-xs font-semibold">Portable Solution</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Semi Automatic Strapping Machine
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-4">
                  Cost-effective, portable solution offering flexibility without compromising on sealing integrity or speed.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <h4 className="font-bold mb-2">Function</h4>
                    <p className="text-sm leading-relaxed">
                      Operators manually feed the strap over the product, and the machine instantly executes tensioning and sealing.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <h4 className="font-bold mb-2">Technical Specs</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Cycle Time:</strong> Rapid 2.5 seconds per strap</li>
                      <li><strong>Tension Range:</strong> Adjustable 15-45 Kgs</li>
                      <li><strong>Strap Width:</strong> 9mm, 12mm, 15.5mm</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-bold mb-2">Application</h4>
                    <p className="text-sm leading-relaxed">
                      Excellent for diverse product sizes, mobile packaging stations. Suitable for Paper, Corrugated Box, Plastic, Ceramic, Wood, Light Aluminum, and Steel.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2 text-white font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 bg-bg-cta text-text-on-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Secure Your Packaging?
          </h2>
          <p className="text-xl mb-6">
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
    </div>
  );
}
