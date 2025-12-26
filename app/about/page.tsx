'use client';

import AboutSection from '@/components/AboutSection';

export default function About() {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - HB Sub Noor Industries",
    "description": "Leading packaging strap manufacturer with three decades of excellence. Top industrial packaging strap manufacturer transforming the industry through cutting-edge technology. Quality packaging strap manufacturer building trust through innovation.",
    "mainEntity": {
      "@type": "Organization",
      "name": "HB Sub Noor Industries",
      "foundingDate": "1999",
      "description": "Leading packaging strap manufacturer and global leader in comprehensive packaging strap and strapping machine solutions with over 25 years of operational excellence. Top-rated packaging strap manufacturer of quality packaging strap solutions.",
      "knowsAbout": [
        "Industrial Packaging",
        "Strap Solutions",
        "Quality Manufacturing",
        "Innovation"
      ]
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hbsubnoor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://hbsubnoor.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen">
        <AboutSection showHero={true} variant="full" />
    </div>
    </>
  );
}
