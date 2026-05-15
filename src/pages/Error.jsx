import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const is404 = error?.status === 404;

  return (
    <>
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Code */}
        <div className="text-8xl md:text-9xl font-semibold text-neutral-200 mb-4">
          {is404 ? "404" : "Error"}
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl mb-4">
          {is404 ? "Page not found" : "Something went wrong"}
        </h1>

        {/* Description */}
        <p className="text-lg text-charcoal-500 mb-8">
          {is404
            ? "The page you're looking for doesn't exist or has been moved."
            : "We're experiencing technical difficulties. Please try again later."}
        </p>

        {/* Helpful Links */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 hover:text-neutral-400 transition-all duration-300"
          >
            Return Home
          </Link>

          <div className="text-sm text-charcoal-500">
            {is404 ? (
              <>
                Looking for something specific? Try our{" "}
                <Link to="/services" className="underline hover:text-black">
                  services page
                </Link>{" "}
                or{" "}
                <Link to="/contact" className="underline hover:text-black">
                  get in touch
                </Link>
                .
              </>
            ) : (
              <>
                If this problem persists, please{" "}
                <Link to="/contact" className="underline hover:text-black">
                  contact us
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
