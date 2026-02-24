import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  robots: { index: false, follow: false },
};

const projects = [
  { title: "Hotel Brookmere", location: "Saratoga Springs, NY", image: "/hospitality-project-1.webp", slug: "hotel-brookmere" },
  { title: "La Roux", location: "New Orleans, LA", image: "/hospitality-project-2.webp", slug: "la-roux" },
  { title: "Laurel Oak", location: "New Orleans, LA", image: "/hospitality-project-4.webp", slug: "laurel-oak" },
  { title: "Hotel Brookmere", location: "Saratoga Springs, NY", image: "/hospitality-project-1.webp", slug: "hotel-brookmere" },
  { title: "La Roux", location: "New Orleans, LA", image: "/hospitality-project-2.webp", slug: "la-roux" },
  { title: "Laurel Oak", location: "New Orleans, LA", image: "/hospitality-project-4.webp", slug: "laurel-oak" },
];

export default function PrivateProjectsPage() {
  return (
    <main className="bg-motusBg text-motusHeading">
      <section className="pt-36 pb-24">
        <Container>
          <div className="mb-8">
            <Link
              href="/p"
              className="text-motusMuted hover:text-motusGold transition text-xs tracking-[0.22em] uppercase"
            >
              ← Back
            </Link>
          </div>
          <div className="text-center pb-20 md:pb-24">
            <h1 className="font-heading text-5xl md:text-6xl font-light">
              what we do.
            </h1>

            <p className="mt-4 text-xs tracking-[0.22em] uppercase text-motusMuted">
              Interior Design &nbsp;|&nbsp; Commercial Kitchens &nbsp;|&nbsp; FF&amp;E Specifications &nbsp;|&nbsp; Interior Fit-Out
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {projects.map((p, i) => (
              <Link
                key={i}
                href={`/p/projects/${p.slug}`}
                className="group block"
              >
                <div key={i} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="font-heading text-lg tracking-[0.18em] uppercase">
                      {p.title}
                    </div>
                    <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-motusGoldText)]">
                      {p.location}
                    </div>
                    <div className="mt-5 h-px w-full bg-black/10" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}