import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
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

          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionLabel>Bio</SectionLabel>

              <div className="mt-10 flex items-start gap-8">
                <div className="relative w-36 h-36 overflow-hidden">
                  <Image src="/brittney.jpg" alt="Brittney Greco" fill className="object-cover" />
                </div>

                <div>
                  <h1 className="font-heading text-3xl md:text-4xl font-light">
                    BRITTNEY GRECO, NCIDQ
                  </h1>
                  <p className="mt-2 text-motusMuted">Founder + Design Director</p>
                </div>
              </div>

              <h2 className="mt-12 text-[color:var(--color-motusGoldText)] text-xs tracking-[0.26em] uppercase">
                Bio
              </h2>
              <p className="mt-4 text-motusMuted leading-[1.75]">
                Brittney Greco is the founder and design director of Motus, bringing an architectural
                approach to hospitality interiors. Her expertise includes environmental branding,
                spatial planning, and project leadership across complex, multi-consultant environments.
              </p>

              <h2 className="mt-10 text-[color:var(--color-motusGoldText)] text-xs tracking-[0.26em] uppercase">
                Responsibility on the Project
              </h2>
              <p className="mt-4 text-motusMuted leading-[1.75]">
                As lead designer, Brittney directs design vision from concept through documentation—
                overseeing renderings, detailing, and finish + furniture selections for permit and pricing.
                She collaborates closely with ownership and consultants to maintain clarity, cohesion,
                and professional execution at every stage.
              </p>
            </div>

            <div>
              <SectionLabel>Highlighted Project Experience</SectionLabel>

              <div className="mt-10 space-y-10">
                <Block title="F + B" items={[
                  "Lobby Bar + Rooftop Restaurant and Bar @ West Alley Hotel / Roswell, GA",
                  "Battle & Brew / Atlanta, GA",
                  "Breckenridge Brewery Beer Pub / Denver, CO",
                ]} />

                <Block title="Hospitality" items={[
                  "WindRiver Clubhouse & Spa Renovation / Lenoir City, TN",
                  "Hotel Brookmere / Saratoga Springs, NY",
                  "The Collective Game Lounge / Snowmass Base Village, CO",
                ]} />

                <Block title="Other" items={[
                  "IAS Office Renovation / Buford, GA",
                  "MSU Brew School / Denver, CO",
                ]} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[color:var(--color-motusGoldText)] text-xs tracking-[0.26em] uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-motusMuted leading-relaxed">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-motusGold/90" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}