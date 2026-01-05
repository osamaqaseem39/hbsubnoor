import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries",
    template: "%s | HB Sub Noor Industries"
  },
  description: "Leading packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, premium strapping machines (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence. Quality industrial packaging strap solutions globally.",
  keywords: [
    "packaging strap manufacturer",
    "strapping machine manufacturer",
    "PP strap manufacturer",
    "PET strap manufacturer",
    "automatic strapping machine",
    "semi-automatic strapping machine",
    "packaging strap manufacturer Pakistan",
    "industrial packaging strap manufacturer",
    "leading strap manufacturer",
    "quality packaging straps",
    "strapping machine Pakistan",
    "packaging strap solutions",
    "premium strapping machines",
    "industrial strapping equipment"
  ],
  authors: [{ name: "HB Sub Noor Industries" }],
  creator: "HB Sub Noor Industries",
  publisher: "HB Sub Noor Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hbsubnoor.com"), // Update with actual domain
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "S_fkeOGrbDR0duxY6xD6LEFfVxE3S-L2r0W8LB13wzo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hbsubnoor.com",
    title: "Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries",
    description: "Leading packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, premium strapping machines (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence.",
    siteName: "HB Sub Noor Industries",
    images: [
      {
        url: "/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "HB Sub Noor Industries - Industrial Packaging & Strap Solutions Logo",
        type: "image/png",
      },
      {
        url: "/images/semi-automatic-strapping-machine.png",
        width: 1200,
        height: 630,
        alt: "Semi-automatic strapping machine - HB Sub Noor Industries",
        type: "image/png",
      },
      {
        url: "/images/polypropylene-pp-strapping-material.png",
        width: 1200,
        height: 630,
        alt: "Polypropylene PP strap material - HB Sub Noor Industries",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading Packaging Strap Manufacturer | Premium Strapping Machines | HB Sub Noor Industries",
    description: "Leading packaging strap manufacturer of PP/PET strap materials and premium strapping machines. Top-rated packaging strap manufacturer in Pakistan with 25+ years of excellence.",
    images: ["/images/favicon.png"],
    creator: "@hbsubnoor", // Update with actual Twitter handle if available
    site: "@hbsubnoor", // Update with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HB Sub Noor Industries",
    "alternateName": "HB SUB NOOR",
    "url": "https://hbsubnoor.com",
    "logo": "https://hbsubnoor.com/images/favicon.png",
    "description": "Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions.",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9/E, G-Block, Mushtaq Ahmed Gurmani Road, Main Boulevard Gulberg-II",
      "addressLocality": "Lahore",
      "addressCountry": "PK",
      "addressRegion": "Punjab"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-300-0887966",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-4722707",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-323-3093336",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-301-4914797",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-4054078",
        "contactType": "Sales",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "email": "info@strapack.com.pk",
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": "en"
      }
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "knowsAbout": [
      "Industrial Packaging",
      "Strap Solutions",
      "PP Strap",
      "PET Strap",
      "Strapping Machines",
      "Semi-Automatic Strapping Machine",
      "Automatic Strapping Machine",
      "Packaging Materials",
      "Polypropylene Strap",
      "Polyester Strap"
    ]
  };

  return (
    <html lang="en" data-theme="light">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6M7QKH5K4Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6M7QKH5K4Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923224054078"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Contact us on WhatsApp"
        >
          <div className="relative">
            {/* Pulse Animation Ring */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
            {/* Main Button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50">
              <svg
                className="w-8 h-8 md:w-9 md:h-9 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                Chat with us on WhatsApp
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black"></div>
              </div>
            </div>
          </div>
        </a>
      </body>
    </html>
  );
}
