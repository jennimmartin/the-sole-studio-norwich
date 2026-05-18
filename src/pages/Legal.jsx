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
          title="Customer Policies"
          content={customerPoliciesContent}
        />
        <AccordionSection
          title="Privacy Policy"
          content={privacyPolicyContent}
        />
        <AccordionSection title="Cookie Policy" content={cookiePolicyContent} />
        <AccordionSection
          title="Terms of Service"
          content={termsOfServiceContent}
        />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
        <p className="text-sm text-charcoal-500">Last updated: March 2026</p>
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
const customerPoliciesContent = `1. Booking & Appointments
- All appointments must be made in advance either online or by phone
- A valid name, contact number, and email address must be provided at the time of booking
- Appointments are not confirmed until the customer receives a confirmation email or message

2. Customer Arrival & Check-In
- Please arrive 10–15 minutes early to allow time for check-in and preparation
- Late arrivals may result in the appointment being shortened or rescheduled
- The studio reserves the right to refuse entry if a client is excessively late

3. Cancellation & Rescheduling
- Cancellations or reschedules must be made at least 24 hours before the scheduled appointment
- Late cancellations (less than 24 hours' notice) may incur a cancellation fee or lose the appointment charge
- No-shows (missed appointments without notice) may be charged in full
- Refunds or reschedules for missed appointments are at management discretion

4. Payments & Fees
- Full payment is required at the time of booking or before the service begins
- Accepted payment methods include major credit/debit cards and online payments
- Any outstanding balances must be settled before service delivery

5. Refund Policy
- Refunds are not provided for completed services
- If a prepaid session or package hasn't been used, refunds may be considered up to a certain date before service begins
- Refunds for product purchases follow statutory rights under UK consumer law

6. Health & Safety
- Clients should inform staff of any health conditions, allergies, injuries, or medications when booking
- The studio may refuse treatment if a condition might compromise client safety
- By attending, clients confirm they are medically fit for the service provided

7. Client Conduct
- All clients are expected to behave respectfully toward staff and other clients
- The studio operates a zero-tolerance policy for abusive or threatening behaviour

8. Personal Belongings
- Clients are responsible for their personal items brought into the studio
- The studio is not liable for loss or damage to belongings

9. Privacy & Data Protection
- Personal data collected for bookings is stored and used in accordance with data protection laws
- Clients may opt out of marketing communications at any time

10. Changes to Terms
- The studio reserves the right to modify policies, prices, or service terms at any time
- Updated policies will be made available on the website and communicated where appropriate`;

// (Keep all other content variables - privacyPolicyContent, cookiePolicyContent, termsOfServiceContent - exactly as they are)

const privacyPolicyContent = `What Information We Collect
We collect and process the following personal information:
- Name, email address, phone number, and postal address
- Health information relevant to treatments (medical conditions, allergies, medications)
- Appointment history and treatment records
- Payment information (processed securely through our booking system)
- Communication preferences for marketing purposes
- Email addresses collected through our newsletter signup

How We Use Your Information
Your personal information is used to:
- Process and manage your bookings and appointments
- Provide safe and appropriate treatments based on your health information
- Communicate with you about your appointments and services
- Send you marketing communications, newsletters, and foot care tips (only if you have consented)
- Provide downloadable resources such as our free foot care guide
- Maintain accurate treatment records for your safety and continuity of care
- Comply with legal and regulatory requirements

Legal Basis for Processing
We process your personal data under the following legal bases:
- Contract: To fulfill our booking and treatment obligations
- Legal Obligation: To maintain treatment records as required by law
- Consent: For marketing communications and newsletter subscriptions (you can withdraw consent at any time)
- Legitimate Interests: To provide safe, effective treatments and manage our business

How We Store Your Information
Your information is stored:
- Electronically in our booking system (Ovatu) with appropriate security measures
- Email addresses are stored securely via Netlify Forms
- In physical treatment records kept securely at the studio
- Treatment records are retained for 7 years in accordance with professional guidelines
- Personal data is stored in the UK and complies with UK GDPR

Who We Share Your Information With
We do not sell or share your personal information with third parties except:
- Our booking system provider (Ovatu) for appointment management
- Netlify for secure form submission and email collection
- Payment processors for secure transaction processing
- Professional advisors (e.g., insurance, legal) where necessary
- If required by law or to protect safety
All third parties are required to keep your information secure and confidential.

Your Rights
Under UK GDPR, you have the right to:
- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data (subject to legal retention requirements)
- Object to processing for marketing purposes
- Withdraw consent at any time
- Request data portability
- Lodge a complaint with the Information Commissioner's Office (ICO)

To exercise any of these rights, please contact hello@thesolestudionorwich.co.uk

Marketing Communications
We may send you information about new treatments, special offers, foot care tips, and appointment reminders. You can opt out at any time by clicking 'unsubscribe' in any email or contacting us directly. You will continue to receive essential appointment-related communications.

Newsletter Signup
If you sign up for our newsletter or free resources:
- We will only email you content you've requested (foot care tips, guides, offers)
- We will never share your email address with third parties
- You can unsubscribe at any time using the link in any email
- Your email will be stored securely and used only for the purposes you agreed to`;

