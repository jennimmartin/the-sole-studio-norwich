import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import TreatmentSection from "../components/TreatmentSection";
import WhyChooseSection from "../components/WhyChooseSection";
import AboutSection from "../components/AboutSection";
import Review from "../components/Review";

const Landing = () => {
  return (
    <>
      <div className="h-[60vh] flex flex-col justify-center">
        <Hero />
      </div>
      <IntroSection />
      <TreatmentSection />
      <WhyChooseSection />
      <AboutSection />
      <Review />
    </>
  );
};
export default Landing;
