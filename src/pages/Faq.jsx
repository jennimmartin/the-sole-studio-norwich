import { useState } from "react";

const Faq = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="align-element">
        <h1 className="text-4xl md:text-5xl text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our services, appointments, and
          treatments.
        </p>

        {/* General FAQs */}
        <FAQSection title="General Questions" faqs={generalFAQs} />

        {/* Thai Foot Massage FAQs */}
        <FAQSection
          title="Thai Foot Massage"
          faqs={thaiFAQs}
          className="mt-16"
        />

        {/* Toenail Reconstruction FAQs */}
        <FAQSection
          title="Toenail Reconstruction"
          faqs={toenailFAQs}
          className="mt-16"
        />

        {/* Problem-Based Pedicures FAQs */}
        <FAQSection
          title="Bespoke Problem-Based Pedicures"
          faqs={pedicureFAQs}
          className="mt-16"
        />
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = ({ title, faqs, className = "" }) => {
  return (
    <section className={className}>
      <h2 className="text-3xl md:text-4xl mb-8">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

// Individual FAQ Item (Accordion)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-lg pr-8">{question}</span>
        <span className="text-2xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-4 animate-slideDown">
          <div className="text-charcoal-500 whitespace-pre-line">{answer}</div>
        </div>
      )}
    </div>
  );
};

// FAQ Data
const generalFAQs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer specialist professional foot care treatments including Thai foot massage, toenail reconstruction and bespoke problem-based pedicures, including callus removal, cracked heel repair or simply tired overworked feet.",
  },
  {
    question: "How are you different from a regular nail salon?",
    answer:
      "We are focused on feet. This allows every treatment to be tailored, unrushed, and genuinely effective. There are also no other clients or therapists. The Sole Studio Norwich is completely private.",
  },
  {
    question: "I'm self-conscious about my feet. Can you help?",
    answer:
      "Absolutely, many clients feel this way. We provide a judgement-free, discreet environment focused on comfort and care.",
  },
  {
    question: "Do you offer gel pedicures?",
    answer:
      "Yes, treatments can be booked with or without gel. Due to the additional time required this needs to be prebooked.",
  },
  {
    question: "Is there parking?",
    answer:
      "Yes there is free off-road parking, details of where to park will be sent prior to your first visit.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "No, we operate appointments only to ensure that each client receives dedicated time and care which is fully private.",
  },
  {
    question: "Do you take card payment?",
    answer: "Yes, all cards including American Express (Amex) are accepted.",
  },
  {
    question: "How do I make an appointment?",
    answer:
      "Appointments can be made online here, you can also rebook your next visit at your appointment.",
  },
];

const thaiFAQs = [
  {
    question: "What is Thai Foot Massage?",
    answer:
      "Thai Foot massage is a traditional therapy that combines massage, stretching, and acupressure techniques on the feet and lower legs. It is based on the concept of Sen lines or energy pathways believed to correspond to different organs and systems in the body.",
  },
  {
    question: "What are the benefits of Thai Foot Massage?",
    answer: `Results vary by individual but many clients often experience:
• Deep relaxation and stress relief
• Improved circulation
• Reduced swelling and fatigue in the feet and legs
• Relief from tension and stiffness
• Improved sleep and overall wellbeing`,
  },
  {
    question: "What happens during the service?",
    answer: `Your session will include:
• A consultation
• Foot cleansing
• Application of an oil or cream
• Massage of the feet, ankles, and lower legs
• Acupressure using hands and a traditional wooden reflexology stick`,
  },
  {
    question: "Does Thai Foot Massage hurt?",
    answer:
      "Thai Foot Massage can involve firm pressure and feel intense, especially on certain reflex points. It should feel therapeutic but not painful. We always work within your comfort level and communicate throughout.",
  },
  {
    question: "Do I need to undress?",
    answer:
      "No, only your shoes and socks are removed. You may be asked to roll your trousers to your knees, but they will not need to be removed.",
  },
  {
    question: "Is Thai Foot Massage safe for everyone?",
    answer: `Thai Foot Massage may not be suitable if you have:
• Foot injuries or fractures
• Open wounds or infections
• Severe varicose veins
• Blood clots
• Advanced diabetes
• Certain medical conditions

If you are unsure please feel free to contact hello@thesolestudionorwich.co.uk`,
  },
  {
    question:
      "What is the difference between Thai Foot Massage and reflexology?",
    answer:
      "While both work on pressure points in the feet, Thai Foot Massage also includes lower leg massage, stretching techniques, and rhythmic movements for a more comprehensive treatment.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "We recommend wearing comfortable clothing and avoiding heavy meals immediately before treatment.",
  },
  {
    question: "How often should I book a treatment?",
    answer:
      "This varies between clients and will be discussed during your appointment. For most clients wishing to maintain results it's usually 2-4 weeks between and for those with ongoing concerns 1-2 weeks.",
  },
];

