import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import ServiceCards from "@/components/ServiceCards";
import { serviceCards } from "@/components/serviceData";
import Link from "next/link";

const processSteps = [
  { title: "Discovery", body: "Define goals, brand tone, scope, timeline, and priorities." },
  { title: "Concept + Direction", body: "Develop the design story: mood, materials, and key moments." },
  { title: "Design Development", body: "Refine selections and documentation with clarity and cohesion." },
  { title: "Coordination", body: "Align with vendors/trades and keep decisions organized." },
  { title: "Install + Styling", body: "Finalize details and styling for a complete, intentional finish." },
];

export default function ServicesPage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      {/* Header */}
      <section className="pt-36 pb-14">
        <Container>
          <SectionLabel>Services</SectionLabel>

          <h1 className="font-heading mt-8 text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl leading-[1.08]">
            Hospitality-first interiors—elegant, memorable, and built to perform.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
            Explore our service categories below. Each links to a detailed overview and typical deliverables.
          </p>
        </Container>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <Container>
          <ServiceCards items={serviceCards} />
        </Container>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-motusSection">
        <Container className="relative">
          <SectionLabel>Process</SectionLabel>

          <h2 className="font-heading mt-8 text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
            A structured process—calm, clear, and easy to execute.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {processSteps.map((s, idx) => (
              <div key={s.title} className="border border-black/10 p-8 md:p-9 bg-motusBg">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">
                  Step {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading mt-4 text-xl md:text-2xl font-light">
                  {s.title}
                </h3>
                <div className="mt-6 h-px w-full bg-black/10" />
                <p className="mt-6 text-motusMuted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 bg-motusDark text-[#F3EFE8]">
        <Container>
          <div className="border border-white/15 p-10 md:p-14 lg:p-16">

            <SectionLabel tone="dark">Ready to Begin?</SectionLabel>

            <h2 className="font-heading mt-8 text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl leading-[1.1]">
              Let’s design something thoughtful, elevated, and enduring.
            </h2>

            <p className="mt-6 text-white/75 max-w-2xl leading-[1.75]">
              Share a few details about your space and goals. We’ll respond with next steps and scheduling options.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:opacity-90"
              >
                Start a Project
              </a>

              <a
                href="/portfolio"
                className="inline-block border border-white/30 text-white px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:bg-white hover:text-black"
              >
                View Portfolio
              </a>
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}

