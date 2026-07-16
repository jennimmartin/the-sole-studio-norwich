import { useState } from "react";

const AccordionSectionRichText = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div
            className="text-charcoal-500 leading-relaxed prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              "--tw-prose-bullets": "#000",
              "--tw-prose-a": "rgb(37, 99, 235)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AccordionSectionRichText;
