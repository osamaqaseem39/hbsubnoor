'use client';

export default function ProductMarquee() {
  const products = [
    'Custom Sized Strap',
    'Printed Strap',
    'Coloured Strap',
    'Transparent Strap',
    'Fully Automatic Strapping Machine',
    'Semi Automatic Strapping Machine',
    'Polypropylene (PP) Strap',
    'Polyester (PET) Strap',
  ];

  // Duplicate products for seamless infinite loop
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="bg-bg-primary py-6 overflow-hidden border-y border-border-accent/20 relative z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedProducts.map((product, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-4 flex-shrink-0"
          >
            <div className="bg-bg-accent text-text-on-accent px-6 py-3 rounded-full font-semibold text-lg whitespace-nowrap">
              {product}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

