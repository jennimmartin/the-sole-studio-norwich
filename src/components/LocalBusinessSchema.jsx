import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  BUSINESS_INFO,
  OPENING_HOURS_SCHEMA,
} from "../config/businessInfo";

// Renders once, site-wide (mounted in HomeLayout, not per-page) — a
// business only needs one LocalBusiness schema block, not one per page.
const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    // HealthAndBeautyBusiness is the closest accurate schema.org type here —
    // there's no specific "foot care studio" type, and this business is
    // explicitly positioned between beauty and clinical podiatry, so a
    // narrower type like "BeautySalon" would undersell the specialist
    // angle and a medical type would overclaim it.
    "@type": "HealthAndBeautyBusiness",
    name: BUSINESS_INFO.businessName,
    "@id": SITE_URL,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.jpg`, // TODO: same share image as SEO.jsx, once created
    telephone: BUSINESS_INFO.phoneIntl,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}`,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postcode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
    ].filter(Boolean),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
