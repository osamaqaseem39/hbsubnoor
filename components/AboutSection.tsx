'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import { useEffect, useState } from 'react';

interface AboutSectionProps {
  showHero?: boolean;
  variant?: 'full' | 'compact';
}

export default function AboutSection({ showHero = false, variant = 'full' }: AboutSectionProps) {
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
              className="object-cover object-center opacity-20 transition-transform duration-700 ease-out"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-black">
              <span className="block">Building Trust Through</span>
              <span className="block drop-shadow-2xl">Innovation & Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Three decades of transforming industrial packaging through cutting-edge technology and unwavering commitment to quality
            </p>
          </div>
        </section>
      )}

      {/* Our Story - Timeline */}
      {variant === 'full' && (
        <AnimateOnScroll animation="fadeInDown" delay={0}>
          <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-bg-primary relative overflow-hidden w-full">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}></div>

          <div className="container mx-auto max-w-full relative z-10 overflow-x-hidden px-4 md:px-8 lg:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                  Our Journey
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                  <span className="block">Our Journey</span>
                </h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
                  From a vision to a global leader—discover the milestones that shaped our company
                </p>
              </div>
            </AnimateOnScroll>

            <div className="relative py-24 md:py-32 overflow-x-hidden min-h-[600px] md:min-h-[700px]">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent/20 hidden md:block -translate-y-1/2 z-0"></div>

              <AnimateOnScroll animation="stagger" delay={200}>
                <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-6 lg:gap-8 pb-8 md:pb-0 w-full relative md:h-[600px]">
                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">Strategic Entry</h3>
                    <p className="text-sm text-text-primary">
                      Entered the strip packaging business, establishing our foundation in industrial packaging.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">🚀</span>
                    <span className="text-sm font-bold">2004</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">First Production Line</h3>
                    <p className="text-sm text-text-primary">
                      Launched our first production line, expanding manufacturing capabilities.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">🏭</span>
                    <span className="text-sm font-bold">2008</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">Scaling Up</h3>
                    <p className="text-sm text-text-primary">
                      Opened second production line, doubling capacity and market reach.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">📈</span>
                    <span className="text-sm font-bold">2011</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">Growing Up</h3>
                    <p className="text-sm text-text-primary">
                      Launched third production line, strengthening market position.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">🌱</span>
                    <span className="text-sm font-bold">2015</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">Global Expansion</h3>
                    <p className="text-sm text-text-primary">
                      Fourth production line online, expanding worldwide reach.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">💪</span>
                    <span className="text-sm font-bold">2018</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-4 min-w-[200px] md:min-w-0 flex-1 md:h-full">
                  <div className="bg-bg-card p-4 rounded-xl border-t-4 border-border-accent shadow-lg text-center mb-4 md:mb-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-8">
                    <h3 className="text-lg font-bold mb-2 text-text-heading">Innovation Leader</h3>
                    <p className="text-sm text-text-primary">
                      Advancing automation and sustainable manufacturing practices.
                    </p>
                  </div>
                  <div className="w-32 h-32 bg-bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                    <span className="text-3xl mb-1">🌟</span>
                    <span className="text-sm font-bold">2025</span>
                  </div>
                  <div className="hidden md:block h-40"></div>
                </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
          </section>
        </AnimateOnScroll>
      )}

      {/* Core Values */}
      <AnimateOnScroll animation="fadeInLeft" delay={100}>
        <section className="py-8 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                <span className="block">Our Core</span>
                <span className="block drop-shadow-2xl">Values</span>
              </h2>
            </div>
            <div className="text-center mb-8">
              <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
                The principles that guide every decision, every product, and every relationship
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="stagger" delay={200}>
            <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">Commitment</h3>
              <p className="text-text-primary leading-relaxed">
                We stand by our promises. Every order, every deadline, every quality standard—we deliver with unwavering dedication. Our commitment extends beyond products to building lasting partnerships.
              </p>
            </div>

            <div className="group bg-bg-card p-8 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⭐
              </div>
              <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">Quality</h3>
              <p className="text-text-primary leading-relaxed">
                Excellence isn't optional—it's our standard. From raw material selection to final inspection, we maintain rigorous quality control processes that ensure every product meets international standards.
              </p>
            </div>

            <div className="group bg-bg-card p-8 rounded-2xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-extrabold leading-tight mb-4 text-text-heading">Loyalty</h3>
              <p className="text-text-primary leading-relaxed">
                Relationships matter. We build trust through consistent performance, transparent communication, and genuine care for our customers' success. Your growth is our growth.
              </p>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
        </section>
      </AnimateOnScroll>

      {/* Innovation & Technology */}
      {variant === 'full' && (
        <AnimateOnScroll animation="scaleIn" delay={100}>
          <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <AnimateOnScroll animation="fadeInLeft" delay={100}>
                  <div className="max-w-4xl mb-4 sm:mb-5 md:mb-6">
                    <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                      Innovation
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                      <span className="block">Pioneering the Future</span>
                      <span className="block drop-shadow-2xl">of Packaging</span>
                    </h2>
                  </div>
                  <p className="text-lg text-text-primary leading-relaxed mb-4">
                    We don't just manufacture straps—we engineer solutions. Our research and development team continuously explores new materials, manufacturing techniques, and automation technologies to stay ahead of industry demands.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="stagger" delay={200}>
                  <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-1">Advanced Material Science</h4>
                      <p className="text-text-primary">Continuous research into polymer chemistry and material properties to enhance strap performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-1">Smart Manufacturing</h4>
                      <p className="text-text-primary">Integration of IoT sensors and automation systems for precision production and quality assurance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-1">Sustainable Practices</h4>
                      <p className="text-text-primary">Commitment to eco-friendly manufacturing processes and recyclable materials</p>
                    </div>
                  </div>
                  </div>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll animation="fadeInRight" delay={300}>
                <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-accent/20">
                <Image
                  src="/images/semi-automatic-strapping-machine.png"
                  alt="Innovation in strapping technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
          </section>
        </AnimateOnScroll>
      )}

      {/* CTA Section */}
      {variant === 'full' && (
        <AnimateOnScroll animation="fadeInUp" delay={100}>
          <section className="py-8 px-4 bg-bg-cta text-text-on-accent">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
                Connect With Us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
                <span className="block">Join Us on</span>
                <span className="block drop-shadow-2xl">This Journey</span>
              </h2>
            </div>
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
        </AnimateOnScroll>
      )}
    </>
  );
}

