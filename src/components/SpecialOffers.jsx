import BookNowButton from "./ui/BookNowButton";

const SpecialOffers = () => {
  return (
    <div className="">
      {/* Section Title */}
      <div className="text-center mb-16"></div>
      {/* Offer of the Month - Featured */}
      <div className="max-w-3xl mx-auto mb-16 border-t-2 border-b-2 py-12 text-center bg-white border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <h2 className="text-2xl mb-8">Limited Edition Treatments</h2>
        <p className="text-sm mx-auto mb-8">
          Discover our exclusive limited edition treatments, thoughtfully
          created to enhance your results and elevate your relaxation. Available
          for a limited time only, each treatment is inspired by the season and
          offered in limited availability.
        </p>
        <BookNowButton>Book now</BookNowButton>
      </div>
      {/* Other Specials - Grid
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
  
  <div className="text-center">
    <h3 className="text-xl md:text-2xl mb-4 font-light">
      Care Worker Appreciation
    </h3>
    <p className="text-charcoal-500 mb-2 leading-relaxed">
      10% off your first treatment with NHS badge or care worker ID.
    </p>
    <p className="text-sm text-charcoal-500 italic">
      Your feet work hard for others.
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-xl md:text-2xl mb-4 font-light">
      Birthday Month Treat
    </h3>
    <p className="text-charcoal-500 mb-2 leading-relaxed">
      Choose a complimentary add-on during your birthday month.
    </p>
    <p className="text-sm text-charcoal-500 italic">
      Mention when booking to claim.
    </p>
  </div>

</div>

<div className="text-center mt-12 pt-8 border-t border-neutral-200 max-w-4xl mx-auto">
  <p className="text-xs uppercase tracking-widest text-charcoal-500">
    Offers cannot be combined • One discount per treatment
  </p>
</div>
*/}
    </div>
  );
};

export default SpecialOffers;
