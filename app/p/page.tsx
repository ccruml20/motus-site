import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";


export default function PrivatePortfolioHome() {
  return (
    <main className="bg-motusBg text-motusHeading min-h-screen">
      {/* HERO BANNER */}
      <section className="relative">
        <div className="relative w-full h-[80vh] min-h-[560px] max-h-[820px] overflow-hidden">
          <Image
            src="/p-hero.webp" // or /hero.jpg
            alt="Motus hospitality interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
            // add unoptimized ONLY if your webp keeps throwing 400
            // unoptimized
          />

          {/* Darkening overlay (even + refined) */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

          {/* Centered content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Container>
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="font-heading text-[#F3EFE8] text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.01em] leading-[1.05]">
                  Designing Hospitality
                  <br />
                  With Intention
                </h1>

                <p className="mt-6 text-[#F3EFE8]/80 max-w-2xl mx-auto leading-[1.85]">
                  Selected experience and project highlights curated for client review—where brand,
                  atmosphere, and performance align.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/p/projects"
                    className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.10em] uppercase transition hover:opacity-90"
                  >
                    View Selected Work
                  </Link>

                  <Link
                    href="/p/bio"
                    className="inline-block border border-[#F3EFE8]/35 text-[#F3EFE8] px-10 py-4 text-xs tracking-[0.10em] uppercase transition hover:bg-[#F3EFE8] hover:text-black"
                  >
                    Bio + Experience
                  </Link>
                </div>

                <p className="mt-10 text-[11px] tracking-[0.18em] uppercase text-[#F3EFE8]/55">
                  Private access • do not distribute
                </p>
              </div>
            </Container>
          </div>
        </div>
</section>
    </main>
  );
}