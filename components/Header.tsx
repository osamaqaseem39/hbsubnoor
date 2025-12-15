'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#fcb03b] text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/images/logo.png" 
              alt="HB SUB NOOR Logo" 
              width={80} 
              height={80}
              className="object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="px-3 py-2 hover:underline hover:underline-offset-4 transition-all font-medium">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 hover:underline hover:underline-offset-4 transition-all font-medium">
              About
            </Link>
            <Link href="/products" className="px-3 py-2 hover:underline hover:underline-offset-4 transition-all font-medium">
              Products
            </Link>
            <Link href="/services" className="px-3 py-2 hover:underline hover:underline-offset-4 transition-all font-medium">
              Services
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:underline hover:underline-offset-4 transition-all font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 hover:underline hover:underline-offset-4 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 hover:underline hover:underline-offset-4 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className="block py-2 hover:underline hover:underline-offset-4 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className="block py-2 hover:underline hover:underline-offset-4 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 hover:underline hover:underline-offset-4 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

