import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";

const services = [
  {
    title: "Full-Service Interior Design",
    body:
      "A comprehensive design experience—from concept through installation. Ideal for clients who want a cohesive vision, sourcing support, and a guided process end-to-end.",
    includes: [
      "Discovery + design direction",
      "Space planning + layout refinements",
      "Material + finish selections",
      "Furniture + lighting + decor sourcing",
      "Vendor coordination + install styling",
    ],
  },
  {
    title: "Renovation & Remodel Styling",
    body:
      "Design support for renovations and remodels—focused on material cohesion, finishes, fixtures, and elevating the final look with intentional styling.",
    includes: [
      "Finish palette + selection guidance",
      "Cabinetry + tile + countertop coordination",
      "Fixture + hardware curation",
      "Paint/stain + trim direction",
      "Final styling recommendations",
    ],
    featured: true,
  },
  {
    title: "Furniture & Styling Consultation",
    body:
      "For clients who want a refreshed space without a full remodel. We help you edit, refine, and curate—keeping what works and elevating what doesn’t.",
    includes: [
      "Room edit + recommendations",
      "Furniture plan + sourcing list",
      "Lighting + art + decor direction",
      "Color + texture balance guidance",
      "Styling plan for the finishing touches",
    ],
  },
];

const steps = [
  {
    title: "Discovery",
    body: "We start with goals, inspiration, budget range, and timeline—then define the scope and design direction.",
  },
  {
    title: "Concept",
    body: "Layout + mood + materials take shape. You’ll see the design intent clearly before we commit to selections.",
  },
  {
    title: "Design Development",
    body: "We finalize the palette, key materials, and specifications—making sure every decision supports the whole.",
  },
  {
    title: "Sourcing & Coordination",
    body: "We organize selections, lead times, and procurement—coordinating with vendors and trades as needed.",
  },
  {
    title: "Install & Styling",
    body: "The final layer: placement, balance, and the details that make a space feel calm, finished, and lived-in.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-motusBg text-white">
      {/* INTRO */}
      <section className="pt-36 pb-20">
        <Container>
          <SectionLabel>Services</SectionLabel>

          <h1 className="mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl">
            Design services built around clarity, calm, and timeless materiality.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl">
            Choose the level of support you need—whether it’s full-service design or a focused refresh.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-motusGold text-black px-10 py-4 text-xs md:text-sm tracking-[0.22em] uppercase transition hover:opacity-90"
            >
              Book a Consultation
            </Link>
          </div>
        </Container>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className={[
                  "p-8 md:p-9 lg:p-10 border transition duration-300",
                  s.featured
                    ? "border-motusGold/80"
                    : "border-white/10 hover:border-motusGold/60 hover:-translate-y-1",
                ].join(" ")}
              >
                <h2 className="text-motusHeading text-xl md:text-2xl font-light leading-snug">
                  {s.title}
                </h2>

                <div className="mt-6 h-px w-full bg-white/10" />

                <p className="mt-6 text-sm md:text-base text-motusHeading/70 leading-relaxed">
                  {s.body}
                </p>

                <ul className="mt-8 space-y-3 text-sm text-motusHeading/70">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-block border border-motusGold text-motusGold px-8 py-3 text-xs tracking-[0.22em] uppercase transition hover:bg-motusGold hover:text-black"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <Container>
          <SectionLabel>Process</SectionLabel>

          <h2 className="mt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
            A clear, guided process that keeps decisions calm and cohesive.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {steps.map((step, idx) => (
              <div key={step.title} className="border border-white/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.24em] uppercase">
                  Step {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-motusHeading text-xl font-light">
                  {step.title}
                </h3>
                <p className="mt-4 text-motusHeading/70 text-sm md:text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.22em] uppercase transition hover:opacity-90"
            >
              Start Your Project
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
