const LoyaltyRewards = () => {
  return (
    <div className="py-12">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl tracking-wide">
          Loyalty & Rewards
        </h2>
      </div>

      {/* Rewards Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Loyalty Reward */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl mb-4 font-light">
            Loyalty Reward
          </h3>
          <p className="text-charcoal-500 mb-2 leading-relaxed">
            Book four treatments, receive £10 off your fifth appointment.
          </p>
          <p className="text-sm text-charcoal-500 italic">
            Automatically tracked — no cards to carry.
          </p>
        </div>

        {/* Refer a Friend */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl mb-4 font-light">
            Refer a Friend
          </h3>
          <p className="text-charcoal-500 mb-2 leading-relaxed">
            You both receive £5 off when your referral books their first
            appointment.
          </p>
          <p className="text-sm text-charcoal-500 italic">
            Ask them to mention your name when booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;
