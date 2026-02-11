export const WhyChooseSection = () => {
  return (
    <section className="align-element py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Why choose The Sole Studio Norwich?
        </h2>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <span>Specialist foot-focused treatments only</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <span>Ideal for active lifestyles & standing professions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <span>High hygiene and professional standards</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <span>Calm, private studio environment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <span>Personal, unrushed, judgement-free care</span>
          </li>
        </ul>

        <p className="text-lg italic text-center">
          If you've ever felt uncomfortable, embarrassed, or rushed during foot
          treatments, you'll notice the difference immediately.
        </p>
      </div>
    </section>
  );
};
export default WhyChooseSection;
