import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fcb03b]">
            Our Services
          </h1>
          <p className="text-xl text-white mb-4">
            Comprehensive Packaging Solutions & Support
          </p>
          <div className="w-24 h-1 bg-[#fcb03b] mx-auto"></div>
        </div>

        {/* Service Overview */}
        <section className="mb-16">
          <p className="text-lg text-white leading-relaxed text-center max-w-4xl mx-auto mb-8">
            At HB Sub Noor Industries, we provide end-to-end packaging solutions that combine superior products with expert service and support. Our commitment extends beyond manufacturing to ensure your complete satisfaction.
          </p>
        </section>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Custom Manufacturing */}
          <div className="bg-black border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
              ⚙️
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#fcb03b]">
              Custom Manufacturing
            </h2>
              <p className="text-white leading-relaxed mb-4">
              We specialize in manufacturing custom-sized, colored, and printed packaging strips tailored to your specific requirements. Our flexible production capabilities ensure you get exactly what you need.
            </p>
            <ul className="space-y-2 text-white opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Custom dimensions (length, width, thickness)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Brand-specific color matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>High-quality printing services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Material selection (PP/PET)</span>
              </li>
            </ul>
          </div>

          {/* Machinery Solutions */}
          <div className="bg-black border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
              🔧
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#fcb03b]">
              Machinery Solutions
            </h2>
              <p className="text-white leading-relaxed mb-4">
              We provide state-of-the-art automatic and semi-automatic strapping machines designed to optimize your packaging operations and reduce costs.
            </p>
            <ul className="space-y-2 text-white opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Fully automatic systems for high-volume operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Semi-automatic machines for flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Installation and setup support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Training and technical support</span>
              </li>
            </ul>
          </div>

          {/* Technical Support */}
          <div className="bg-black border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
              🛠️
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#fcb03b]">
              Technical Support
            </h2>
              <p className="text-white leading-relaxed mb-4">
              Our expert team provides comprehensive technical support to help you optimize your packaging operations and troubleshoot any issues.
            </p>
            <ul className="space-y-2 text-white opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>On-site consultation and assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Product recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Maintenance and repair services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </div>

          {/* Supply Chain Solutions */}
          <div className="bg-black border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#fcb03b] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
              📦
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#fcb03b]">
              Supply Chain Solutions
            </h2>
              <p className="text-white leading-relaxed mb-4">
              We understand the importance of reliable supply chains. Our distribution network ensures timely delivery across Pakistan and internationally.
            </p>
            <ul className="space-y-2 text-white opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Nationwide distribution network</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>International shipping capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Flexible delivery schedules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">✓</span>
                <span>Bulk order management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Benefits */}
        <section className="bg-gradient-to-br from-[#fcb03b] to-[#e09d2a] text-black p-8 md:p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-sm text-gray-200">
                Intelligent solutions that reduce operational costs while maintaining quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-sm text-gray-200">
                Quick turnaround times and dependable service delivery
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Long-Term Partnership</h3>
              <p className="text-sm text-gray-200">
                Building lasting relationships based on trust and quality
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#fcb03b]">
            Ready to Get Started?
          </h2>
          <p className="text-white mb-6">
            Contact us today to discuss your packaging needs and discover how we can help optimize your operations.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#fcb03b] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e09d2a] transition-colors"
          >
            Request a Quote
          </Link>
        </section>
      </div>
    </div>
  );
}

