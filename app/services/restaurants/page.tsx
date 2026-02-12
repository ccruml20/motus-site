import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import ServiceHero from "@/components/ServiceHero";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantsServicePage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      <ServiceHero
        title="Restaurants"
        description="Atmosphere-forward dining environments where materiality, lighting, and flow elevate the guest experience."
        imageSrc="/services-restaurants.jpg"
        imageAlt="Restaurant interior design service"
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="font-heading mt-8 text-motusHeading text-3xl md:text-4xl font-light max-w-3xl">
                A brand-forward space that feels intentional from entry to last course.
              </h2>

              <p className="mt-6 text-motusMuted leading-relaxed max-w-2xl">
                We shape the guest journey with material contrast, lighting hierarchy, and layout clarity—so the space
                feels elevated while working smoothly for staff and operations.
              </p>

              <div className="mt-12 border border-black/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Deliverables</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <ul className="mt-6 space-y-3 text-motusMuted">
                  {[
                    "Concept + design story (mood, palette, signature moments)",
                    "Seating/traffic flow considerations + layout refinement",
                    "Lighting plan direction (ambient/task/accent hierarchy)",
                    "Finish selections (durability, cleanability, warmth)",
                    "Furniture + banquette + decor curation",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="border border-black/10 p-8 md:p-9 h-fit">
              <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Ideal For</p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <ul className="mt-6 space-y-3 text-motusMuted">
                {[
                  "New restaurant openings",
                  "Refreshes focused on atmosphere + brand",
                  "Dining room + bar integration",
                  "Operators who want a durable, elevated finish palette",
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
