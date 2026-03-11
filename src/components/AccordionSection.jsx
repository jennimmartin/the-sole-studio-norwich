import { useState } from "react";

const AccordionSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format content with bold sub-headings
  const formatContent = (text) => {
    // Split by double newlines to get paragraphs/sections
    const sections = text.split("\n\n");

    return sections.map((section, index) => {
      const lines = section.split("\n");
      const firstLine = lines[0];

      // Check if first line looks like a heading (ends with colon, is a question, or is short and capitalized)
      const isHeading =
        (firstLine.match(/^[A-Z][^\.]*:?$/) &&
          firstLine.length < 80 &&
          !firstLine.startsWith("•")) ||
        firstLine.endsWith("?");

      if (isHeading) {
        return (
          <div key={index} className="mb-4">
            <div className="font-bold text-black mb-2">{firstLine}</div>
            {lines.slice(1).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        );
      }

      return (
        <div key={index} className="mb-4">
          {lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="border border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-xl pr-8">{title}</span>
        <span className="text-2xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-4">
          <div className="text-charcoal-500 leading-relaxed">
            {formatContent(content)}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
