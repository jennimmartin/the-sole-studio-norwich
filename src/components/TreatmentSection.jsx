import BookNowButton from "../components/ui/BookNowButton";

const TreatmentSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="align-element px-4">
        <h2 className="text-3xl text-black md:text-4xl font-semibold mb-12 text-center">
          Specialist Treatments
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Thai Foot Massage */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[3.5rem]">Thai Foot Massage</h3>
            <p className="text-sm md:text-base mb-6 flex-grow">
              A deeply restorative treatment designed to relieve tension,
              improve circulation, and support recovery in tired, overworked
              feet. Ideal for active individuals, people who work on their feet
              or anyone with sore tired feet.
            </p>
            <div className="mt-auto">
              <BookNowButton variant="primary" />
            </div>
          </div>

          {/* Toenail Reconstruction */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[3.5rem]">
              Toenail Reconstruction
            </h3>
            <p className="text-sm md:text-base mb-6 flex-grow">
              A specialist, cosmetic solution for damaged, misshapen, or
              unsightly toenails. Using professional techniques and products,
              this restores a natural appearance whilst protecting the toenail
              underneath. Perfect for those wanting confidence without medical
              treatment.
            </p>
            <div className="mt-auto">
              <BookNowButton variant="primary" />
            </div>
          </div>

          {/* Problem-Based Pedicures */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[3.5rem]">
              Bespoke Problem-Based Pedicures
            </h3>
            <p className="text-sm md:text-base mb-6 flex-grow">
              Not all pedicures are the same. These treatments focus on specific
              foot concerns such as hard skin and calluses, discomfort, nail
              issues, and general foot health. Each session is adapted to your
              individual needs and concerns - not a one size-fits-all service.
            </p>
            <div className="mt-auto">
              <BookNowButton variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
