import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <h5 className="text-center py-6 text-white">
          <span className="text-white hover:text-neutral-400 duration-300">
            <Link to="/legal">Legal</Link>
          </span>
          {" | "}
          &copy; {new Date().getFullYear()}
          {" | "}
          <span>
            Created by{" "}
            <a
              href="https://jennimmartin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-400 duration-300"
            >
              Jenni M Martin
            </a>
          </span>
        </h5>
      </footer>
    </>
  );
};
export default Footer;
