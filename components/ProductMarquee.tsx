'use client';

import Link from 'next/link';

export default function ProductMarquee() {
  const products = [
    { name: 'Custom Sized Strap', href: '/products/custom-sized-strap' },
    { name: 'Printed Strap', href: '/products/printed-strap' },
    { name: 'Coloured Strap', href: '/products/coloured-strap' },
    { name: 'Transparent Strap', href: '/products/transparent-strap' },
    { name: 'Fully Automatic Strapping Machine', href: '/products/fully-automatic-strapping-machine' },
    { name: 'Semi Automatic Strapping Machine', href: '/products/semi-automatic-strapping-machine' },
    { name: 'Polypropylene (PP) Strap', href: '/products' },
    { name: 'Polyester (PET) Strap', href: '/products' },
  ];

  // Duplicate products for seamless infinite loop
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="bg-bg-primary py-4 sm:py-6 overflow-hidden border-y border-border-accent/20 relative z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedProducts.map((product, index) => (
          <Link
            key={index}
            href={product.href}
            className="inline-flex items-center mx-2 sm:mx-4 flex-shrink-0 group"
          >
            <div className="bg-[#F9A634] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#e8951f] cursor-pointer">
              {product.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

