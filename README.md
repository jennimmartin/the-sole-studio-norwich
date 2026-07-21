# The Sole Studio Norwich

Marketing website for The Sole Studio Norwich — a specialist foot care studio in Norwich, UK. Built with React, Vite, and Tailwind CSS, with content managed through Contentful.

## Tech stack

- **React** (with React Router's `createBrowserRouter` / data router API)
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling
- **Contentful** — CMS for Treatments, Blog posts, and FAQs
- **Netlify Forms** — powers the Contact form and the email signup popup (no backend needed)
- Deployed via **Netlify** (see `public/_redirects` — needed so client-side routes like `/treatments` don't 404 on a hard refresh)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run eslint
```

### Environment variables

This project needs Contentful API credentials to fetch Treatments, Blog posts, and FAQs (see `src/lib/contentful.js`). These live in a local `.env` file, which is git-ignored and **not** included in the repo.

```
VITE_CONTENTFUL_SPACE_ID=
VITE_CONTENTFUL_ACCESS_TOKEN=
```

Whoever set up the Contentful space will have these. Worth also adding a `.env.example` file (same variable names, no real values) so this isn't tribal knowledge.

## Project structure

```
public/
  images/                 — static images referenced by direct URL path (not imported)
  Treatment_Menu.pdf      — downloadable PDF, linked from the footer
  Free_Foot_Care_Guide.pdf — downloadable PDF, gated behind the email popup
  _redirects              — Netlify config, required for client-side routing

src/
  assets/images/          — images imported directly into components (bundled by Vite)
  components/
    ui/                   — BookNowButton, ContactForm, ViewReviewButton, ViewTreatmentsButton
    (page sections)       — IntroSection, TreatmentSection, WhyChooseSection, Review,
                             SpecialOffers, Footer, StickyNav, NavbarLogo, PageTitle,
                             AccordionSection / AccordionSectionRichText, CookieConsent,
                             EmailPopup, ScrollToTop, LoyaltyRewards
  config/
    externalLinks.js      — external URLs (booking system, social links) in one place
  layout/
    AppShell.jsx           — thin outer shell wrapper
  lib/
    contentful.js          — all Contentful fetch functions (treatments, blog posts, FAQs)
  pages/
    Landing.jsx             — homepage
    About.jsx               — studio + founder bio
    Treatments.jsx          — treatment list, fetched from Contentful
    Contact.jsx             — contact form + details
    Faq.jsx                 — FAQs, fetched from Contentful
    Blog.jsx / BlogPost.jsx — blog list + individual post, fetched from Contentful.
                              **Currently disconnected** — not routed or linked in
                              nav while Suzanne gets comfortable managing content in
                              Contentful. Files are untouched; see "Blog page — currently
                              disabled" below for how to bring it back.
    Legal.jsx               — Privacy Policy / Terms / Customer Policies (hardcoded content, not in Contentful)
    HomeLayout.jsx          — shared layout (nav, footer, popups) wrapping every page via <Outlet />
    Error.jsx               — 404 / route error page
  App.jsx                   — router configuration
```

## Two different ways images are handled — don't mix them up

This tripped us up once already, so worth documenting clearly:

- **`public/images/`** — reference these with a plain string path: `src="/images/whatever.png"`. Never `import` these — Vite will throw a build error if you try.
- **`src/assets/images/`** — these get `import`ed as a variable: `import photo from "../assets/images/whatever.png"`, then used as `src={photo}`. Vite bundles these properly (correct hashing/caching in production).

If in doubt: if it's a one-off content image tied to a specific page (like a founder photo), `src/assets/images` + import is the more "correct" React way. `public/` is best for files that need a stable, predictable URL (like the downloadable PDFs, which are linked directly).

## Content: what's in Contentful vs. hardcoded

| Content                                               | Where it lives                                                                                                     |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Treatments (list, prices, descriptions)               | Contentful                                                                                                         |
| Blog posts                                            | Contentful                                                                                                         |
| FAQs                                                  | Contentful                                                                                                         |
| Legal page (Privacy Policy, Terms, Customer Policies) | Hardcoded directly in `Legal.jsx`                                                                                  |
| About page copy                                       | Hardcoded directly in `About.jsx`                                                                                  |
| Special Offers box                                    | Hardcoded directly in `SpecialOffers.jsx` — edit the `OFFERS`-adjacent copy in that file directly, no CMS involved |

## Blog page — currently disabled

The Blog isn't linked anywhere on the live site right now (Suzanne's still getting comfortable with adding content in Contentful). Nothing was deleted — the routes in `App.jsx` and the nav link in `StickyNav.jsx` are commented out, not removed, and `Blog.jsx`/`BlogPost.jsx` themselves are untouched. To bring it back:

1. In `App.jsx`, uncomment the `Blog`/`BlogPost` import lines and the two commented-out route entries (`path: "blog"` and `path: "blog/:slug"`).
2. In `StickyNav.jsx`, uncomment the "Blog" `<Link>` in both the desktop `<nav>` and the mobile menu `<nav>`.

That's it — everything's already in place, just commented out.

## Known placeholders / before this goes live

- **About page founder photo** (`src/assets/images/suzanne-placeholder.png`) is Suzanne, but an AI-generated rendering rather than a straight photograph. Not urgent to change, but worth swapping for an unedited photo if/when one's available — flagged in the code comment above the `<img>` tag in `About.jsx` so it's a conscious choice rather than forgotten.
- Blog is currently disabled (see above) — once re-enabled, it'll show "No posts yet" until real posts are added in Contentful.

## Design/typography reference

See `TYPOGRAPHY.md` for the site's typography scale and conventions (heading sizes, body copy sizes, font-weight rules) — check there before adding a new font-size class rather than guessing one, to avoid the inconsistencies that doc was originally written to fix.

## Known quirks worth knowing about

- **Scroll position on route change**: handled by `ScrollToTop.jsx`, mounted in `HomeLayout.jsx`. Pages that fetch data asynchronously (`Treatments.jsx`, `Faq.jsx`, and `Blog.jsx` if re-enabled) additionally reset scroll once their data finishes loading, since the initial route-change reset fires before their real content has arrived. If you add another page that fetches data on mount, copy this same pattern (see the second `useEffect` in `Treatments.jsx` or `Faq.jsx`) or it may have the same intermittent "stuck at the old scroll position" bug on mobile.
- Browser support data (`browserslist`/`caniuse-lite`) is checked by the build tool — if you see a warning about it being out of date, run `npx update-browserslist-db@latest`. Harmless to ignore short-term, good practice to keep current.
