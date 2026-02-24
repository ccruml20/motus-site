import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function PrivateBioPage() {
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
        </Container>

        <article className="border-b border-black/10 bg-motusBg">
          <div className="mx-auto w-full max-w-[980px] px-0">
            <div className="border-b border-black/10 px-6 py-5 md:px-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/55">Leadership</p>
            </div>

            <div className="grid items-end gap-0 px-6 pt-8 pb-0 min-[1069px]:grid-cols-[1fr_auto] min-[1069px]:px-8 min-[1069px]:pt-10 min-[1069px]:pb-0 min-[736px]:max-[1068px]:grid-cols-[1fr_auto] min-[736px]:max-[1068px]:px-8 min-[736px]:max-[1068px]:pt-9 min-[736px]:max-[1068px]:pb-0 max-[735px]:grid-cols-1 max-[735px]:px-0 max-[735px]:pt-4 max-[735px]:pb-0">
              <div className="order-2 min-[736px]:order-1 max-[735px]:px-6 max-[735px]:pt-8 max-[735px]:pb-8">
                <h1 className="font-heading font-light leading-[0.95] text-[64px] min-[736px]:max-[1068px]:text-[56px] max-[735px]:text-[48px]">
                  Brittney Greco
                </h1>
                <p className="mt-4 pb-4 font-light leading-tight text-black/75 text-[48px] min-[736px]:max-[1068px]:text-[40px] max-[735px]:text-[36px]">
                  Founder + Design Director
                </p>
              </div>

              <div className="order-1 w-full min-[736px]:order-2 min-[1069px]:w-[460px] min-[736px]:max-[1068px]:w-[410px] max-[735px]:w-full max-[735px]:pl-0 max-[735px]:pr-0">
                <div className="relative h-[336px] w-full overflow-hidden">
                  <Image
                    src="/brittney.png"
                    alt="Brittney Greco"
                    fill
                    className="object-contain object-bottom max-[735px]:object-left-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="border-t border-black/10 bg-[#f7f6f2] py-16 md:py-20">
          <Container>
            <article className="mx-auto max-w-4xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-motusGoldText)]">
              Biography
            </p>

            <p className="mt-6 text-lg leading-8 text-motusMuted first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-heading first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-motusHeading">
              Brittney Greco is the founder and design director of Motus, shaping hospitality spaces
              with an architectural lens and a storyteller&apos;s precision. Her work blends environmental
              branding, spatial planning, and layered material direction to create interiors that are as
              strategic as they are emotional.
            </p>

            <p className="mt-6 text-lg leading-8 text-motusMuted">
              Across complex, multi-consultant teams, she leads concept development through final
              documentation—guiding renderings, detailing, and finish and furniture selections with a
              rigorous eye for both guest experience and operational flow. Her process emphasizes
              clarity, collaboration, and quiet confidence from kickoff to completion.
            </p>

            <div className="mt-14 grid gap-12 md:grid-cols-2">
              <Block
                title="F + B"
                items={[
                  "Lobby Bar + Rooftop Restaurant and Bar @ West Alley Hotel / Roswell, GA",
                  "Battle & Brew / Atlanta, GA",
                  "Breckenridge Brewery Beer Pub / Denver, CO",
                ]}
              />

              <Block
                title="Hospitality"
                items={[
                  "WindRiver Clubhouse & Spa Renovation / Lenoir City, TN",
                  "Hotel Brookmere / Saratoga Springs, NY",
                  "The Collective Game Lounge / Snowmass Base Village, CO",
                ]}
              />

              <Block
                title="Selected Other"
                items={[
                  "IAS Office Renovation / Buford, GA",
                  "MSU Brew School / Denver, CO",
                ]}
              />
            </div>
            </article>
          </Container>
        </section>
      </section>
    </main>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-[11px] tracking-[0.26em] uppercase text-[color:var(--color-motusGoldText)]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-motusMuted leading-relaxed">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
