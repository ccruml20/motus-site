import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="bg-motusBg text-motusHeading min-h-screen">
        <section className="pt-36 pb-24">
          <Container>
            <Link
              href="/p/projects"
              className="text-motusMuted hover:text-motusGold transition text-xs tracking-[0.22em] uppercase"
            >
              ← Back to Projects
            </Link>
            <h1 className="font-heading mt-10 text-4xl font-light">Project not found.</h1>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-motusBg text-motusHeading">
      {/* HEADER */}
      <section className="pt-36 pb-14">
        <Container>
          <div className="mb-10">
            <Link
              href="/p/projects"
              className="text-motusMuted hover:text-motusGold transition text-xs tracking-[0.22em] uppercase"
            >
              ← Back to Projects
            </Link>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.08em] uppercase">
            {project.title}
          </h1>
          <p className="mt-2 text-xs tracking-[0.22em] uppercase text-motusGold">
            {project.location}
          </p>
        </Container>
      </section>

      {/* DETAILS */}
      <section className="pb-18">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left column: copy */}
            <div className="lg:col-span-4">
              <div className="space-y-14">
                <DetailBlock title="Scope" body={project.scope} />
                <DetailBlock title="Design Drivers" body={project.designDrivers} />
                <DetailBlock title="Your Role" body={project.role} />
              </div>
            </div>

            {/* Right column: gallery */}
            <div className="lg:col-span-8">
              <SectionLabel className="mb-10">Gallery</SectionLabel>

              <div className="grid gap-8">
                {project.images.map((src) => (
                  <div
                    key={src}
                    className="relative overflow-hidden border border-black/10 bg-black/5"
                  >
                    {/* 16:9 */}
                    <div className="relative aspect-video">
                      <Image
                        src={src}
                        alt={`${project.title} image`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        // keep unoptimized if your webp still 400s
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <Link
                  href="/p/projects"
                  className="inline-block border border-motusGold text-motusGold px-8 py-3 text-xs tracking-[0.18em] uppercase transition hover:bg-motusGold hover:text-black"
                >
                  Back to All Projects
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.22em] uppercase text-motusMuted">{title}</p>
      <div className="mt-6 h-px w-full bg-black/10" />
      <p className="mt-6 text-motusMuted leading-[1.85] text-sm whitespace-pre-line">
        {body}
      </p>
    </div>
  );
}