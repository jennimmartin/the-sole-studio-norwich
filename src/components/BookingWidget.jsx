import { useEffect } from "react";

// Wraps the third-party BookApp widget script so it works correctly with
// React Router's client-side navigation (pages mount/unmount without a
// full browser reload, unlike the plain HTML page this snippet assumes).
const BookingWidget = () => {
  useEffect(() => {
    let cancelled = false;
    const scriptId = "bookapp-widget-script";

    // Queues (or immediately runs, once BookApp's own script is fully
    // loaded) the actual widget render. This is BookApp's own public
    // "ready" API — always go through it rather than calling
    // window.BookApp.widget() directly, since their script may still be
    // finishing setup even after the script tag itself has loaded.
    const initWidget = () => {
      if (cancelled) return;
      window.BookAppWidgetReady(() => {
        if (cancelled) return;
        window.BookApp.widget(
          "#bookapp-reservation-widget",
          "thesolestudionorwich"
        );
      });
    };

    if (document.getElementById(scriptId)) {
      // Script already loaded on an earlier visit this session —
      // BookAppWidgetReady still exists, just queue/run our init again.
      initWidget();
      return () => {
        cancelled = true;
      };
    }

    // First time loading this page: set up the same ready-queue shim
    // BookApp's own embed snippet creates.
    (function (w, d, existingReady) {
      const ready = function (fn) {
        ready.queue.push(fn);
      };
      ready.queue = existingReady.queue || [];
      w.BookAppWidgetReady = ready;

      const script = d.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.book.app/embed/v1.js";
      script.type = "text/javascript";
      script.async = true;
      script.addEventListener("load", function () {
        while (ready.queue.length) {
          ready.queue.shift()();
        }
      });
      d.body.appendChild(script);
    })(window, document, window.BookAppWidgetReady || function () {});

    // Queue our widget-init callback NOW, before the script has finished
    // loading — this is the actual fix. The script's own 'load' handler
    // above will drain this queue (including this callback) once ready.
    initWidget();

    return () => {
      cancelled = true;
    };
  }, []);

  return <div id="bookapp-reservation-widget"></div>;
};

export default BookingWidget;
