'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

interface ProductCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  variant?: 'default' | 'accent' | 'long-title';
  skipAnimation?: boolean;
}

export default function ProductCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  variant = 'default',
  skipAnimation = false,
}: ProductCardProps) {
  const cardBgClass =
    variant === 'accent'
      ? 'bg-transparent'
      : 'bg-bg-card';
  
  const titleClass = variant === 'long-title'
    ? 'font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg leading-tight transform translate-y-12 group-hover:translate-y-0 transition-all duration-300 ease-out mb-2'
    : 'font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg leading-none transform translate-y-24 group-hover:translate-y-8 transition-all duration-300 ease-out mb-2';
  
  const descriptionClass = variant === 'long-title'
    ? 'text-sm sm:text-base text-white/95 leading-relaxed transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out font-medium max-w-full line-clamp-3'
    : 'text-sm sm:text-base text-white/95 leading-relaxed transform translate-y-20 opacity-0 group-hover:translate-y-8 group-hover:opacity-100 transition-all duration-300 ease-out font-medium max-w-full line-clamp-3';

  const cardContent = (
    <Link href={href} className="group relative block aspect-square">
      {variant !== 'accent' && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-bg-accent to-bg-accent/50 rounded-xl sm:rounded-2xl blur opacity-20"></div>
      )}
      <div
        className={`relative ${cardBgClass} rounded-xl sm:rounded-2xl ${variant === 'accent' ? 'shadow-none border-none' : 'shadow-xl border border-border-accent/20'} h-full overflow-hidden`}
      >
      <div className="relative h-full rounded-lg sm:rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        {/* Gradient overlay to make text prominent - using accent color #F9A634 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 z-0 transition-all duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(249, 166, 52, 0.8), rgba(249, 166, 52, 0.4), transparent)'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(to top, rgba(249, 166, 52, 0.9), rgba(249, 166, 52, 0.6), transparent)'
          }}
        ></div>
        {/* Content container */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 sm:px-4 z-10 pb-0 min-h-[140px] sm:min-h-[160px]">
          <h4 className={titleClass}>
            {title}
          </h4>
          <p className={descriptionClass}>
            {description}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );

  if (skipAnimation) {
    return cardContent;
  }

  return (
    <AnimateOnScroll animation="scaleIn" delay={0}>
      {cardContent}
    </AnimateOnScroll>
  );
}

