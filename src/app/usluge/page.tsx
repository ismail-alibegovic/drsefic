import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { serviceCatalogue, services } from "@/content/services";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Oftalmološki pregledi i dijagnostika, lasersko skidanje dioptrije, operacija mrene, liječenje glaukoma, bolesti mrežnice, okuloplastika i kornealni cross-linking u Očnoj poliklinici Dr. Sefić.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Usluge"
        crumbs={[{ label: "Usluge" }]}
        title={
          <>
            Pregledi, dijagnostika i hirurgija oka na jednom mjestu.
          </>
        }
        lead="U ordinaciji se obavljaju pregledi oka i sva dijagnostika, a u operacionoj sali operativni zahvati u lokalnoj anesteziji – bez bolničkog zadržavanja."
      />

      <section aria-label="Oblasti rada" className="container-x py-20 md:py-28">
        <ul className="grid gap-x-5 gap-y-14 md:grid-cols-2 lg:grid-cols-12">
          {services.map((s, i) => (
            <li key={s.slug} className={i === 0 ? "lg:col-span-6" : "lg:col-span-3"}>
              <Reveal delay={(i % 3) * 0.06}>
                <Link href={`/usluge/${s.slug}`} className="group block">
                  <div className={`relative overflow-hidden rounded-[1.5rem] aspect-[4/3] ${i < 3 ? "lg:aspect-auto lg:h-[24rem]" : "lg:aspect-auto lg:h-[17rem]"}`}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-wide text-navy backdrop-blur">
                      {s.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                      <ArrowUpRight aria-hidden className="size-5" />
                    </span>
                  </div>
                  <div className="mt-5 flex gap-4">
                    <span className="pt-1.5 text-sm font-semibold tracking-[0.12em] text-blue">{s.number}</span>
                    <div>
                      <h2 className="t-3 text-navy">{s.navTitle}</h2>
                      <p className="mt-2 text-[0.98rem] text-muted">{s.short}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="popis-naslov" className="bg-soft py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Kompletan popis</p>
            <h2 id="popis-naslov" className="display t-2 mt-6 max-w-3xl text-navy">
              Sve usluge poliklinike.
            </h2>
            <p className="lead mt-5 max-w-2xl">
              Popis usluga kako ga navodi poliklinika. Za informacije o pojedinoj usluzi i cijenama obratite se
              direktno poliklinici.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {serviceCatalogue.map((g, i) => (
              <Reveal key={g.group} delay={(i % 3) * 0.06}>
                <h3 className="border-b border-navy pb-3 font-display text-lg font-semibold tracking-tight text-navy">
                  {g.group}
                </h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it} className="border-b border-line py-3 text-[0.98rem]">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
