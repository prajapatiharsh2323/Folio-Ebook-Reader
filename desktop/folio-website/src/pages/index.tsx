import { Hero } from "../components/Hero";
import { DeviceShowcase } from "../components/DeviceShowcase";
import { LibrarySection } from "../components/LibrarySection";
import { ReaderSection } from "../components/ReaderSection";
import { NotesSection } from "../components/NotesSection";
import { DownloadSection } from "../components/DownloadSection";
import { Footer } from "../components/Footer";
import { ReadingPreview } from "../components/ReadingPreview";

export async function getStaticProps() {
  return { props: {} };
}

export default function IndexPage() {
  return (
    <>
      <main id="main">
        <Hero />

        <section className="section" id="product">
          <div className="section__wrap">
            <div className="section__head section__head--center">
              <h2>Show, don't tell</h2>
              <p>
                The interface is the product: a personal library, a reader you
                can shape, and notes you can return to.
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
    </>
  );
}
