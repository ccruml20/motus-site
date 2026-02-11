import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";

const projects = [
  { title: "Mountain Modern Living", tag: "Living Room", src: "/project-1.jpg" },
  { title: "Kitchen Refresh", tag: "Kitchen", src: "/project-2.jpg" },
  { title: "Primary Suite", tag: "Bedroom", src: "/project-3.jpg" },
  { title: "Soft Modern Dining", tag: "Dining", src: "/project-2.jpg" },
  { title: "Warm Minimal Entry", tag: "Entry", src: "/project-3.jpg" },
  { title: "Calm Neutral Lounge", tag: "Living Room", src: "/project-1.jpg" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-motusBg text-white">
      {/* Top spacing because nav is absolute */}
      <section className="pt-36 pb-20">
        <Container>
          <SectionLabel>Portfolio</SectionLabel>

          <h1 className="mt-8 text-motusHeading text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl">
            A selection of spaces designed with calm, clarity, and intention.
          </h1>

          <p className="mt-6 text-motusHeading/65 max-w-2xl">
            Explore a curated set of residential interiors—from full-service transformations to focused refreshes.
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="pb-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="group">
                <div className="relative w-full h-[340px] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500" />
                  <div className="absolute left-5 bottom-5 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="text-motusHeading/95 text-xs tracking-[0.28em] uppercase">
                      {p.title}
                    </div>
                    <div className="mt-2 text-motusHeading/70 text-xs tracking-wider uppercase">
                      {p.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
