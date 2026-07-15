import { useState } from "react";
import AccordionSection from "../components/AccordionSection";

const Legal = () => {
  return (
    <div className="align-element">
      <h1 className="text-4xl md:text-5xl text-center mb-4">
        Legal Information
      </h1>
      <p className="text-center text-charcoal-500 mb-12 max-w-2xl mx-auto">
        Important policies and legal information for The Sole Studio Norwich
      </p>

      <div className="space-y-4">
        <AccordionSection
          title="Customer Policies and Procedures"
          content={customerPoliciesContent}
        />
        <AccordionSection
          title="Privacy Policy"
          content={privacyPolicyContent}
        />

        <AccordionSection
          title="Terms and Conditions"
          content={termsOfServiceContent}
        />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
        <p className="text-sm text-charcoal-500">Last updated: July 2026</p>
        <p className="text-sm text-charcoal-500 mt-2">
          If you have any questions, please contact{" "}
          <a
            href="mailto:hello@thesolestudionorwich.co.uk"
            className="underline hover:text-black transition-colors"
          >
            hello@thesolestudionorwich.co.uk
          </a>
        </p>
      </div>
    </div>
  );
};

// Keep all your existing content variables exactly as they are
const customerPoliciesContent = `[[Booking and Appointments]]

-All appointments must be booked in advance. Where possible, appointments should be made through our online booking system. If you require assistance, please contact us at [hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]
- A [[50% non-refundable deposit]] is required at the time of booking to secure your appointment.
- When booking, you must provide a valid name, telephone number, and email address. This information is required to send appointment confirmations, reminders, and important updates regarding your booking.
- Appointments are not confirmed until you have received a confirmation email or message from us.
- As The Sole Studio Norwich operates from a private studio, we kindly ask that you attend your appointment alone. Unfortunately, we are unable to accommodate additional guests unless prior arrangements have been agreed.
- Please arrive promptly for your appointment. As we do not have a dedicated waiting area, access to the building may not be available before your scheduled appointment time. You will be met at reception and escorted to the studio.
- If you arrive late, your treatment time may need to be shortened to avoid disrupting subsequent appointments. Where there is insufficient time to safely or effectively carry out your treatment, your appointment may need to be rescheduled and the full treatment fee may still apply.

[[Consultation Process]]

- All new clients must complete a consultation form before their first appointment.
- To ensure treatments remain safe and appropriate, all clients are required to complete a health questionnaire before each visit. Depending on the treatment booked, you may also be asked to complete additional treatment-specific consultation forms.
- It is your responsibility to provide accurate, complete, and up-to-date information to the best of your knowledge.
- For your safety, you must inform us of any relevant medical conditions, allergies, medications, pregnancy, recent procedures, or ongoing treatments that may affect your suitability for treatment.
- Failure to disclose relevant information may result in treatment being refused or discontinued.

[[Deposits]]

- A deposit equal to [[50% of the treatment cost]] is required when booking.
- Your deposit will be deducted from the final balance payable on the day of your appointment.
- If you provide [[more than 24 hours' notice]] to cancel or reschedule your appointment, your deposit will be transferred to your client account as credit and may be used towards a future appointment.
- If you provide [[less than 24 hours' notice]], fail to attend your appointment, or arrive too late for your treatment to be carried out, your deposit will be forfeited.
- Where a refund is requested instead of account credit, we reserve the right to apply a [[£5 administration fee]] to cover processing costs.

[[Cancellation Policy]]

- We kindly ask that any appointment changes or cancellations are made with at least [[24 hours' notice]].
- Appointments cancelled or rescheduled with less than 24 hours' notice will result in the loss of the deposit paid.
- Appointments cancelled or amended with more than 24 hours' notice will have the deposit transferred to account credit for future use.
- Where possible, cancellations and amendments should be made through our online booking system. If you are unable to do so, please contact us at hello@thesolestudionorwich.co.uk.

By booking an appointment, you acknowledge and agree to this cancellation policy.

[[Missed Appointments (No-Shows)]]

- Failure to attend an appointment without providing notice will be recorded as a [[No-Show]].
- In the event of a No-Show, the full cost of the scheduled treatment may be charged.
- Repeated missed appointments may result in restrictions being placed on future bookings, including a requirement for full payment at the time of booking.
- We reserve the right to refuse future appointments where there is a history of repeated cancellations, missed appointments, or non-payment.

[[Right to Refuse Treatment]]

The safety, wellbeing, and comfort of our clients and staff are our priority. We therefore reserve the right to refuse, postpone, or discontinue treatment where necessary.

This includes, but is not limited to, the following circumstances:

Arrival significantly late for an appointment.
- A medical condition, injury, allergy, medication, or other contraindication makes treatment unsuitable or unsafe.
- The client is under the age of 16.
- The client is believed to be under the influence of alcohol, drugs, or any substance that may impair judgement or safety.
- Aggressive, abusive, threatening, discriminatory, or disrespectful behaviour towards staff, clients, or visitors.
- Inappropriate, unreasonable, or unprofessional conduct.
- Failure to provide accurate consultation information.
- Outstanding payments or repeated breaches of our policies.
- A history of repeated missed appointments or cancellations.

Where treatment is refused for health and safety reasons, we will discuss alternative options where appropriate.

We reserve the right to refuse service at our discretion where necessary to protect our staff, clients, business operations, or professional standards.

[[Treatment Results]]

Individual treatment results vary from person to person and cannot be guaranteed.

Any photographs, testimonials, reviews, or examples shown on our website, social media platforms, or marketing materials are provided for illustrative purposes only and should not be considered a guarantee of specific results.

Treatment outcomes depend on many factors, including individual characteristics, medical history, lifestyle factors, and adherence to aftercare advice.

[[Payments]]

Payment of any outstanding balance is due at the time of your appointment unless otherwise agreed in writing.

We reserve the right to withhold treatment or future bookings where payment remains outstanding.

[[Complaints Procedure]]

We are committed to providing a professional and high-quality service. If you are dissatisfied with any aspect of your experience, we encourage you to contact us so that we can investigate and resolve the matter promptly.

Complaints should be submitted in writing by email to:

[hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]

or by post to:

[[The Sole Studio Norwich]]
Suite G, Sapphire House
Roundtree Way
Norwich
NR7 8SQ

We aim to acknowledge all complaints within [[7 working days]] and will endeavour to resolve them as quickly as possible.

By booking an appointment with The Sole Studio Norwich, you confirm that you have read, understood, and agree to these Customer Policies and Procedures.
`;

