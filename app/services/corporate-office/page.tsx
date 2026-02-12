import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";

export default function OfficeServicePage() {
  return (
    <main className="bg-motusBg text-white">
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/services-office.jpg"
            alt="Corporate and office design service"
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
          <h1 className="font-heading mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light">
            Corporate / Office
          </h1>
          <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
            Work environments that feel calm, considered, and high-functioning—supporting productivity, brand,
            and the way teams actually use space.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:opacity-90">
              Start a Project
            </Link>
            <Link href="/services" className="inline-block border border-motusGold text-motusGold px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:bg-motusGold hover:text-black">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="font-heading mt-8 text-motusHeading text-3xl md:text-4xl font-light max-w-3xl">
                A workspace that reflects your brand—and supports your team.
              </h2>

              <p className="mt-6 text-motusMuted leading-relaxed max-w-2xl">
                We create material palettes and layouts that feel elevated without being precious—balancing focus areas,
                collaboration zones, acoustics, and comfort.
              </p>

              <div className="mt-12 border border-white/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Deliverables</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <ul className="mt-6 space-y-3 text-motusMuted">
                  {[
                    "Design direction + finish palette (brand-forward, durable)",
                    "Space planning guidance (focus, meeting, lounge zones)",
                    "Lighting and material recommendations for comfort",
                    "Furniture selections + layout guidance",
                    "Reception/entry experience + key moments",
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
              <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Ideal For</p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <ul className="mt-6 space-y-3 text-motusMuted">
                {[
                  "Office refreshes and new suites",
                  "Reception + conference upgrades",
                  "Client-facing environments that need polish",
                  "Teams wanting a calm, functional, elevated palette",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact" className="inline-block w-full text-center bg-motusGold text-black px-10 py-4 text-xs tracking-[0.20em] uppercase transition hover:opacity-90">
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
