import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-black p-8 text-center">
        <h3 className="text-2xl mb-2">Message Sent</h3>
        <p className="text-charcoal-500">
          Thanks — I'll be in touch as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-white p-8 space-y-6"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="name">
          Your name
        </label>
        <input
          className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="email">
          Your email
        </label>
        <input
          className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="subject">
          What's it about?
        </label>
        <input
          className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="message">
          Tell me a bit more
        </label>
        <textarea
          className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors resize-none"
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          Something went wrong — you can also reach me at{" "}
          <a
            href="mailto:hello@thesolestudionorwich.co.uk"
            className="underline hover:text-red-600"
          >
            hello@thesolestudionorwich.co.uk
          </a>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-all duration-300 disabled:bg-neutral-400 disabled:cursor-not-allowed"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
