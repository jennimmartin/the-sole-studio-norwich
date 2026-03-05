import ViewTreatmentsButton from "./ui/ViewTreatmentsButton";

const Review = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="align-element px-4">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">
          What clients say - hand selected reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* review one */}
          <div className="bg-white p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Jake</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "As someone who's constantly on my feet, this is the first place
              where I felt my concerns were properly understood."
            </p>
            <div className="mt-auto">
              <ViewTreatmentsButton variant="primary" size="large" />
            </div>
          </div>

          {/* review two */}
          <div className="bg-white p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Jill</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "Professional, calming, and incredibly thorough — my feet have
              never felt better."
            </p>
            <div className="mt-auto">
              <ViewTreatmentsButton variant="primary" size="large" />
            </div>
          </div>

          {/* review three */}
          <div className="bg-white p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Harry</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "I was self-conscious about my toenails for years. The results
              were amazing and so natural."
            </p>
            <div className="mt-auto">
              <ViewTreatmentsButton variant="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
