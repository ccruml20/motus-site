import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Calm, Functional Spaces",
    body: "Every decision supports how the space feels and functions—before it supports how it photographs.",
  },
  {
    title: "Material Honesty",
    body: "We prioritize natural textures, balanced contrast, and timeless finishes that wear beautifully over time.",
  },
  {
    title: "Clarity in Decision-Making",
    body: "Design is easier when the vision is clear. We simplify choices and keep the direction consistent.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      {/* INTRO */}
      <section className="pt-36 pb-20">
        <Container>
          <SectionLabel>About</SectionLabel>

          <h1 className="font-heading mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl">
            Motus is an interior design studio focused on timeless, refined living.
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl">
            We design spaces that feel calm, functional, and grounded—built from thoughtful proportion,
            natural materials, and intentional detail.
          </p>
        </Container>
      </section>

      {/* IMAGE + STORY */}
      <section className="pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="relative w-full h-[520px] overflow-hidden border border-black/10">
              <Image
                src="/about.jpg"
                alt="Motus studio portrait or interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div>
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="font-headingmt-8 text-motusHeading text-3xl md:text-4xl font-light">
                Design that feels effortless—because it’s intentional.
              </h2>

              <p className="mt-6 text-motusMuted text-sm md:text-base leading-relaxed">
                Motus exists to help clients make confident decisions with a clear, cohesive vision.
                We balance warmth and restraint—layering texture, tone, and proportion so a space
                feels finished without feeling fussy.
              </p>

              <p className="mt-6 text-motusMuted text-sm md:text-base leading-relaxed">
                Whether we’re guiding a full-home transformation or refining a single room, we keep the process
                calm and structured—so the final result feels grounded, elegant, and livable.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:opacity-90"
                >
                  Work With Motus
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-28">
        <Container>
          <SectionLabel>Values</SectionLabel>

          <h2 className="font-headingmt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
            What we prioritize in every project.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border border-black/10 p-8 md:p-9">
                <h3 className="text-motusHeading text-xl font-light">{v.title}</h3>
                <div className="mt-6 h-px w-full bg-white/10" />
                <p className="mt-6 text-motusMuted text-sm md:text-base leading-relaxed">
                  {v.body}
                </p>
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
