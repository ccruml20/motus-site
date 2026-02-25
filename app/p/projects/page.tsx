import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projects, spaceLabels } from "./data";
import type { ProjectSpace } from "./data";

export const metadata = {
  robots: { index: false, follow: false },
};

const spaces: ProjectSpace[] = ["guest-rooms", "public-spaces", "food-beverage"];

function makeFilterHref({
  q,
  space,
}: {
  q?: string;
  space?: string;
}) {
  const params = new URLSearchParams();

  if (q) {
    params.set("q", q);
  }

  if (space && space !== "all") {
    params.set("space", space);
  }

  const query = params.toString();
  return query ? `/p/projects?${query}` : "/p/projects";
}

export default async function PrivateProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; space?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const query = params.q?.trim().toLowerCase() ?? "";
  const activeSpace = params.space as ProjectSpace | "all" | undefined;

  const filtered = projects.filter((project) => {
    const matchesSpace =
      !activeSpace || activeSpace === "all" || project.spaces.includes(activeSpace);

    if (!query) {
      return matchesSpace;
    }

    const searchable = [
      project.title,
      project.location,
      project.scope,
      ...project.spaces.map((space) => spaceLabels[space]),
    ]
      .join(" ")
      .toLowerCase();

    return matchesSpace && searchable.includes(query);
  });

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

          <div className="pb-16 text-center md:pb-20">
            <h1 className="font-heading text-5xl font-light md:text-6xl">what we do.</h1>

            <p className="mt-4 text-xs tracking-[0.22em] uppercase text-motusMuted">
              Use search + space filters to quickly find relevant projects.
            </p>
          </div>

          <form className="mx-auto mb-6 max-w-2xl" action="/p/projects" method="get">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="search"
                name="q"
                defaultValue={params.q ?? ""}
                placeholder="Search by project, location, or project area"
                className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-motusHeading outline-none transition focus:border-motusGold"
              />
              {activeSpace && activeSpace !== "all" ? (
                <input type="hidden" name="space" value={activeSpace} />
              ) : null}
              <button
                type="submit"
                className="border border-motusGold px-6 py-3 text-xs uppercase tracking-[0.18em] text-motusGold transition hover:bg-motusGold hover:text-black"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <FilterChip href={makeFilterHref({ q: params.q })} isActive={!activeSpace || activeSpace === "all"}>
              All Spaces
            </FilterChip>
            {spaces.map((space) => (
              <FilterChip
                key={space}
                href={makeFilterHref({ q: params.q, space })}
                isActive={activeSpace === space}
              >
                {spaceLabels[space]}
              </FilterChip>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-motusMuted">
              No projects matched your filters. Try clearing filters or searching with a broader term.
            </p>
          ) : (
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {filtered.map((p) => (
                <Link key={p.slug} href={`/p/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="font-heading text-lg tracking-[0.18em] uppercase">{p.title}</div>
                    <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-motusGoldText)]">
                      {p.location}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.spaces.map((space) => (
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
