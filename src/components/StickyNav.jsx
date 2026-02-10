import { Link } from "react-router-dom";
import { useState } from "react";

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-black">
        <div className="align-element py-4 sm:py-6">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex justify-center gap-x-16">
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/services"
            >
              Services
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="sm:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none  hover:text-neutral-400 duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 sm:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/services"
            onClick={closeMenu}
          >
            Services
          </Link>
        </nav>
      </div>
    </>
  );
}
