import { useEffect, useRef, useState } from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Main application shell: fixed header, centered main, and footer. */
  const [statusMessage, setStatusMessage] = useState("");
  const clearTimerRef = useRef(null);

  useEffect(() => {
    // Minor polish: set a stable document title for this app.
    document.title = "React Welcome Page";

    // Cleanup any pending timer on unmount.
    return () => {
      if (clearTimerRef.current) {
        window.clearTimeout(clearTimerRef.current);
      }
    };
  }, []);

  const showStatus = (message) => {
    setStatusMessage(message);

    if (clearTimerRef.current) {
      window.clearTimeout(clearTimerRef.current);
    }

    // Clear message after a short delay (non-blocking).
    clearTimerRef.current = window.setTimeout(() => {
      setStatusMessage("");
      clearTimerRef.current = null;
    }, 3000);
  };

  const handleSampleAction = () => {
    // Replace the blocking alert with an in-app transient message.
    showStatus("Sample action triggered successfully.");
  };

  return (
    <div className="app">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="app__header" role="banner">
        <div className="app__container app__headerInner">
          <a className="app__brand" href="/" aria-label="Home">
            React Welcome Page
          </a>

          <nav className="app__nav" aria-label="Primary navigation">
            <a className="app__navLink" href="#main">
              Main
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="app__main" role="main" tabIndex={-1}>
        <section className="app__hero" aria-labelledby="welcome-title">
          <h1 id="welcome-title" className="app__title">
            Welcome
          </h1>
          <p className="app__subtitle">
            This is a simple React page with a clean header, centered content, and footer.
          </p>

          {/* Non-blocking inline "toast-like" feedback.
              - role="status" announces updates without stealing focus
              - aria-live ensures screen readers are notified */}
          <div
            className="app__statusRegion"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {statusMessage ? (
              <div className="app__status app__status--success">{statusMessage}</div>
            ) : (
              // Keep layout stable even when empty.
              <div className="app__status app__status--placeholder" aria-hidden="true" />
            )}
          </div>

          <div className="app__actions" role="group" aria-label="Sample actions">
            <button
              type="button"
              className="button button--primary"
              onClick={handleSampleAction}
              aria-label="Run sample action"
            >
              Sample Button
            </button>
          </div>
        </section>
      </main>

      <footer className="app__footer" role="contentinfo">
        <div className="app__container app__footerInner">
          <span className="app__footerText">
            © {new Date().getFullYear()} React Welcome Page
          </span>
          <a className="app__footerLink" href="#main">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
