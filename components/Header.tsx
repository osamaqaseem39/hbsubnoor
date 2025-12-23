'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-bg-primary/98 backdrop-blur-xl shadow-lg border-b border-border-accent/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
            >
              <div className="relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24">
                <Image 
                  src="/images/hb-sub-noor-industries-logo.png" 
                  alt="HB Sub Noor Industries Logo - Industrial Packaging and Strap Solutions" 
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 group ${
                      active
                        ? isScrolled
                          ? 'text-text-heading'
                          : 'text-text-on-accent'
                        : isScrolled
                          ? 'text-text-primary/90 hover:text-text-heading'
                          : 'text-text-on-accent/90 hover:text-text-on-accent'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Active indicator underline */}
                    {active && (
                      <span 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                          isScrolled ? 'bg-text-heading' : 'bg-text-on-accent'
                        }`}
                      />
                    )}
                    {/* Hover underline animation */}
                    {!active && (
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full ${
                          isScrolled ? 'bg-text-heading' : 'bg-text-on-accent'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isScrolled
                  ? 'text-text-primary hover:bg-bg-accent/10 focus:ring-text-heading'
                  : 'text-text-on-accent hover:bg-white/10 focus:ring-text-on-accent'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 relative">
                <span 
                  className={`absolute left-0 top-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-2' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-4 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
              isMenuOpen 
                ? 'max-h-[500px] opacity-100 pb-6' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <nav className={`py-4 space-y-1 ${
              isScrolled 
                ? 'border-t border-border-accent/20' 
                : 'border-t border-white/20'
            }`}>
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    } ${
                      active
                        ? isScrolled
                          ? 'text-text-heading bg-bg-accent/15 border-l-4 border-border-accent'
                          : 'text-text-on-accent bg-white/20 border-l-4 border-white/60'
                        : isScrolled
                          ? 'text-text-primary hover:text-text-heading hover:bg-bg-accent/10'
                          : 'text-text-on-accent/90 hover:text-text-on-accent hover:bg-white/10'
                    }`}
                    style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

