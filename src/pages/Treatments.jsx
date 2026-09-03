import { useEffect, useState, useRef } from "react";
import { getTreatments } from "../lib/contentful";
import BookNowButton from "../components/ui/BookNowButton";
import SpecialOffers from "../components/SpecialOffers";
import PageTitle from "../components/PageTitle";
import SEO from "../components/SEO";

// import LoyaltyRewards from "../components/LoyaltyRewards"; // planned, not ready yet

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toggle state for each section
  const [showAllThai, setShowAllThai] = useState(false);
  const [showAllToenail, setShowAllToenail] = useState(false);
  const [showAllElim, setShowAllElim] = useState(false);
  const [showAllPedicures, setShowAllPedicures] = useState(false);
  const [showAllGelMani, setShowAllGelMani] = useState(false);
  const [showAllBrows, setShowAllBrows] = useState(false);

  useEffect(() => {
    getTreatments()
      .then((data) => {
        setTreatments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading treatments:", err);
        setLoading(false);
      });
  }, []);

  // ScrollToTop resets scroll on route change, but that fires before this
  // page's real content has loaded (it only shows a short "Loading..." state
  // at that point). Reset again once the actual content is in, so we're not
  // left wherever the previous page happened to be scrolled to.
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  // Helper function to scroll to section with offset for sticky nav
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 50;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 40;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Toggle handlers with scroll
  const handleToggleThai = () => {
    const newState = !showAllThai;
    setShowAllThai(newState);
    if (!newState) scrollToSection("thai-foot-massage");
  };

  const handleToggleToenail = () => {
    const newState = !showAllToenail;
    setShowAllToenail(newState);
    if (!newState) scrollToSection("toenail-reconstruction");
  };

  const handleToggleElim = () => {
    const newState = !showAllElim;
    setShowAllElim(newState);
    if (!newState) scrollToSection("elim");
  };

  const handleTogglePedicures = () => {
    const newState = !showAllPedicures;
    setShowAllPedicures(newState);
    if (!newState) scrollToSection("pedicures");
  };

  const handleToggleGelMani = () => {
    const newState = !showAllGelMani;
    setShowAllGelMani(newState);
    if (!newState) scrollToSection("gel-manicures");
  };

  const handleToggleBrows = () => {
    const newState = !showAllBrows;
    setShowAllBrows(newState);
    if (!newState) scrollToSection("eyebrows-lashes");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-charcoal-500">
            Loading treatments...
          </div>
        </div>
      </div>
    );
  }

  // Group treatments by NEW categories
  const thaiFootMassage = treatments.filter(
    (t) => t.category === "Thai Foot Massage"
  );
  const toenailReconstruction = treatments.filter(
    (t) => t.category === "Toenail Reconstruction"
  );
  const elim = treatments.filter((t) => t.category === "Elim");
  const pedicures = treatments.filter((t) => t.category === "Pedicures");
  const gelMani = treatments.filter((t) => t.category === "Gel Manicures");
  const brows = treatments.filter((t) => t.category === "Eyebrows & Lashes");

  // Check if any beauty services need patch test
  const hasPatchTestTreatment = brows.some((t) =>
    t.title.toLowerCase().includes("tint")
  );

  return (
    <div className="align-element">
      <SEO
        title="Treatments"
        description="Specialist foot care in Norwich — Thai foot massage, toenail reconstruction, Elim pedicures, and more. Professional, unrushed, completely private."
        path="/treatments"
      />
      <div className="space-y-12">
        {/* Hero Section - CENTERED */}
        <div className="text-center">
          <PageTitle title="Treatments" />
          <p className="text-base md:text-lg text-charcoal-500 max-w-2xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>

        {/* Special Offers - CENTERED */}
        <SpecialOffers />

        {/* Thai Foot Massage */}
        {thaiFootMassage.length > 0 && (
          <div id="thai-foot-massage">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Thai Foot Massage</h2>
              <p>
                Restorative relief for tired, overworked feet. A therapeutic
                treatment using traditional Thai techniques to improve
                circulation, ease tension, and support foot health. Ideal for
                foot fatigue, tightness, and preventative care. Leave feeling
                lighter, relaxed, and more mobile in a calm, professional
                setting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllThai
                ? thaiFootMassage
                : thaiFootMassage.slice(0, 3)
              ).map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>

            {thaiFootMassage.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleToggleThai}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllThai ? "View Less" : "View All Thai Foot Massage"}
                  <span className="text-xl">{showAllThai ? "−" : "+"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Toenail Reconstruction */}
        {toenailReconstruction.length > 0 && (
          <div id="toenail-reconstruction">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">
                Toenail Reconstruction
              </h2>
              <p>
                Specialist restoration for damaged or compromised nails. Restore
                the natural appearance and strength of a damaged or unsightly
                toenail with this advanced, hygiene-first reconstruction
                treatment. Designed for nails affected by trauma,
                discolouration, thickening, or partial loss, this service uses
                specialist Wilde Pedique Silver Plus technology to safely
                rebuild and protect the nail while supporting overall nail
                health. Ideal for clients who feel self-conscious about their
                toenails or want a reliable, professional solution that
                prioritises both appearance and long-term condition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllToenail
                ? toenailReconstruction
                : toenailReconstruction.slice(0, 3)
              ).map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>

            {toenailReconstruction.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleToggleToenail}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllToenail
                    ? "View Less"
                    : "View All Toenail Reconstruction"}
                  <span className="text-xl">{showAllToenail ? "−" : "+"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Elim */}
        {elim.length > 0 && (
          <div id="elim">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">ELIM</h2>A
              results-driven, medical-grade pedicure designed to restore
              comfort, improve skin condition, and support long-term foot
              health. This advanced, non-invasive treatment goes beyond a
              traditional pedicure, using specialist Elim products to gently and
              effectively remove hard skin and calluses—without harsh filing or
              blades. The focus is on safe, controlled exfoliation that protects
              the skin while delivering visible, lasting results. Ideal for
              clients seeking a professional, hygiene-first approach to
              maintaining smooth, healthy feet in a calm and trusted
              environment.
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllElim ? elim : elim.slice(0, 3)).map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>

            {elim.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleToggleElim}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllElim ? "View Less" : "View All Elim"}
                  <span className="text-xl">{showAllElim ? "−" : "+"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pedicures */}
        {pedicures.length > 0 && (
          <div id="pedicures">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Pedicures</h2>
              <p>
                Treat your feet to a professional, restorative pedicure designed
                to improve comfort, hygiene, and overall foot health. Your
                treatment begins with precise nail shaping, detailed cuticle
                care, and gentle, effective exfoliation to reduce dry, rough
                areas. A warm soak follows to soften the skin. The treatment is
                completed with a nourishing massage to enhance circulation,
                relieve tension, and restore comfort to tired, overworked feet.
                Delivered in a clean and calm environment, this pedicure is
                ideal for maintaining healthy, well-cared-for feet with
                consistent, preventative care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllPedicures ? pedicures : pedicures.slice(0, 3)).map(
                (treatment) => (
                  <TreatmentCard key={treatment.id} treatment={treatment} />
                )
              )}
            </div>

            {pedicures.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleTogglePedicures}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllPedicures ? "View Less" : "View All Pedicures"}
                  <span className="text-xl">
                    {showAllPedicures ? "−" : "+"}
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Gel Manicures */}
        {gelMani.length > 0 && (
          <div id="gel-manicures">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Gel Manicures</h2>
              <p>
                Available exclusively when booked alongside a gel pedicure. The
                result is a consistent, high-standard finish across both hands
                and feet, achieving clean, long-lasting results that support
                both appearance and nail health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllGelMani ? gelMani : gelMani.slice(0, 3)).map(
                (treatment) => (
                  <TreatmentCard key={treatment.id} treatment={treatment} />
                )
              )}
            </div>

            {gelMani.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleToggleGelMani}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllGelMani ? "View Less" : "View All Gel Manicures"}
                  <span className="text-xl">{showAllGelMani ? "−" : "+"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Eyebrows & Lashes */}
        {brows.length > 0 && (
          <div id="eyebrows-lashes">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Eyebrows & Lashes</h2>
              <p className="mb-2">
                Natural definition with a clean, professional finish. Tailored
                brow and lash services designed to enhance your natural shape,
                colour, and overall definition while maintaining healthy skin
                and hair.
              </p>
              {hasPatchTestTreatment && (
                <p className="text-sm text-charcoal-500">
                  Tints require a patch test 48 hours prior to your appointment
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllBrows ? brows : brows.slice(0, 3)).map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  needsPatchTest={treatment.title
                    .toLowerCase()
                    .includes("tint")}
                />
              ))}
            </div>

            {brows.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={handleToggleBrows}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllBrows ? "View Less" : "View All Eyebrows & Lashes"}
                  <span className="text-xl">{showAllBrows ? "−" : "+"}</span>
                </button>
              </div>
            )}

            {showAllBrows && hasPatchTestTreatment && (
              <div className="mt-8">
                <p className="text-sm text-charcoal-500">
                  ○ Requires patch test 48 hours prior
                </p>
              </div>
            )}
          </div>
        )}

        {/* Loyalty & Discounts — planned for later, not built yet. See
            LAUNCH-CHECKLIST.md addendum. When ready: uncomment the import
            above and render <LoyaltyRewards /> here. */}
      </div>
    </div>
  );
};

