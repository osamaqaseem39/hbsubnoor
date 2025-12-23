import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
    default: "HB Sub Noor Industries | Industrial Packaging & Strap Solutions",
    template: "%s | HB Sub Noor Industries"
  },
  description: "HB Sub Noor Industries - Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions across Pakistan and globally.",
  keywords: [
    "industrial packaging",
    "strap solutions",
    "PP strap",
    "PET strap",
    "strapping machines",
    "semi-automatic strapping machine",
    "automatic strapping machine",
    "packaging materials",
    "polypropylene strap",
    "polyester strap",
    "HB Sub Noor",
    "packaging security",
    "industrial strap",
    "Pakistan packaging solutions"
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hbsubnoor.com",
    title: "HB Sub Noor Industries | Industrial Packaging & Strap Solutions",
    description: "Leading manufacturer of polypropylene (PP) and polyester (PET) strap materials, semi-automatic and automatic strapping machines. Over 25 years of excellence in industrial packaging solutions across Pakistan and globally.",
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
    title: "HB Sub Noor Industries | Industrial Packaging & Strap Solutions",
    description: "Leading manufacturer of industrial packaging and strap solutions. Over 25 years of excellence in PP/PET strap materials and strapping machines.",
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
