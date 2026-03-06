import { useEffect, useState } from "react";
import { getTreatments } from "../lib/contentful";
import BookNowButton from "../components/ui/BookNowButton";

const Services = () => {
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
  const coreTreatments = treatments.filter((t) => t.category === "Core");
  const advancedTreatments = treatments.filter(
    (t) => t.category === "Advanced"
  );
  const addons = treatments.filter((t) => t.category === "Add-on");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="align-element text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Treatments</h1>
          <p className="text-lg text-charcoal-500 max-w-3xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>
      </section>

      {/* Core Treatments */}
      {coreTreatments.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="align-element">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Core Treatments</h2>
              <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
                Professional foot care for everyone
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advanced Treatments */}
      {advancedTreatments.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="align-element">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">
                Specialist Treatments
              </h2>
              <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
                Advanced care for specific concerns
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add-ons */}
      {addons.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="align-element">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Enhancements</h2>
              <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
                Add to any treatment
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {addons.map((treatment) => (
                  <TreatmentCard
                    key={treatment.id}
                    treatment={treatment}
                    isAddon
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packages Section - Placeholder for future */}
      <section className="py-16 md:py-24 ">
        <div className="align-element text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Treatment Packages</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Coming soon: loyalty programmes and package options
          </p>
          <p className="text-neutral-400">
            In the meantime, book your appointment and we'll discuss what works
            best for you.
          </p>
        </div>
      </section>
    </div>
  );
};

// Treatment Card Component
const TreatmentCard = ({ treatment, isAddon = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-300">
      {/* Title & Price */}
      <div className="mb-6">
        <h3 className="text-2xl mb-2">{treatment.title}</h3>
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
      {!isAddon && (
        <BookNowButton variant="secondary" className="w-full justify-center" />
      )}
    </div>
  );
};

export default Services;
