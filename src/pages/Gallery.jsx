import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";

export default function Gallery() {
  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="A look inside our clinic, treatment rooms, and the smiles we've helped create."
        image="https://images.unsplash.com/photo-1581585095852-95d3181be7f4?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
