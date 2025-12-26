'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Contact() {
  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - HB Sub Noor Industries",
    "description": "Contact leading packaging strap manufacturer for packaging strap solutions, quotes, and technical support. Get product information or request a quote from top packaging strap manufacturer.",
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

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of packaging straps do you manufacture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manufacture a wide range of packaging straps including polypropylene (PP) straps, polyester (PET) straps, custom-sized straps, printed straps, coloured straps, and transparent straps. All our straps are designed for industrial packaging applications and meet high-quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom-sized straps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in manufacturing custom-sized straps to meet your specific packaging requirements. Whether you need specific widths, lengths, or thicknesses, we can customize our straps to fit your exact needs. Contact us with your specifications for a quote."
        }
      },
      {
        "@type": "Question",
        "name": "What types of strapping machines do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both semi-automatic and fully automatic strapping machines. Our semi-automatic machines are ideal for medium-volume operations, while our fully automatic machines are designed for high-volume production lines. Both types are built for durability and efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum order quantities vary depending on the product type. For standard straps, we typically have flexible MOQs. For custom-sized or printed straps, the MOQ may be higher. Please contact us with your requirements, and we'll provide you with specific details and competitive pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide technical support and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive technical support for all our products. Our team offers installation assistance, operator training for strapping machines, and ongoing technical support. We're committed to ensuring your packaging operations run smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "What is your delivery time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery times depend on the product type and order quantity. Standard straps are typically available for quick delivery, while custom orders may take 2-4 weeks. Strapping machines are usually delivered within 1-2 weeks after order confirmation. We'll provide you with an accurate delivery timeline when you place your order."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship internationally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve customers both domestically in Pakistan and internationally. We have experience shipping our products to various countries. Contact us with your location, and we'll provide shipping options and costs."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept various payment methods including bank transfers, letters of credit (L/C), and other standard business payment terms. Payment terms can be discussed based on your order size and business relationship. Contact our sales team for detailed payment information."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a sample before placing a bulk order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can provide samples of our straps for evaluation. Sample availability depends on the product type. For custom products, we may require a small sample order fee. Contact us to request samples, and we'll arrange them for you."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your straps different from competitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With over 25 years of experience, we pride ourselves on manufacturing high-quality, durable straps that meet international standards. Our straps are known for their strength, reliability, and cost-effectiveness. We use premium materials and advanced manufacturing processes to ensure consistent quality. Additionally, we offer excellent customer service and technical support."
        }
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of packaging straps do you manufacture?",
      answer: "We manufacture a wide range of packaging straps including polypropylene (PP) straps, polyester (PET) straps, custom-sized straps, printed straps, coloured straps, and transparent straps. All our straps are designed for industrial packaging applications and meet high-quality standards."
    },
    {
      question: "Do you offer custom-sized straps?",
      answer: "Yes, we specialize in manufacturing custom-sized straps to meet your specific packaging requirements. Whether you need specific widths, lengths, or thicknesses, we can customize our straps to fit your exact needs. Contact us with your specifications for a quote."
    },
    {
      question: "What types of strapping machines do you provide?",
      answer: "We offer both semi-automatic and fully automatic strapping machines. Our semi-automatic machines are ideal for medium-volume operations, while our fully automatic machines are designed for high-volume production lines. Both types are built for durability and efficiency."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Minimum order quantities vary depending on the product type. For standard straps, we typically have flexible MOQs. For custom-sized or printed straps, the MOQ may be higher. Please contact us with your requirements, and we'll provide you with specific details and competitive pricing."
    },
    {
      question: "Do you provide technical support and training?",
      answer: "Yes, we provide comprehensive technical support for all our products. Our team offers installation assistance, operator training for strapping machines, and ongoing technical support. We're committed to ensuring your packaging operations run smoothly."
    },
    {
      question: "What is your delivery time?",
      answer: "Delivery times depend on the product type and order quantity. Standard straps are typically available for quick delivery, while custom orders may take 2-4 weeks. Strapping machines are usually delivered within 1-2 weeks after order confirmation. We'll provide you with an accurate delivery timeline when you place your order."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we serve customers both domestically in Pakistan and internationally. We have experience shipping our products to various countries. Contact us with your location, and we'll provide shipping options and costs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, letters of credit (L/C), and other standard business payment terms. Payment terms can be discussed based on your order size and business relationship. Contact our sales team for detailed payment information."
    },
    {
      question: "Can I get a sample before placing a bulk order?",
      answer: "Yes, we can provide samples of our straps for evaluation. Sample availability depends on the product type. For custom products, we may require a small sample order fee. Contact us to request samples, and we'll arrange them for you."
    },
    {
      question: "What makes your straps different from competitors?",
      answer: "With over 25 years of experience, we pride ourselves on manufacturing high-quality, durable straps that meet international standards. Our straps are known for their strength, reliability, and cost-effectiveness. We use premium materials and advanced manufacturing processes to ensure consistent quality. Additionally, we offer excellent customer service and technical support."
    }
  ];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bg-hero via-[#F9A634] to-bg-hero-gradient text-text-on-accent py-20 md:py-32 px-4 overflow-hidden">
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

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-black">Get in Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-black">
            <span className="block">Let's Start a</span>
            <span className="block drop-shadow-2xl">Conversation</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Ready to find the most cost-effective and secure packaging solution for your business? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <AnimateOnScroll animation="scaleIn" delay={0}>
        <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="bg-bg-card p-8 md:p-10 rounded-2xl border border-border-accent/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-text-heading">
                  <span className="block">Get a Quote</span>
                </h2>
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
                  className="w-full bg-[#F9A634] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e8951f] transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-text-heading">
                    <span className="block">Contact Information</span>
                  </h2>
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
              <div className="bg-gradient-to-br from-bg-accent via-bg-accent/90 to-bg-accent/80 text-white p-8 rounded-2xl shadow-xl">
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
      </AnimateOnScroll>

      {/* Locations */}
      <AnimateOnScroll animation="fadeInLeft" delay={0}>
        <section className="py-12 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
              Find Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
              <span className="block">Our Locations</span>
            </h2>
          </div>
          <div className="text-center mb-8">
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
                <h3 className="text-2xl font-extrabold leading-tight text-text-heading">Head Office</h3>
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
                <h3 className="text-2xl font-extrabold leading-tight text-text-heading">Factory Address</h3>
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
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll animation="fadeInRight" delay={0}>
        <section className="py-12 px-4 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
              <span className="block">What Our</span>
              <span className="block drop-shadow-2xl">Clients Say</span>
            </h2>
          </div>
          <div className="text-center mb-8">
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Trusted by industry leaders across Pakistan and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-bg-card p-6 rounded-2xl border border-border-accent/20 hover:border-border-accent shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-white">
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
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-white">
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
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-white">
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
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-white">
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
                <div className="w-12 h-12 bg-gradient-to-br from-bg-accent to-bg-accent/70 rounded-full flex items-center justify-center text-xl font-bold text-white">
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
      </AnimateOnScroll>

      {/* FAQ Section */}
      <AnimateOnScroll animation="slideUp" delay={0}>
        <section className="py-12 px-4 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-bg-accent mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight mb-2">
              <span className="block">Frequently Asked</span>
              <span className="block drop-shadow-2xl">Questions</span>
            </h2>
          </div>
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bg-card rounded-2xl border border-border-accent/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-bg-primary/30 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-text-heading flex-1">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-bg-accent/20 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-5 h-5 text-text-heading"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-text-primary leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact-form"
              className="inline-block bg-[#F9A634] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#e8951f] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
        </section>
      </AnimateOnScroll>
    </div>
    </>
  );
}
