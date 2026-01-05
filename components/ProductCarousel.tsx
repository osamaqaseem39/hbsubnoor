"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

function ProductGalleryCarousel({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const cooldownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const slides = products;
  const slideWidth = 100; // Percentage width of each slide (full width)
  const gap = 0; // No gap between slides since they're full width

  // Initialize offset on mount and check mobile
  useEffect(() => {
    // For 3-slide layout, offset starts at 0
    setOffset(0);
    
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    // Clear any existing timeout/interval
    if (autoAdvanceIntervalRef.current) {
      clearTimeout(autoAdvanceIntervalRef.current);
      autoAdvanceIntervalRef.current = null;
    }

    // Don't auto-advance if dragging or in cooldown
    if (isDragging || isCooldown) {
      return;
    }

    // Auto-advance to next slide after 3 seconds
    autoAdvanceIntervalRef.current = setTimeout(() => {
      if (!isDragging && !isCooldown) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 >= slides.length ? 0 : prevIndex + 1;
          // Trigger cooldown
          setIsCooldown(true);
          if (cooldownTimeoutRef.current) {
            clearTimeout(cooldownTimeoutRef.current);
          }
          cooldownTimeoutRef.current = setTimeout(() => {
            setIsCooldown(false);
          }, 3000);
          setOffset(0);
          return nextIndex;
        });
      }
    }, 3000);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (autoAdvanceIntervalRef.current) {
        clearTimeout(autoAdvanceIntervalRef.current);
        autoAdvanceIntervalRef.current = null;
      }
    };
  }, [currentIndex, isDragging, isCooldown, slides.length]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimeoutRef.current) {
        clearTimeout(cooldownTimeoutRef.current);
      }
      if (autoAdvanceIntervalRef.current) {
        clearInterval(autoAdvanceIntervalRef.current);
      }
    };
  }, []);

  // Navigate to specific slide with infinite loop
  const goToSlide = (index: number, smooth = true) => {
    // Wrap around for infinite loop
    let newIndex = index;
    if (index < 0) {
      newIndex = slides.length - 1; // Wrap to last slide
    } else if (index >= slides.length) {
      newIndex = 0; // Wrap to first slide
    }
    setCurrentIndex(newIndex);
    // Reset offset to 0 for new position
    setOffset(0);
    
    // Start cooldown after swipe
    setIsCooldown(true);
    if (cooldownTimeoutRef.current) {
      clearTimeout(cooldownTimeoutRef.current);
    }
    cooldownTimeoutRef.current = setTimeout(() => {
      setIsCooldown(false);
    }, 3000); // 3 second cooldown
  };

  // Next/Previous navigation with infinite loop
  const goToNext = () => goToSlide(currentIndex + 1);
  const goToPrev = () => goToSlide(currentIndex - 1);

  // Handle drag start
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    lastXRef.current = clientX;
    lastTimeRef.current = Date.now();
    setVelocity(0);
    // Pause auto-advance when dragging
    if (autoAdvanceIntervalRef.current) {
      clearInterval(autoAdvanceIntervalRef.current);
    }
  };

  // Handle drag move
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const timeDelta = now - lastTimeRef.current;
    const xDelta = clientX - lastXRef.current;
    
    if (timeDelta > 0) {
      setVelocity(xDelta / timeDelta);
    }
    
    setCurrentX(clientX);
    lastXRef.current = clientX;
    lastTimeRef.current = now;
    
    const deltaX = clientX - startX;
    const sensitivity = 0.3;
    const dragOffset = (deltaX / window.innerWidth) * 100 * sensitivity;
    // For 3-slide layout, offset is just the drag offset (no base offset needed)
    setOffset(dragOffset);
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const deltaX = currentX - startX;
    const threshold = 50; // Minimum drag distance
    
    // Use velocity to determine swipe direction if drag is small
    if (Math.abs(deltaX) < threshold && Math.abs(velocity) > 0.5) {
      if (velocity > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    } else if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    } else {
      // Snap back to current slide
      setCurrentIndex(currentIndex);
      setOffset(0);
    }
    
    setVelocity(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    handleMouseUp(); // Handle drag end if dragging
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isDragging) {
      handleDragMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragEnd();
  };

  // Calculate 3D transform for each slide
  const getSlideTransform = (slideIndex: number, mobile: boolean) => {
    // Calculate relative position to current index
    let relativeIndex = slideIndex - currentIndex;
    
    // Handle wrap-around for infinite loop
    if (relativeIndex > slides.length / 2) {
      relativeIndex = relativeIndex - slides.length;
    } else if (relativeIndex < -slides.length / 2) {
      relativeIndex = relativeIndex + slides.length;
    }
    
    // On mobile: only show current slide, hide all others
    if (mobile) {
      const isCurrent = relativeIndex === 0;
      if (!isCurrent) {
        return {
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
          opacity: 0,
          filter: 'none',
          pointerEvents: 'none' as const,
        };
      }
      // Current slide on mobile: simple centered, full width
      const dragOffsetPercent = offset;
      return {
        left: '50%',
        transform: `translateY(-50%) translateX(calc(-50% + ${dragOffsetPercent}%))`,
        opacity: 1,
        filter: 'none',
        pointerEvents: 'auto' as const,
      };
    }
    
    // Desktop: 3D carousel with side cards
    const isPrevious = relativeIndex === -1;
    const isCurrent = relativeIndex === 0;
    const isNext = relativeIndex === 1;
    const isVisible = isPrevious || isCurrent || isNext;
    
    // Hide slides that are not previous, current, or next
    if (!isVisible) {
      return {
        left: '50%',
        transform: `translateY(-50%) translateZ(-500px)`,
        opacity: 0,
        filter: 'none',
        pointerEvents: 'none' as const,
      };
    }
    
    // Apply drag offset for smooth dragging
    const dragOffsetPercent = offset;
    
    // Calculate positions for 3-slide layout
    let baseLeftPosition = 12.5;
    let rotationY = 0;
    let scale = 1;
    let translateZ = 0;
    let opacity = 1;
    
    if (isCurrent) {
      baseLeftPosition = 12.5;
      rotationY = 0;
      scale = 1;
      translateZ = 0;
      opacity = 1;
    } else if (isPrevious) {
      baseLeftPosition = -62.5;
      rotationY = -25;
      scale = 0.9;
      translateZ = -200;
      opacity = 0.4;
    } else if (isNext) {
      baseLeftPosition = 87.5;
      rotationY = 25;
      scale = 0.9;
      translateZ = -200;
      opacity = 0.4;
    }
    
    const leftPosition = baseLeftPosition + dragOffsetPercent;
    
    return {
      left: `${leftPosition}%`,
      transform: `translateY(-50%) translateZ(${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`,
      opacity: opacity,
      filter: 'none',
      pointerEvents: isCurrent ? 'auto' as const : 'none' as const,
    };
  };


  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${isMobile ? 'min-h-[600px]' : 'h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]'} overflow-visible`}
      style={{ 
        perspective: isMobile ? 'none' : '1500px',
        perspectiveOrigin: 'center center',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Gallery Container */}
      <div
        ref={carouselRef}
        className={`relative w-full ${isMobile ? 'min-h-[600px]' : 'h-full'}`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Render all slides */}
        {slides.map((product, slideIndex) => {
          const slideTransform = getSlideTransform(slideIndex, isMobile);
          const isActive = slideIndex === currentIndex;
          
          return (
            <div
              key={product.name}
              className="absolute top-1/2"
              style={{
                width: isMobile ? '90%' : '75%',
                maxWidth: '1280px',
                left: slideTransform.left || '50%',
                transform: slideTransform.transform,
                opacity: slideTransform.opacity,
                filter: slideTransform.filter,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transformStyle: isMobile ? 'flat' : 'preserve-3d',
                transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: (slideTransform.pointerEvents !== undefined) ? slideTransform.pointerEvents : (isActive ? 'auto' : 'none'),
                willChange: 'transform, opacity, filter',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                transformOrigin: 'center center',
              }}
            >
              {/* White Slide Card */}
              <div
                className="w-full"
                style={{
                  transformOrigin: 'center center',
                  imageRendering: 'crisp-edges',
                }}
              >
                <div
                  className={`bg-white rounded-xl sm:rounded-2xl shadow-2xl ${isMobile ? 'p-4' : 'p-4 sm:p-6 md:p-8 lg:p-10'} cursor-grab active:cursor-grabbing w-full touch-manipulation`}
                  style={{
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column - Image */}
                    <div className="relative aspect-square rounded-lg  bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex flex-col justify-center">
                      {/* Product Name */}
                      <Link href={product.href} className="group">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-bg-accent transition-colors">
                          {product.name}
                        </h4>
                      </Link>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                        {product.description}
                      </p>

                      {/* Three Column Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {/* Specifications */}
                        {product.specifications && product.specifications.length > 0 && (
                          <div className="flex flex-col">
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 mb-2 sm:mb-3 font-semibold">
                              Specifications
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {(isMobile ? product.specifications.slice(0, 3) : product.specifications).map((spec, specIndex) => (
                                <span
                                  key={specIndex}
                                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-full border border-gray-300 bg-gray-50 text-gray-900 font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors"
                                >
                                  {spec}
                                </span>
                              ))}
                              {isMobile && product.specifications.length > 3 && (
                                <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-full border border-gray-300 bg-gray-50 text-gray-500 font-medium">
                                  +{product.specifications.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Key Features */}
                        {product.features && product.features.length > 0 && (
                          <div className="flex flex-col">
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 mb-2 sm:mb-3 font-semibold">
                              Key Features
                            </p>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {(isMobile ? product.features.slice(0, 3) : product.features).map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-800 leading-relaxed"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-bg-accent flex-shrink-0 mt-1.5 sm:mt-2" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {isMobile && product.features.length > 3 && (
                                <li className="text-[10px] text-gray-500 italic">
                                  +{product.features.length - 3} more
                                </li>
                              )}
                            </ul>
                          </div>
                        )}

                        {/* Use Cases */}
                        {product.useCases && product.useCases.length > 0 && (
                          <div className="flex flex-col">
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 mb-2 sm:mb-3 font-semibold">
                              Use Cases
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {(isMobile ? product.useCases.slice(0, 3) : product.useCases).map((useCase, useCaseIndex) => (
                                <span
                                  key={useCaseIndex}
                                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg border border-gray-300 bg-gray-50 text-gray-900 font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors"
                                >
                                  {useCase}
                                </span>
                              ))}
                              {isMobile && product.useCases.length > 3 && (
                                <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg border border-gray-300 bg-gray-50 text-gray-500 font-medium">
                                  +{product.useCases.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Simple navigation dots for mobile */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-bg-accent' : 'w-2 bg-white/30'
            }`}
            aria-label={`Go to ${slides[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGalleryCarousel;

