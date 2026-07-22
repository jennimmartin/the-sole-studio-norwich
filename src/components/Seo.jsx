import { Helmet } from "react-helmet-async";
import { SITE_URL, BUSINESS_INFO } from "../config/businessInfo";

// Usage, at the top of any page component:
//
//   <SEO
//     title="Treatments"
//     description="Specialist foot care treatments in Norwich — Thai foot
//                   massage, toenail reconstruction, Elim pedicures, and more."
//     path="/treatments"
//   />
//
// `path` should be the route as it appears in App.jsx (e.g. "/", "/about",
// "/treatments") — used to build the canonical URL and og:url.
const SEO = ({ title, description, path = "/" }) => {
  const fullTitle = `${title} | ${BUSINESS_INFO.businessName}`;
  const url = `${SITE_URL}${path}`;

  // TODO: create a real 1200×630px share image and update this path once
  // it exists — see the "og:image" line in LAUNCH-CHECKLIST.md.
  const ogImage = `${SITE_URL}/images/og-image.jpg`;

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={BUSINESS_INFO.businessName} />

      {/* Twitter Card — reuses the same Open Graph image/description */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
