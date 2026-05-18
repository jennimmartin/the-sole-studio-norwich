import AccordionSection from "../components/AccordionSection";

const Faq = () => {
  return (
    <div className="align-element">
      <h1 className="text-4xl md:text-5xl text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-charcoal-500 mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our services, appointments, and
        treatments.
      </p>

      <div className="space-y-4">
        <AccordionSection
          title="General Questions"
          content={generalFAQsContent}
        />
        <AccordionSection title="Thai Foot Massage" content={thaiFAQsContent} />
        <AccordionSection
          title="Toenail Reconstruction"
          content={toenailFAQsContent}
        />
        <AccordionSection
          title="Bespoke Problem-Based Pedicures"
          content={pedicureFAQsContent}
        />
      </div>
    </div>
  );
};

// FAQ Content (keep all your existing content variables exactly as they are)
const generalFAQsContent = `What services do you offer?
We offer specialist professional foot care treatments including Thai foot massage, toenail reconstruction and bespoke problem-based pedicures, including callus removal, cracked heel repair or simply tired overworked feet.

How are you different from a regular nail salon?
We are focused on feet. This allows every treatment to be tailored, unrushed, and genuinely effective. There are also no other clients or therapists. The Sole Studio Norwich is completely private.

I'm self-conscious about my feet. Can you help?
Absolutely, many clients feel this way. We provide a judgement-free, discreet environment focused on comfort and care.

Do you offer gel pedicures?
Yes, treatments can be booked with or without gel. Due to the additional time required this needs to be prebooked.

Is there parking?
Yes there is free off-road parking, details of where to park will be sent prior to your first visit.

Do you accept walk-ins?
No, we operate appointments only to ensure that each client receives dedicated time and care which is fully private.

Do you take card payment?
Yes, all cards including American Express (Amex) are accepted.

How do I make an appointment?
Appointments can be made online here, you can also rebook your next visit at your appointment.`;

const thaiFAQsContent = `What is Thai Foot Massage?
Thai Foot massage is a traditional therapy that combines massage, stretching, and acupressure techniques on the feet and lower legs. It is based on the concept of Sen lines or energy pathways believed to correspond to different organs and systems in the body.

What are the benefits of Thai Foot Massage?
Results vary by individual but many clients often experience:
- Deep relaxation and stress relief
- Improved circulation
- Reduced swelling and fatigue in the feet and legs
- Relief from tension and stiffness
- Improved sleep and overall wellbeing

What happens during the service?
Your session will include:
- A consultation
- Foot cleansing
- Application of an oil or cream
- Massage of the feet, ankles, and lower legs
- Acupressure using hands and a traditional wooden reflexology stick

Does Thai Foot Massage hurt?
Thai Foot Massage can involve firm pressure and feel intense, especially on certain reflex points. It should feel therapeutic but not painful. We always work within your comfort level and communicate throughout.

Do I need to undress?
No, only your shoes and socks are removed. You may be asked to roll your trousers to your knees, but they will not need to be removed.

Is Thai Foot Massage safe for everyone?
Thai Foot Massage may not be suitable if you have:
- Foot injuries or fractures
- Open wounds or infections
- Severe varicose veins
- Blood clots
- Advanced diabetes
- Certain medical conditions

If you are unsure please feel free to contact hello@thesolestudionorwich.co.uk

What is the difference between Thai Foot Massage and reflexology?
While both work on pressure points in the feet, Thai Foot Massage also includes lower leg massage, stretching techniques, and rhythmic movements for a more comprehensive treatment.

How do I prepare for my appointment?
We recommend wearing comfortable clothing and avoiding heavy meals immediately before treatment.

How often should I book a treatment?
This varies between clients and will be discussed during your appointment. For most clients wishing to maintain results it's usually 2-4 weeks between and for those with ongoing concerns 1-2 weeks.`;

