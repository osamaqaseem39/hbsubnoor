import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/hb-sub-noor-industries-logo.png" 
                alt="HB Sub Noor Industries Logo - Industrial Packaging and Strap Solutions" 
                width={160} 
                height={160}
                className="object-contain"
              />
            </Link>
            <p className="text-sm">
              The Future of Industrial Packaging Security
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@strapack.com.pk</li>
              <li>Phone: +92 3224 722 707</li>
              <li>
                <Link href="/contact" className="hover:text-accent-primary transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Head Office:</strong><br />
                9/E, G-Block, Mushtaq Ahmed Gurmani Road,<br />
                Main Boulevard Gulberg-II, Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-400 pt-6 text-center text-sm text-black opacity-80">
          <p>Copyright ©2026 HB SUB NOOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

