import ContactForm from "../components/ui/ContactForm";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <div className="align-element">
      <PageTitle title="Get In Touch" />

      <div className="space-y-12">
        <div className="space-y-4 text-base md:text-lg">
          <p>
            Have a question about treatments, availability, or anything else?
            Send me a message and I'll get back to you as soon as I can.
          </p>
          <p>You can also reach me directly at the details below.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
