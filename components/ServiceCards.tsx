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
  const imgHeight =
    variant === "home"
      ? "h-[380px] md:h-[460px] xl:h-[520px]"
      : "h-[320px] md:h-[360px] xl:h-[380px]";

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="group block">
          <div className="overflow-hidden">
            {/* Image */}
            <div className={`relative overflow-hidden group block transition hover:-translate-y-1 ${imgHeight}`}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
              />

              {/* lighter overlay for light-dominant site */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/18 transition duration-500" />
            </div>

            {/* Label row */}
            <div className="pt-6 pb-4">
              <div className="text-motusHeading/90 text-[11px] tracking-[0.30em] uppercase">
                {item.title}
              </div>
              <div className="mt-4 h-px w-full bg-black/8" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


