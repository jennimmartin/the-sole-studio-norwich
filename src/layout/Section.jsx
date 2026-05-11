export const Section = ({
  children,
  size = "default", // "compact" | "default" | "large"
  width = "default", // "default" | "wide"
  className = "",
}) => {
  const sizeClasses = {
    compact: "py-6 md:py-8",
    default: "py-8 md:py-10",
    large: "py-16 md:py-24",
  };

  const widthClasses = {
    default: "max-w-4xl",
    wide: "max-w-6xl",
  };

  return (
    <section className={`align-element ${sizeClasses[size]} ${className}`}>
      <div className={`${widthClasses[width]} mx-auto px-4`}>{children}</div>
    </section>
  );
};

export default Section;
