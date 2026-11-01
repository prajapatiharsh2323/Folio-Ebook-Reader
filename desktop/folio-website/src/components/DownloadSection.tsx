import { Footer } from "./Footer";

export function DownloadSection() {
  return (
    <>
      <section className="section download-section" id="download">
        <div className="section__wrap">
          <div className="section__head">
            <h2>Your reading setup, your library.</h2>
            <p>
              A personal reading library on Android and desktop, with local
              storage and an explicit backup/restore workflow. Import EPUB, HTML
              and TXT — PDF is not supported.
            </p>
          </div>

          <div className="download-section__grid">
            <article className="download-section__card">
              <h3>Android</h3>
              <p>Your books, across devices. All local — no cloud in sight.</p>
              <ul>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <a
                    href="/download/android"
                    aria-label="Download Folio for Android"
                  >
                    Download from the Play Store
                  </a>
                </li>
              </ul>
            </article>

            <article className="download-section__card">
              <h3>Windows</h3>
              <p>The full library on your desktop — local storage, backup, restore.</p>
              <ul>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 12a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <a
                    href="/download/windows"
                    aria-label="Download Folio for Windows"
                  >
                    Download for Windows
                  </a>
                </li>
              </ul>
            </article>

            <article className="download-section__card">
              <h3>macOS</h3>
              <p>The full library on your desktop — local storage, backup, restore.</p>
              <ul>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <rect x="9" y="3" width="6" height="18" rx="2" />
                  </svg>
                  <a
                    href="/download/macos"
                    aria-label="Download Folio for macOS"
                  >
                    Download for macOS
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
