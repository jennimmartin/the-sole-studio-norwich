const TreatmentSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="align-element px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Specialist Treatments
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Thai Foot Massage */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-bold mb-4">Thai Foot Massage</h3>
            <p className="text-sm md:text-base">
              A deeply restorative treatment designed to relieve tension,
              improve circulation, and support recovery in tired, overworked
              feet. Ideal for active individuals, standing professions, or
              anyone experiencing foot fatigue and stiffness.
            </p>
          </div>

          {/* Toenail Reconstruction */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-bold mb-4">Toenail Reconstruction</h3>
            <p className="text-sm md:text-base">
              A specialist cosmetic solution for damaged, misshapen, or
              unsightly toenails. Using professional techniques and materials,
              toenail reconstruction restores a natural appearance while
              protecting the nail underneath — perfect for those wanting
              confidence without medical treatment.
            </p>
          </div>

          {/* Problem-Based Pedicures */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-bold mb-4">Problem-Based Pedicures</h3>
            <p className="text-sm md:text-base">
              Not all pedicures are the same. These treatments focus on specific
              foot concerns such as hard skin, discomfort, nail issues, and
              general foot health. Each session is adapted to your individual
              needs — not a one-size-fits-all service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TreatmentSection;
