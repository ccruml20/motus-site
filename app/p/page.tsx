import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function PrivatePortfolioHome({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("motus_portfolio_auth")?.value === "1";
  const sp = await searchParams;
  const showError = sp?.error === "1";

  return (
    <main className="bg-motusBg text-motusHeading min-h-screen">
      <section className="relative">
        <div className="relative w-full h-[100svh] min-h-[760px] overflow-hidden md:h-[80vh] md:min-h-[560px] md:max-h-[820px]">
          <Image
            src="/p-hero.webp"
            alt="Motus hospitality interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

          <div className="absolute inset-0 flex items-start justify-center pt-32 pb-12 md:items-center md:pt-0 md:pb-0">
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

                {isAuthed ? (
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
                ) : (
                  <>
                    {showError ? (
                      <p className="mt-5 text-sm text-[#F3EFE8]/85">Incorrect password. Please try again.</p>
                    ) : null}

                    <form
                      method="POST"
                      action="/p/login/submit"
                      className="mt-10 max-w-md mx-auto border border-[#F3EFE8]/25 bg-black/25 backdrop-blur-[2px] px-6 py-6 text-left"
                    >
                      <input type="hidden" name="next" value="/p" />

                      <label
                        htmlFor="portfolio-password"
                        className="block text-xs tracking-[0.18em] uppercase text-[#F3EFE8]/80"
                      >
                        Private route login
                      </label>

                      <input
                        id="portfolio-password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="mt-3 w-full border border-[#F3EFE8]/35 bg-black/20 text-[#F3EFE8] px-4 py-3 outline-none placeholder:text-[#F3EFE8]/45"
                        placeholder="Enter password"
                      />

                      <button
                        type="submit"
                        className="mt-4 w-full bg-motusGold text-black px-6 py-3 text-xs tracking-[0.18em] uppercase hover:opacity-90 transition"
                      >
                        Unlock private access
                      </button>
                    </form>
                  </>
                )}

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
