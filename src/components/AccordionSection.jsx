import { useState } from "react";

const AccordionSection = ({ title, content, isRichText = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const parseContent = (text) => {
    return text.split("\n").map((line, index) => {
      // Remove dash if it's a bullet point
      let cleanLine = line;
      let isBullet = false;

      if (line.startsWith("-")) {
        cleanLine = line.slice(1).trim();
        isBullet = true;
      }

      // Parse [[bold]] and [text|url]
      const parts = [];
      let lastIndex = 0;

      const regex = /\[\[([^\]]+)\]\]|\[([^\|]+)\|([^\]]+)\]/g;
      let match;

      while ((match = regex.exec(cleanLine)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
          parts.push(cleanLine.slice(lastIndex, match.index));
        }

        // Add bold
        if (match[1]) {
          parts.push(
            <strong key={`bold-${index}-${match.index}`} className="font-bold">
              {match[1]}
            </strong>
          );
        }
        // Add link
        else if (match[2] && match[3]) {
          parts.push(
            <a
              key={`link-${index}-${match.index}`}
              href={match[3]}
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {match[2]}
            </a>
          );
        }

        lastIndex = regex.lastIndex;
      }

      // Add remaining text
      if (lastIndex < cleanLine.length) {
        parts.push(cleanLine.slice(lastIndex));
      }

      // Return the line
      if (isBullet) {
        return (
          <div key={index} className="ml-6 mb-2">
            • {parts.length > 0 ? parts : cleanLine}
          </div>
        );
      }

      return (
        <div key={index} className="mb-3">
          {parts.length > 0 ? parts : cleanLine}
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
            {isRichText ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              parseContent(content)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
