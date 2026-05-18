import { useEffect, useState } from "react";
import { getTreatments } from "../lib/contentful";
import BookNowButton from "../components/ui/BookNowButton";
import SpecialOffers from "../components/SpecialOffers";
import LoyaltyRewards from "../components/LoyaltyRewards";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Group treatments by category
  const footTreatments = treatments.filter(
    (t) => t.category === "Foot Treatments"
  );
  const specialistTreatments = treatments.filter(
    (t) => t.category === "Specialist Treatments"
  );
  const beautyServices = treatments.filter(
    (t) => t.category === "Beauty Services"
  );

  // Check if any beauty services need patch test
  const hasPatchTestTreatment = beautyServices.some((t) =>
    t.title.toLowerCase().includes("tint")
  );

  return (
    <div className="align-element">
      {/* Match About page spacing with space-y-12 */}
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Treatments</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>
        {/* Foot Treatments */}
        {footTreatments.length > 0 && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Foot Treatments</h2>
              <p className="text-base md:text-lg">
                Professional foot care designed to restore comfort and support
                long-term foot health. From therapeutic Thai massage to advanced
                Elim pedicures, each treatment addresses the specific needs of
                tired, overworked, or uncomfortable feet.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {footTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        )}
        {/* Specialist Treatments */}
        {specialistTreatments.length > 0 && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">
                Specialist Treatments
              </h2>
              <p className="text-base md:text-lg">
                Medical-grade toenail reconstruction for damaged, missing, or
                compromised nails. A safe, non-invasive solution that restores
                appearance while protecting the nail bed as it grows.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {specialistTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        )}
        {/* Beauty Services */}
        {beautyServices.length > 0 && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Beauty Services</h2>
              <p className="text-base md:text-lg  max-w-2xl">
                Medical-grade toenail reconstruction for damaged, missing, or
                compromised nails. A safe, non-invasive solution that restores
                appearance while protecting the nail bed as it grows.
              </p>

              {/* Patch test note if applicable */}
              {hasPatchTestTreatment && (
                <p className="text-sm text-charcoal-500 mt-4">
                  Tints require a patch test 48 hours prior to your appointment
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {beautyServices.map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  needsPatchTest={treatment.title
                    .toLowerCase()
                    .includes("tint")}
                />
              ))}
            </div>

            {/* Patch test key below cards */}
            {hasPatchTestTreatment && (
              <div className="mt-8">
                <p className="text-sm text-charcoal-500">
                  ○ Requires patch test 48 hours prior
                </p>
              </div>
            )}
          </div>
        )}

        <SpecialOffers />

        {/*
       
        <LoyaltyRewards />
        */}
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

      {/* Book Button - Less prominent on desktop */}
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
