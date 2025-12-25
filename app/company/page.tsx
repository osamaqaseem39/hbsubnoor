'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Company() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HB Sub Noor Industries",
    "alternateName": "HB SUB NOOR",
    "url": "https://hbsubnoor.com",
    "logo": "https://hbsubnoor.com/images/favicon.png",
    "description": "Excellence in every aspect of operations. Committed to quality, innovation, and building lasting partnerships with industry leaders worldwide.",
    "foundingDate": "1999",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "9/E, G-Block, Mushtaq Ahmed Gurmani Road, Main Boulevard Gulberg-II",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "18-KM Multan Road, Near High Noon Laboratories",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-4722707",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-4054078",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "email": "info@strapack.com.pk",
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": "en"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "knowsAbout": [
      "Industrial Packaging",
      "Strap Solutions",
      "Manufacturing",
      "Quality Assurance"
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
        "name": "Company",
        "item": "https://hbsubnoor.com/company"
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
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
      {/* Leadership Message */}
      <section className="py-16 px-4 bg-gradient-to-br from-bg-primary via-bg-card/20 to-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bg-accent via-bg-accent/50 to-bg-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-bg-card p-8 md:p-12 rounded-3xl shadow-2xl border border-border-accent/20">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-2xl blur-md opacity-50"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-bg-accent to-bg-accent/80 rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-105 transition-transform">
                    💼
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-accent/10 rounded-full mb-3">
                    <span className="w-2 h-2 bg-bg-accent rounded-full animate-pulse"></span>
                    <span className="text-xs font-semibold text-text-heading uppercase tracking-wide">Leadership</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-text-heading leading-tight">A Message from Leadership</h2>
                  <p className="text-sm text-text-secondary font-medium">CEO, HB Sub Noor Industries</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bg-accent via-bg-accent/70 to-bg-accent/30 rounded-full"></div>
                <blockquote className="relative pl-8 md:pl-10">
                  <div className="absolute -top-2 -left-2 text-6xl text-bg-accent/10 font-serif leading-none">&quot;</div>
                  <p className="text-lg md:text-xl text-text-primary leading-relaxed relative z-10 font-medium">
                    For over three decades, we have been driven by a singular purpose: to provide intelligent, cost-effective solutions that empower businesses to protect their products and optimize their operations. Our success isn't measured in units sold, but in the trust we've built with customers across the globe. We believe that true excellence comes from a relentless focus on quality, unwavering commitment to our promises, and genuine loyalty to the partnerships we forge. As we look to the future, we remain dedicated to innovation, sustainability, and the continued growth of our global community of partners.
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-bg-accent/10 font-serif leading-none">&quot;</div>
                </blockquote>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">Trusted by Industry Leaders</h2>
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
                  src={`/images/client-logo-${num}.png`}
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

      {/* Future Vision */}
      <section className="py-12 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">Looking Forward</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Our roadmap for continued innovation and global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-lg">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Technological Advancement</h3>
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
    </>
  );
}

