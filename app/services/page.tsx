import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import ServiceCards from "@/components/ServiceCards";
import { serviceCards } from "@/components/serviceData";
import Link from "next/link";

const processSteps = [
  {
    title: "Discovery",
    body: "We define goals, guest experience, brand tone, scope, and timeline—then align on priorities and budget ranges.",
  },
  {
    title: "Concept + Direction",
    body: "We develop the design story: spatial flow, mood, materials, and key moments that shape the experience.",
  },
  {
    title: "Design Development",
    body: "We refine layouts, specifications, and selections—ensuring every decision supports the full concept.",
  },
  {
    title: "Coordination",
    body: "We coordinate selections and documentation for vendors and trades, keeping the process organized and cohesive.",
  },
  {
    title: "Install + Styling",
    body: "Final layer and finish: placement, balance, and details that make the space feel complete and intentional.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-motusBg text-white">

      {/* HEADER (tight + editorial) */}
      <section className="pt-36 pb-16">
        <Container>
          <SectionLabel>Services</SectionLabel>

          <h1 className="mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl leading-[1.08]">
            Design for Hotels, Restaurants, Bars, Retail, and Corporate environments.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
            Commercial interiors shaped by brand clarity, guest experience, and operational performance.
          </p>
        </Container>
      </section>

      {/* SERVICE IMAGE GRID — NOW PROMINENT */}
      <section className="pb-32">
        <Container>
          <ServiceCards items={serviceCards} />
        </Container>
      </section>

      {/* PROCESS */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,245,242,0.05)_0%,transparent_60%)]" />

        <Container className="relative">
          <SectionLabel>Process</SectionLabel>

          <h2 className="mt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
            A structured approach that keeps design intentional and execution smooth.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {processSteps.map((s, idx) => (
              <div key={s.title} className="border border-white/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">
                  Step {String(idx + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-motusHeading text-xl md:text-2xl font-light">
                  {s.title}
                </h3>

                <div className="mt-6 h-px w-full bg-white/10" />

                <p className="mt-6 text-motusMuted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <div className="border border-white/10 p-10 md:p-14 lg:p-16">
            <SectionLabel>Get In Touch</SectionLabel>

            <h2 className="mt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
              Ready to build something refined, functional, and enduring?
            </h2>

            <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
              Tell us about your project and we’ll outline next steps.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:opacity-90"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
