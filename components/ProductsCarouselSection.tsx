"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

type Product = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
  specifications: string[];
  useCases: string[];
};

interface ProductsCarouselSectionProps {
  products: Product[];
}

function ProductCarousel({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = () => {
    if (isTransitioning || products.length === 0) return;
    setIsTransitioning(true);
    setSwipeDirection('right');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev <= 0 ? products.length - 1 : prev - 1));
    setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 400);
  };

  const goToNext = () => {
    if (isTransitioning || products.length === 0) return;
    setIsTransitioning(true);
    setSwipeDirection('left');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev >= products.length - 1 ? 0 : prev + 1));
    setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 400);
  };

  // Auto-scroll carousel - loops through all products
  useEffect(() => {
    if (products.length === 0) return;
    if (isHovered) return; // Pause auto-scroll when any card is hovered
    const interval = setInterval(() => {
      if (!isTransitioning && !isHovered) {
        setSwipeDirection('left');
        setIsTransitioning(true);
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev >= products.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
          setSwipeDirection(null);
        }, 400);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length, currentIndex, isTransitioning, isHovered]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const getVisibleProducts = () => {
    if (isMobile) {
      // On mobile, only show the current card
      return [products[currentIndex]];
    }
    // Desktop: show 5 cards, with currentIndex at center (position 2)
    const visible: Product[] = [];
    for (let i = -2; i <= 2; i++) {
      // Calculate index with proper wrapping for infinite loop
      let index = currentIndex + i;
      // Wrap around for infinite loop
      while (index < 0) index += products.length;
      index = index % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();
  // Mobile: simple single card display
  const rotations = isMobile ? [0] : [-8, -4, 0, 4, 8]; // degrees for each card position - more subtle for left-to-right flow
  const zDepths = isMobile ? [0] : [-80, -40, 0, -40, -80]; // z-axis depth: outer cards further back, center closest
  const scales = isMobile ? [1] : [0.9, 0.95, 1, 0.95, 0.9]; // scale: outer cards smaller, center full size
  const blurs = isMobile ? [0] : [4, 1, 0, 1, 4]; // blur: outer cards blurry, cards next to center less blurry, center sharp
  const opacities = isMobile ? [1] : [0.7, 0.85, 1, 0.85, 0.7]; // opacity: outer cards more transparent

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
      {products.length > 0 && !isMobile && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50"
            disabled={isTransitioning}
            aria-label="Previous products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50"
            disabled={isTransitioning}
            aria-label="Next products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Carousel Container */}
      <motion.div 
        className={`flex justify-center items-center ${isMobile ? 'gap-0 px-4' : 'gap-8 md:gap-10 px-12 md:px-20'}`}
        style={{ perspective: isMobile ? 'none' : '1200px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = Math.abs(offset.x) * velocity.x;

          if (swipe < -8000) {
            goToNext();
          } else if (swipe > 8000) {
            goToPrevious();
          }
        }}
      >
        {visibleProducts.map((product, index) => {
          const rotationY = rotations[index];
          const zDepth = zDepths[index];
          const cardScale = scales[index];
          const blurAmount = blurs[index];
          const cardOpacity = opacities[index];
          
          // Calculate position for smooth one-by-one scrolling
          const getInitialX = () => {
            if (!swipeDirection || !isTransitioning) return 0;
            return swipeDirection === 'left' ? 400 : -400;
          };
          
          // On mobile, only the current card is visible (index 0 in visibleProducts array)
          const isVisible = true; // Always visible since getVisibleProducts handles filtering
          
          return (
            <motion.div
              key={`${product.name}-${currentIndex}-${index}`}
              initial={{
                x: swipeDirection && isTransitioning ? getInitialX() : 0,
                opacity: swipeDirection && isTransitioning ? (isMobile ? 0 : (index === (swipeDirection === 'left' ? 4 : 0) ? 0 : cardOpacity)) : cardOpacity,
                scale: cardScale,
                rotateY: rotationY,
                z: zDepth,
                filter: `blur(${blurAmount}px)`
              }}
              animate={{ 
                opacity: cardOpacity, 
                scale: cardScale, 
                rotateY: rotationY, 
                z: zDepth,
                x: 0,
                filter: `blur(${blurAmount}px)`
              }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.4,
                delay: swipeDirection && isTransitioning ? (isMobile ? 0 : index * 0.05) : 0,
                type: "spring",
                stiffness: isMobile ? 300 : 200,
                damping: isMobile ? 30 : 30,
                mass: 0.5
              }}
              whileHover={isMobile ? {} : { 
                scale: 1.05, 
                y: -10, 
                z: 50,
                filter: 'blur(0px)',
                opacity: 1
              }}
              style={{ 
                transformStyle: isMobile ? 'flat' : 'preserve-3d',
                width: isMobile ? '100%' : '480px',
                maxWidth: isMobile ? '100%' : '480px',
                flexShrink: 0,
                perspective: isMobile ? 'none' : '1000px',
                display: isVisible ? 'block' : 'none'
              }}
              className="relative"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {/* Glow effect on center card (index 2 on desktop, index 0 on mobile) */}
              {((isMobile && index === 0) || (!isMobile && index === 2)) && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-accent/20 to-transparent rounded-xl sm:rounded-2xl -z-10"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }}
                  style={{ pointerEvents: 'none', zIndex: 1 }}
                />
              )}
              
              {/* Use ProductCard component */}
              <ProductCard
                href={product.href}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                title={product.name}
                description={product.description}
                variant={product.name.length > 20 ? 'long-title' : 'default'}
                skipAnimation={true}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Navigation Dots */}
      {isMobile && products.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning || index === currentIndex) return;
                setIsTransitioning(true);
                setSwipeDirection(index > currentIndex ? 'left' : 'right');
                setPrevIndex(currentIndex);
                setCurrentIndex(index);
                setTimeout(() => {
                  setIsTransitioning(false);
                  setSwipeDirection(null);
                }, 400);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-8 bg-bg-accent' : 'w-2 bg-white/30'
              }`}
              aria-label={`Go to ${products[index].name}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsCarouselSection({ products }: ProductsCarouselSectionProps) {
  return (
    <section
      data-universal-scroll-ignore
      className="relative py-20 border-y border-white/10 bg-gradient-to-br from-bg-card/30 via-bg-primary to-bg-card/20 overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-bg-accent uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-text-heading">
            Packaging Solutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing our premium packaging solutions
          </p>
        </motion.div>
        
        {/* 3D Carousel */}
        <ProductCarousel products={products} />

        {/* CTA Link */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-bg-accent text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Products
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bg-accent via-bg-accent/90 to-bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