const toenailFAQs = [
  {
    question: "What is toenail reconstruction?",
    answer:
      "Toenail reconstruction is a cosmetic treatment that restores the natural appearance of a damaged, broken or partially missing toenail. A specialist gel is applied and sculpted to create a realistic-looking nail that blends with your natural nail.",
  },
  {
    question: "Who is it suitable for?",
    answer: `It is ideal for people with:
• Damaged or split toenails
• Nails affected by trauma
• Partially missing nails
• Thickened or uneven nails
• Cosmetic concerns after a fungal nail treatment`,
  },
  {
    question: "Is toenail reconstruction safe?",
    answer: "Yes, when performed by a trained professional.",
  },
  {
    question: "Will it look natural?",
    answer:
      "Yes, the reconstructed nail is carefully shaped and tinted to match your existing nails for a natural finish. It can also be filed and polished like a normal nail.",
  },
  {
    question: "Is the treatment painful?",
    answer:
      "No, the procedure is painless. If you have any sensitivity caused by previous trauma please let us know.",
  },
  {
    question: "How long does the treatment take?",
    answer: "A single nail typically takes 30-45 minutes.",
  },
  {
    question: "How long does the treatment last?",
    answer:
      "Toenail reconstruction usually lasts 6-8 weeks, depending on nail growth and aftercare. Maintenance appointments are recommended as the natural nail grows out.",
  },
  {
    question: "Can you wear gel or regular polish over it?",
    answer:
      "Yes, you can add gel polish application to your appointment when booking or use regular polish at home. We recommend using non-acetone remover when taking off regular polish.",
  },
  {
    question: "How do I care for my reconstructed nail?",
    answer: `You will receive aftercare instructions at your appointment. It is recommended to:
• Avoid picking or lifting the product
• Trim carefully as it grows
• Attend maintenance appointments as advised`,
  },
  {
    question: "Can the reconstruction be removed?",
    answer:
      "Yes, the product can be safely filed down or professionally removed during an appointment. It is not recommended that you remove it yourself at home.",
  },
  {
    question: "When should toenail reconstruction be avoided?",
    answer: `Toenail reconstruction is not suitable if you have:
• An active fungal infection
• Open cuts or wounds
• Severe nail bed damage
• Certain medical conditions affecting healing

If you are unsure please feel free to contact hello@thesolestudionorwich.co.uk`,
  },
];

const pedicureFAQs = [
  {
    question: "What is a bespoke problem-based pedicure?",
    answer:
      "A bespoke problem-based pedicure is a customised foot treatment designed to address specific concerns such as cracked heels, callus build-up, dry skin, tired, sore and overworked feet. This treatment focuses on restoring foot health first with cosmetic finishing as an optional add-on.",
  },
  {
    question: "How is it different from a regular pedicure?",
    answer:
      "Regular or traditional pedicures focus mainly on relaxation and polish application. A bespoke problem-based pedicure is results-driven and tailored to your individual foot concerns. It includes detailed assessment, targeted treatment techniques, and professional products chosen specifically for your needs.",
  },
  {
    question: "What foot concerns can you treat?",
    answer: `We treat:
• Cracked heels
• Hard skin and callus build-up
• Dry, dehydrated skin
• Tired, sore and overworked feet

If we are unable to treat your concern you will be referred to someone more suitable such as a podiatrist or GP.

If you are unsure if we can help please feel free to contact hello@thesolestudionorwich.co.uk`,
  },
  {
    question: "Can you remove hard skin and cracked heels in one session?",
    answer:
      "Most clients see significant improvement after one treatment. Severe cracking may require a treatment plan for best results.",
  },
  {
    question: "Will callus removal make my skin grow back thicker?",
    answer:
      "No, professional removal maintains healthy skin and regular maintenance helps prevent buildup.",
  },
  {
    question: "Is this treatment suitable for everyone?",
    answer: `Most clients are suitable for a bespoke problem-based pedicure. However, if you have certain medical conditions such as diabetes, fungal infections, or open wounds, we may request GP clearance or refer you to a podiatrist.

If you are unsure if we can help please feel free to contact hello@thesolestudionorwich.co.uk`,
  },
  {
    question: "Will the treatment hurt?",
    answer:
      "The treatment should not be painful. You may feel sensitivity during certain aspects of the treatment but I always work within your comfort level and communicate throughout.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Some concerns can be significantly improved in one session. More advanced or long-standing issues may require a course combined with at-home care. Any aftercare recommendations and further treatments will be discussed at your appointment.",
  },
  {
    question: "Will gel polish be applied?",
    answer:
      "Gel polish application can be added to a bespoke problem-based pedicure. Due to the additional time required this needs to be prebooked.",
  },
  {
    question: "What results can I expect?",
    answer:
      "You can expect smoother skin, reduced discomfort, improved nail appearance and healthier looking feet. Long-term results depend on consistency and following up on your aftercare plan.",
  },
  {
    question: "Do you provide aftercare?",
    answer:
      "Yes, every client receives home care recommendations to maintain results and prevent recurring issues.",
  },
  {
    question: "How often should I book an appointment?",
    answer:
      "For maintenance, we typically recommend every 4-6 weeks. If you have severe dry, cracked heels or heavy calluses, you may benefit from more frequent treatments. This will be discussed during your appointment.",
  },
];

export default Faq;
