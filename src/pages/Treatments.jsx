import { useEffect, useState } from "react";
import { getTreatments } from "../lib/contentful";
import BookNowButton from "../components/ui/BookNowButton";
import SpecialOffers from "../components/SpecialOffers";
import LoyaltyRewards from "../components/LoyaltyRewards";

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
      <div className="space-y-12">
        {/* Hero Section - CENTERED */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Treatments</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>

        {/* Thai Foot Massage */}
        {thaiFootMassage.length > 0 && (
          <div id="thai-foot-massage">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Thai Foot Massage</h2>
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
              <h2 className="text-3xl md:text-4xl mb-4">ELIM</h2>
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

        {/* Special Offers - CENTERED */}
        <SpecialOffers />

        {/* Loyalty & Discounts - CENTERED */}
        <LoyaltyRewards />
      </div>
    </div>
  );
};

// Treatment Card Component
const TreatmentCard = ({ treatment, needsPatchTest = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Title & Price */}
      <div className="mb-6">
        <h3 className="text-2xl mb-2">
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
        <p className="text-sm text-charcoal-500 mb-4 italic">
          {treatment.targetAudience}
        </p>
      )}

      {/* Description */}
      <div className="mb-6">
        <div
          className={`text-charcoal-500 leading-relaxed ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: treatment.description }}
        />
        {treatment.description && treatment.description.length > 200 && (
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
          className="w-full justify-center text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity"
        >
          Book Now
        </BookNowButton>
      </div>
    </div>
  );
};

export default Treatments;
