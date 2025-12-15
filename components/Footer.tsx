import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcb03b] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcb03b]">HB SUB NOOR</h3>
            <p className="text-sm">
              The Future of Industrial Packaging Security
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#fcb03b]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#fcb03b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#fcb03b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#fcb03b] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fcb03b] transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#fcb03b]">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@strapack.com.pk</li>
              <li>Phone: +92 3224 722 707</li>
              <li>
                <Link href="/contact" className="hover:text-[#fcb03b] transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#fcb03b]">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Head Office:</strong><br />
                9/E, G-Block, Mushtaq Ahmed Gurmani Road,<br />
                Main Boulevard Gulberg-II, Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/20 pt-8 text-center text-sm">
          <p>Copyright ©2026 HB SUB NOOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

