import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <div className="bg-neutral-50 py-16 md:py-24">
      <div className="align-element">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center mb-4">
            Get In Touch
          </h1>
          <p className="text-center text-charcoal-500 mb-12">
            Have a question? Send me a message and I'll get back to you within
            24 hours.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
