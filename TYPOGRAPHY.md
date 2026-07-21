# The Sole Studio Norwich — Typography Reference

This is the single source of truth for text styling across the site. Before adding a font-size class to anything, check here first — don't guess a new one.

## Scale

| Role                 | Classes                                                                    | Used for                                         |
| -------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ |
| Page title (h1)      | `text-4xl md:text-5xl` (handled by `<PageTitle />`)                        | One per page, top of content                     |
| Hero heading         | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight` | Landing page hero only                           |
| Section heading (h2) | `text-3xl md:text-4xl`                                                     | Any section intro within a page                  |
| Card heading (h3)    | `text-xl`                                                                  | Treatment cards, review cards, blog cards        |
| Body copy            | `text-base md:text-lg leading-relaxed`                                     | Standard paragraphs                              |
| Small/meta copy      | `text-sm md:text-base leading-relaxed`                                     | Card descriptions, review quotes                 |
| Micro copy           | `text-sm`                                                                  | Labels, timestamps, footnotes, legal small print |

## Rules

1. **Headings never need explicit weight or color classes.** `index.css` already applies `font-semibold` + `text-black` to every `h1`, `h2`, `h3` globally. Adding `font-semibold text-black` again on individual headings is redundant — remove it if you see it, don't add it.
2. **Never override a shared component's text size per-instance.** If `BookNowButton` needs to look smaller somewhere, that's a new `size` prop, not a `className` override at the call site — one-off overrides are exactly how the drift happened the first time.
3. **Two font-weights only: `font-semibold` (headings, via base layer) and default/normal (everything else).** No `font-medium`, no `font-extrabold` anywhere. If something needs to stand out, use the small/meta copy role or a color change, not a heavier weight.
4. **Any paragraph without a size class inherits `text-base` at all breakpoints** (from `body { @apply font-sans text-charcoal-500 }`). That's fine for one-off short lines, but a lead/intro paragraph under a page title should get the body role explicitly.

## Known intentional exceptions (left as-is, not bugs)

- **Blog card titles** (`text-xl md:text-2xl`) run one step larger than other card headings — image-led cards read better with slightly more weight. If you'd rather they matched other cards exactly, say so and it's a one-line change.
- **EmailPopup heading** (`text-2xl md:text-3xl`) is a modal, not a page section, so it doesn't use the section-heading role — kept intentionally smaller to suit the popup size.

## Flagged for a decision (not auto-changed)

- **`BlogPost.jsx`** hand-rolls its own `<h1>` instead of using `<PageTitle />`. Visually identical today, but it means a future global title change (or whatever `.title` actually does in your CSS — it's referenced but not defined in the base file, worth tracking down) won't reach this page. Worth fixing, but `PageTitle` also wraps in `.align-element`, and `BlogPost` is already inside an `.align-element` article — nesting them would double up the max-width/padding, so this needs a small structural change, not a class swap. Flagging rather than guessing.
- **Treatment card "Book Now" button** had a font-size override (`text-sm sm:text-base`) that's been removed for consistency, but it also had `opacity-80 hover:opacity-100` (faded until hovered) — that might be a deliberate choice to de-emphasize the repeated CTA against a page of many cards. Left in for now; remove if you want it to match the full-opacity buttons elsewhere.
