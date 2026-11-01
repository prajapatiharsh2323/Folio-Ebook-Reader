import { Footer } from "./Footer";

export function LibrarySection() {
  return (
    <>
      <section className="section library-section" id="library">
        <div className="section__wrap">
          <div className="section__head">
            <h2>Your books, thoughtfully organised.</h2>
            <p>
              Find books, follow your progress and group titles into collections.
            </p>
          </div>

          <div className="library-section__list">
            <article className="library-section__item">
              <div className="library-section__cover" aria-hidden="true">
                <svg width="30" height="42" viewBox="0 0 30 42" fill="none">
                  <rect x="2" y="6" width="26" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 16 L15 7 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 30 L15 21 L26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 38 L15 30 L25 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <div className="library-section__meta">
                <h3 className="library-section__title">Hard-Boiled Wonderland</h3>
                <p>Lars Vinge</p>
              </div>
              <div className="library-section__progress">
                <span>34% read</span>
                <div className="library-section__progress__bar">
                  <div className="library-section__progress__fill" style={{ width: "34%" }} />
                </div>
              </div>
            </article>

            <article className="library-section__item">
              <div className="library-section__cover" aria-hidden="true">
                <svg width="30" height="42" viewBox="0 0 30 42" fill="none">
                  <rect x="2" y="6" width="26" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 16 L15 7 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 30 L15 21 L26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="library-section__meta">
                <h3 className="library-section__title">The Shadow of the Wind</h3>
                <p>Carlos Ruiz Zafón</p>
              </div>
              <div className="library-section__progress">
                <span>72% read</span>
                <div className="library-section__progress__bar">
                  <div className="library-section__progress__fill" style={{ width: "72%" }} />
                </div>
              </div>
            </article>

            <article className="library-section__item">
              <div className="library-section__cover" aria-hidden="true">
                <svg width="30" height="42" viewBox="0 0 30 42" fill="none">
                  <rect x="2" y="6" width="26" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 16 L15 7 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 30 L15 21 L26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 38 L15 30 L25 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <div className="library-section__meta">
                <h3 className="library-section__title">The Book of Lost Things</h3>
                <p>John Connolly</p>
              </div>
              <div className="library-section__progress">
                <span>New</span>
                <div className="library-section__progress__bar">
                  <div className="library-section__progress__fill" style={{ width: "0%" }} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
