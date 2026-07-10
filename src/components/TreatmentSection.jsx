import BookNowButton from "./ui/BookNowButton";

const TreatmentSection = () => {
  return (
    <div className="align-element">
      <h2 className="text-3xl text-black md:text-4xl font-semibold mb-12">
        Specialist Treatments
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Thai Foot Massage */}
        <div className="border border-neutral-200 p-8 flex flex-col">
          <h3 className="text-xl mb-4 min-h-[3.5rem]">Thai Foot Massage</h3>
          <p className="text-sm md:text-base mb-6 flex-grow">
            Restorative relief for tired, overworked feet. A therapeutic
            treatment using traditional Thai techniques to improve circulation,
            ease tension, and support foot health. Ideal for foot fatigue,
            tightness, and preventative care. Leave feeling lighter, relaxed,
            and more mobile in a calm, professional setting
          </p>
          <div className="mt-auto">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>

        {/* Toenail Reconstruction */}
        <div className="border border-neutral-200 p-8 flex flex-col">
          <h3 className="text-xl mb-4 min-h-[3.5rem]">
            Toenail Reconstruction
          </h3>
          <p className="text-sm md:text-base mb-6 flex-grow">
            Medical-grade treatment gently rebuilds and supports the nail while
            maintaining a natural, breathable finish. Resulting in a
            realistic-looking nail that enhances appearance whilst helping to
            protect the nail bed as it grows. This pain-free treatment offers a
            safe, effective way to improve the look of damaged or compromised
            nails—without harsh or invasive methods.
          </p>
          <div className="mt-auto">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>

        {/* Elim Pedicures */}
        <div className="border border-neutral-200 p-8 flex flex-col">
          <h3 className="text-xl mb-4 min-h-[3.5rem]">Elim Pedicures</h3>
          <p className="text-sm md:text-base mb-6 flex-grow">
            Results-driven, medical-grade pedicure to restore comfort, improve
            skin condition, and support long-term foot health. This non-invasive
            treatment goes beyond a traditional pedicure, using specialist Elim
            products to gently remove hard skin and calluses—without harsh
            filing or blades. The focus is on safe, controlled exfoliation that
            protects the skin while delivering visible, lasting results.
          </p>
          <div className="mt-auto">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSection;
