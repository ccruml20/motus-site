import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projects, PROJECT_SPACES, spaceLabels } from "./data";
import type { ProjectSpace } from "./data";

export const metadata = {
  robots: { index: false, follow: false },
};

function isProjectSpace(value?: string): value is ProjectSpace {
  return !!value && PROJECT_SPACES.includes(value as ProjectSpace);
}

function makeFilterHref(space?: string) {
  const params = new URLSearchParams();

  if (isProjectSpace(space)) {
    params.set("space", space);
  }

  const query = params.toString();
  return query ? `/p/projects?${query}` : "/p/projects";
}

export default async function PrivateProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ space?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const activeSpace = isProjectSpace(params.space) ? params.space : undefined;

  const filtered = projects.filter((project) => {
    return !activeSpace || project.spaces.includes(activeSpace);
  });

  return (
    <main className="bg-motusBg text-motusHeading">
      <section className="pb-24 pt-36">
        <Container>
          <div className="mb-8">
            <Link
              href="/p"
              className="text-motusMuted transition hover:text-motusGold text-xs tracking-[0.22em] uppercase"
            >
              ← Back
            </Link>
          </div>

          <div className="pb-16 text-center md:pb-20">
            <h1 className="font-heading text-5xl font-light md:text-6xl">what we do.</h1>

            <p className="mt-4 text-xs tracking-[0.22em] uppercase text-motusMuted">
              Use space filters to quickly find relevant projects.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <FilterChip href={makeFilterHref()} isActive={!activeSpace}>
              All Spaces
            </FilterChip>
            {PROJECT_SPACES.map((space) => (
              <FilterChip
                key={space}
                href={makeFilterHref(space)}
                isActive={activeSpace === space}
              >
                {spaceLabels[space]}
              </FilterChip>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-motusMuted">
              No projects matched your filter. Try selecting a different space.
            </p>
          ) : (
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {filtered.map((project) => (
                <Link key={project.slug} href={`/p/projects/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="font-heading text-lg tracking-[0.18em] uppercase">{project.title}</div>
                    <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-motusGoldText)]">
                      {project.location}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.spaces.map((space) => (
                        <span
                          key={space}
                          className="border border-black/15 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-motusMuted"
                        >
                          {spaceLabels[space]}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 h-px w-full bg-black/10" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}

function FilterChip({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
        isActive
          ? "border-motusGold bg-motusGold text-black"
          : "border-black/20 text-motusMuted hover:border-motusGold hover:text-motusGold"
      }`}
    >
      {children}
    </Link>
  );
}
