import BookNowButton from "../components/ui/BookNowButton";

const About = () => {
  return (
    <section className-="align-element py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-center mb-4 py-12">
          About The Sole Studio Norwich
        </h1>

        <h3 className="text-2xl md:text-3xl mb-6 text-center md:text-left">
          Specialist foot care with purpose
        </h3>
        <div className="space-y-4 text-base md:text-lg pb-8">
          <p>
            The Sole Studio Norwich was created in 2026 to offer something
            missing. Expert, focused care for people who genuinely rely on their
            feet - without the need for clinical podiatry.
          </p>
          <p>
            Many people fall into a grey area when it comes to foot health.
            Their feet are tired, uncomfortable, damaged, or causing
            frustration. A traditional beauty treatment doesn’t address their
            problems fully and podiatry feels unnecessary.
          </p>
          <p>The Sole Studio Norwich exists in the space between.</p>
          <p className="pb-6">
            I specialise in working with active individuals, standing
            professions, and clients experiencing ongoing foot concerns who want
            and need more than a standard pedicure, but don’t require medical
            intervention. Every treatment is designed to support comfort,
            function and confidence, whilst maintaining the highest professional
            and hygiene standards.
          </p>
          <h3 className="text-2xl md:text-3xl mb-6 text-center md:text-left">
            A specialist approach - not one-size-fits-all
          </h3>
          <p>
            The Sole Studio Norwich focuses on feet. This allows every treatment
            to be tailored, unrushed, and genuinely effective.
          </p>
          <p>
            Services such as Thai foot massages, toenail reconstruction, and
            bespoke problem based pedicures are chosen and delivered with
            purpose. Whether this is supporting recovery, restoring the
            appearance of damaged toe nails, relieving tension, or improving the
            overall foot comfort.
          </p>
          <p className="pb-6">
            There is no judgement, no pressure. Just honest professional care.
          </p>
          <h3 className="text-2xl md:text-3xl mb-6 text-center md:text-left">
            Who is The Sole Studio Norwich for
          </h3>
          <p>People with active lifestyles</p>
          <p>Clients who spend long hours on their feet</p>
          <p>Those experiencing recurring foot concerns</p>
          <p>Anyone who wants expert foot care without medical treatment.</p>
          <p>
            If a condition falls outside of my scope, I’ll always advise you
            honestly and guide you to the appropriate care.
          </p>
          <p className="font-semibold">A calm, private space</p>
          <p>
            The Sole Studio Norwich is a quiet, appointment-only environment
            designed to make clients feel at ease from the moment they arrive.
            High hygiene standards, professional tools, and careful attention to
            detail are central to every visit.
          </p>
          <p className="pb-6">
            My aim is simple, for you to leave feeling more comfortable, more
            confident, and reassured that your feet are in expert hands.
          </p>
          <h3 className="text-2xl md:text-3xl mb-6 text-center md:text-left">
            Meet Suzanne - Founder and therapist
          </h3>
          <p>
            Hi I’m Suzanne, the owner and therapist behind The Sole Studio
            Norwich. I created this space with the intention to offer
            professional high quality foot care in a private, non judgemental
            environment.
          </p>
          <p>
            After working in the beauty industry since 2018 and noticing that
            many people require more from their pedicures I decided to focus my
            attention on feet. I believe that foot care is an essential part of
            overall wellbeing. My approach is thorough, respectful and always
            tailored to your individual needs. I will ensure that you feel
            relaxed, confident and well cared for from the moment you arrive.
          </p>
          <p>
            I specialise in providing detailed, hygienic treatments that focus
            on both comfort and results. Whether you are seeking routine
            maintenance or more targeted care, every service is delivered with
            discretion and the highest standards of cleanliness.
          </p>
          <p className="pb-6">
            I look forward to welcoming you and providing a professional
            experience where your comfort, privacy and care always comes first.
          </p>
          <BookNowButton variant="primary" size="large" />
        </div>
      </div>
    </section>
  );
};
export default About;
