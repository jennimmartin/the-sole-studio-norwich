import BookNowButton from "../components/ui/BookNowButton";
import ViewTreatmentsButton from "./ui/ViewTreatmentsButton";

const Hero = () => {
  return (
    <div className="align-element pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-4xl md:text-5xl text-center max-w-3xl">
          Specialist Foot Care For Active, Hard-Working Feet
        </h1>
        <h2 className="text-charcoal-500 text-1xl md:text-2xl text-center max-w-2xl">
          Targeted treatments for people who rely on their feet — combining
          professional standards with a calm, private studio experience.
        </h2>
        <p className="text-sm md:text-base text-center max-w-xl">
          Between beauty and clinical care. Focused on comfort, recovery, and
          confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
          <BookNowButton variant="primary" size="large" />
          <ViewTreatmentsButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
