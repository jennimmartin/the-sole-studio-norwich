import PageTitle from "../components/PageTitle";

import BookNowButton from "../components/ui/BookNowButton";

const About = () => {
  return (
    <div className="align-element">
      <PageTitle title="About The Sole Studio Norwich" />

      <div className="space-y-12">
        {/* Section 1: Specialist foot care with purpose */}
        <div className="space-y-4 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl mb-6">
            Specialist foot care with purpose
          </h2>
          <p>
            The Sole Studio Norwich was created in 2026 to offer something
            missing. Expert, focused care for people who genuinely rely on their
            feet - without the need for clinical podiatry.
          </p>
          <p>
            Many people fall into a grey area when it comes to foot health.
            Their feet are tired, uncomfortable, damaged, or causing
            frustration. A traditional beauty treatment doesn't address their
            problems fully and podiatry feels unnecessary.
          </p>
          <p>The Sole Studio Norwich exists in the space between.</p>
          <p className="font-extrabold">
            A specialist approach - not one-size-fits-all
          </p>
          <p>
            The Sole Studio Norwich focuses on feet. This allows every treatment
            to be tailored, unrushed, and genuinely effective.
          </p>
          <p>
            Services such as Thai foot massages, toenail reconstruction, and
            Elim pedicures are delivered with purpose. Whether this is
            supporting recovery, restoring the appearance of damaged toe nails,
            relieving tension, or improving the overall foot comfort.
          </p>
          <p>
            There is no judgement, no pressure. Just honest professional care.
          </p>
        </div>

        {/* Section 3: Who is this for */}
        <div className="space-y-4 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl mb-6">
            Who is The Sole Studio Norwich for?
          </h2>
          <p>People with active lifestyles</p>
          <p>Clients who spend long hours on their feet</p>
          <p>Those experiencing recurring foot concerns</p>
          <p>Anyone who wants expert foot care without medical treatment.</p>
          <p>
            If a condition falls outside of our scope, you will be advised
            honestly and guided to the appropriate care.
          </p>
          <p className="font-extrabold">A calm, private space</p>
          <p>
            The Sole Studio Norwich is a quiet, appointment-only environment
            designed to make clients feel at ease from the moment they arrive.
            High hygiene standards, professional tools, and careful attention to
            detail are central to every visit.
          </p>
          <p>
            My aim is simple, for you to leave feeling more comfortable, more
            confident, and reassured that your feet are in expert hands.
          </p>
        </div>

        {/* Section 5: Meet Suzanne */}
        <div className="space-y-4 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl mb-6">
            Meet Suzanne - Founder and therapist
          </h2>
          <p>
            Hi, I'm Suzanne Martin, the owner and therapist behind The Sole
            Studio Norwich. I was born and raised in Norfolk and have lived here
            all my life. I created The Sole Studio Norwich to provide
            high-quality, professional foot care in a private, welcoming, and
            non-judgemental environment.
          </p>
          <p>
            After working in the beauty industry since 2018, I began to notice
            how many people felt uncomfortable or self-conscious about their
            feet. At the same time, I saw the difference that the right care and
            treatment could make. This inspired me to focus my work on foot care
            and supporting those who may be struggling with similar concerns.
          </p>
          <p>
            My passion for this area is also personal. As a child, I lost my
            toenail in an accident, and although I don't remember the pain, I
            clearly remember the embarrassment of having a missing toenail. It
            took years to grow back properly, and even after it healed, I
            continued to feel self-conscious about my feet. Over time, this led
            to further neglect and concerns such as dry skin and cracked heels.
          </p>
          <p>
            Through my experience, I realised just how common these feelings
            are. Many people want help but may feel hesitant or embarrassed to
            seek it. Having already moved my business from a salon setting into
            a private treatment room, I knew I could create a space where
            clients would feel comfortable, respected, and at ease—this became
            The Sole Studio Norwich.
          </p>
          <p>
            I specialise in providing detailed, hygienic treatments that focus
            on both comfort and results. Whether you are looking for regular
            maintenance or more targeted care, every service is delivered with
            discretion and the highest standards of cleanliness.
          </p>
          <p>
            I look forward to welcoming you and providing a professional
            experience where your comfort, privacy, and care always come first.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <BookNowButton variant="primary" size="large">
            Book Your Appointment Today
          </BookNowButton>
        </div>
      </div>
    </div>
  );
};

export default About;
