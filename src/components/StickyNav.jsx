import { Link } from "react-router-dom";
import { useState } from "react";

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="sticky top-0 z-[40] bg-black">
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
              to="/treatments"
            >
              Treatments
            </Link>
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/faq"
            >
              FAQs
            </Link>
            <Link
              className="text-lg text-white hover:text-neutral-400 duration-300 tracking-wide"
              to="/blog"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile Hamburger (only shows when menu is closed) */}
          {!isOpen && (
            <div className="sm:hidden flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white p-2 focus:outline-none hover:text-neutral-400 duration-300"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[80] transition-opacity duration-300 sm:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button - Fixed Position */}
        <button
          onClick={closeMenu}
          className="fixed top-4 right-4 z-[90] text-white p-2 focus:outline-none hover:text-neutral-400 duration-300"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Links */}
        <nav className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-6 py-24">
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
            to="/treatments"
            onClick={closeMenu}
          >
            Treatments
          </Link>
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/faq"
            onClick={closeMenu}
          >
            FAQs
          </Link>
          <Link
            className="text-2xl text-white hover:text-neutral-400 duration-300 tracking-widest"
            to="/blog"
            onClick={closeMenu}
          >
            Blog
          </Link>
        </nav>
      </div>
    </>
  );
}
