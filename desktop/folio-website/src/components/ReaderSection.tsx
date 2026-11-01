import { Footer } from "./Footer";

function ReadingPanel({
  theme,
  textSize,
}: {
  theme: "light" | "dark" | "warm";
  textSize: number;
}) {
  const baseClassName = "reader-section__canvas";
  const panelClass = theme === "dark" ? `${baseClassName} dark` : baseClassName;
  const textClass = theme === "dark" ? `${baseClassName} dark` : baseClassName;

  const text = `Aa — The lantern lit the page, and the page lit the room around it.`;

  return (
    <div className="reader-section__stage">
      <div className={panelClass}>
        <div className="reader-section__canvas">
          <p
            className={textClass}
            style={{
              fontSize: `${textSize}rem`,
              lineHeight: "1.8",
              fontFamily: "Georgia, 'Iowan Old Style', serif",
            }}
          >
            {text}
          </p>
        </div>
        <p className="reader-section__label">Reader · Paper</p>
      </div>

      <div className="reader-section__closeup">
        <div className="reader-section__closeup-card">
          <h4>App appearance controls</h4>
          <div className="reader-section__closeup-canvas">
            <div style={{ display: "grid", placeItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--reader-paper)",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "Georgia, serif",
                  color: "var(--reader-paper-ink)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                }}
              >
                Aa
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Theme · Text size
              </p>
            </div>
          </div>
        </div>
        <div className="reader-section__closeup-card">
          <div
            style={{
              border: "1px solid var(--paper-border)",
              borderRadius: "10px",
              background: "var(--reader-paper)",
              padding: "12px",
              minHeight: "80px",
              display: "grid",
              placeItems: "center",
              fontFamily: "Georgia, serif",
              color: "var(--reader-paper-ink)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
            }}
          >
            Aa — The lantern lit the page.
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReaderSection() {
  return (
    <>
      <section className="section reader-section" id="reading">
        <div className="section__wrap">
          <div className="section__head">
            <h2>A page that feels right to you.</h2>
            <p>
              Adjust text, typeface, spacing and reading appearance until the
              page feels comfortable.
            </p>
          </div>

          <div className="reader-section__stage">
            <ReadingPanel theme="warm" textSize={1.15} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
