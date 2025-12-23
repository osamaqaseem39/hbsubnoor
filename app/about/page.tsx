'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-black">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-black">
            Building Trust Through
            <span className="block">Innovation & Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Three decades of transforming industrial packaging through cutting-edge technology and unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">Our Journey</h2>
            <div className="w-24 h-1 bg-bg-accent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              From a vision to a global leader—discover the milestones that shaped our company
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bg-accent via-bg-accent/50 to-bg-accent/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {/* 2004 - Strategic Entry */}
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2004</span>
                </div>
                <div className="flex-1 md:ml-8 bg-bg-card p-6 rounded-xl border-l-4 border-border-accent shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-text-heading">Strategic Entry</h3>
                  <p className="text-text-primary leading-relaxed">
                    A bold initiative marking our entry into the strip packaging business. This strategic move established HB Sub Noor Industries as a dedicated player in the industrial packaging sector, setting the foundation for decades of growth and innovation.
                  </p>
                </div>
              </div>

              {/* 2008 - First Production Line */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2008</span>
                </div>
                <div className="flex-1 md:mr-8 bg-bg-card p-4 rounded-xl border-r-4 border-border-accent shadow-lg md:text-right">
                  <h3 className="text-2xl font-bold mb-2 text-text-heading">A Bold Initiative</h3>
                  <p className="text-text-primary leading-relaxed">
                    Inaugurating our first production line, we took a significant leap forward in manufacturing capabilities. This milestone enabled us to meet growing market demand and establish ourselves as a reliable supplier of high-quality packaging straps.
                  </p>
                </div>
              </div>

              {/* 2011 - Second Production Line */}
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2011</span>
                </div>
                <div className="flex-1 md:ml-8 bg-bg-card p-4 rounded-xl border-l-4 border-border-accent shadow-lg">
                  <h3 className="text-2xl font-bold mb-2 text-text-heading">Expanding & Scaling Up</h3>
                  <p className="text-text-primary leading-relaxed">
                    Successfully opened our second production line, doubling our manufacturing capacity. This expansion allowed us to serve a broader customer base and respond more effectively to increasing demand, marking a period of rapid growth and market expansion.
                  </p>
                </div>
              </div>

              {/* 2015 - Third Production Line */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2015</span>
                </div>
                <div className="flex-1 md:mr-8 bg-bg-card p-6 rounded-xl border-r-4 border-border-accent shadow-lg md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-text-heading">Growing Up</h3>
                  <p className="text-text-primary leading-relaxed">
                    Launched our third production line, further expanding our capabilities. The expansion continued as we strengthened our position in the market, enhancing our ability to deliver consistent quality and meet the evolving needs of our global customer base.
                  </p>
                </div>
              </div>

              {/* 2018 - Fourth Production Line */}
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2018</span>
                </div>
                <div className="flex-1 md:ml-8 bg-bg-card p-6 rounded-xl border-l-4 border-border-accent shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 text-text-heading">Staying Committed to Our Mission</h3>
                  <p className="text-text-primary leading-relaxed">
                    Our fourth successful production line came online, demonstrating our unwavering commitment to growth and excellence. Developing and launching this expansion, we scaled up the industry with the aim of expanding our reach and serving customers worldwide with enhanced capacity and efficiency.
                  </p>
                </div>
              </div>

              {/* 2025 - Future Vision */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-6">
                <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-text-on-accent z-10 flex-shrink-0">
                  <span className="text-sm">2025</span>
                </div>
                <div className="flex-1 md:mr-8 bg-bg-card p-6 rounded-xl border-r-4 border-border-accent shadow-lg md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-text-heading">Innovation & Global Leadership</h3>
                  <p className="text-text-primary leading-relaxed">
                    As we look toward 2025, we continue to push boundaries with advanced automation, sustainable manufacturing practices, and cutting-edge technology. Our commitment to innovation drives us to explore new markets, develop eco-friendly solutions, and maintain our position as a global leader in industrial packaging solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">Our Core Values</h2>
            <div className="w-24 h-1 bg-bg-accent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              The principles that guide every decision, every product, and every relationship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-heading">Commitment</h3>
              <p className="text-text-primary leading-relaxed">
                We stand by our promises. Every order, every deadline, every quality standard—we deliver with unwavering dedication. Our commitment extends beyond products to building lasting partnerships.
              </p>
            </div>

            <div className="group bg-bg-card p-8 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⭐
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Quality</h3>
              <p className="text-text-primary leading-relaxed">
                Excellence isn't optional—it's our standard. From raw material selection to final inspection, we maintain rigorous quality control processes that ensure every product meets international standards.
              </p>
            </div>

            <div className="group bg-bg-card p-8 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Loyalty</h3>
              <p className="text-text-primary leading-relaxed">
                Relationships matter. We build trust through consistent performance, transparent communication, and genuine care for our customers' success. Your growth is our growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-text-heading">Innovation</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-heading">
                Pioneering the Future of Packaging
              </h2>
              <p className="text-lg text-text-primary leading-relaxed mb-4">
                We don't just manufacture straps—we engineer solutions. Our research and development team continuously explores new materials, manufacturing techniques, and automation technologies to stay ahead of industry demands.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-text-on-accent font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-heading mb-1">Advanced Material Science</h4>
                    <p className="text-text-primary">Continuous research into polymer chemistry and material properties to enhance strap performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-text-on-accent font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-heading mb-1">Smart Manufacturing</h4>
                    <p className="text-text-primary">Integration of IoT sensors and automation systems for precision production and quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-text-on-accent font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-heading mb-1">Sustainable Practices</h4>
                    <p className="text-text-primary">Commitment to eco-friendly manufacturing processes and recyclable materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-accent/20">
              <Image
                src="/images/semi-automatic-strapping-machine.png"
                alt="Innovation in strapping technology"
                fill
                className="object-contain p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-8 px-4 bg-bg-cta text-text-on-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-6">
            Whether you're a long-time partner or exploring new possibilities, we'd love to connect and discuss how we can support your packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/company" 
              className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/30 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn About Our Company
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
