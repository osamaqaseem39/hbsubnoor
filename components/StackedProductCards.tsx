'use client';

import { useRef, useEffect, useState, ReactNode, Children } from 'react';

interface StackedProductCardsProps {
  children: ReactNode;
  className?: string;
}

export default function StackedProductCards({ 
  children, 
  className = '' 
}: StackedProductCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  // Count the number of children using React.Children
  const childrenArray = Children.toArray(children);
  const cardCount = childrenArray.length;

  return (
    <div 
      ref={containerRef}
      className={`stacked-cards-container ${className}`}
      data-visible={isVisible}
    >
      {Children.map(childrenArray, (child, index) => (
        <div
          key={index}
          className="stacked-card"
          style={{
            '--card-index': index,
            '--card-count': cardCount,
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

