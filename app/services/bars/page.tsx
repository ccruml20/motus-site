import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import ServiceHero from "@/components/ServiceHero";
import Image from "next/image";
import Link from "next/link";



export default function BarsServicePage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      <ServiceHero
        title="Bars"
        description="Moody, high-impact environments with refined material contrast—designed for energy, flow, and unforgettable moments."
        imageSrc="/services-bars.jpg"
        imageAlt="Bar design service"
      />      


      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="font-heading mt-8 text-motusHeading text-3xl md:text-4xl font-light max-w-3xl">
                A bold atmosphere with tight detailing and intentional lighting.
              </h2>

              <p className="mt-6 text-motusMuted leading-relaxed max-w-2xl">
                Bars live and die by light, texture, and rhythm. We prioritize sightlines, material durability,
                and high-contrast moments that photograph beautifully without feeling trendy.
              </p>

              <div className="mt-12 border border-black/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Deliverables</p>
                <div className="mt-6 h-px w-full bg-black/10" />
                <ul className="mt-6 space-y-3 text-motusMuted">
                  {[
                    "Concept direction (tone, palette, signature details)",
                    "Lighting mood + hierarchy recommendations",
                    "Finish + surface selections (durable + elevated)",
                    "Feature moments (backbar, shelving, statement wall)",
                    "Furniture/stool selections + styling direction",
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
              <div className="mt-6 h-px w-full bg-black/10" />
              <ul className="mt-6 space-y-3 text-motusMuted">
                {[
                  "Cocktail bars + hotel bars",
                  "Restaurant bar refreshes",
                  "Speakeasy-style concepts",
                  "Operators who want durable, moody finishes",
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
