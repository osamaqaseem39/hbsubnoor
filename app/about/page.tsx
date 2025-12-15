export default function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fcb03b]">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#fcb03b] mx-auto"></div>
        </div>

        {/* Core Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#fcb03b]">
            Our Core Capabilities
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed">
            HB Sub Noor Industries specializes in two critical areas of industrial packaging:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black p-6 rounded-lg border-l-4 border-[#fcb03b]">
              <h3 className="text-xl font-semibold mb-3 text-[#fcb03b]">
                High-Performance Packaging Strips
              </h3>
              <p className="text-white">
                Manufacturing top-of-the-line custom plastic poly strapping (Polypropylene/Polyester) known for being <strong>Easy to Use, Safe, Reliable, and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border-l-4 border-[#fcb03b]">
              <h3 className="text-xl font-semibold mb-3 text-[#fcb03b]">
                Automated Strapping Machinery
              </h3>
              <p className="text-white">
                Dealing in state-of-the-art automatic and semi-automatic strapping machines designed to boost productivity and reduce operational costs.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#fcb03b]">
            A Legacy of Quality and Trust
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed">
            Since our founding, we have focused relentlessly on quality. We believe in winning customer confidence through <strong>Commitment, Quality, and Loyalty</strong>. Our journey includes key milestones:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#fcb03b] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2004
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#fcb03b]">Strategic Market Entry</h4>
                <p className="text-white">Strategic entry into the strip packaging market.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#fcb03b] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2008
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#fcb03b]">Production Expansion</h4>
                <p className="text-white">Inauguration of our first high-capacity production line.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#fcb03b] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                Now
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#fcb03b]">Global Presence</h4>
                <p className="text-white">Companies from all over the world are using our products to meet their packaging requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="mb-16 bg-[#fcb03b] text-black p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-black">
            CEO&apos;s Message
          </h2>
          <blockquote className="text-lg leading-relaxed italic">
            &quot;We believe in winning customer confidence by providing them intelligent & Cost Effective Solutions especially in the field of coding & Packaging. The key factor of our success is commitment, Quality & Loyalty with our customer. We are proudly offering our products all over Pakistan through our International Sales offices & Distributors.&quot;
          </blockquote>
        </section>

        {/* Our Company */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#fcb03b]">
            Our Company
          </h2>
          <div className="bg-black p-8 rounded-lg border-l-4 border-[#fcb03b]">
            <p className="text-lg text-white leading-relaxed mb-4">
              We are a company that manufactures top of the line custom plastic poly packaging strips and we also deal in automatic and semi automatic strapping machines. We have been in business for <strong>over 30 years</strong>, and companies from all over the world are using our products to meet their packaging requirements.
            </p>
            <p className="text-lg text-white leading-relaxed mb-4">
              We have been manufacturing industrial packing strips for the last many years and have gained a good reputation in the market for offering products of superior quality at reasonable prices.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Our range of plastic poly packaging strips are available in different sizes, thicknesses and colors.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#fcb03b]">
            Our Mission & Vision
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">Mission</h3>
              <p className="text-white leading-relaxed">
                To provide our customers with the best and affordable custom plastic poly packaging strips, which are <strong>Easy to Use, Safe, Reliable and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">Vision</h3>
              <p className="text-white leading-relaxed">
                To become a leading manufacturer of custom plastic poly packaging strips in the world. Our team will bring this vision to life by focusing on <strong>Quality</strong>.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-[#fcb03b] bg-opacity-10 p-6 rounded-lg border-l-4 border-[#fcb03b]">
            <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">Goals</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">•</span>
                <span>To serve our customers by providing them with the best quality product that can last for years.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fcb03b] font-bold">•</span>
                <span>To establish long-term relationships with our customers based on trust.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

