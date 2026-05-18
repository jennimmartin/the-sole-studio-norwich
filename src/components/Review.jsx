import ViewReviewButton from "./ui/ViewReviewButton";

const Review = () => {
  return (
    <>
      <div className="align-element">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">
          What clients say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* review one */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Caroline</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "Great friendly service as always. Such a professional, bubbly
              person Suzanne is." - via Ovatu
            </p>
            <div className="mt-auto">
              <ViewReviewButton
                variant="primary"
                size="large"
                href="https://suzannes-sanctuary.book.app/reviews"
              />
            </div>
          </div>

          {/* review two */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Naiara</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "First time having the Elim pedicure with Suzanne and loved it!!
              My feet are lovely and soft, ready for summer . From start to
              finish 5 star treatment. Will be back!" - via Ovatu
            </p>
            <div className="mt-auto">
              <ViewReviewButton
                variant="primary"
                size="large"
                href="https://suzannes-sanctuary.book.app/reviews"
              />
            </div>
          </div>

          {/* review three */}
          <div className="border border-neutral-200 p-8 flex flex-col">
            <h3 className="text-xl mb-4 min-h-[2rem]">Mel</h3>
            <p className="text-sm md:text-base italic mb-6 flex-grow">
              "Really good treatment and good information given for after care,
              Suzanne was polite and kind, she took her time explaining things
              and I would recommend to friends" - via Ovatu
            </p>
            <div className="mt-auto">
              <ViewReviewButton
                variant="primary"
                size="large"
                href="https://suzannes-sanctuary.book.app/reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
