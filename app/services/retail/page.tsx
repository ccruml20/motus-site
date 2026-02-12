import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";

export default function RetailServicePage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/services-retail.jpg"
            alt="Retail design service"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <Container className="relative">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-motusMuted hover:text-motusGold transition text-xs tracking-[0.22em] uppercase"
            >
              <span aria-hidden>←</span>
              Back to Services
            </Link>
          </div>
                    
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-heading mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light">
            Retail
          </h1>
          <p className="mt-6 text-motusMuted max-w-2xl leading-relaxed">
            Retail spaces designed for brand presence, merchandising clarity, and a customer journey that feels
            effortless—and memorable.
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
                A space that supports your product—and elevates your brand.
              </h2>

              <p className="mt-6 text-motusMuted leading-relaxed max-w-2xl">
                We focus on flow, sightlines, and merchandise moments—pairing a durable finish palette with
                lighting and fixtures that feel premium and cohesive.
              </p>

              <div className="mt-12 border border-black/10 p-8 md:p-9">
                <p className="text-motusGold text-xs tracking-[0.26em] uppercase">Deliverables</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <ul className="mt-6 space-y-3 text-motusMuted">
                  {[
                    "Brand-forward concept direction + material story",
                    "Customer journey + merchandising flow guidance",
                    "Fixture/wall system direction (display + storage)",
                    "Lighting recommendations for product + mood",
                    "Finish selections built for wear + easy maintenance",
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
                  "Boutique retail + showroom concepts",
                  "Brand refreshes and expansions",
                  "Spaces needing stronger merchandising flow",
                  "Owners who want a premium, cohesive finish palette",
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
