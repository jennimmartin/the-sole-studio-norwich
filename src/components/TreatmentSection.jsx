import BookNowButton from "./ui/BookNowButton";

const TreatmentSection = () => {
  return (
    <>
      <h2 className="text-3xl text-black md:text-4xl font-semibold mb-12 text-center">
        Specialist Treatments
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Thai Foot Massage */}
        <div className="border border-neutral-200 p-8 flex flex-col">
          <h3 className="text-xl mb-4 min-h-[3.5rem]">Thai Foot Massage</h3>
          <p className="text-sm md:text-base mb-6 flex-grow">
            A deeply restorative treatment designed to relieve tension, improve
            circulation, and support recovery in tired, overworked feet. Ideal
            for active individuals, people who work on their feet or anyone with
            sore tired feet.
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
            A specialist, cosmetic solution for damaged, misshapen, or unsightly
            toenails. Using professional techniques and products, this restores
            a natural appearance whilst protecting the toenail underneath.
            Perfect for those wanting confidence without medical treatment.
          </p>
          <div className="mt-auto">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>

        {/* Elim Pedicures */}
        <div className="border border-neutral-200 p-8 flex flex-col">
          <h3 className="text-xl mb-4 min-h-[3.5rem]">Elim Pedicures</h3>
          <p className="text-sm md:text-base mb-6 flex-grow">
            Not all pedicures are the same. An Elim pedicure is a medical-grade
            foot treatment that improves both the health and appearance of the
            feet. Using advanced skincare ingredients, it removes hard skin,
            calluses, and dryness through a chemical peel rather than
            traditional filing. It is ideal for treating cracked heels and
            stubborn callus build-up.
          </p>
          <div className="mt-auto">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentSection;
