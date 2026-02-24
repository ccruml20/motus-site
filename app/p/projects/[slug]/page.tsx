import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { projects } from "../data";
import ProjectGallery from "./ProjectGallery";

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
      <main className="min-h-screen bg-motusBg text-motusHeading">
        <section className="pb-24 pt-36">
          <Container>
            <Link
              href="/p/projects"
              className="text-xs uppercase tracking-[0.22em] text-motusMuted transition hover:text-motusGold"
            >
              ← Back to Projects
            </Link>
            <h1 className="mt-10 font-heading text-4xl font-light">Project not found.</h1>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-motusBg text-motusHeading">
      <section className="pb-24 pt-32 md:pt-36">
        <Container>
          <Link
            href="/p/projects"
            className="text-xs uppercase tracking-[0.22em] text-motusMuted transition hover:text-motusGold"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2">
              <SectionLabel className="mb-6">Project</SectionLabel>

              <h1 className="font-heading text-4xl font-light uppercase tracking-[0.08em] md:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-motusGold">{project.location}</p>

              <div className="mt-10 space-y-10 border border-black/10 bg-black/[0.03] p-6 md:p-8">
                <DetailBlock title="Description" body={project.scope} />
                <DetailBlock title="Design Drivers" body={project.designDrivers} />
                <DetailBlock title="Your Role" body={project.role} />
                <MetaRow label="Gallery Images" value={`${project.images.length}`} />
              </div>
            </aside>

            <div className="lg:col-span-8">
              <SectionLabel className="mb-8">Gallery</SectionLabel>

              <ProjectGallery title={project.title} cover={project.cover} images={project.images} />

              <div className="mt-12 border-t border-black/10 pt-8">
                <Link
                  href="/p/projects"
                  className="inline-block border border-motusGold px-8 py-3 text-xs uppercase tracking-[0.18em] text-motusGold transition hover:bg-motusGold hover:text-black"
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
      <p className="text-xs uppercase tracking-[0.22em] text-motusMuted">{title}</p>
      <div className="mt-4 h-px w-full bg-black/10" />
      <p className="mt-4 whitespace-pre-line text-sm leading-[1.85] text-motusMuted">{body}</p>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-black/10 pt-6">
      <p className="text-[10px] uppercase tracking-[0.2em] text-motusMuted">{label}</p>
      <p className="mt-2 text-sm leading-6 text-motusHeading">{value}</p>
    </div>
  );
}

