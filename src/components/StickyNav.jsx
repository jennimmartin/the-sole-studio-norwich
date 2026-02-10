import { Link } from "react-router-dom";

export default function StickyNav() {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="align-element py-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-x-16 sm:py-6">
        <Link
          className="text-lg text-white hover:text-charcoal-500 duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg text-white hover:text-charcoal-500 duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-lg text-white hover:text-charcoal-500 duration-300"
          to="/services"
        >
          Services
        </Link>
      </div>
    </div>
  );
}
