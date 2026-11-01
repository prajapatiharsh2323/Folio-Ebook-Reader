import { useState } from "react";

type ReadingTheme = "light" | "warm" | "dark" | "true-black";
type TextSize = 0.8 | 1 | 1.15 | 1.3 | 1.5 | 1.7 | 2;

const THEMES: ReadingTheme[] = ["light", "warm", "dark", "true-black"];
const TEXT_SIZES: TextSize[] = [0.8, 1, 1.15, 1.3, 1.5, 1.7, 2];

const THEME_BG: Record<ReadingTheme, string> = {
  light: "#fafaf7",
  warm: "#f4ecd8",
  dark: "#121214",
  "true-black": "#000000",
};

const THEME_BORDER: Record<ReadingTheme, string> = {
  light: "#e6e3dc",
  warm: "#e0d4b8",
  dark: "#2c2c32",
  "true-black": "#232329",
};

const THEME_LABEL: Record<ReadingTheme, string> = {
  light: "Light",
  warm: "Paper",
  dark: "Dark",
  "true-black": "True black",
};

// Mirrors ReaderPrefsMapper THEME_COLORS plus the app palette tokens so the
// website preview never invents reader colours.
const THEME_CANVAS: Record<ReadingTheme, string> = {
  light: "#fafaf7",
  warm: "#f4ecd8",
  dark: "#121214",
  "true-black": "#000000",
};

const THEME_TEXT: Record<ReadingTheme, string> = {
  light: "#1c1b19",
  warm: "#3b3226",
  dark: "#e6e3dc",
  "true-black": "#c8c4bc",
};

function ReadingCanvas({
  theme,
  children,
  className = "",
}: {
  theme: ReadingTheme;
  children: React.ReactNode;
  className?: string;
}) {
  const bg = THEME_CANVAS[theme];
  const ink = THEME_TEXT[theme];

  return (
    <div
      className={`reading-preview__canvas ${className}`}
      style={{
        background: bg,
        color: ink,
      }}
    >
      {children}
    </div>
  );
}

export function ReadingPreview() {
  const [theme, setTheme] = useState<ReadingTheme>("warm");
  const [textSize, setTextSize] = useState(1.15);

  const themeLabel = THEME_LABEL[theme];

  return (
    <div className="reading-preview" role="region" aria-label="Interactive reading preview">
      <div className="reading-preview__stage">
        <ReadingCanvas theme={theme}>
          <p
            style={{
              fontSize: `${textSize}rem`,
              lineHeight: "1.7",
              fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
            }}
          >
            Aa — The lantern lit the page, and the page lit the room around it.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "system-ui, sans-serif",
              color: "var(--text-secondary)",
              marginTop: "1em",
            }}
          >
            Light, warm and dark readings for the same passage.
          </p>
        </ReadingCanvas>
        <p className="reading-preview__label">Reading preview</p>
      </div>

      <div className="reading-preview__controls">
        <div className="reading-preview__label-row">
          <span className="reading-preview__label-text">Reading appearance</span>
          <span className="reading-preview__note">{themeLabel}</span>
        </div>

        <div className="reading-preview__swatches">
          {THEMES.map((t) => (
            <span key={t}>
              <input
                className="reading-preview__swatch-input"
                type="radio"
                name="reading-appearance"
                value={t}
                checked={theme === t}
                onChange={() => setTheme(t)}
                aria-label={`${t} reading appearance`}
              />
              <span className="reading-preview__swatch-label">Aa</span>
              <span className="reading-preview__swatch-ink">Aa</span>
              <span
                className="reading-preview__swatch-swatch"
                style={{
                  background: THEME_BG[t],
                  borderColor: THEME_BORDER[t],
                }}
              />
            </span>
          ))}
        </div>

        <div className="reading-preview__sizes">
          <span className="reading-preview__label-text">Text size</span>
          {TEXT_SIZES.map((size) => (
            <span key={size}>
              <input
                className="reading-preview__size-input"
                type="radio"
                name="text-size"
                value={String(size)}
                checked={textSize === size}
                onChange={() => setTextSize(size)}
                aria-label={`Text size ${size}×`}
              />
              <span className="reading-preview__size-label">Aa</span>
              <span className="reading-preview__size-value">{size.toFixed(2)}×</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
