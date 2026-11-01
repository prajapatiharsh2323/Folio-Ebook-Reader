import { Footer } from "./Footer";

export function NotesSection() {
  return (
    <>
      <section className="section notes-section" id="notes">
        <div className="section__wrap">
          <div className="section__head">
            <h2>Keep the words worth remembering.</h2>
            <p>
              Mark passages, add notes and bookmarks, then return to them from
              one organised place.
            </p>
          </div>

          <div className="notes-section__stage">
            <div className="notes-section__canvas">
              <article className="notes-section__card">
                <div className="notes-section__card-mark">H</div>
                <div className="notes-section__card-body">
                  <div className="notes-section__card-title">
                    Hard-Boiled Wonderland · ch. 4
                  </div>
                  <p className="notes-section__card-quote">
                    The second chapter is where the reading comfort settings
                    earn their keep: line height, margins, and the letters set
                    free on the page.
                  </p>
                  <p className="notes-section__card-note">
                    Highlighted in soft ink. “The second chapter is where…”
                  </p>
                </div>
              </article>

              <article className="notes-section__card">
                <div className="notes-section__card-mark">N</div>
                <div className="notes-section__card-body">
                  <div className="notes-section__card-title">
                    The Shadow of the Wind · p. 88
                  </div>
                  <p className="notes-section__card-quote">
                    “Every storm leaves something behind.” — Ariel, ch. 9
                  </p>
                  <p className="notes-section__card-note">
                    “Bookmarks the line about the storm. Bear with me.”
                  </p>
                </div>
              </article>
            </div>

            <aside className="notes-section__aside">
              <h3>Your notes</h3>
              <ul>
                <li>
                  <strong>Hard-Boiled Wonderl…</strong> — 3 calls
                </li>
                <li>
                  <strong>Hard-Boiled Wonderl…</strong> — 1 highlight
                </li>
                <li>
                  <strong>The Shadow of the Wind</strong> — 1 note
                </li>
                <li>
                  <strong>The Book of Lost…</strong> — 0 notes
                </li>
              </ul>
              <div className="notes-section__chips">
                <span className="notes-section__chip">Work</span>
                <span className="notes-section__chip">New</span>
                <span className="notes-section__chip">Waiting</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
