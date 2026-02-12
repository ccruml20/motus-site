import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";

export default function HotelsServicePage() {
  return (
    <main className="bg-motusBg text-white">
      {/* HERO */}
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/services-hotels.jpg"
            alt="Hotel design service"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-motusBg to-transparent" />
        </div>

        <Container className="relative">
          <SectionLabel>Services</SectionLabel>

          <h1 className="font-heading mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl leading-[1.08]">
            Hotels
          </h1>

          <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
            Hospitality interiors that feel memorable, refined, and operationally sound—designed to support
            the guest experience and the realities of daily use.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:opacity-90"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-block border border-motusGold text-motusGold px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:bg-motusGold hover:text-black"
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="font-heading mt-8 text-motusHeading text-3xl md:text-4xl font-light max-w-3xl">
                A cohesive design story—from lobby moments to guest-room comfort.
              </h2>

              <p className="mt-6 text-motusMuted leading-relaxed max-w-2xl">
                We develop an identity for the property and carry it through the entire experience—balancing
                materials, lighting, and durability while keeping the look elevated and timeless.
              </p>

              <div className="mt-12 border border-white/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">
                  Deliverables
                </p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <ul className="mt-6 space-y-3 text-motusMuted">
                  {[
                    "Concept + design direction (mood, material story, key moments)",
                    "Space planning guidance + layout refinement",
                    "FF&E direction (furniture, lighting, finishes, art/decor)",
                    "Finish palette + specifications support",
                    "Procurement support + install/styling direction (as needed)",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="border border-white/10 p-8 md:p-9 h-fit">
              <p className="text-motusGold text-xs tracking-[0.26em] uppercase">
                Ideal For
              </p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <ul className="mt-6 space-y-3 text-motusMuted">
                {[
                  "Boutique hotels + branded refreshes",
                  "Lobby + public space upgrades",
                  "Guest room re-designs or phased rollouts",
                  "Owners/operators who want a cohesive design story",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-motusGold text-black px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:opacity-90"
                >
                  Request a Consult
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
