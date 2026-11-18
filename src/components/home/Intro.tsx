import Image from "next/image";
import { ArrowLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ImageReveal } from "@/components/ScrollFx";
import { DoorOpen, House, Ruler } from "lucide-react";
import { SplitHeading } from "@/components/SplitHeading";

const facts = [
  { Icon: DoorOpen, k: "4", v: "Ambulante rade paralelno, uz kraće čekanje" },
  { Icon: Ruler, k: "140 m²", v: "Ambulante, operaciona sala i Optički studio" },
  { Icon: House, k: "Isti dan", v: "Odlazak kući nakon operativnog zahvata" },
];

const pillars = [
  {
    k: "Kvalitet i znanje",
    v: "U ordinaciji se vrše pregledi oka i sva dijagnostika, a u operacionoj sali operativni zahvati u lokalnoj anesteziji.",
  },
  {
    k: "Sve na jednom mjestu",
    v: "Nakon detaljnog pregleda pacijent se u Optičkom studiju opskrbljuje očnim pomagalom ili se preporuči i uradi operativni zahvat.",
  },
  {
    k: "Briga nakon zahvata",
    v: "Profesionalno i ljubazno osoblje u potpunosti preuzima brigu o pacijentu i nakon pružene pomoći.",
  },
];

export function Intro() {
  return (
    <section id="poliklinika" aria-labelledby="poliklinika-naslov" className="container-x py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">Poliklinika</p>
          <h2 id="poliklinika-naslov" className="display t-2 mt-6 text-navy">
            <SplitHeading text="Od prvog pregleda do operacione sale – pod jednim krovom." />
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pt-14">
          <p className="lead">
            U prostoru od oko 140 m² u ulici Ferhadija 5/1 nalaze se ambulante, operaciona sala i Optički studio.
            Pacijenti se nakon operativnog zahvata ne zadržavaju na bolničkom liječenju – kući odlaze isti dan.
          </p>
          <ArrowLink href="/o-nama" className="mt-6">
            Više o nama
          </ArrowLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ImageReveal className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <Image
              src="/images/clinic/recepcija.jpg"
              alt="Recepcija Očne poliklinike Dr. Sefić s natpisom «Dr. Sefić»"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
        </div>
        <Reveal delay={0.12} className="lg:col-span-4">
          <dl className="flex h-full flex-col justify-between gap-2 rounded-[1.5rem] bg-ice p-3 md:rounded-[2rem]">
            {facts.map(({ Icon, k, v }) => (
              <div key={k} className="flex flex-1 items-center gap-5 rounded-[1.1rem] bg-white px-6 py-5 md:rounded-[1.5rem]">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ice text-blue">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div>
                  <dt className="font-display text-[2rem] font-semibold leading-none tracking-tight text-navy">{k}</dt>
                  <dd className="mt-1.5 text-sm text-muted">{v}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-line pt-10 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={i * 0.08}>
            <dt className="t-3 text-navy">{p.k}</dt>
            <dd className="mt-2 text-muted">{p.v}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
