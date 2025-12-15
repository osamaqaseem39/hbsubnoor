export default function Products() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fcb03b]">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Comprehensive Packaging Solutions & Machinery
          </p>
          <div className="w-24 h-1 bg-[#fcb03b] mx-auto"></div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            HB Sub Noor Industries provides a complete ecosystem of packaging security, offering customizable strapping materials and the machines required for high-speed application.
          </p>
        </section>

        {/* Packaging Strips Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fcb03b] text-center">
            High-Performance Packaging Strips
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            We manufacture a comprehensive range of Polypropylene (PP) and Polyester (PET) plastic poly packaging strips. These polymers are engineered for maximum tensile strength, shock absorption, and reliable elongation recovery, ensuring package integrity during transport.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Sized Stripping */}
            <div className="bg-black border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#fcb03b] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Custom Sized Stripping
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                This solution moves beyond standard dimensions, engineering strapping to fit the exact product geometry, which is crucial for specialized goods or irregularly shaped packages.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#fcb03b] mb-2">Application Focus:</h4>
                <p className="text-white text-sm opacity-90">Secure products that do not fit standard dimensions, heavy-duty applications, and custom pallet unitization.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#fcb03b] mb-2">Key Business Benefits:</h4>
                <p className="text-white text-sm opacity-90"><strong>Optimized Unitization and Cost Savings.</strong> Eliminates material waste, provides a custom-level security hold, and often results in reduced shipping volume and cost due to superior stability.</p>
              </div>
            </div>

            {/* Printed Stripping */}
            <div className="bg-black border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#fcb03b] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Printed Stripping
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                Our printed strips turn your packaging into a mobile billboard and an enhanced security feature. We use high-contrast, durable, and fade-resistant ink to ensure longevity and visibility.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#fcb03b] mb-2">Application Focus:</h4>
                <p className="text-white text-sm opacity-90">Branding, security marking, and logistics communication.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#fcb03b] mb-2">Key Business Benefits:</h4>
                <p className="text-white text-sm opacity-90"><strong>Brand Integrity and Supply Chain Security.</strong> Printing serves brand identity (logos, taglines), logistics (handling instructions, serial codes), and acts as a tamper-evident marker, clearly showing if the strap has been cut or replaced.</p>
              </div>
            </div>

            {/* Coloured Stripping */}
            <div className="bg-black border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#fcb03b] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Coloured Stripping
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                More than just aesthetics, colored strapping is a powerful tool for warehouse management, tracking, and safety protocols.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#fcb03b] mb-2">Application Focus:</h4>
                <p className="text-white text-sm opacity-90">Inventory management (FIFO), quick visual product/destination identification, and internal safety coding.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#fcb03b] mb-2">Key Business Benefits:</h4>
                <p className="text-white text-sm opacity-90"><strong>Efficiency and Error Reduction.</strong> Different colors can designate product type, destination, inspection status, or hazard level, enabling rapid visual identification and significantly reducing staging and shipping errors.</p>
              </div>
            </div>

            {/* Transparent Stripping */}
            <div className="bg-black border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#fcb03b] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Transparent Stripping
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                This strip is designed for retail-facing goods or situations where the package design must remain clearly visible. It offers a sleek, professional, and discreet hold.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#fcb03b] mb-2">Application Focus:</h4>
                <p className="text-white text-sm opacity-90">Retail packaging, cosmetic and food boxes, and professional presentation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#fcb03b] mb-2">Key Business Benefits:</h4>
                <p className="text-white text-sm opacity-90"><strong>Professional Presentation and Tamper Evidence.</strong> Provides a professional look while ensuring high-level security. Any tampering or cutting is immediately obvious against the plain package surface, simplifying inspection processes.</p>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="mt-12 bg-[#fcb03b] text-black p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Customization Options Available
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="bg-black/10 p-4 rounded">
                <p className="font-semibold">Custom Length</p>
              </div>
              <div className="bg-black/10 p-4 rounded">
                <p className="font-semibold">Width</p>
              </div>
              <div className="bg-black/10 p-4 rounded">
                <p className="font-semibold">Thickness</p>
              </div>
              <div className="bg-black/10 p-4 rounded">
                <p className="font-semibold">Colour</p>
              </div>
              <div className="bg-black/10 p-4 rounded">
                <p className="font-semibold">Printing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fcb03b] text-center">
            Industrial Strapping Machinery
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            We deal in two reliable classes of machinery designed to automate your packaging workflow, reduce freight costs, and increase productivity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fully Automatic */}
            <div className="bg-gradient-to-br from-[#fcb03b] to-[#e09d2a] text-black rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">
                Fully Automatic Strapping Machine
              </h3>
              <p className="mb-6 leading-relaxed">
                This is a high-speed automation solution engineered for production line integration and maximum throughput.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Function:</h4>
                <p className="text-sm leading-relaxed">
                  Capable of detecting the package, automatically allotting, tightening (to a precise setting), and fastening polypropylene straps around packages.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Operation:</h4>
                <p className="text-sm leading-relaxed">
                  Utilizes an instantaneous heat-weld closure for a secure, permanent seal. Features inbuilt sensors that auto-switch the motor off when idle to conserve energy, restarting automatically upon product detection.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Recommendation:</h4>
                <p className="text-sm leading-relaxed">
                  Ideal for busy, high-volume, and 24/7 industrial operations requiring consistent, perfect strap placement for product and pallet stability.
                </p>
              </div>
            </div>

            {/* Semi Automatic */}
            <div className="bg-black border-2 border-[#fcb03b] rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#fcb03b]">
                Semi Automatic Strapping Machine
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                A cost-effective, portable solution offering flexibility without compromising on sealing integrity or speed.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Function:</h4>
                <p className="text-sm leading-relaxed text-gray-700">
                  Operators manually feed the strap over the product, and the machine instantly and reliably executes the tensioning and sealing process.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Key Technical Specs:</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li><strong>Cycle Width:</strong> Rapid 2.5 seconds per strap</li>
                  <li><strong>Tension Range:</strong> Adjustable from 15 to 45 Kgs</li>
                  <li><strong>Strap Width:</strong> Compatible with 9mm, 12mm, and 15.5mm strapping</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-[#fcb03b]">Application Suitability:</h4>
                <p className="text-sm leading-relaxed text-gray-700 mb-2">
                  Excellent for diverse product sizes and mobile packaging stations. Suitable for a wide variety of goods including:
                </p>
                <p className="text-sm text-gray-600">
                  Paper, Corrugated Box, Plastic, Ceramic, Wood, Light Aluminum, and Steel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

