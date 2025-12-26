'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ProductsCarouselSection from '@/components/ProductsCarouselSection';
import { useEffect, useState } from 'react';

export default function HomePageClient() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HB Sub Noor Industries",
    "url": "https://hbsubnoor.com",
    "description": "Leading packaging strap manufacturer of polypropylene (PP) and polyester (PET) packaging strap materials, premium strapping machines (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence. Quality industrial packaging strap solutions globally.",
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
        <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-8 sm:py-12 md:py-16 px-4 overflow-hidden min-h-[85vh] sm:min-h-screen flex items-center">
          {/* Animated Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industrial-packaging-background.png"
              alt="Industrial packaging and strap solutions background - HB Sub Noor Industries"
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up text-black">
                  <span className="block">HB SUB NOOR</span>
                  <span className="block drop-shadow-2xl">
                    INDUSTRIES
                  </span>
                </h1>

                {/* Subheading */}
                <div className="space-y-1 sm:space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black drop-shadow-lg">
                    The Future of Industrial
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    Packaging Security
                  </p>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Elevate Your Logistics. Secure Your Future.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <Link 
                    href="/contact" 
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get a Quote
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link 
                    href="/products" 
                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-black/30 text-black font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                  >
                    View Products
                  </Link>
                </div>
              </div>

              {/* Right Column - Product Images */}
              <div className="relative h-[500px] lg:h-[700px] hidden lg:block overflow-hidden">
                {/* Strapping Machine - Top Right */}
                <div className="absolute top-10 right-10 bg-bg-accent/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-all duration-300 animate-float hover:scale-105">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-white/20 to-white/10">
                    <Image
                      src="/images/fully-automatic-strapping-machine-alt-2.png"
                      alt="Semi-automatic strapping machine for industrial packaging - HB Sub Noor Industries"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="font-bold text-black text-xl">Strapping</div>
                    <div className="text-black/70 text-base">Machinery</div>
                  </div>
                </div>

                {/* PP Strap - Bottom Left */}
                <div className="absolute bottom-20 left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 transform -rotate-3 hover:rotate-0 transition-all duration-300 animate-float hover:scale-105" style={{ animationDelay: '0.5s' }}>
                  <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-bg-accent/10 to-bg-accent/5">
                    <Image
                      src="/images/polypropylene-pp-strapping-material.png"
                      alt="Polypropylene PP strap material roll for secure packaging - HB Sub Noor Industries"
                      fill
                      className="object-contain drop-shadow-lg p-2"
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

        {/* Products Section with Carousel */}
        <ProductsCarouselSection
          products={[
            {
              name: "Custom Sized Strap",
              href: "/products/custom-sized-strap",
              imageSrc: "/images/custom-sized-strap.png",
              imageAlt: "Custom sized packaging strap",
              description: "Engineered to fit exact product geometry for specialized goods and irregularly shaped packages. Eliminates material waste and provides custom-level security hold.",
              specifications: ["PP/PET Materials", "Custom Dimensions", "Full Color Spectrum", "Various Thickness"],
              features: [
                "Perfect fit for irregular packages",
                "Eliminates material waste",
                "Optimized unitization",
                "Reduced shipping costs",
              ],
              useCases: [
                "Specialized goods",
                "Irregular packages",
                "Heavy-duty applications",
                "Custom pallet unitization",
              ],
            },
            {
              name: "Printed Strap",
              href: "/products/printed-strap",
              imageSrc: "/images/printed-packaging-straps.png",
              imageAlt: "Printed packaging strap",
              description: "High-contrast, durable printing for branding, security marking, and logistics communication. Professional appearance with excellent print quality.",
              specifications: ["PP/PET Materials", "Custom Printing", "High-Contrast Design", "Durable Ink"],
              features: [
                "Brand customization",
                "Security marking",
                "Logistics communication",
                "Professional appearance",
              ],
              useCases: [
                "Branded packaging",
                "Security marking",
                "Warehouse organization",
                "Product identification",
              ],
            },
            {
              name: "Coloured Strap",
              href: "/products/coloured-strap",
              imageSrc: "/images/coloured-strap.png",
              imageAlt: "Coloured packaging strap",
              description: "Visual identification tool for warehouse management, tracking, and safety protocols. Available in vibrant colors for easy product categorization.",
              specifications: ["PP/PET Materials", "Vibrant Colors", "High Visibility", "Color Coding"],
              features: [
                "Visual identification",
                "Warehouse management",
                "Easy tracking",
                "Safety protocols",
              ],
              useCases: [
                "Product categorization",
                "Warehouse organization",
                "Safety protocols",
                "Visual tracking",
              ],
            },
            {
              name: "Transparent Strap",
              href: "/products/transparent-strap",
              imageSrc: "/images/transparent-staps.png",
              imageAlt: "Transparent packaging strap",
              description: "Sleek, professional hold for retail-facing goods where package design must remain visible. Invisible security with visible quality.",
              specifications: ["PP/PET Materials", "Crystal Clear", "High Strength", "Professional Look"],
              features: [
                "Package design visibility",
                "Professional appearance",
                "High-level security",
                "Discreet hold",
              ],
              useCases: [
                "Retail packaging",
                "Product display",
                "Professional presentation",
                "Visible package design",
              ],
            },
            {
              name: "Fully Automatic Strapping Machine",
              href: "/products/fully-automatic-strapping-machine",
              imageSrc: "/images/automatic-strapping-machine.png",
              imageAlt: "Fully automatic strapping machine",
              description: "High-speed automation for production line integration with maximum throughput and energy-efficient operation. Zero manual intervention required.",
              specifications: ["Auto-Detection", "Heat-Weld Closure", "Precise Tension Control", "Energy Efficient"],
              features: [
                "Automatic package detection",
                "Maximum throughput",
                "Energy-efficient operation",
                "Production line integration",
              ],
              useCases: [
                "Production lines",
                "High-volume operations",
                "Automated packaging",
                "Industrial applications",
              ],
            },
            {
              name: "Semi Automatic Strapping Machine",
              href: "/products/semi-automatic-strapping-machine",
              imageSrc: "/images/semi-automatic strapping machine.png",
              imageAlt: "Semi automatic strapping machine",
              description: "Cost-effective, portable solution with rapid 2.5-second cycle time and adjustable tension (15-45 Kgs). Perfect for flexible production needs.",
              specifications: ["2.5s Cycle Time", "15-45 Kgs Tension", "Portable Design", "Manual Feeding"],
              features: [
                "Rapid cycle time",
                "Adjustable tension",
                "Portable design",
                "Cost-effective solution",
              ],
              useCases: [
                "Mobile packaging stations",
                "Flexible production",
                "Small to medium operations",
                "Diverse product sizes",
              ],
            },
          ]}
        />

        {/* Stats Section - Full Width */}
        <AnimateOnScroll animation="fadeInUp" delay={100}>
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-bg-accent via-bg-accent/95 to-bg-accent text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
              <AnimateOnScroll animation="stagger" delay={200}>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🏭</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">30+</div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">Years</div>
                    <div className="text-sm sm:text-base text-white/90">Industry Experience</div>
                  </div>

                  <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🌍</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">50+</div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">Countries</div>
                    <div className="text-sm sm:text-base text-white/90">Global Reach</div>
                  </div>

                  <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">✨</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">Premium</div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">Quality</div>
                    <div className="text-sm sm:text-base text-white/90">Superior Products</div>
                  </div>

                  <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">💼</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">1000+</div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">Clients</div>
                    <div className="text-sm sm:text-base text-white/90">Trusted Worldwide</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        </AnimateOnScroll>

        {/* About Us Section */}
        <AnimateOnScroll animation="fadeInLeft" delay={100}>
          <section className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary relative overflow-hidden">
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
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                  About Us
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                  <span className="block">Welcome to HB Sub Noor</span>
                  <span className="block drop-shadow-2xl">Industries</span>
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Main Story - Large Feature Card */}
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="mb-10 sm:mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-bg-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-border-accent/20">
                  <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl">
                      🏆
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mb-3 sm:mb-4 text-text-heading">
                        <span className="block">A Legacy of</span>
                        <span className="block drop-shadow-2xl">Excellence</span>
                      </h3>
                      <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-text-primary leading-relaxed">
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
            </AnimateOnScroll>

            {/* Mission & Vision - Side by Side Cards */}
            <AnimateOnScroll animation="stagger" delay={200}>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                {/* Mission Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl h-full flex flex-col">
                    <div className="mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4">
                        🎯
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mb-4">Our Mission</h3>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed flex-1">
                      To provide our customers with the best and affordable custom plastic poly packaging straps, which are <strong className="text-white">Easy to Use, Safe, Reliable and Long Lasting</strong>.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent/50 to-bg-accent rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-border-accent/20 h-full flex flex-col">
                    <div className="mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4">
                        👁️
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mb-4 text-text-heading">Our Vision</h3>
                    </div>
                    <p className="text-base sm:text-lg text-text-primary leading-relaxed flex-1">
                      To become a leading manufacturer of custom plastic poly packaging straps in the world by focusing on <strong className="text-text-heading">Quality</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          </section>
        </AnimateOnScroll>

        {/* CTA Section */}
        <AnimateOnScroll animation="fadeInUp" delay={100}>
          <section className="py-6 sm:py-8 px-4 sm:px-6 bg-bg-cta text-text-on-accent">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white mb-2">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
                <span className="block">Ready to Secure</span>
                <span className="block drop-shadow-2xl">Your Future?</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white/90">
              Contact us today for detailed product information, technical support, or to request a custom quote.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#F9A634] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#e8951f] transition-colors border-2 border-white/20 hover:border-white/40"
            >
              Get in Touch
            </Link>
          </div>
          </section>
        </AnimateOnScroll>
      </div>
    </>
  );
}

