import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

export default function ContactPage() {
  return (
    <main className="bg-motusBg text-white">
      <section className="pt-36 pb-28">
        <Container>
          <SectionLabel>Contact</SectionLabel>

          <h1 className="mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl">
            Let’s Begin Designing Your Space.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl">
            Tell us about your project, timeline, and goals. We’ll respond within 1–2 business days.
          </p>

          {/* FORM */}
          <form className="mt-14 grid gap-8 max-w-3xl">

            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">
                Name
              </label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-white/20 focus:border-motusGold outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">
                Email
              </label>
              <input
                type="email"
                className="mt-3 w-full bg-transparent border-b border-white/20 focus:border-motusGold outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">
                Project Details
              </label>
              <textarea
                rows={4}
                className="mt-3 w-full bg-transparent border-b border-white/20 focus:border-motusGold outline-none py-3 transition resize-none"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="bg-motusGold text-black px-10 py-4 text-xs tracking-[0.22em] uppercase transition hover:opacity-90"
              >
                Submit Inquiry
              </button>
            </div>

          </form>
        </Container>
      </section>
    </main>
  );
}
