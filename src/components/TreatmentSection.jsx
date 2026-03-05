const TreatmentSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="align-element px-4">
        <h2 className="text-3xl text-black md:text-4xl font-semibold mb-12 text-center">
          Specialist Treatments
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Thai Foot Massage */}
          <div className="bg-white p-8">
            <h3 className="text-xl mb-4">Thai Foot Massage</h3>
            <p className="text-sm md:text-base">
              A deeply restorative treatment designed to relieve tension,
              improve circulation, and support recovery in tired, overworked
              feet. Ideal for active individuals, people who work on their feet
              or anyone with sore tired feet.
            </p>
            <button className="px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-all duration-300">
              Book Now
            </button>
          </div>

          {/* Toenail Reconstruction */}
          <div className="bg-white p-8">
            <h3 className="text-xl mb-4">Toenail Reconstruction</h3>
            <p className="text-sm md:text-base">
              A specialist, cosmetic solution for damaged, misshapen, or
              unsightly toenails. Using professional techniques and products,
              this restores a natural appearance whilst protecting the toenail
              underneath. Perfect for those wanting confidence without medical
              treatment.
            </p>
            <button className="px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-all duration-300">
              Book Now
            </button>
          </div>

          {/* Problem-Based Pedicures */}
          <div className="bg-white p-8">
            <h3 className="text-xl mb-4">Bespoke Problem-Based Pedicures</h3>
            <p className="text-sm md:text-base">
              Not all pedicures are the same. These treatments focus on specific
              foot concerns such as hard skin and calluses, discomfort, nail
              issues, and general foot health. Each session is adapted to your
              individual needs and concerns - not a one size-fits-all service.
            </p>
            <button className="px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TreatmentSection;
