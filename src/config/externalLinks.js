// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

// All external links in one place
export const EXTERNAL_LINKS = {
  // Booking system
  booking: isDevelopment
    ? "https://suzannes-sanctuary.book.app/book-now" // Test URL for development
    : "https://the-sole-studio-norwich.book.app/book-now", // Real URL for production

  // Social media (empty until Suzanne sets them up)
  facebook: "https://facebook.com/suzannesanctuary",
  instagram: "https://instagram.com/suzannesanctuary",
  tiktok: "",

  // Reviews (empty until configured)
  googleReviews: "",

  // Downloadable files (these are on your own site)
  treatmentMenu: "/downloads/treatment-menu.pdf",
  footCareGuide: "/downloads/foot-care-guide.pdf",
};

// Helper function to check if a link has been configured
// Returns true if the link exists and isn't empty
export const hasLink = (key) => {
  return EXTERNAL_LINKS[key] && EXTERNAL_LINKS[key].length > 0;
};
