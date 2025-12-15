import Link from 'next/link';
import Image from 'next/image';
import ProductMarquee from '@/components/ProductMarquee';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fcb03b] to-[#e09d2a] text-black py-32 md:py-40 px-4 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herobg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="container mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            HB SUB NOOR INDUSTRIES
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-black font-semibold">
            The Future of Industrial Packaging Security
          </p>
          <p className="text-xl md:text-2xl mb-8">
            Elevate Your Logistics. Secure Your Future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#fcb03b] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e09d2a] transition-colors"
            >
              Get a Quote
            </Link>
            <Link 
              href="/products" 
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#fcb03b] transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Marquee */}
      <ProductMarquee />

      {/* Company Overview */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#fcb03b]">
            Welcome to HB Sub Noor Industries
          </h2>
          <p className="text-lg text-white leading-relaxed mb-6">
            A global leader in comprehensive packaging and strapping solutions. With over <strong>25 years of operational excellence</strong>, we deliver intelligent, cost-effective systems engineered to protect your goods, streamline your operations, and enhance your brand integrity.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#fcb03b]">
            Our Core Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-black p-8 rounded-lg shadow-lg border-l-4 border-[#fcb03b]">
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                High-Performance Packaging Strips
              </h3>
              <p className="text-white leading-relaxed">
                Manufacturing top-of-the-line custom plastic poly strapping (Polypropylene/Polyester) known for being <strong>Easy to Use, Safe, Reliable, and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg shadow-lg border-l-4 border-[#fcb03b]">
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Automated Strapping Machinery
              </h3>
              <p className="text-white leading-relaxed">
                Dealing in state-of-the-art automatic and semi-automatic strapping machines designed to boost productivity and reduce operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#fcb03b]">
            Why Choose HB Sub Noor?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                25+
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#fcb03b]">Years of Excellence</h3>
              <p className="text-white opacity-90">Over two decades of industry leadership</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#fcb03b]">Quality Assured</h3>
              <p className="text-white opacity-90">Commitment, Quality, and Loyalty</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🌍
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#fcb03b]">Global Reach</h3>
              <p className="text-white opacity-90">Serving Pakistan and international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#fcb03b] text-black">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for detailed product information, technical support, or to request a custom quote.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#fcb03b] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e09d2a] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
