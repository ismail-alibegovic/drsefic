import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { DoctorCard } from "@/components/DoctorCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { doctors, nurses } from "@/content/team";

export const metadata: Metadata = {
  title: "Naš tim",
  description:
    "Specijalisti oftalmologije i optometrije te medicinsko osoblje Očne poliklinike Dr. Sefić u Sarajevu.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Naš tim"
        crumbs={[{ label: "Naš tim" }]}
        title={
          <>
            Ljudi kojima povjeravate svoj vid.
          </>
        }
        lead="Specijalisti oftalmologije i optometrije te medicinsko osoblje koje je uz pacijente kroz svaki korak pregleda i liječenja."
      />

      <section aria-labelledby="ljekari" className="container-x py-20 md:py-28">
        <h2 id="ljekari" className="eyebrow">
          Ljekari
        </h2>
        <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <li key={d.slug}>
              <Reveal delay={i * 0.07}>
                <DoctorCard doctor={d} priority />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="osoblje" className="bg-soft py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Medicinsko osoblje</p>
              <h2 id="osoblje" className="display t-2 mt-6 text-navy">
                Podrška kroz svaki korak.
              </h2>
            </Reveal>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {nurses.map((n, i) => (
              <li key={n.name}>
                <Reveal delay={i * 0.07}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-line">
                    <div className="relative aspect-square bg-gradient-to-b from-ice to-ice-200">
                      <Image
                        src={n.image}
                        alt={n.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-sm font-medium text-blue">{n.role}</p>
                      <h3 className="t-3 mt-1 text-navy">{n.name}</h3>
                      <p className="mt-3 text-[0.98rem] text-muted">{n.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Grupna fotografija tima" className="container-x py-20 md:py-28">
        <Reveal>
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] md:aspect-[2/1] md:rounded-[2.5rem]">
              <Image
                src="/images/team/tim-grupna.jpg"
                alt="Tim Očne poliklinike i Optičkog studija Dr. Sefić"
                fill
                sizes="(min-width: 1344px) 1264px, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted">
              Tim poliklinike i optičkog studija u prostorijama na Ferhadiji. Fotografija: sefic.ba
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
