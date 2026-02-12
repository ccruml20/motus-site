import Container from "@/components/Container";
import NextImage from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ServiceCards from "@/components/ServiceCards";
import { serviceCards } from "@/components/serviceData";




export default function Home() {
  return (
      <main className="bg-motusBg text-motusHeading">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />

        {/* Single refined overlay */}
        <div className="absolute inset-0 bg-black/28" />

        <Container className="relative pt-36 pb-24">
          <div className="max-w-6xl">
            <h1 className="font-heading text-[#F3EFE8] text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[1.05] max-w-5xl">
              Boutique Hospitality Interiors with Calm, Timeless Presence
            </h1>

            <p className="mt-6 text-[#F3EFE8]/75 max-w-2xl leading-[1.75]">
              Motus designs refined commercial interiors for hotels, restaurants, bars,
              retail, and corporate environments.
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
                className="inline-block border border-[#F3EFE8]/30 text-[#F3EFE8] px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:bg-[#F3EFE8] hover:text-black"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>



      {/* SERVICES */}
      <section className="py-24 md:py-28 bg-motusSection">
        <Container>
          <SectionLabel>Our Services</SectionLabel>

          <h2 className="font-heading mt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
            Design Focused on Experience, Brand, and Operational Clarity
          </h2>

          <p className="mt-6 max-w-2xl text-motusMuted leading-relaxed">
            Hospitality-forward interiors designed to feel elevated and perform in the real world.
          </p>

          <div className="mt-12">
            <ServiceCards items={serviceCards} variant="home" />
          </div>
        </Container>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="py-28 bg-motusBg">
        <Container>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="max-w-3xl mb-16">
            
            <h2 className="font-heading text-motusHeading text-4xl lg:text-5xl font-light mt-8">
              A Portfolio of Refined, Modern Interiors
            </h2>

            <p className="text-motusMuted mt-6 max-w-2xl">
              Each project reflects our commitment to balance, proportion, and thoughtful material selection.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Primary Image */}
            <div className="relative w-full h-[520px] lg:h-[640px] overflow-hidden group">
              <NextImage
                src="/project-1.jpg"
                alt="Modern living room interior"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusMuted text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
                Mountain Modern Living
              </div>
            </div>

            {/* Right Column Stacked */}
            <div className="grid gap-8">
              <div className="relative w-full h-[240px] lg:h-[300px] overflow-hidden group">
                <NextImage
                  src="/project-2.jpg"
                  alt="Kitchen interior"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusMuted text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
                Kitchen Refresh
              </div>

              </div>

              <div className="relative w-full h-[240px] lg:h-[300px] overflow-hidden group">
                <NextImage
                  src="/project-3.jpg"
                  alt="Bedroom interior"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusMuted text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
                Bedroom Refresh
              </div>

              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-16">
            <a
              href="/portfolio"
              className="inline-block border border-motusGold text-motusGold px-8 py-3 text-xs tracking-[0.18em] uppercase transition hover:bg-motusGold hover:text-black"
            >
              View Full Portfolio
            </a>
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

function ServiceCard({
  title,
  body,
  featured,
}: {
  title: string;
  body: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "p-8 md:p-9 lg:p-10 border transition duration-300",

        featured
          ? "border-motusGold/80"
          : "border-black/10 hover:border-motusGold/60 hover:-translate-y-1",
      ].join(" ")}
    >
      <h3 className="text-motusHeading text-xl md:text-2xl font-light leading-snug">
        {title}
      </h3>

      <div className="mt-6 h-px w-full bg-white/10" />

      <p className="mt-6 text-sm text-motusMuted leading-relaxed">{body}</p>
    </div>
  );
}
