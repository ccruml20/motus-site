import Container from "@/components/Container";
import NextImage from "next/image";
import SectionLabel from "@/components/SectionLabel";



export default function Home() {
  return (
    <main className="bg-motusBg text-white">
      {/* HERO */}
      <section
        className="relative min-h-[92vh] flex items-center pb-20 bg-center bg-cover md:bg-fixed"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >

        {/* overlay + vignette */}
        <div className="absolute inset-0 bg-motusBg/55" />
        <div className="absolute inset-0 bg-[radial-gradient(...)]" />
        <div className="grain" />

        <Container className="relative">
          <div className="pt-36 lg:pt-40 max-w-3xl lg:max-w-6xl">
            <h1 className="text-motusHeading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
              Elevate Your Living Space with Timeless Interior Design
            </h1>

            <p className="mt-5 text-base md:text-lg text-motusHeading/75">
              Crafting refined interiors that inspire and endure.
            </p>

            <div className="mt-9">
              <a
                href="/contact"
                className="inline-block bg-motusGold text-black px-10 py-4 text-xs md:text-sm tracking-[0.22em] uppercase transition hover:opacity-90"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 md:py-36 bg-motusBg">
        {/* subtle texture/gradient like the mock */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%,rgba(0,0,0,0.3))]" />

        <Container className="relative">
          <SectionLabel>Our Services</SectionLabel>
          <div className="relative">
            {/* divider + label */}
          
            <h2 className="mt-8 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light">
              Thoughtfully Designed Interiors Tailored to You
            </h2>

            <p className="mt-6 max-w-2xl text-sm md:text-base text-motusHeading/65">
              From concept to completion, we create timeless interiors that balance beauty,
              functionality, and architectural harmony.
            </p>

            {/* cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <ServiceCard
                title="Full-Service Interior Design"
                body="Comprehensive design solutions from concept development to final installation."
              />
              <ServiceCard
                title="Renovation & Remodel Styling"
                body="Elevating existing spaces with thoughtful material and layout selections."
              />
              <ServiceCard
                title="Furniture & Styling Consultation"
                body="Curated furniture, lighting, and decor selections to complete your space."
              />
            </div>
          </div>
        </Container>
      </section>
      {/* FEATURED PROJECTS */}
      <section className="py-32 bg-motusBg">
        <Container>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="max-w-3xl mb-16">
            
            <h2 className="text-motusHeading text-4xl lg:text-5xl font-light mt-8">
              A Portfolio of Refined, Modern Interiors
            </h2>

            <p className="text-motusHeading/65 mt-6 max-w-2xl">
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
              <div className="absolute inset-0 bg-motusBg/0 group-hover:bg-motusBg/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusHeading/95 text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
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
                <div className="absolute inset-0 bg-motusBg/0 group-hover:bg-motusBg/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusHeading/95 text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
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
                <div className="absolute inset-0 bg-motusBg/0 group-hover:bg-motusBg/20 transition" />
              <div className="absolute left-6 bottom-6 text-motusHeading/95 text-xs tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
                Bedroom Refresh
              </div>

              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-16">
            <a
              href="/portfolio"
              className="inline-block border border-motusGold text-motusGold px-8 py-3 text-xs tracking-[0.22em] uppercase transition hover:bg-motusGold hover:text-black"
            >
              View Full Portfolio
            </a>
          </div>
        </Container>
      </section>
      {/* CTA STRIP */}
      <section className="py-28 bg-motusBg">
        <Container>
          <div className="md:p-14 lg:p-16">
            <SectionLabel>Ready to Begin?</SectionLabel>

            <h2 className="mt-6 text-motusHeading text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">
              Let’s design something beautiful—calm, functional, and timeless.
            </h2>

            <p className="mt-6 text-motusHeading/65 max-w-2xl">
              Share a few details about your space and goals. We’ll respond with next steps and scheduling options.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.22em] uppercase transition hover:opacity-90"
              >
                Book a Consultation
              </a>

              <a
                href="/portfolio"
                className="inline-block border border-motusGold text-motusGold px-10 py-4 text-xs tracking-[0.22em] uppercase transition hover:bg-motusGold hover:text-black"
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
          : "border-white/10 hover:border-motusGold/60 hover:-translate-y-1",
      ].join(" ")}
    >
      <h3 className="text-motusHeading text-xl md:text-2xl font-light leading-snug">
        {title}
      </h3>

      <div className="mt-6 h-px w-full bg-white/10" />

      <p className="mt-6 text-sm text-motusHeading/65 leading-relaxed">{body}</p>
    </div>
  );
}
