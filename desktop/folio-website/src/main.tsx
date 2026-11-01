import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { DeviceShowcase } from "./components/DeviceShowcase";
import { LibrarySection } from "./components/LibrarySection";
import { ReaderSection } from "./components/ReaderSection";
import { NotesSection } from "./components/NotesSection";
import { ReadingPreview } from "./components/ReadingPreview";
import { DownloadSection } from "./components/DownloadSection";

const root = document.getElementById("root");
if (!root) throw new Error("#root not found in index.html");

createRoot(root).render(
  <StrictMode>
    <Navbar />
    <main>
      <Hero />
      <section className="section" id="product">
        <div className="section__wrap">
          <div className="section__head section__head--center">
            <h2>Show, don't tell</h2>
            <p>
              The interface is the product: a personal library, a reader you can
              shape, and notes you can return to.
            </p>
          </div>
          <div className="section__grid">
            <DeviceShowcase />
            <LibrarySection />
          </div>
        </div>
      </section>
      <ReaderSection />
      <section className="section" id="preview">
        <div className="section__wrap">
          <div className="section__head section__head--center">
            <h2>Try the reading experience</h2>
            <p>
              Switch between a paper-like warm page, a light page and a dark
              page, and change the text size. The preview mirrors what Folio's
              reader does — real page colours, real ink, real controls.
            </p>
          </div>
          <ReadingPreview />
        </div>
      </section>
      <NotesSection />
      <DownloadSection />
    </main>
    <Footer />
  </StrictMode>
);
