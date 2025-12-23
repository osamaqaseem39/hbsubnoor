'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Company() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial-packaging-background.png"
            alt="Industrial packaging background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-black">Our Company</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-black">
            Excellence in Every
            <span className="block">Aspect of Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Committed to quality, innovation, and building lasting partnerships with industry leaders worldwide
          </p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-12 px-4 bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">Quality Assurance Excellence</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto opacity-90">
              Rigorous testing and certification processes ensure every product exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Material Testing</h3>
              <p className="text-sm opacity-90">Comprehensive analysis of tensile strength, elongation, and durability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">ISO Standards</h3>
              <p className="text-sm opacity-90">Adherence to international quality management systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Batch Inspection</h3>
              <p className="text-sm opacity-90">Every production batch undergoes thorough quality checks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Compliance</h3>
              <p className="text-sm opacity-90">Products meet regulatory requirements across all markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-text-heading leading-tight">Trusted by Industry Leaders</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Companies worldwide rely on our packaging solutions to secure their products and streamline operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className="group relative w-full h-32 bg-bg-card rounded-xl border border-border-accent/20 hover:border-border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex items-center justify-center p-6"
              >
                <Image
                  src={`/images/clients (${num}).png`}
                  alt={`Client logo ${num}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-bg-card p-8 md:p-12 rounded-2xl border-l-4 border-border-accent shadow-2xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                💼
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-heading">A Message from Leadership</h2>
                <p className="text-sm text-text-secondary uppercase tracking-wide">CEO, HB Sub Noor Industries</p>
              </div>
            </div>
            <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed italic border-l-4 border-bg-accent pl-6">
              &quot;For over three decades, we have been driven by a singular purpose: to provide intelligent, cost-effective solutions that empower businesses to protect their products and optimize their operations. Our success isn't measured in units sold, but in the trust we've built with customers across the globe. We believe that true excellence comes from a relentless focus on quality, unwavering commitment to our promises, and genuine loyalty to the partnerships we forge. As we look to the future, we remain dedicated to innovation, sustainability, and the continued growth of our global community of partners.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-12 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-text-heading leading-tight">Looking Forward</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Our roadmap for continued innovation and global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-lg">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-text-heading">Technological Advancement</h3>
              <p className="text-text-primary leading-relaxed mb-4">
                Investing in next-generation manufacturing technologies, including AI-driven quality control, automated production lines, and smart packaging solutions that integrate with Industry 4.0 systems.
              </p>
            </div>

            <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-lg">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Sustainability Initiative</h3>
              <p className="text-text-primary leading-relaxed mb-4">
                Expanding our eco-friendly product lines, implementing circular economy principles, and achieving carbon-neutral manufacturing processes by 2030.
              </p>
            </div>

            <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-lg">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Global Expansion</h3>
              <p className="text-text-primary leading-relaxed mb-4">
                Establishing regional manufacturing facilities and distribution centers to serve customers faster, reduce shipping costs, and strengthen our international presence.
              </p>
            </div>

            <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-lg">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Partnership Growth</h3>
              <p className="text-text-primary leading-relaxed mb-4">
                Building strategic alliances with logistics companies, e-commerce platforms, and industrial manufacturers to create integrated packaging ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-bg-cta text-text-on-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8">
            Discover how our commitment to excellence can support your business goals and packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/30 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