const cookiePolicyContent = `What Are Cookies
Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain features to function properly.

Cookies We Use
Essential Cookies (Always Active):
- Session cookies for the booking system
- Security cookies to protect your data

Analytics Cookies (If Google Analytics is enabled):
- Google Analytics to understand how visitors use our website
- These help us improve the user experience
- No personally identifiable information is collected

Booking System Cookies:
- Ovatu booking system cookies to manage your appointments
- These are necessary for the booking functionality to work

Third-Party Cookies
Our website may use third-party services that set their own cookies:
- Ovatu (booking system): Manages appointment bookings
- Google Analytics (if enabled): Tracks website usage anonymously

These third parties have their own privacy policies governing their use of cookies.

Managing Cookies
You can control cookies through your browser settings:
- Most browsers allow you to refuse or accept cookies
- You can delete cookies that have already been set
- Blocking all cookies may affect website functionality, particularly the booking system

To manage cookies in your browser:
- Chrome: Settings > Privacy and Security > Cookies
- Firefox: Settings > Privacy & Security
- Safari: Preferences > Privacy
- Edge: Settings > Cookies and site permissions

Updates to This Policy
We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.`;

const termsOfServiceContent = `Acceptance of Terms
By using this website and booking services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.

Use of Website
This website is provided for information about our services, booking appointments, and accessing health and foot care advice.

You agree not to:
- Use the website for any unlawful purpose
- Attempt to gain unauthorized access to any part of the website
- Transmit any harmful code or malware
- Use automated systems to access the website without permission

Intellectual Property
All content on this website, including text, images, logos, graphics, website design and layout, and treatment descriptions is the property of The Sole Studio Norwich or licensed for use. You may not copy, reproduce, or distribute any content without written permission.

Service Limitations
The Sole Studio Norwich provides professional foot care treatments but:
- We are not a medical facility
- Treatments are not a substitute for medical advice or treatment
- We may refuse treatment if we believe it is not appropriate or safe
- We may refer you to a GP or podiatrist for concerns outside our scope

Always consult your GP for medical concerns.

Booking and Payment Terms
By making a booking, you agree to:
- Provide accurate personal and health information
- Arrive on time for your appointment
- Pay in full at the time of booking or before treatment
- Comply with our cancellation policy (see Customer Policies)

Failure to comply may result in cancellation fees or refusal of service.

Liability and Disclaimers
To the extent permitted by law:
- We do not guarantee specific results from treatments
- We are not liable for any indirect or consequential losses
- Our liability for any claim is limited to the amount paid for the service
- We maintain appropriate professional indemnity insurance

This does not affect your statutory rights as a consumer under UK law.

Health and Safety
You are responsible for:
- Disclosing all relevant health information
- Following pre- and post-treatment advice
- Informing us of any adverse reactions

We reserve the right to refuse or stop treatment if we believe it may compromise your safety.

Links to Third-Party Sites
Our website may contain links to third-party websites (e.g., booking system, social media). We are not responsible for the content or privacy practices of these sites. Please review their terms and policies separately.

Changes to Terms
We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the new terms.

Governing Law
These Terms of Service are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.

Contact Information
For questions about these Terms of Service, please contact:

The Sole Studio Norwich
Suite G, Sapphire House, Roundtree Way
Norwich NR7 8SQ

Email: hello@thesolestudionorwich.co.uk
Phone: 07854 918746`;

export default Legal;