// (Keep all other content variables - privacyPolicyContent, cookiePolicyContent, termsOfServiceContent - exactly as they are)

const privacyPolicyContent = `The Sole Studio Norwich ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, contact us, book appointments, purchase products or services, or otherwise interact with our business.

If you have any questions regarding this Privacy Policy or the way we process your personal data, please contact us at:

[hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]

[[Who We Are]]

The Sole Studio Norwich is the data controller responsible for the personal information collected through our website and business operations.
We process personal data in accordance with:
- The UK General Data Protection Regulation (UK GDPR)
- The Data Protection Act 2018
- Any other applicable data protection legislation

[[Information We Collect]]

We may collect and process the following types of personal information:

[[Information You Provide]]
- Name
- Email address
- Telephone number
- Postal address
- Date of birth
- Appointment and booking details
- Medical and health information relevant to treatments
- Consultation forms and treatment records
- Photographs taken with your consent
- Feedback, reviews, enquiries, or correspondence

[[Information Collected Automatically]]

When you visit our website, we may automatically collect:
- IP address
- Browser type and version
- Device information
- Operating system
- Website usage information
- Pages viewed and time spent on our website
This information is collected through cookies and similar technologies.

[[How We Use Your Information]]

We use your personal information to:
- Manage bookings and appointments
- Provide treatments, products, and services
- Maintain client records
- Respond to enquiries and requests
- Process payments
- Send appointment confirmations and reminders
- Improve our website and services
- Comply with legal and regulatory obligations
- Protect the safety of our clients and business
Where you have provided consent, we may also use your information to send marketing communications about our services, offers, and promotions.

[[Marketing Communications]]

We will only send marketing communications where:
- You have given your consent; or
- We are otherwise permitted to do so under applicable law.
You can withdraw your consent and unsubscribe from marketing communications at any time by:
- Clicking the unsubscribe link in our emails; or
- Contacting us at hello@thesolestudionorwich.co.uk
Opting out of marketing communications will not affect service-related communications such as appointment reminders or treatment information.

[[Lawful Basis for Processing]]

We process personal information under one or more of the following lawful bases:
- Performance of a contract (providing treatments, products, and services)
- Compliance with legal obligations
- Legitimate business interests
- Your consent (where required)
Where special category data (such as health information) is collected, we process it only where permitted under applicable data protection laws and where necessary for the provision of treatments and services.

[[Sharing Your Information]]

We do not sell your personal information.

We may share your information with trusted third-party service providers where necessary for:
- Appointment booking systems
- Payment processing
- Website hosting and maintenance
- Email and communication services. Contact form submissions are processed by Netlify Forms, which forwards your message to our email address for response purposes
- Professional advisers
- Regulatory authorities

We may also disclose information where required by law, regulation, court order, or lawful request from a government or law enforcement authority.

All third-party providers are required to protect your information and process it in accordance with applicable data protection laws.

[[Data Retention]]

We retain personal information only for as long as necessary to:
- Provide our services;
- Meet legal, regulatory, insurance, and professional obligations; or
-Resolve disputes and enforce our agreements.
Treatment records may be retained for longer periods where required by professional standards, insurance requirements, or legal obligations.

[[Your Rights]]

Under UK data protection law, you have the right to:
- Access your personal information
- Request correction of inaccurate information
- Request erasure of your information in certain circumstances
- Restrict processing
- Object to processing
- Request data portability
- Withdraw consent where processing is based on consent

To exercise any of these rights, please contact us at:  [hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]

We will respond to requests in accordance with applicable data protection legislation.

You also have the right to lodge a complaint with the:

Information Commissioner's Office (ICO)

You can find further information at:

[Information Commissioner's Office|https://ico.org.uk]

[[Website Security]]

We take appropriate technical and organisational measures to protect your personal information from unauthorised access, loss, misuse, alteration, or disclosure.
However, while we strive to protect your information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.

[[International Data Transfers]]

Some of our service providers may process information outside the United Kingdom.
Where personal data is transferred internationally, we will ensure that appropriate safeguards are in place to protect your information in accordance with UK data protection law.

[[Cookies]]

Our website uses cookies and similar technologies to improve user experience, analyse website traffic, and support website functionality.
Cookies are small text files stored on your device when you visit a website.

We may use:

[[Essential Cookies]]

Required for the operation and security of the website.

[[Analytics Cookies]]

Used to help us understand how visitors interact with our website so that we can improve performance and user experience.

[[Functional Cookies]]

Used to remember preferences and improve website functionality.

You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.

For more information about cookies, visit:

[All About Cookies|https://allaboutcookies.org/]

[[Analytics]]

We may use analytics services to collect anonymous information about how visitors use our website.

This information helps us understand website performance, improve user experience, and identify areas for improvement.

Analytics information does not normally identify individual users.

[[Third-Party Websites]]

Our website may contain links to third-party websites.

Our website also uses Google Fonts for typography. Google Fonts does not collect personal data but loads font files from Google's servers.

We are not responsible for the privacy practices, content, or security of external websites. We encourage you to read the privacy policies of any websites you visit.

[[Changes to This Privacy Policy]]

We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations, or business practices.

Any updates will be published on this page and will take effect immediately upon publication.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.

[[Contact Us]]

If you have any questions about this Privacy Policy or the way your personal information is handled, please contact:

[[The Sole Studio Norwich]]
Suite G, Sapphire House
Roundtree Way
Norwich
NR7 8SQ

[hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]
`;

