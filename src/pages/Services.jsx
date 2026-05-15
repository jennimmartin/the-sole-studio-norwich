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
  const footTreatments = treatments.filter(
    (t) => t.category === "Foot Treatments"
  );
  const specialistTreatments = treatments.filter(
    (t) => t.category === "Specialist Treatments"
  );
  const beautyServices = treatments.filter(
    (t) => t.category === "Beauty Services"
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Treatments</h1>
          <p className="text-lg text-charcoal-500 max-w-3xl mx-auto">
            Specialist foot care tailored to your needs. Professional, unrushed,
            completely private.
          </p>
        </div>
      </>

      {/* Foot Treatments */}
      {footTreatments.length > 0 && (
        <>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Foot Treatments</h2>
            <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
              Expert foot care including Thai massage, ELIM treatments, and
              pedicures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {footTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </>
      )}

      {/* Specialist Treatments */}
      {specialistTreatments.length > 0 && (
        <>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Specialist Treatments</h2>
            <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
              Advanced toenail reconstruction for damaged or missing nails
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {specialistTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </>
      )}

      {/* Beauty Services */}
      {beautyServices.length > 0 && (
        <>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Beauty Services</h2>
            <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
              Gel manicures, brow tinting, and lash treatments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {beautyServices.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </>
      )}

      {/* Special Offers & Loyalty */}
      <>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Special Offers</h2>
          <p className="text-base text-charcoal-500 max-w-2xl mx-auto">
            Rewards for loyal clients and those who care for others
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Care Worker Appreciation */}
          <div className="bg-white border border-neutral-200 p-8">
            <h3 className="text-2xl mb-4">Care Worker Appreciation</h3>
            <p className="text-charcoal-500 mb-6 leading-relaxed">
              If you work in care, healthcare, or a standing profession, show
              your NHS badge or care worker ID to receive 10% off your first
              treatment.
            </p>
            <p className="text-sm text-charcoal-500 italic">
              Your feet work hard for others. Let me help them recover.
            </p>
          </div>

          {/* Birthday Treatment */}
          <div className="bg-white border border-neutral-200 p-8">
            <h3 className="text-2xl mb-4">Birthday Month Treat</h3>
            <p className="text-charcoal-500 mb-6 leading-relaxed">
              Book any treatment during your birthday month and choose a free
              add-on: gel polish application or extended massage.
            </p>
            <p className="text-sm text-charcoal-500 italic">
              Mention your birthday when booking to claim your gift.
            </p>
          </div>

          {/* Loyalty Reward */}
          <div className="bg-white border border-neutral-200 p-8">
            <h3 className="text-2xl mb-4">Loyalty Reward</h3>
            <p className="text-charcoal-500 mb-6 leading-relaxed">
              Book four treatments and receive £10 off your fifth appointment.
              Applies to all treatments except add-ons.
            </p>
            <p className="text-sm text-charcoal-500 italic">
              Automatically tracked — no cards to carry or lose.
            </p>
          </div>

          {/* Referral Programme */}
          <div className="bg-white border border-neutral-200 p-8">
            <h3 className="text-2xl mb-4">Refer a Friend</h3>
            <p className="text-charcoal-500 mb-6 leading-relaxed">
              Recommend The Sole Studio to someone new and you'll both receive
              £5 off your next treatment when they book their first appointment.
            </p>
            <p className="text-sm text-charcoal-500 italic">
              Just ask them to mention your name when booking.
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-charcoal-500 max-w-3xl mx-auto">
            Offers cannot be combined. One discount per treatment. All offers
            subject to availability and may be updated at any time.
          </p>
        </div>
      </>
    </div>
  );
};

// Treatment Card Component
const TreatmentCard = ({ treatment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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
      <div className="mt-auto">
        <BookNowButton variant="secondary" className="w-full justify-center">
          Book Now
        </BookNowButton>
      </div>
    </div>
  );
};

export default Services;
