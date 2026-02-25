"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { type ProjectImage, type ProjectSpace, spaceLabels } from "../data";

type ProjectGalleryProps = {
  title: string;
  cover: string;
  coverSpace: ProjectSpace;
  images: ProjectImage[];
};

type SpaceFilter = "all" | ProjectSpace;

export default function ProjectGallery({ title, cover, coverSpace, images }: ProjectGalleryProps) {
  const allImages = useMemo<ProjectImage[]>(
    () => [{ src: cover, space: coverSpace }, ...images.filter((image) => image.src !== cover)],
    [cover, coverSpace, images],
  );

  const [activeFilter, setActiveFilter] = useState<SpaceFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const availableSpaces = useMemo<ProjectSpace[]>(() => {
    const unique = new Set<ProjectSpace>(allImages.map((image) => image.space));
    return Array.from(unique);
  }, [allImages]);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") {
      return allImages;
    }

    return allImages.filter((image) => image.space === activeFilter);
  }, [activeFilter, allImages]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filteredImages.length]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        <FilterChip
          isActive={activeFilter === "all"}
          onClick={() => {
            setActiveFilter("all");
            setActiveIndex(null);
          }}
        >
          All Areas
        </FilterChip>
        {availableSpaces.map((space) => (
          <FilterChip
            key={space}
            isActive={activeFilter === space}
            onClick={() => {
              setActiveFilter(space);
              setActiveIndex(null);
            }}
          >
            {spaceLabels[space]}
          </FilterChip>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredImages.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`relative overflow-hidden border border-black/10 bg-black/5 text-left ${
              index === 0 ? "md:col-span-2" : ""
            }`}
            aria-label={`Open ${spaceLabels[image.space]} image ${index + 1}`}
          >
            <div className={`relative ${index === 0 ? "aspect-[16/8] min-h-[240px]" : "aspect-[16/9]"}`}>
              <Image
                src={image.src}
                alt={`${title} gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                priority={index === 0}
                unoptimized
              />
            </div>
            <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
              {spaceLabels[image.space]}
            </div>
            <span className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
              Click to Enlarge
            </span>
          </button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <p className="mt-8 text-sm text-motusMuted">No images in this area yet.</p>
      ) : null}

      {activeIndex !== null && filteredImages[activeIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 p-4 md:p-10" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
          >
            Close
          </button>

          <div className="flex h-full flex-col justify-center">
            <div className="relative mx-auto h-[60vh] w-full max-w-6xl">
              <Image
                src={filteredImages[activeIndex].src}
                alt={`${title} enlarged image ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized
              />
            </div>

            <div className="mx-auto mt-6 flex w-full max-w-6xl items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length,
                  )
                }
                className="border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                Previous
              </button>

              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                {activeIndex + 1} / {filteredImages.length}
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length))
                }
                className="border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterChip({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
        isActive
          ? "border-motusGold bg-motusGold text-black"
          : "border-black/20 text-motusMuted hover:border-motusGold hover:text-motusGold"
      }`}
    >
      {children}
    </button>
  );
}