const termsOfServiceContent = `[[1. Introduction]]

These Terms and Conditions govern the use of the website and services provided by [[The Sole Studio Norwich]] ("we", "us", "our").

By accessing our website, booking an appointment, purchasing a product or service, or otherwise engaging with our business, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.

If you do not agree to these Terms, you must not use our website or services.

[[2. Appointments and Bookings]]

Appointments must be booked in advance using our online booking system or by contacting us at [[hello@thesolestudionorwich.co.uk.]]

A [[50% deposit]] is required to secure all appointments.

Appointments are not confirmed until you receive confirmation from us.

You must provide accurate and up-to-date contact information when booking.

As we operate from a private studio, clients are asked to attend appointments alone unless otherwise agreed in advance.

Please arrive on time. As we do not have a waiting area, access to the premises may not be available before your appointment time.

Late arrival may result in a reduced treatment time or cancellation of the appointment. Full treatment charges may still apply.

[[3. Consultations and Client Responsibilities]]

All new clients must complete a consultation form before treatment.

You may also be required to complete a health questionnaire and treatment-specific consent forms before each appointment.

You are responsible for providing complete and accurate information regarding:

- Medical conditions
- Medications
- Allergies
- Pregnancy
- Previous treatments
- Any other information relevant to your treatment

Failure to disclose relevant information may result in treatment being refused or may affect treatment outcomes.

You agree to follow all pre-treatment, aftercare, and homecare advice provided.

[[4. Deposits, Cancellations and Missed Appointments]]

Deposits are deducted from the final balance due on the day of treatment.

If you cancel or reschedule with more than [[24 hours' notice]], your deposit will be transferred to your client account as credit for future use.

If you cancel, reschedule, fail to attend, or arrive too late for treatment with less than [[24 hours' notice]], your deposit will be forfeited.

Refunds requested instead of account credit may be subject to a [[£5 administration fee]].

Failure to attend an appointment without notice will be treated as a [[No-Show]].

Repeated No-Shows, late cancellations, or non-payment may result in full payment being required at the time of booking or refusal of future appointments.

[[5. Right to Refuse Treatment]]

We reserve the right to refuse, postpone, modify, or discontinue treatment where:

- Treatment is deemed unsuitable or unsafe.
- Medical contraindications are identified.
- Required consultation information has not been provided.
- A client is under the influence of alcohol or drugs.
- A client behaves in an abusive, aggressive, threatening, inappropriate, or disrespectful manner.
-A client is under the minimum treatment age requirement.
- There is a history of repeated missed appointments or non-payment.

Client safety will always be our primary consideration.

[[6. Treatment Results and Disclaimer]]

All treatments carry risks and individual results will vary.

No treatment outcome can be guaranteed.

Photographs, testimonials, reviews, and case studies are provided for illustrative purposes only and should not be regarded as guarantees of results.

Information provided on our website is for general information purposes only and does not constitute medical advice.

If you have concerns regarding your suitability for treatment, you should seek advice from an appropriate healthcare professional before proceeding.

[[7. Payments and Refunds]]

Payment for treatments and products is due at the time of your appointment unless otherwise agreed.

Refunds will be considered in accordance with your statutory consumer rights.

Unused treatments, promotional offers, packages, deposits, gift vouchers, and discounted services are generally non-refundable unless required by law.

[[8. Photographs and Marketing Consent]]

Clinical photographs may be taken for treatment assessment and record keeping.

Separate consent will always be obtained before any photographs are used for marketing, social media, educational, or promotional purposes.

Consent for marketing use is voluntary and may be withdrawn at any time for future use.

All personal data and photographs are processed in accordance with our Privacy Policy and applicable data protection legislation.

[[9. Promotions, Gift Vouchers and Offers]]

Promotions, discounts, vouchers, gift vouchers, package offers, and promotional codes:

- Cannot normally be used in conjunction with any other offer.
- Have no cash value.
- Are non-transferable.
- Cannot be exchanged for cash.
- Must be used before their expiry date.

We reserve the right to amend or withdraw promotions at any time.

[[10. Website Use]]

You agree to use our website only for lawful purposes.

You must not:

- Attempt to gain unauthorised access to the website.
- Introduce viruses, malware, or harmful code.
- Use the website to send unsolicited communications.
- Copy, reproduce, or misuse website content.
- Interfere with the operation or security of the website.

We reserve the right to suspend or terminate access where misuse is suspected.

[[11. Intellectual Property]]

All content on this website, including text, images, branding, logos, graphics, videos, and design elements, is owned by or licensed to The Sole Studio Norwich and is protected by intellectual property laws.

You may access the website for personal, non-commercial use only.

No content may be copied, reproduced, distributed, modified, or used without our prior written consent.

[[12. Website Availability]]

Whilst we take reasonable steps to maintain the website, we do not guarantee uninterrupted availability or error-free operation.

The website is provided on an "as available" basis.

We shall not be liable for any loss arising from website downtime, technical issues, viruses, or circumstances outside our reasonable control.

[[13. Limitation of Liability]]

Nothing in these Terms excludes or limits liability that cannot legally be excluded under English law.

Subject to this, our total liability arising from any treatment, product, or service shall not exceed the amount paid by you for the relevant treatment, product, or service.

We shall not be liable for any indirect, incidental, consequential, or economic loss.

[[14. Complaints]]

We are committed to providing excellent service.

Any complaints should be submitted in writing to:

[hello@thesolestudionorwich.co.uk|mailto:hello@thesolestudionorwich.co.uk]

or

[[The Sole Studio Norwich]]
Suite G, Sapphire House
Roundtree Way
Norwich
NR7 8SQ

We aim to acknowledge complaints within 7 working days and resolve them as promptly as possible.

[[15. General]]

We may update these Terms and Conditions from time to time.

If any provision is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

These Terms constitute the entire agreement between you and The Sole Studio Norwich regarding your use of our website and services.

A person who is not a party to these Terms has no rights under the [[Contracts (Rights of Third Parties) Act 1999]].

These Terms are governed by the laws of England and Wales, and the courts of [[England and Wales]] shall have exclusive jurisdiction over any dispute arising from them.
`;

export default Legal;
