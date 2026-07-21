import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CLINIC_INFO } from '../../data/clinicData';

export default function SEO({ 
  title = "MotionCare | Premier Physiotherapy & Rehabilitation Center", 
  description = "Move better, recover faster, and live pain-free with MotionCare's evidence-based physical therapy, sports rehabilitation, dry needling, and neurological recovery.",
  keywords = "Physiotherapy Clinic, Physiotherapist, Sports Physiotherapy, Rehabilitation Centre, Back Pain Treatment, Sciatica, Knee Pain Treatment, MotionCare",
  canonical = "https://motioncarerehab.com/",
  type = "website",
  image = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
}) {
  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": CLINIC_INFO.fullName,
      "alternateName": CLINIC_INFO.name,
      "image": image,
      "@id": "https://motioncarerehab.com/",
      "url": "https://motioncarerehab.com/",
      "telephone": CLINIC_INFO.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "742 Kinetic Blvd, Suite 400",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10016",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.748817,
        "longitude": -73.985428
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "SportsMedicine",
        "NeurologicalRehabilitation",
        "Orthopedics"
      ]
    }
  ];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={CLINIC_INFO.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}
