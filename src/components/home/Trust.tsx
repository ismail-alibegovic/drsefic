import Image from "next/image";
import { ArrowUpRight, Award, GraduationCap, Microscope } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { insurers } from "@/content/site";
import { SplitHeading } from "@/components/SplitHeading";

export function Trust() {
  return (
    <section aria-labelledby="povjerenje-naslov" className="bg-soft py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Povjerenje</p>
          <h2 id="povjerenje-naslov" className="display t-2 mt-6 max-w-3xl text-navy">
            <SplitHeading text="Standardi koje je moguće provjeriti." />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className="flex h-full flex-col rounded-[1.5rem] bg-white p-8 ring-1 ring-line">
              <Award aria-hidden className="size-8 text-blue" strokeWidth={1.5} />
              <h3 className="t-3 mt-8 text-navy">AKAZ certifikat</h3>
              <p className="mt-3 text-muted">
                AKAZ certifikacija potvrđuje da rad poliklinike ispunjava stroge standarde kvaliteta, sigurnosti i
                organizacije zdravstvene zaštite.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-[1.5rem] bg-white p-8 ring-1 ring-line">
              <GraduationCap aria-hidden className="size-8 text-blue" strokeWidth={1.5} />
              <h3 className="t-3 mt-8 text-navy">Nastavna baza SSST-a</h3>
              <p className="mt-3 text-muted">
                Poliklinika je već osmu generaciju nastavna baza za edukaciju studenata Medicinskog fakulteta SSST-a u
                Sarajevu.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="flex h-full flex-col rounded-[1.5rem] bg-navy p-8 text-white">
              <Microscope aria-hidden className="size-8 text-blue-300" strokeWidth={1.5} />
              <h3 className="t-3 mt-8">Regionalni glaukomski simpozij 2026</h3>
              <p className="mt-3 text-white/70">
                Poliklinika Dr. Sefić organizator je prvog regionalnog glaukomskog simpozija s međunarodnim učešćem
                takvog tipa u BiH (Sarajevo, 17–18. april 2026).
              </p>
              <a
                href="https://glaukom2026.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-blue-300 hover:text-white"
              >
                Kongresna stranica <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-5">
          <div className="grid items-center gap-8 rounded-[1.5rem] bg-white p-8 ring-1 ring-line lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-5">
              <h3 className="t-3 text-navy">Ugovorna osiguranja</h3>
              <p className="mt-3 text-muted">
                Poliklinika ima zaključene ugovore o saradnji s osiguravajućim kućama, čime je pacijentima omogućeno
                korištenje zdravstvenih usluga putem njihovih polisa.
              </p>
            </div>
            <ul className="grid grid-cols-3 items-center gap-6 lg:col-span-7 lg:gap-12 lg:pl-8">
              {insurers.map((x) => (
                <li key={x.name} className="flex justify-center">
                  <Image
                    src={x.logo}
                    alt={x.name}
                    width={x.w}
                    height={x.h}
                    unoptimized={x.logo.endsWith(".svg")}
                    className="h-9 w-auto max-w-full object-contain md:h-12"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
