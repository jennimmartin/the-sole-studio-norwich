// src/components/WhyChooseSection.jsx
import { Section } from "../layout";

export const WhyChooseSection = () => {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8 text-center">
        Why choose The Sole Studio Norwich
      </h2>
      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Specialist foot-focused treatments</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>
            Ideal for active lifestyles and those who work on their feet
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>High hygiene and professional standards</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Calm, private environment</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Personal, unrushed, judgement-free care</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Free off road parking</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Evening and weekend appointments</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <span>Online booking</span>
        </li>
      </ul>
      <p className="text-lg italic text-center">
        If you've ever felt uncomfortable, embarrassed, or rushed during foot
        treatment, you'll notice the difference immediately.
      </p>
    </Section>
  );
};

export default WhyChooseSection;
