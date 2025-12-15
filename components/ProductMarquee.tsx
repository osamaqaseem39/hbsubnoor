'use client';

export default function ProductMarquee() {
  const products = [
    'Custom Sized Stripping',
    'Printed Stripping',
    'Coloured Stripping',
    'Transparent Stripping',
    'Fully Automatic Strapping Machine',
    'Semi Automatic Strapping Machine',
    'Polypropylene (PP) Strapping',
    'Polyester (PET) Strapping',
  ];

  // Duplicate products multiple times for seamless loop
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <div className="bg-black py-6 overflow-hidden border-y border-[#fcb03b]/20 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedProducts.map((product, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-4 flex-shrink-0"
          >
            <div className="bg-[#fcb03b] text-black px-6 py-3 rounded-full font-semibold text-lg whitespace-nowrap">
              {product}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

