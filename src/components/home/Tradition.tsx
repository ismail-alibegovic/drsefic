import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { lineage } from "@/content/team";

export function Tradition() {
  return (
    <section aria-labelledby="tradicija-naslov" className="relative isolate overflow-hidden bg-navy py-24 text-white md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-16 -z-10 select-none font-display text-[42vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(124,196,230,0.3)] lg:text-[30rem]"
      >
        100
      </span>
      <div className="container-x">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow !text-blue-300">Porodica Sefić</p>
            <h2 id="tradicija-naslov" className="display t-1 mt-6">
              100 godina tradicije. <em className="text-blue-300">Četiri generacije</em> oftalmologa.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg text-white/70">
              Porodica Sefić generacijama je vezana za oftalmologiju, a profesionalni put započeo je radom prim. dr.
              Šefkije Sefića. Danas se znanje, iskustvo i porodične vrijednosti prenose kroz više generacija ljekara
              koji nastavljaju razvijati polikliniku.
            </p>
            <Button href="/o-nama" variant="outline-light" arrow className="mt-8">
              Naša priča
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <ol className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            <span aria-hidden className="absolute left-0 right-0 top-10 hidden h-px bg-white/15 lg:block" />
            {lineage.map((p) => (
              <li key={p.name} className="relative flex items-center gap-5 lg:block lg:pr-6">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={80}
                  height={80}
                  quality={90}
                  className="size-20 shrink-0 rounded-full bg-ice object-cover object-top ring-4 ring-navy"
                />
                <div className="lg:mt-6">
                  <p className="text-sm font-semibold tracking-[0.12em] text-blue-300">{p.years}</p>
                  <h3 className="mt-1 font-display text-xl font-medium leading-snug tracking-tight">{p.name}</h3>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-16 md:mt-24">
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-[21/9] md:rounded-[2rem]">
              <Image
                src="/images/team/tim-grupna.jpg"
                alt="Tim Očne poliklinike i Optičkog studija Dr. Sefić u prostorijama poliklinike"
                fill
                sizes="(min-width: 1344px) 1264px, 100vw"
                className="object-cover object-[50%_32%]"
              />
            </div>
            <figcaption className="mt-4 text-sm text-white/50">
              Tim poliklinike i optičkog studija, Ferhadija 5/1. Fotografija: sefic.ba
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
