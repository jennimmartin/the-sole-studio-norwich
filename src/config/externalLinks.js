// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

// All external links in one place
export const EXTERNAL_LINKS = {
  // Booking system
  booking: isDevelopment
    ? "https://thesolestudionorwich.book.app/book-now" // Test URL for development
    : "https://thesolestudionorwich.book.app/book-now", // Real URL for production - it will have sole-studio

  // Social media
  facebook: "https://facebook.com/thesolestudionorwich",
  instagram: "https://www.instagram.com/thesolestudionorwich",
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
