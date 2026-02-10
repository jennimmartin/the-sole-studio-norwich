import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/error">Error</Link>
      <Link to="/legal">Legal</Link>
      <Link to="/services">Services</Link>
    </div>
  );
};
export default Landing;
