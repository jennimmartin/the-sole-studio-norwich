// Centralized analytics loader.
//
// This is the ONE file that needs to change once an analytics tool is
// decided on. Everything else (the cookie banner, consent storage, the
// footer "Cookie Preferences" link) is already wired to call these
// functions correctly regardless of which tool ends up here.

const CONSENT_KEY = "cookieConsent";

export const hasAnalyticsConsent = () => {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
};

// Called once consent is granted — either right now (someone just clicked
// Accept) or on a later page load, for a returning visitor who already
// said yes in a previous session.
export const initAnalytics = () => {
  if (!hasAnalyticsConsent()) return;

  // --- Fill this in once the analytics tool is chosen ---
  //
  // Example: Simple Analytics (no cookies at all — could actually run
  // unconditionally regardless of consent, but routing it through here
  // keeps behavior consistent and this function the single source of truth):
  //
  // const script = document.createElement("script");
  // script.src = "https://scripts.simpleanalyticscdn.com/latest.js";
  // script.async = true;
  // document.head.appendChild(script);

  // Example: Google Analytics 4 (cookie-based — MUST stay behind consent):
  //
  // const script = document.createElement("script");
  // script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
  // script.async = true;
  // document.head.appendChild(script);
  // window.dataLayer = window.dataLayer || [];
  // function gtag() { window.dataLayer.push(arguments); }
  // gtag("js", new Date());
  // gtag("config", "G-XXXXXXX");
};

// Called when consent is declined or withdrawn. For a cookie-based tool,
// fill this in to actually stop tracking (most tools have a documented
// "opt out" call for exactly this). Cookieless tools generally don't need
// anything here.
export const revokeAnalyticsConsent = () => {
  // --- Fill this in if the chosen tool needs explicit opt-out handling ---
};
