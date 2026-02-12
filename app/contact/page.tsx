import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { sendContactEmail } from "./actions";

export default function ContactPage({
  searchParams,
}: {
  searchParams: { sent?: string };
}) {
  const sent = searchParams?.sent;

  return (
    <main className="bg-motusBg text-motusHeading">
      <section className="pt-36 pb-28">
        <Container>
          <SectionLabel>Contact</SectionLabel>

          <h1 className="font-heading mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl">
            Let’s Begin Designing Your Space.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl">
            Tell us about your project, timeline, and goals. We’ll respond within 1–2 business days.
          </p>

          {sent === "1" && (
            <p className="mt-10 text-motusMuted">
              ✅ Message sent. We’ll be in touch soon.
            </p>
          )}
          {sent === "0" && (
            <p className="mt-10 text-red-300">
              Please fill out all fields.
            </p>
          )}

          <form action={sendContactEmail} className="mt-14 grid gap-8 max-w-3xl">
            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-motusGold outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-motusGold outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.24em] uppercase text-motusGold">Project Details</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-motusGold outline-none py-3 transition resize-none"
              />
            </div>

            <div className="pt-2">
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

