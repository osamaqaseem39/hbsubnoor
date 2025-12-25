import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries",
    template: "%s | HB Sub Noor Industries"
  },
  description: "Best packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, best strapping machine manufacturer (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence. Best quality industrial packaging strap solutions globally.",
  keywords: [
    "best manufacturer strapping machine",
    "best strapping machine manufacturer",
    "best packaging strap manufacturer",
    "best PP strap manufacturer",
    "best PET strap manufacturer",
    "best automatic strapping machine",
    "best semi-automatic strapping machine",
    "top packaging strap manufacturer Pakistan",
    "best industrial packaging strap manufacturer",
    "leading strap manufacturer",
    "best quality packaging straps",
    "best strapping machine Pakistan",
    "top-rated packaging solutions",
    "best manufacturer packaging materials",
    "premium strapping machine manufacturer"
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
    title: "Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries",
    description: "Best packaging strap manufacturer of polypropylene (PP) and polyester (PET) strap materials, best strapping machine manufacturer (semi-automatic & automatic). Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence.",
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
    title: "Best Packaging Strap Manufacturer | Best Strapping Machine Manufacturer | HB Sub Noor Industries",
    description: "Best packaging strap manufacturer of PP/PET strap materials and best strapping machine manufacturer. Top-rated packaging strap manufacturer in Pakistan with 25+ years excellence.",
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
        "telephone": "+92-322-4722707",
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
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