// Treatment Card Component
const TreatmentCard = ({ treatment, needsPatchTest = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(true);
  const descriptionRef = useRef(null);

  // Character-count heuristics can't reliably predict whether text will
  // visually wrap past 3 lines — that depends on the actual words, the
  // card's width, and the font, none of which a simple .length check
  // knows about. Measuring the real rendered height (while still
  // clamped) is the only way to know for certain whether "Read more" is
  // actually needed.
  useEffect(() => {
    const checkOverflow = () => {
      const el = descriptionRef.current;
      if (!el) return;

      // Measuring scrollHeight while the line-clamp is active isn't
      // reliable across browsers — clipped content can get excluded from
      // the measurement entirely rather than just visually hidden. So:
      // temporarily remove the clamp, measure the text's true natural
      // height with nothing hiding it, then put the clamp back.
      const wasClamped = el.classList.contains("line-clamp-3");
      if (wasClamped) el.classList.remove("line-clamp-3");

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 0;
      const naturalHeight = el.scrollHeight;
      const threeLinesHeight = lineHeight * 3;

      if (wasClamped) el.classList.add("line-clamp-3");

      setIsOverflowing(naturalHeight > threeLinesHeight + 1);
    };

    checkOverflow();
    document.fonts?.ready?.then(checkOverflow);
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [treatment.description]);

  return (
    <div className="bg-white border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Title & Price */}
      <div className="mb-6">
        <h3 className="text-2xl mb-2 min-h-[3.5rem]">
          {treatment.title}{" "}
          {needsPatchTest && <span className="text-charcoal-500">○</span>}
        </h3>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl">£{treatment.price}</span>
          <span className="text-sm text-charcoal-500 uppercase tracking-wide">
            {treatment.duration}
          </span>
        </div>
      </div>

      {/* Target Audience */}
      {treatment.targetAudience && (
        <p className="text-sm text-charcoal-500 mb-4 italic min-h-[2.5rem]">
          {treatment.targetAudience}
        </p>
      )}

      {/* Description */}
      <div className="mb-6">
        <div
          ref={descriptionRef}
          className={`text-charcoal-500 leading-relaxed prose prose-sm max-w-none ${
            !isExpanded && isOverflowing ? "line-clamp-3" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: treatment.description }}
        />
        {isOverflowing && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-black hover:text-charcoal-500 mt-2 transition-colors"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Benefits */}
      {treatment.benefits && treatment.benefits.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm font-semibold mb-3">Benefits</h4>
          <ul className="space-y-2">
            {treatment.benefits.map((benefit, index) => (
              <li
                key={index}
                className="text-sm text-charcoal-500 flex items-start"
              >
                <span className="mr-2">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Book Button */}
      <div className="mt-auto">
        <BookNowButton
          variant=""
          className="w-full justify-center opacity-80 hover:opacity-100 transition-opacity"
        >
          Book Now
        </BookNowButton>
      </div>
    </div>
  );
};

export default Treatments;
