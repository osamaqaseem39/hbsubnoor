'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-4 sm:mb-6">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div>
              <Link href="/" className="inline-block mb-3 sm:mb-4">
                <Image 
                  src="/images/hb-sub-noor-industries-logo.png" 
                  alt="HB Sub Noor Industries Logo - Industrial Packaging and Strap Solutions" 
                  width={160} 
                  height={160}
                  className="object-contain w-32 h-16 sm:w-40 sm:h-20"
                />
              </Link>
              <p className="text-xs sm:text-sm">
                The Future of Industrial Packaging Security
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-black text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-accent-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-accent-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent-primary transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-black text-sm sm:text-base">Head Office</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Address:</strong><br />
                  9/E, G-Block, Mushtaq Ahmed Gurmani Road,<br />
                  Main Boulevard Gulberg-II,<br />
                  Lahore, Pakistan
                </li>
                <li>
                  <strong>Phone:</strong><br />
                  <a href="tel:+923224054078" className="hover:text-accent-primary transition-colors">
                    +92 322 4054078
                  </a>
                  <br />
                  <span className="text-gray-600">Mr. Moaz - Head Office</span>
                </li>
                <li>
                  <strong>Email:</strong><br />
                  <a href="mailto:info@strapack.com.pk" className="hover:text-accent-primary transition-colors">
                    info@strapack.com.pk
                  </a>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-black text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/contact" className="hover:text-accent-primary transition-colors">
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="hover:text-accent-primary transition-colors">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-accent-primary transition-colors">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent-primary transition-colors">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
        
        <AnimateOnScroll animation="fadeIn" delay={400}>
          <div className="border-t border-gray-400 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-black opacity-80">
            <p>Copyright ©2026 HB SUB NOOR. All rights reserved.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}