const toenailFAQsContent = `What is toenail reconstruction?
Toenail reconstruction is a cosmetic treatment that restores the natural appearance of a damaged, broken or partially missing toenail. A specialist gel is applied and sculpted to create a realistic-looking nail that blends with your natural nail.

Who is it suitable for?
It is ideal for people with:
- Damaged or split toenails
- Nails affected by trauma
- Partially missing nails
- Thickened or uneven nails
- Cosmetic concerns after a fungal nail treatment

Is toenail reconstruction safe?
Yes, when performed by a trained professional.

Will it look natural?
Yes, the reconstructed nail is carefully shaped and tinted to match your existing nails for a natural finish. It can also be filed and polished like a normal nail.

Is the treatment painful?
No, the procedure is painless. If you have any sensitivity caused by previous trauma please let us know.

How long does the treatment take?
A single nail typically takes 30-45 minutes.

How long does the treatment last?
Toenail reconstruction usually lasts 6-8 weeks, depending on nail growth and aftercare. Maintenance appointments are recommended as the natural nail grows out.

Can you wear gel or regular polish over it?
Yes, you can add gel polish application to your appointment when booking or use regular polish at home. We recommend using non-acetone remover when taking off regular polish.

How do I care for my reconstructed nail?
You will receive aftercare instructions at your appointment. It is recommended to:
- Avoid picking or lifting the product
- Trim carefully as it grows
- Attend maintenance appointments as advised

Can the reconstruction be removed?
Yes, the product can be safely filed down or professionally removed during an appointment. It is not recommended that you remove it yourself at home.

When should toenail reconstruction be avoided?
Toenail reconstruction is not suitable if you have:
- An active fungal infection
- Open cuts or wounds
- Severe nail bed damage
- Certain medical conditions affecting healing

If you are unsure please feel free to contact hello@thesolestudionorwich.co.uk`;

const pedicureFAQsContent = `What is a bespoke problem-based pedicure?
A bespoke problem-based pedicure is a customised foot treatment designed to address specific concerns such as cracked heels, callus build-up, dry skin, tired, sore and overworked feet. This treatment focuses on restoring foot health first with cosmetic finishing as an optional add-on.

How is it different from a regular pedicure?
Regular or traditional pedicures focus mainly on relaxation and polish application. A bespoke problem-based pedicure is results-driven and tailored to your individual foot concerns. It includes detailed assessment, targeted treatment techniques, and professional products chosen specifically for your needs.

What foot concerns can you treat?
We treat:
- Cracked heels
- Hard skin and callus build-up
- Dry, dehydrated skin
- Tired, sore and overworked feet

If we are unable to treat your concern you will be referred to someone more suitable such as a podiatrist or GP.

If you are unsure if we can help please feel free to contact hello@thesolestudionorwich.co.uk

Can you remove hard skin and cracked heels in one session?
Most clients see significant improvement after one treatment. Severe cracking may require a treatment plan for best results.

Will callus removal make my skin grow back thicker?
No, professional removal maintains healthy skin and regular maintenance helps prevent buildup.

Is this treatment suitable for everyone?
Most clients are suitable for a bespoke problem-based pedicure. However, if you have certain medical conditions such as diabetes, fungal infections, or open wounds, we may request GP clearance or refer you to a podiatrist.

If you are unsure if we can help please feel free to contact hello@thesolestudionorwich.co.uk

Will the treatment hurt?
The treatment should not be painful. You may feel sensitivity during certain aspects of the treatment but I always work within your comfort level and communicate throughout.

How many sessions will I need?
Some concerns can be significantly improved in one session. More advanced or long-standing issues may require a course combined with at-home care. Any aftercare recommendations and further treatments will be discussed at your appointment.

Will gel polish be applied?
Gel polish application can be added to a bespoke problem-based pedicure. Due to the additional time required this needs to be prebooked.

What results can I expect?
You can expect smoother skin, reduced discomfort, improved nail appearance and healthier looking feet. Long-term results depend on consistency and following up on your aftercare plan.

Do you provide aftercare?
Yes, every client receives home care recommendations to maintain results and prevent recurring issues.

How often should I book an appointment?
For maintenance, we typically recommend every 4-6 weeks. If you have severe dry, cracked heels or heavy calluses, you may benefit from more frequent treatments. This will be discussed during your appointment.`;

export default Faq;
