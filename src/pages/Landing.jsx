import { Link } from "react-router-dom";

import IntroSection from "../components/IntroSection";
import TreatmentSection from "../components/TreatmentSection";
import WhyChooseSection from "../components/WhyChooseSection";

import Review from "../components/Review";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-10 sm:py-14 md:py-20 px-4 text-center bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-3 sm:mb-4 md:mb-5 max-w-4xl mx-auto leading-tight">
          Expert foot care for every step
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-2 sm:mb-3 md:mb-4 max-w-2xl mx-auto leading-relaxed">
          Providing specialist foot treatments for people who rely on their feet
          - from active lifestyles and demanding jobs to ongoing foot concerns.
        </p>

        <p className="text-sm sm:text-base text-neutral-500 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto">
          Bridging the gap between beauty and podiatry.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <Link
            to="/contact"
            className="bg-black text-white px-8 py-3 font-medium hover:bg-neutral-800 transition-colors duration-300 text-center w-full sm:w-auto"
          >
            Book an Appointment
          </Link>

          <Link
            to="/treatments"
            className="bg-white text-black px-8 py-3 border-2 border-black font-medium hover:bg-neutral-100 transition-colors duration-300 text-center w-full sm:w-auto"
          >
            View Treatments
          </Link>
        </div>
      </section>

      {/* Rest of homepage content */}
      <IntroSection />
      <TreatmentSection />
      <WhyChooseSection />
      <Review />
    </div>
  );
};

export default Landing;
