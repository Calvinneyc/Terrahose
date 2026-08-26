export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.terrahose.com/#organization",
    name: "Terra Hose & Hydraulic Engineering",
    description:
      "Professional hydraulic hose assembly and hydraulic fittings engineering in Johor, Malaysia. Custom hose assembly, crimping, replacement and on-site service.",
    url: "https://www.terrahose.com",
    logo: "https://www.terrahose.com/logo.jpg",
    image: "https://www.terrahose.com/logo.jpg",
    telephone: "+60-16-772-8500",
    email: "sales@terrahose.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "190-5, Jalan Saleng 10",
      addressLocality: "Kulai",
      addressRegion: "Johor",
      postalCode: "81400",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.6654,
      longitude: 103.6034,
    },
    areaServed: "Malaysia",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
