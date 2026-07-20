import BookNowButton from "./ui/BookNowButton";

const SpecialOffers = () => {
  return (
    <div className="max-w-2xl mx-auto text-center border border-neutral-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-3xl md:text-4xl mb-6">Limited Edition Treatments</h2>
      <p className="text-sm md:text-base leading-relaxed text-charcoal-500 mb-6">
        Discover our exclusive limited edition treatments, thoughtfully created
        to enhance your results and elevate your relaxation. Available for a
        limited time only, each treatment is inspired by the season and offered
        in limited availability.
      </p>
      <BookNowButton>Book Offer</BookNowButton>
    </div>
  );
};

export default SpecialOffers;
