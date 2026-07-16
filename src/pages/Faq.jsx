import { useEffect, useState } from "react";
import { getFaqs } from "../lib/contentful";
import AccordionSectionRichText from "../components/AccordionSectionRichText";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaqs()
      .then((data) => {
        console.log("FAQs fetched:", data);
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading FAQs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-charcoal-500">Loading FAQs...</div>
      </div>
    );
  }

  // Group FAQs by category
  const groupedFaqs = {
    General: faqs.filter((f) => f.category === "General"),
    "Thai Foot Massage": faqs.filter((f) => f.category === "Thai Foot Massage"),
    "Toenail Reconstruction": faqs.filter(
      (f) => f.category === "Toenail Reconstruction"
    ),
    Elim: faqs.filter((f) => f.category === "Elim"),
  };

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
        {Object.entries(groupedFaqs).map(([category, questions]) =>
          questions.length > 0 ? (
            <AccordionSectionRichText
              key={category}
              title={category}
              content={formatFaqsForAccordion(questions)}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

const formatFaqsForAccordion = (faqs) => {
  const result = faqs
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((faq) => `<strong>${faq.question}</strong><br/><br/>${faq.answer}`)
    .join("<br/><br/>");

  return result;
};

export default Faq;
