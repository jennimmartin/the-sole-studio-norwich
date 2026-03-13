import { useState, useEffect } from "react";

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen or submitted the popup
    const hasSeenPopup = localStorage.getItem("emailPopupSeen");
    const hasSubmitted = localStorage.getItem("emailPopupSubmitted");

    if (hasSeenPopup || hasSubmitted) {
      return; // Don't show popup
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("emailPopupSeen", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      formData.append("form-name", "email-signup");
      formData.append("email", email);
      formData.append("source", "Newsletter Popup - Free Foot Care Guide");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.setItem("emailPopupSubmitted", "true");

        // Trigger PDF download
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "/Free_Foot_Care_Guide.pdf";
          link.download = "Free_Foot_Care_Guide.pdf";
          link.click();

          // Close popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }, 500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md">
        <div className="bg-white p-8 shadow-2xl relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-charcoal-500 hover:text-black transition-colors"
            aria-label="Close popup"
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

          {!submitted ? (
            <>
              {/* Content */}
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Get Your Free Foot Care Guide
              </h2>
              <p className="text-charcoal-500 mb-6">
                Sign up to receive professional foot care tips, treatment
                insights, and exclusive offers.
              </p>
              <p className="text-sm text-charcoal-500 mb-6">
                <strong>Free download:</strong> Your Essential Foot Care Guide
                (PDF)
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                data-netlify="true"
                name="email-signup"
              >
                <input type="hidden" name="form-name" value="email-signup" />

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3 hover:bg-charcoal-500 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Guide"}
                </button>

                <p className="text-xs text-charcoal-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Thank you!
              </h3>
              <p className="text-charcoal-500">
                Your free guide is downloading now.
                <br />
                Check your email for more foot care tips.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmailPopup;
