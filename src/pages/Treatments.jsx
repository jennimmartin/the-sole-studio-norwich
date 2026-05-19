import { useEffect, useState } from "react";
import { getTreatments } from "../lib/contentful";
import BookNowButton from "../components/ui/BookNowButton";
import SpecialOffers from "../components/SpecialOffers";
import LoyaltyRewards from "../components/LoyaltyRewards";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toggle state for each section
  const [showAllFoot, setShowAllFoot] = useState(false);
  const [showAllSpecialist, setShowAllSpecialist] = useState(false);
  const [showAllBeauty, setShowAllBeauty] = useState(false);

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
      <div className="space-y-12">
        {/* Hero Section - CENTERED */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Treatments</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>

        {/* Foot Treatments - LEFT-ALIGNED */}
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

            {/* Show first 3 cards, or all if expanded */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllFoot ? footTreatments : footTreatments.slice(0, 3)).map(
                (treatment) => (
                  <TreatmentCard key={treatment.id} treatment={treatment} />
                )
              )}
            </div>

            {/* Toggle button - only show if more than 3 treatments */}
            {footTreatments.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAllFoot(!showAllFoot)}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllFoot ? "View Less" : "View All Foot Treatments"}
                  <span className="text-xl">{showAllFoot ? "−" : "+"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Specialist Treatments - LEFT-ALIGNED */}
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

            {/* Show first 3 cards, or all if expanded */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllSpecialist
                ? specialistTreatments
                : specialistTreatments.slice(0, 3)
              ).map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>

            {/* Toggle button - only show if more than 3 treatments */}
            {specialistTreatments.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAllSpecialist(!showAllSpecialist)}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllSpecialist
                    ? "View Less"
                    : "View All Specialist Treatments"}
                  <span className="text-xl">
                    {showAllSpecialist ? "−" : "+"}
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Beauty Services - LEFT-ALIGNED */}
        {beautyServices.length > 0 && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Beauty Services</h2>
              <p className="text-base md:text-lg mb-2">
                Gel manicures, brow tinting, and lash treatments to complement
                your foot care appointments.
              </p>

              {/* Patch test note */}
              {hasPatchTestTreatment && (
                <p className="text-sm text-charcoal-500">
                  Tints require a patch test 48 hours prior to your appointment
                </p>
              )}
            </div>

            {/* Show first 3 cards, or all if expanded */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(showAllBeauty
                ? beautyServices
                : beautyServices.slice(0, 3)
              ).map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  needsPatchTest={treatment.title
                    .toLowerCase()
                    .includes("tint")}
                />
              ))}
            </div>

            {/* Toggle button - only show if more than 3 treatments */}
            {beautyServices.length > 3 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAllBeauty(!showAllBeauty)}
                  className="text-base font-medium hover:text-charcoal-500 transition-colors flex items-center gap-2"
                >
                  {showAllBeauty ? "View Less" : "View All Beauty Services"}
                  <span className="text-xl">{showAllBeauty ? "−" : "+"}</span>
                </button>
              </div>
            )}

            {/* Patch test key - only show when all cards visible */}
            {showAllBeauty && hasPatchTestTreatment && (
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

// Treatment Card Component - UNCHANGED
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
