'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp' | 'stagger';
  delay?: number;
  className?: string;
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function AnimateOnScroll({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  stagger = false,
  staggerDelay = 100,
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
              
              // Handle staggered children if stagger is enabled
              if (stagger || animation === 'stagger') {
                const children = entry.target.children;
                Array.from(children).forEach((child, index) => {
                  const htmlChild = child as HTMLElement;
                  htmlChild.style.animationDelay = `${delay + (index * staggerDelay)}ms`;
                });
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, stagger, staggerDelay, animation]);

  // Map animation names to CSS classes
  const animationClassMap: Record<string, string> = {
    fadeIn: 'animate-fadeIn',
    fadeInUp: 'animate-fadeInUp',
    fadeInDown: 'animate-fadeInDown',
    fadeInLeft: 'animate-fadeInLeft',
    fadeInRight: 'animate-fadeInRight',
    scaleIn: 'animate-scaleIn',
    slideUp: 'animate-slideUp',
    stagger: 'animate-stagger',
  };

  const animationClass = animationClassMap[animation] || 'animate-fadeInUp';

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}

