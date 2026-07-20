import ContactForm from "../components/ui/ContactForm";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <div className="align-element">
      <PageTitle title="Get In Touch" />

      <div className="space-y-12">
        <div className="space-y-4 text-base md:text-lg">
          <p className="text-center text-base md:text-lg text-charcoal-500 mb-12 mx-auto">
            Have a question about treatments, availability, or anything else?
            Send me a message and I'll get back to you as soon as I can.
          </p>
          <p>You can also reach me directly at the details below.</p>
        </div>
        <ContactForm />
        {/* Direct Contact Info */}
        <div className="max-w-2xl space-y-3 text-base md:text-lg pt-8">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@thesolestudionorwich.co.uk"
              className="underline hover:text-black transition-colors"
            >
              hello@thesolestudionorwich.co.uk
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+447854918746"
              className="underline hover:text-black transition-colors"
            >
              07854 918746
            </a>
          </p>
          <p>
            <strong>Address:</strong> Suite G, Sapphire House, Roundtree Way,
            Norwich, NR7 8SQ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
