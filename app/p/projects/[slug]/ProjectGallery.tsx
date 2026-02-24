"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProjectGalleryProps = {
  title: string;
  cover: string;
  images: string[];
};

export default function ProjectGallery({ title, cover, images }: ProjectGalleryProps) {
  const allImages = useMemo(() => [cover, ...images], [cover, images]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % allImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? null : (prev - 1 + allImages.length) % allImages.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, allImages.length]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {allImages.map((src, index) => (
          <button
            type="button"
            key={`${src}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`relative overflow-hidden border border-black/10 bg-black/5 text-left ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative ${index === 0 ? "aspect-[16/8] min-h-[240px]" : "aspect-[4/3]"}`}>
              <Image
                src={src}
                alt={`${title} gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                priority={index === 0}
                unoptimized
              />
            </div>
            <span className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
              Click to Enlarge
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
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
                src={allImages[activeIndex]}
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
                  setActiveIndex((prev) => (prev === null ? null : (prev - 1 + allImages.length) % allImages.length))
                }
                className="border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                Previous
              </button>

              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                {activeIndex + 1} / {allImages.length}
              </p>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % allImages.length))}
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
