'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - HB Sub Noor Industries",
    "description": "Get in touch with HB Sub Noor Industries for packaging solutions, quotes, and technical support.",
    "mainEntity": {
      "@type": "Organization",
      "name": "HB Sub Noor Industries",
      "email": "info@strapack.com.pk",
      "telephone": [
        "+92-322-4722707",
        "+92-322-4054078",
        "+92-323-3093336",
        "+92-301-4914797"
      ],
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://hbsubnoor.com/contact"
      }
    ]
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }}
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
            className="object-cover opacity-20 transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) scale(1.1)`,
            }}
            priority
          />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-black">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-black">
            Let's Start a Conversation
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Ready to find the most cost-effective and secure packaging solution for your business? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-bg-card p-8 md:p-10 rounded-2xl border border-border-accent/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading">Get a Quote</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-heading mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border-2 border-border-primary text-text-primary rounded-xl focus:ring-2 focus:ring-border-accent focus:border-border-accent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-heading mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border-2 border-border-primary text-text-primary rounded-xl focus:ring-2 focus:ring-border-accent focus:border-border-accent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text-heading mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border-2 border-border-primary text-text-primary rounded-xl focus:ring-2 focus:ring-border-accent focus:border-border-accent transition-all"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-heading mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border-2 border-border-primary text-text-primary rounded-xl focus:ring-2 focus:ring-border-accent focus:border-border-accent transition-all resize-none"
                    placeholder="Tell us about your packaging needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-bg-accent text-text-on-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="bg-bg-card p-8 rounded-2xl border border-border-accent/20 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-heading">Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-bg-primary/50 p-5 rounded-xl border-l-4 border-border-accent">
                    <h3 className="font-bold text-lg mb-2 text-text-heading flex items-center gap-2">
                      <span>📧</span> Email Address
                    </h3>
                    <a href="mailto:info@strapack.com.pk" className="text-text-primary hover:text-text-heading transition-colors text-lg">
                      info@strapack.com.pk
                    </a>
                  </div>
                  
                  <div className="bg-bg-primary/50 p-5 rounded-xl border-l-4 border-border-accent">
                    <h3 className="font-bold text-lg mb-3 text-text-heading flex items-center gap-2">
                      <span>☎️</span> Phone Numbers
                    </h3>
                    <ul className="space-y-2 text-text-primary">
                      <li className="flex items-center gap-2">
                        <span className="text-text-heading font-bold">•</span>
                        <a href="tel:+923224722707" className="hover:text-text-heading transition-colors">
                          +92 322 4722707
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-text-heading font-bold">•</span>
                        <a href="tel:+923224054078" className="hover:text-text-heading transition-colors">
                          +92 322 4054078
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-text-heading font-bold">•</span>
                        <a href="tel:+923233093336" className="hover:text-text-heading transition-colors">
                          +92 323 3093336
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-text-heading font-bold">•</span>
                        <a href="tel:+923014914797" className="hover:text-text-heading transition-colors">
                          +92 301 4914797
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-text-on-accent p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                    🕐
                  </div>
                  <h3 className="text-xl font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <span className="font-semibold">Monday - Saturday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <span className="font-semibold">Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">Our Locations</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Visit us at our offices and manufacturing facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-bg-card p-8 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-text-heading">Head Office</h3>
              </div>
              <p className="text-text-primary leading-relaxed text-lg">
                9/E, G-Block, Mushtaq Ahmed Gurmani Road,<br />
                Main Boulevard Gulberg-II,<br />
                Lahore, Pakistan
              </p>
            </div>
            
            <div className="group bg-bg-card p-8 rounded-2xl border-2 border-border-accent/20 hover:border-border-accent shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl">
                  🏭
                </div>
                <h3 className="text-2xl font-bold text-text-heading">Factory Address</h3>
              </div>
              <p className="text-text-primary leading-relaxed text-lg">
                18-KM Multan Road,<br />
                Near High Noon Laboratories,<br />
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-heading leading-tight">What Our Clients Say</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-bg-accent to-transparent mx-auto"></div>
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Trusted by industry leaders across Pakistan and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-text-on-accent">
                  M
                </div>
                <h4 className="font-bold text-xl text-text-heading">MASTER</h4>
              </div>
              <p className="text-text-primary leading-relaxed italic">
                &quot;The straps were much stronger and durable than expected.&quot;
              </p>
            </div>
            
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-text-on-accent">
                  P
                </div>
                <h4 className="font-bold text-xl text-text-heading">POPULAR PIPES</h4>
              </div>
              <p className="text-text-primary leading-relaxed italic">
                &quot;The strap provided is very strong, durable, robust, and long-lasting.&quot;
              </p>
            </div>
            
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-text-on-accent">
                  W
                </div>
                <h4 className="font-bold text-xl text-text-heading">WAVES</h4>
              </div>
              <p className="text-text-primary leading-relaxed italic">
                &quot;The straps are of excellent quality and very strong and durable.&quot;
              </p>
            </div>
            
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-text-on-accent">
                  S
                </div>
                <h4 className="font-bold text-xl text-text-heading">Servo Motor-Oil</h4>
              </div>
              <p className="text-text-primary leading-relaxed italic">
                &quot;Straps are very strong and well made; tie packages nicely.&quot;
              </p>
            </div>
            
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-text-on-accent">
                  O
                </div>
                <h4 className="font-bold text-xl text-text-heading">Ozone INTERNATIONAL</h4>
              </div>
              <p className="text-text-primary leading-relaxed italic">
                &quot;Straps are of excellent quality and very durable. Price was very reasonable and delivery was timely.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
