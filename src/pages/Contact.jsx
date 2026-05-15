import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <>
      {/* First section = large */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-4">Get In Touch</h1>
        <p className="text-center text-charcoal-500 mb-12">
          Have a question? Send me a message and I'll get back to you within 24
          hours.
        </p>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
