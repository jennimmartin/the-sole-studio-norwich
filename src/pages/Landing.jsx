import { Link } from "react-router-dom";

import IntroSection from "../components/IntroSection";
import TreatmentSection from "../components/TreatmentSection";
import WhyChooseSection from "../components/WhyChooseSection";

import Review from "../components/Review";
import BookNowButton from "../components/ui/BookNowButton";
import ViewTreatmentsButton from "../components/ui/ViewTreatmentsButton";

import BookingWidget from "../components/BookingWidget";

import SEO from "../components/SEO";

const Landing = () => {
  return (
    <div>
      <SEO
        title="Expert Foot Care in Norwich"
        description="Specialist foot treatments in Norwich for active lifestyles, demanding jobs, and ongoing foot concerns. Bridging the gap between beauty and podiatry."
        path="/"
      />
      {/* Hero Section */}
      <section className="py-10 sm:py-14 md:py-20 px-4 text-center bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4 md:mb-5 max-w-4xl mx-auto leading-tight">
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
          {/*
            TEMPORARY — for Suzanne to trial the new internal booking page.
            Uses a plain <a> tag (not React Router's <Link>) deliberately —
            the BookApp widget script appears to depend on the browser's
            window 'load' event to finish its own internal setup, which
            only fires on a genuine full page load. React Router's <Link>
            navigates without reloading the page, so that event never
            fires again after the very first page load — this is why the
            widget only appeared after a manual refresh. A plain <a> tag
            forces a real page load on click, same as a refresh does.
            To revert: delete this <a> and put back <BookNowButton />.
          */}
          <a
            href="/book"
            className="transition-all duration-300 cursor-pointer inline-block text-center bg-black text-white hover:text-neutral-400 px-6 py-3"
          >
            Book an Appointment
          </a>
          <ViewTreatmentsButton />
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
