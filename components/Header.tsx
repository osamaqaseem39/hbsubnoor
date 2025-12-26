'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };

    if (isProductsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsDropdownOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/company', label: 'Company' },
    { href: '/products', label: 'Products', hasDropdown: true },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const productItems = [
    { href: '/products/custom-sized-strap', label: 'Custom Sized Strap' },
    { href: '/products/printed-strap', label: 'Printed Strap' },
    { href: '/products/coloured-strap', label: 'Coloured Strap' },
    { href: '/products/transparent-strap', label: 'Transparent Strap' },
    { href: '/products/fully-automatic-strapping-machine', label: 'Fully Automatic Strapping Machine' },
    { href: '/products/semi-automatic-strapping-machine', label: 'Semi Automatic Strapping Machine' },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

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

      {/* Default Header - Non-sticky, scrolls with page */}
      <header className="relative w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
            >
              <div className="relative w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24">
                <Image 
                  src="/images/hb-sub-noor-industries-logo.png" 
                  alt="HB Sub Noor Industries Logo - Industrial Packaging and Strap Solutions" 
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                  priority
                />
              </div>
            </Link>
            
            {/* Default Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className="relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 group flex items-center gap-1 text-text-on-accent/90 hover:text-text-on-accent"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {/* Active indicator underline */}
                        {active && (
                          <span 
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 bg-text-on-accent"
                          />
                        )}
                        {/* Hover underline animation */}
                        {!active && (
                          <span 
                            className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full bg-text-on-accent"
                          />
                        )}
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-bg-card border border-border-accent/20 rounded-xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden transition-all duration-300 ${
                          isProductsDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="py-2">
                          {productItems.map((item) => {
                            const itemActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                  itemActive
                                    ? 'bg-bg-accent/20 text-text-heading border-l-4 border-bg-accent'
                                    : 'text-text-primary hover:bg-bg-accent/10 hover:text-text-heading'
                                }`}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 group text-text-on-accent/90 hover:text-text-on-accent"
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Active indicator underline */}
                    {active && (
                      <span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 bg-text-on-accent"
                      />
                    )}
                    {/* Hover underline animation */}
                    {!active && (
                      <span 
                        className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full bg-text-on-accent"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-text-on-accent hover:bg-white/10 focus:ring-text-on-accent"
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
            <nav className="py-4 space-y-1 border-t border-white/20">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                
                if (link.hasDropdown) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform ${
                          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        } text-text-on-accent/90 hover:text-text-on-accent hover:bg-white/10`}
                        style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                      >
                        <span>{link.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isProductsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-8 pt-2 space-y-1">
                          {productItems.map((item, itemIndex) => {
                            const itemActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsProductsDropdownOpen(false);
                                }}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                } text-text-on-accent/80 hover:text-text-on-accent hover:bg-white/10`}
                                style={{ transitionDelay: isMenuOpen ? `${(index * 50) + (itemIndex * 30) + 100}ms` : '0ms' }}
                              >
                                <span className="flex items-center gap-2">
                                  {itemActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-text-on-accent transition-all duration-300"></span>
                                  )}
                                  {item.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    } text-text-on-accent/90 hover:text-text-on-accent hover:bg-white/10`}
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

      {/* Floating Deck Menu - Appears after 200px scroll */}
      <nav className={`hidden lg:flex items-center fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'opacity-100 pointer-events-auto scale-100 translate-y-0'
          : 'opacity-0 pointer-events-none scale-95 -translate-y-2'
      }`}>
        <div className="gap-1 bg-bg-primary/95 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-border-accent/20 flex items-center">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            
            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 group flex items-center gap-1 text-text-primary/90 hover:text-text-heading hover:bg-bg-accent/10"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                      )}
                      {link.label}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-bg-card border border-border-accent/20 rounded-xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden transition-all duration-300 ${
                      isProductsDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="py-2">
                      {productItems.map((item) => {
                        const itemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-sm font-medium transition-colors duration-200 text-text-primary hover:bg-bg-accent/10 hover:text-text-heading relative"
                          >
                            <span className="flex items-center gap-2">
                              {itemActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                              )}
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 group text-text-primary/90 hover:text-text-heading hover:bg-bg-accent/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                  )}
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Floating Mobile Menu when scrolled */}
      <div className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'top-7 opacity-100 pointer-events-auto scale-100 translate-y-0'
          : 'top-3 opacity-0 pointer-events-none scale-95 -translate-y-2'
      }`}>
        <div className="bg-bg-primary/95 backdrop-blur-xl shadow-2xl rounded-full px-4 py-2 border border-border-accent/20">
          <button
            className="relative p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-text-primary hover:bg-bg-accent/10 focus:ring-text-heading"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-4 relative">
              <span 
                className={`absolute left-0 top-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-1.5' : ''
                }`}
              />
              <span 
                className={`absolute left-0 top-1.5 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute left-0 top-3 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Mobile Navigation when scrolled and menu is open */}
      {isScrolled && isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-md bg-bg-primary/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-border-accent/20 p-4 max-h-[80vh] overflow-y-auto">
          <nav className="space-y-1">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              
              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 text-text-primary hover:text-text-heading hover:bg-bg-accent/10"
                    >
                      <span className="flex items-center gap-2">
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                        )}
                        {link.label}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isProductsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-8 pt-2 space-y-1">
                        {productItems.map((item) => {
                          const itemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsProductsDropdownOpen(false);
                              }}
                              className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-text-primary hover:text-text-heading hover:bg-bg-accent/10"
                            >
                              <span className="flex items-center gap-2">
                                {itemActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                                )}
                                {item.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 text-text-primary hover:text-text-heading hover:bg-bg-accent/10"
                >
                  <span className="flex items-center gap-2">
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-text-heading transition-all duration-300"></span>
                    )}
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

