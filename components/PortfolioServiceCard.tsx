import Image from "next/image";
import Link from "next/link";

export type ServiceCardItem = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceCards({
  items,
  columns = 3,
}: {
  items: ServiceCardItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={[
        "grid gap-8",
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
      ].join(" ")}
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group block"
          aria-label={item.title}
        >
          <div className="relative overflow-hidden border border-white/10">
            {/* Image */}
            <div className="relative h-[360px] md:h-[420px]">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority={false}
              />

              {/* Moody overlay */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition duration-500" />

              {/* subtle bottom gradient for label legibility */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />
            </div>

            {/* Label row (like your inspo) */}
            <div className="bg-motusBg px-1 pt-5 pb-3">
              <div className="text-motusHeading/80 text-xs tracking-[0.28em] uppercase">
                {item.title}
              </div>
              <div className="mt-4 h-px w-full bg-white/15" />
            </div>

            {/* Hover cue (optional, subtle) */}
            <div className="absolute right-5 bottom-[22px] text-motusGold text-[11px] tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
              View
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}