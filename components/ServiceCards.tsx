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
    variant = "default",
    }: {
    items: ServiceCardItem[];
    variant?: "default" | "home";
    }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group block"
          aria-label={`View service: ${item.title}`}
        >
          <div className="border border-white/10 overflow-hidden bg-motusBg">
            <div
            className={[
                "relative overflow-hidden",
                variant === "home"
                ? "h-[380px] md:h-[460px] xl:h-[500px]"
                : "h-[320px] md:h-[360px] xl:h-[380px]",
            ].join(" ")}
            >

              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 20vw, 100vw"
              />

              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
            </div>

            <div className="px-1 pt-5 pb-3">
              <div className="text-motusHeading/85 text-[11px] tracking-[0.30em] uppercase">
                {item.title}
              </div>
              <div className="mt-4 h-px w-full bg-white/15" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

