import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

type ServiceHeroProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceHero({
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Refined gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/30" />
      </div>

      <Container className="relative">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-motusGold transition text-xs tracking-[0.22em] uppercase"
          >
            <span aria-hidden>←</span>
            Back to Services
          </Link>
        </div>

        <SectionLabel tone="dark">Services</SectionLabel>

        <h1 className="font-heading mt-8 text-[#F3EFE8] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
          {title}
        </h1>

        <p className="mt-6 text-[#F3EFE8]/80 max-w-2xl leading-[1.75] drop-shadow-[0_2px_10px_rgba(0,0,0,0.30)]">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:opacity-90"
          >
            Start a Project
          </Link>

          <Link
            href="/services"
            className="inline-block border border-white/30 text-white px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:bg-white hover:text-black"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
