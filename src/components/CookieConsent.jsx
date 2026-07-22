import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initAnalytics, revokeAnalyticsConsent } from "../lib/analytics";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");

    if (!hasConsented) {
      setShowBanner(true);
      return;
    }

    // Returning visitor who already made a choice in a previous session —
    // nothing else in the app re-runs this, so it has to happen here on
    // every page load, not just at the moment of clicking Accept.
    if (hasConsented === "accepted") {
      initAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    initAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    revokeAnalyticsConsent();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-6 shadow-lg z-50">
      <div className="align-element">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Message */}
          <div className="flex-1">
            <p className="text-sm md:text-base mb-2">
              We use cookies to improve your experience on our website and to
              analyze site traffic.
            </p>
            <p className="text-xs text-neutral-300">
              By clicking "Accept", you consent to our use of cookies.{" "}
              <Link
                to="/legal"
                className="underline hover:text-white transition-colors"
              >
                Learn more in our Cookie Policy
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-white text-black hover:bg-neutral-200 transition-all duration-300"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
