// src/components/AboutSection.jsx
import { Section } from "../layout";

const AboutSection = () => {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl mb-6 text-center md:text-left">
        About The Sole Studio Norwich
      </h2>
      <div className="space-y-4 text-base md:text-lg">
        <p>
          The Sole Studio Norwich was created to bridge the gap between beauty
          and podiatry.
        </p>
        <p>
          Specialising in working with people who use their feet hard - runners,
          gym-goers, people who work on their feet all day, and anyone dealing
          with ongoing foot concerns which don't require podiatry. Our approach
          combines expert techniques, attention to detail, and genuine care.
          Your feet will feel better, function better, and look better.
        </p>
        <p>
          If a condition falls outside of our scope, you will always be advised
          honestly and be guided to the appropriate care.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
