import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Hero() {
  return (
    <>
      <Navbar />

      <section className="hero" id="start">
        <div className="hero__copy">
          <p className="hero__eyebrow">Folio · 2026</p>
          <h1>A quieter place to read.</h1>
          <p>
            Bring your books into one thoughtful library. Read comfortably,
            organise what you love, and keep important passages close.
          </p>
          <div className="hero__actions">
            <a href="/download">Get Folio</a>
            <a className="secondary" href="/reading">
              Explore the experience
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="device-frame">
            <div className="device-frame__screen">
              <div className="device-frame__chrome">
                <div className="device-frame__status">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="device-frame__title">Folio · Library</div>
                <div className="device-frame__row">
                  <div className="device-frame__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <p className="device-frame__text">Lars Vinge · Hard-Boiled Wonderland</p>
                </div>
                <div className="device-frame__progress">
                  <p className="device-frame__text">Chapter 4 of 12</p>
                  <div className="device-frame__progress__bar">
                    <div className="device-frame__progress__fill" style={{ width: "34%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="device-frame__status" style={{ marginTop: "var(--space-4)" }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
