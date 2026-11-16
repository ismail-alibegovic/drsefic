import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section aria-labelledby="usluge-naslov" className="container-x py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Naše usluge</p>
              <h2 id="usluge-naslov" className="display t-2 mt-6 text-navy">
                Savremena briga za <em className="text-blue">svaku strukturu oka.</em>
              </h2>
              <p className="lead mt-6 max-w-md">
                Operacije se izvode u lokalnoj anesteziji, uz maksimalnu sigurnost i komfor, bez potrebe za bolničkim
                zadržavanjem.
              </p>
              <Button href="/usluge" variant="ghost" arrow className="mt-8">
                Sve usluge
              </Button>
            </Reveal>
            <Reveal delay={0.1} className="mt-12 hidden lg:block">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/services/operaciona-sala.jpg"
                  alt="Ljekarke poliklinike Dr. Sefić u sali za lasersku korekciju vida"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-7 lg:pl-8">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line first:border-t">
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={`/usluge/${s.slug}`}
                  className="group relative grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 transition-[padding] duration-500 ease-out-soft hover:px-4 md:grid-cols-[4rem_1fr_auto] md:py-9"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-2xl bg-ice opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="pt-1.5 text-sm font-semibold tracking-[0.12em] text-blue">{s.number}</span>
                  <span>
                    <span className="block font-display text-2xl font-medium leading-tight tracking-tight text-navy md:text-[2rem]">
                      {s.navTitle}
                    </span>
                    <span className="mt-2 block max-w-xl text-[0.98rem] text-muted">{s.short}</span>
                  </span>
                  <span className="mt-1 flex size-11 items-center justify-center rounded-full ring-1 ring-line transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:ring-blue md:size-12">
                    <ArrowUpRight aria-hidden className="size-5" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
