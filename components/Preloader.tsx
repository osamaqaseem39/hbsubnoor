'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader once page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Add a small delay before hiding to allow fade-out animation
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 800); // Minimum display time for better UX
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="relative mb-8 animate-scaleIn animate-visible">
          <Image
            src="/images/hb-sub-noor-industries-logo.png"
            alt="HB Sub Noor Industries"
            width={200}
            height={200}
            className="w-auto h-20 sm:h-24 md:h-28 object-contain"
            priority
          />
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20">
            <div className="absolute inset-0 border-4 border-[var(--bg-primary)] border-t-[var(--accent-primary)] border-r-[var(--accent-primary)] rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-[var(--accent-secondary)] border-r-[var(--accent-secondary)] rounded-full animate-spin-reverse"></div>
          </div>
        </div>

        {/* Loading Text (Optional) */}
        <p className="mt-8 text-sm sm:text-base text-[var(--text-secondary)] font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

