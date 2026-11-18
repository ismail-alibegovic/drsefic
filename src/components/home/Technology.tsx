import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/ScrollFx";
import { equipment } from "@/content/equipment";

export function Technology() {
  const featured = equipment.filter((e) => e.featured);
  return (
    <section aria-labelledby="tehnologija-naslov" className="bg-ice py-24 md:py-36">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">Tehnologija</p>
            <h2 id="tehnologija-naslov" className="display t-2 mt-6 text-navy">
              Preciznost koja se mjeri u mikronima.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:pb-2">
            <p className="lead">
              Dijagnostička i hirurška oprema koju poliklinika navodi u svojoj ponudi – od excimer lasera do OCT
              angiografije bez kontrasta.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white md:rounded-[2rem]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/equipment/corvis-st.jpg"
                  alt="Dijagnostički uređaj Corvis ST s računarom za analizu rožnice"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain p-4 md:p-8"
                />
              </div>
              <div className="mt-auto grid gap-6 border-t border-line p-7 md:grid-cols-[auto_1fr] md:gap-10 md:p-10">
                <p className="font-display text-6xl font-semibold leading-none tracking-tighter text-navy md:text-7xl">
                  <CountUp value={4000} />
                  <span className="text-blue">+</span>
                  <span className="mt-2 block font-sans text-sm font-medium tracking-normal text-muted">
                    kadrova u sekundi
                  </span>
                </p>
                <div>
                  <h3 className="t-3 text-navy">Corvis® ST</h3>
                  <p className="mt-2 text-muted">
                    Neinvazivno analizira biomehaničke osobine rožnice i bez kontakta mjeri očni pritisak – važno za
                    rano otkrivanje keratokonusa i planiranje refraktivnih zahvata.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {featured
              .filter((e) => e.id !== "corvis-st")
              .map((e, i) => (
                <Reveal key={e.id} delay={0.06 * (i + 1)}>
                  <article
                    className={`flex h-full flex-col justify-between rounded-[1.5rem] p-7 md:p-8 ${
                      i === 0 ? "bg-navy text-white" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className={`t-3 max-w-[16ch] ${i === 0 ? "" : "text-navy"}`}>{e.name}</h3>
                      <p className="shrink-0 text-right">
                        <span className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${i === 0 ? "text-blue-300" : "text-blue"}`}>
                          {e.specs?.[0].value}
                        </span>
                        <span className={`block text-xs ${i === 0 ? "text-white/60" : "text-muted"}`}>
                          {e.specs?.[0].label}
                        </span>
                      </p>
                    </div>
                    <p className={`mt-5 text-[0.95rem] ${i === 0 ? "text-white/70" : "text-muted"}`}>{e.summary}</p>
                  </article>
                </Reveal>
              ))}
          </div>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/oprema" variant="ghost" arrow>
            Sva oprema i dijagnostika
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
