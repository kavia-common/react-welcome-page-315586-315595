import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Main application shell: fixed header, centered main, and footer. */
  const handleSampleAction = () => {
    // Kept intentionally simple; replace with real action later.
    // eslint-disable-next-line no-alert
    alert("Sample action triggered.");
  };

  return (
    <div className="app">
      <header className="app__header" role="banner">
        <div className="app__container app__headerInner">
          <a className="app__brand" href="/" aria-label="Home">
            React Welcome
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
          <span className="app__footerText">© {new Date().getFullYear()} React Welcome Page</span>
          <a className="app__footerLink" href="#main">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
