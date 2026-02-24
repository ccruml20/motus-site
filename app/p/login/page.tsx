import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

export default async function PortfolioLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const sp = await searchParams;

  const nextPath = sp?.next ?? "/p";
  const showError = sp?.error === "1";

  return (
    <main className="bg-motusBg text-motusHeading min-h-screen">
      <section className="pt-36 pb-24">
        <Container>
          <SectionLabel>Private Portfolio</SectionLabel>

          <h1 className="font-heading mt-8 text-4xl md:text-5xl font-light max-w-3xl">
            Enter password to view.
          </h1>

          {showError ? (
            <p className="mt-6 text-sm text-red-600">Incorrect password.</p>
          ) : null}

          <form
            method="POST"
            action="/p/login/submit"
            className="mt-10 max-w-md border border-black/10 p-6"
          >
            <input type="hidden" name="next" value={nextPath} />

            <label className="block text-xs tracking-[0.22em] uppercase text-motusMuted">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              className="mt-3 w-full border border-black/15 px-4 py-3 bg-transparent outline-none"
            />

            <button
              type="submit"
              className="mt-6 w-full bg-motusGold text-black px-6 py-3 text-xs tracking-[0.18em] uppercase hover:opacity-90 transition"
            >
              Enter
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}