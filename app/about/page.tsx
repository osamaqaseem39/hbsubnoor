export default function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-heading">
            About Us
          </h1>
          <div className="w-24 h-1 bg-bg-accent mx-auto"></div>
        </div>

        {/* Core Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-heading">
            Our Core Capabilities
          </h2>
          <p className="text-lg text-text-primary mb-6 leading-relaxed">
            HB Sub Noor Industries specializes in two critical areas of industrial packaging:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card p-6 rounded-lg border-l-4 border-border-accent">
              <h3 className="text-xl font-semibold mb-3 text-text-heading">
                High-Performance Packaging Straps
              </h3>
              <p className="text-text-primary">
                Manufacturing top-of-the-line custom plastic poly strap (Polypropylene/Polyester) known for being <strong>Easy to Use, Safe, Reliable, and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-lg border-l-4 border-border-accent">
              <h3 className="text-xl font-semibold mb-3 text-text-heading">
                Automated Strapping Machinery
              </h3>
              <p className="text-text-primary">
                Dealing in state-of-the-art automatic and semi-automatic strapping machines designed to boost productivity and reduce operational costs.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-heading">
            A Legacy of Quality and Trust
          </h2>
          <p className="text-lg text-text-primary mb-6 leading-relaxed">
            Since our founding, we have focused relentlessly on quality. We believe in winning customer confidence through <strong>Commitment, Quality, and Loyalty</strong>. Our journey includes key milestones:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-bg-accent text-text-on-accent rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2004
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-text-heading">Strategic Market Entry</h4>
                <p className="text-text-primary">Strategic entry into the strap packaging market.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-bg-accent text-text-on-accent rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2008
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-text-heading">Production Expansion</h4>
                <p className="text-text-primary">Inauguration of our first high-capacity production line.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-bg-accent text-text-on-accent rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                Now
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-text-heading">Global Presence</h4>
                <p className="text-text-primary">Companies from all over the world are using our products to meet their packaging requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="mb-16 bg-bg-accent text-text-on-accent p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-text-on-accent">
            CEO&apos;s Message
          </h2>
          <blockquote className="text-lg leading-relaxed italic">
            &quot;We believe in winning customer confidence by providing them intelligent & Cost Effective Solutions especially in the field of coding & Packaging. The key factor of our success is commitment, Quality & Loyalty with our customer. We are proudly offering our products all over Pakistan through our International Sales offices & Distributors.&quot;
          </blockquote>
        </section>

        {/* Our Company */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-heading">
            Our Company
          </h2>
          <div className="bg-bg-card p-8 rounded-lg border-l-4 border-border-accent">
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              We are a company that manufactures top of the line custom plastic poly packaging straps and we also deal in automatic and semi automatic strapping machines. We have been in business for <strong>over 30 years</strong>, and companies from all over the world are using our products to meet their packaging requirements.
            </p>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              We have been manufacturing industrial packing straps for the last many years and have gained a good reputation in the market for offering products of superior quality at reasonable prices.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              Our range of plastic poly packaging straps are available in different sizes, thicknesses and colors.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-text-heading">
            Our Mission & Vision
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Mission</h3>
              <p className="text-text-primary leading-relaxed">
                To provide our customers with the best and affordable custom plastic poly packaging straps, which are <strong>Easy to Use, Safe, Reliable and Long Lasting</strong>.
              </p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-text-heading">Vision</h3>
              <p className="text-text-primary leading-relaxed">
                To become a leading manufacturer of custom plastic poly packaging straps in the world. Our team will bring this vision to life by focusing on <strong>Quality</strong>.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-bg-accent bg-opacity-10 p-6 rounded-lg border-l-4 border-border-accent">
            <h3 className="text-2xl font-bold mb-4 text-text-heading">Goals</h3>
            <ul className="space-y-2 text-text-primary">
              <li className="flex items-start gap-2">
                <span className="text-text-heading font-bold">•</span>
                <span>To serve our customers by providing them with the best quality product that can last for years.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-heading font-bold">•</span>
                <span>To establish long-term relationships with our customers based on trust.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

