import { Link } from "react-router-dom";
import { EXTERNAL_LINKS, hasLink } from "../config/externalLinks";

// Footer data - update here when info changes
const FOOTER_DATA = {
  businessName: "The Sole Studio Norwich",
  address: {
    line1: "Suite G, Sapphire House",
    line2: "Roundtree Way",
    city: "Norwich",
    postcode: "NR7 8SQ",
  },
  phone: "07854 918746",
  email: "hello@thesolestudionorwich.co.uk",
  openingHours: [
    { day: "Tuesday", time: "6:15pm to 9:00pm" },
    { day: "Thursday", time: "6:15pm to 9:00pm" },
    { day: "Saturday", time: "9:00am to 4:00pm" },
  ],
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2420.5746712492396!2d1.3244835412980225!3d52.64959692674245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%20G%2C%20Sapphire%20House%2C%20Roundtree%20Way%2C%20Norwich%20NR7%208SQ!5e0!3m2!1sen!2sfr!4v1772723078141!5m2!1sen!2sfr", // Add actual embed URL
    latitude: 52.649799169385886,
    longitude: 1.3278745112323629,
  },

  social: {
    facebook: EXTERNAL_LINKS.facebook,
    instagram: EXTERNAL_LINKS.instagram,
    tiktok: EXTERNAL_LINKS.tiktok,
    email: "hello@thesolestudionorwich.co.uk",
  },
};

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-neutral-50 py-12 md:py-16">
        <div className="align-element">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Map */}
            <div>
              <h3 className="text-2xl mb-4">Find Us</h3>
              <div className="bg-white border border-neutral-200 h-64 md:h-80">
                {/* Google Map Embed */}
                <iframe
                  src={FOOTER_DATA.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Sole Studio Norwich Location"
                ></iframe>
                <p className="mt-2">Free off road parking available</p>
              </div>
            </div>

            {/* Right Column - Opening Hours & Contact */}
            <div>
              {/* Opening Times */}
              <div className="mb-8">
                <h3 className="text-2xl mb-4">Opening Times</h3>
                <div className="space-y-2">
                  {FOOTER_DATA.openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="text-charcoal-500">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <p>
                    {FOOTER_DATA.address.line1}
                    <br />
                    {FOOTER_DATA.address.line2}
                    <br />
                    {FOOTER_DATA.address.city}
                    <br />
                    {FOOTER_DATA.address.postcode}
                  </p>
                  <p>
                    <a
                      href={`tel:${FOOTER_DATA.phone.replace(/\s/g, "")}`}
                      className="hover:text-neutral-800 transition-colors"
                    >
                      {FOOTER_DATA.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${FOOTER_DATA.email}`}
                      className="hover:text-neutral-800 transition-colors"
                    >
                      {FOOTER_DATA.email}
                    </a>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  {FOOTER_DATA.social.facebook && (
                    <a
                      href={FOOTER_DATA.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  )}
                  {FOOTER_DATA.social.instagram && (
                    <a
                      href={FOOTER_DATA.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}
                  {FOOTER_DATA.social.tiktok && (
                    <a
                      href={FOOTER_DATA.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded flex items-center justify-center hover:bg-neutral-800 transition-colors"
                      aria-label="TikTok"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={`mailto:${FOOTER_DATA.social.email}`}
                    className="w-12 h-12 bg-neutral-700 rounded flex items-center justify-center hover:bg-neutral-800 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
                {/* Download Treatment Menu */}
                <div className="mt-6">
                  <a
                    href="/Treatment_Menu.pdf"
                    download="The_Sole_Studio_Treatment_Menu.pdf"
                    className="text-black underline hover:text-charcoal-500 transition-colors text-sm pr-0.5"
                  >
                    Download Treatment Menu (PDF)
                  </a>{" "}
                  {" | "}
                  <span className="text-black underline hover:text-charcoal-500 transition-colors text-sm px-0.5">
                    <Link to="/legal">Legal</Link>
                  </span>
                  {" | "}
                  <span className="text-black underline hover:text-charcoal-500 transition-colors text-sm px-0.5">
                    <Link to="/faq">FAQs</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal & Copyright */}
      <div className="bg-black">
        <div className="align-element">
          <h5 className="text-center py-6 text-white text-sm">
            &copy; {new Date().getFullYear()} {FOOTER_DATA.businessName}
            {" | "}
            <span>
              Created by{" "}
              <a
                href="https://jennimmartin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 duration-300"
              >
                Jenni M Martin
              </a>
            </span>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
