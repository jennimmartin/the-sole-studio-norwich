import { Link } from "react-router-dom";

export default function ViewTreatmentsButton({
  size = "default",
  className = "",
}) {
  const baseStyles =
    "transition-all duration-300 cursor-pointer inline-block text-center outline outline-1 outline-neutral-200 hover:bg-black hover:text-white bg-white text-black";

  const sizes = {
    default: "px-6 py-3",
    large: "px-8 py-4",
    small: "px-4 py-2",
  };

  const classes = `${baseStyles} ${sizes[size]} ${className}`;

  return (
    <Link to="/services" className={classes}>
      View Treatments
    </Link>
  );
}
