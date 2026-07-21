import { useEffect, useState } from "react";
import { getFaqs } from "../lib/contentful";
import AccordionSectionRichText from "../components/AccordionSectionRichText";
import PageTitle from "../components/PageTitle";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaqs()
      .then((data) => {
        // console.log("FAQs fetched:", data);
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading FAQs:", err);
        setLoading(false);
      });
  }, []);

  // ScrollToTop resets scroll on route change, but that fires before this
  // page's real content has loaded (it only shows a short "Loading..." state
  // at that point). Reset again once the actual content is in, so we're not
  // left wherever the previous page happened to be scrolled to.
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

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
      <PageTitle title="Frequently Asked Questions" />
      <p className="text-center text-base md:text-lg text-charcoal-500 mb-12 max-w-2xl mx-auto">
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

// Builds the same margin-based rhythm as the plain-text accordion
// (mt-6 before each new question, mirroring a section header; mb-3 after
// each answer, mirroring a paragraph) instead of raw <br/><br/> breaks,
// which rendered as a much bigger gap than Legal's spacing.
const formatFaqsForAccordion = (faqs) => {
  return faqs
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((faq, index) => {
      const questionMargin = index === 0 ? "mb-2" : "mt-6 mb-2";
      return `<div class="${questionMargin} font-bold">${faq.question}</div><div class="mb-3">${faq.answer}</div>`;
    })
    .join("");
};

export default Faq;
