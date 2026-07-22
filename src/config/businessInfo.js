import { EXTERNAL_LINKS } from "./externalLinks";

// TODO: confirm actual live domain once decided, then update SITE_URL below.
// Everything else here is already accurate (pulled from the existing Footer).
export const SITE_URL = "https://www.thesolestudionorwich.co.uk";

export const BUSINESS_INFO = {
  businessName: "The Sole Studio Norwich",
  address: {
    line1: "Suite G, Sapphire House",
    line2: "Roundtree Way",
    city: "Norwich",
    postcode: "NR7 8SQ",
    country: "GB",
  },
  phone: "07854 918746",
  // Phone in international format, needed for the tel: link and JSON-LD
  phoneIntl: "+44 7854 918746",
  email: "hello@thesolestudionorwich.co.uk",
  openingHours: [
    { day: "Tuesday", time: "6:15pm to 9:00pm" },
    { day: "Thursday", time: "6:15pm to 9:00pm" },
    { day: "Saturday", time: "9:00am to 4:00pm" },
  ],
  geo: {
    latitude: 52.649799169385886,
    longitude: 1.3278745112323629,
  },
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2420.5746712492396!2d1.3244835412980225!3d52.64959692674245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%20G%2C%20Sapphire%20House%2C%20Roundtree%20Way%2C%20Norwich%20NR7%208SQ!5e0!3m2!1sen!2sfr!4v1772723078141!5m2!1sen!2sfr",
  },
  social: {
    facebook: EXTERNAL_LINKS.facebook,
    instagram: EXTERNAL_LINKS.instagram,
    tiktok: EXTERNAL_LINKS.tiktok,
    email: "hello@thesolestudionorwich.co.uk",
  },
};

// Maps the plain-English opening hours above into the day/time format
// schema.org's OpeningHoursSpecification expects (24hr, one entry per day).
// Kept as a derived value rather than hand-written twice, so the two
// representations can't drift out of sync with each other.
export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Tuesday",
    opens: "18:15",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Thursday",
    opens: "18:15",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "16:00",
  },
];
