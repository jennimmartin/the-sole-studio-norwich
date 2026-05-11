// src/components/ui/BookNowButton.jsx

import { EXTERNAL_LINKS } from "../../config/externalLinks";

export default function BookNowButton({
  variant = "primary",
  size = "default",
  className = "",
}) {
  // Your actual button styles from the code
  const baseStyles =
    "transition-all duration-300 cursor-pointer inline-block text-center";

  const variants = {
    primary: "bg-black text-white hover:text-neutral-400",
    secondary:
      "outline outline-1 outline-black hover:bg-black hover:text-white",
  };

  const sizes = {
    default: "px-6 py-3",
    large: "px-8 py-4",
    small: "px-4 py-2",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <a
      href={EXTERNAL_LINKS.booking}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      Book an Appointment
    </a>
  );
}
