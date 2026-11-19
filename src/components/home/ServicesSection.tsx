import Image from "next/image";
import Link from "next/link";
import type { IconComponent } from "@/components/icons";
import { Target, ArrowUpRight, CircleDot, Eye, Gauge, ScanEye, ShieldPlus, Sparkles } from "@/components/icons";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { SplitHeading } from "@/components/SplitHeading";

const icons: Record<string, IconComponent> = {
  "oftalmoloski-pregledi": ScanEye,
  "laserska-korekcija-dioptrije": Sparkles,
  "operacija-mrene": CircleDot,
  "lijecenje-glaukoma": Gauge,
  "bolesti-mreznice": Target,
  okuloplastika: Eye,
  "kornealni-cross-linking": ShieldPlus,
};

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const Icon = icons[s.slug] ?? Eye;
  return (
    <Link
      href={`/usluge/${s.slug}`}
      className="group relative flex h-full flex-col rounded-[1.5rem] bg-white p-7 ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(10,42,94,0.35)] hover:ring-blue/30 md:p-8"
    >
      <span className="flex size-12 items-center justify-center rounded-2xl bg-ice text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
        <Icon aria-hidden className="size-6" strokeWidth={1.75} />
      </span>
      <span className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full text-muted ring-1 ring-line transition-colors duration-300 group-hover:bg-blue group-hover:text-white group-hover:ring-blue">
        <ArrowUpRight aria-hidden className="size-4" />
      </span>
      <h3 className="mt-7 font-display md:mt-10 text-[1.375rem] font-semibold leading-tight tracking-tight text-navy">
        {s.navTitle}
      </h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{s.short}</p>
    </Link>
  );
}

function PhotoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative h-full min-h-60 overflow-hidden rounded-[1.5rem]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
    </figure>
  );
}

export function ServicesSection() {
  const [first, ...rest] = services;
  return (
    <section aria-labelledby="usluge-naslov" className="bg-soft py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Naše usluge</p>
          <h2 id="usluge-naslov" className="display t-2 mt-5 text-navy">
            <SplitHeading text="Savremena briga za svaku strukturu oka." />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Operacije se izvode u lokalnoj anesteziji, uz maksimalnu sigurnost i komfor, bez bolničkog zadržavanja.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3 md:mt-16">
          <li className="hidden lg:block">
            <PhotoTile src="/images/services/dijagnostika-pregled.jpg" alt="Pregled pacijentice na dijagnostičkom aparatu" />
          </li>
          <li>
            <Reveal className="h-full">
              <ServiceCard s={first} />
            </Reveal>
          </li>
          {rest.slice(0, 3).map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={0.05 * (i + 1)} className="h-full">
                <ServiceCard s={s} />
              </Reveal>
            </li>
          ))}
          <li className="hidden lg:block">
            <PhotoTile src="/images/services/operaciona-sala.jpg" alt="Ljekarke poliklinike Dr. Sefić u sali za lasersku korekciju vida" />
          </li>
          {rest.slice(3).map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={0.05 * (i + 1)} className="h-full">
                <ServiceCard s={s} />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button href="/usluge" variant="ghost" arrow>
            Sve usluge i cijeli popis pregleda
          </Button>
        </div>
      </div>
    </section>
  );
}
