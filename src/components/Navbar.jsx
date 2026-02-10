import { Link } from "react-router-dom";
import Img from "../assets/images/heroLogo.png";

const Navbar = () => {
  return (
    <nav>
      {/* Hero logo (scrolls away) */}
      <div className="flex justify-center my-10">
        <img src={Img} alt="The Sole Studio logo" />
      </div>

      {/* Sticky bar (sticks) */}
      <div className="sticky top-0 z-50 bg-black">
        <div className="align-element py-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-x-16 sm:py-6">
          <Link
            className="capitalize text-lg text-white hover:text-charcoal-500 duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="capitalize text-lg text-white hover:text-charcoal-500 duration-300"
            to="/about"
          >
            About
          </Link>
          <Link
            className="capitalize text-lg text-white hover:text-charcoal-500 duration-300"
            to="/services"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
