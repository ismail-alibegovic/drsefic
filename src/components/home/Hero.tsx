import Image from "next/image";
import type { CSSProperties } from "react";
import { MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Rings } from "@/components/Rings";
import { lineage } from "@/content/team";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const i = (n: number) => ({ "--i": n }) as CSSProperties;

const chip =
  "flex items-center gap-2.5 rounded-full bg-white/90 py-2 pl-2 pr-4 text-sm font-semibold text-navy shadow-[0_12px_40px_-16px_rgba(7,29,54,0.45)] backdrop-blur";

export function Hero() {
  return (
    <section className="container-x pt-2 md:pt-3">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-ice md:rounded-[2.5rem]">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,#ffffff_0%,transparent_70%)]"
        />
        <Rings
          animated
          className="pointer-events-none absolute -right-[18%] top-1/2 -z-10 hidden w-[62%] max-w-[54rem] -translate-y-1/2 lg:block"
        />

        <div className="grid items-center gap-10 px-6 pb-6 pt-12 md:px-14 md:pb-14 md:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          {/* Tekst */}
          <div>
            <p className="eyebrow hero-fade" style={d(0)}>
              Očna poliklinika i Optički studio · Sarajevo
            </p>
            <h1 className="display t-hero mt-6 max-w-[11ch] text-navy">
              <span className="hero-line">
                <span style={i(0)}>Generacije</span>
              </span>
              <span className="hero-line">
                <span style={i(1)}>posvećene</span>
              </span>
              <span className="hero-line">
                <span style={i(2)}>
                  <em className="text-blue">vašem vidu.</em>
                </span>
              </span>
            </h1>
            <p
              className="lead hero-fade mt-7 max-w-[29rem] !text-ink/75"
              style={d(520)}
            >
              Četvrta generacija oftalmologa porodice Sefić danas vodi
              polikliniku, spajajući naslijeđeno znanje i vrijednosti s
              najnovijim dostignućima savremene dijagnostike i hirurgije oka.
            </p>
            <div
              className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row"
              style={d(660)}
            >
              <Button href="/kontakt#termin" arrow>
                Zakažite pregled
              </Button>
              <Button href="/usluge" variant="ghost">
                Istražite usluge
              </Button>
            </div>

            {/* Tradicija */}
            <div
              style={d(850)}
              className="hero-fade mt-10 flex items-center gap-5 border-t border-navy/10 pt-7 md:mt-12"
            >
              <div className="flex -space-x-3">
                {lineage.slice(0, 3).map((p) => (
                  <Image
                    key={p.name}
                    src={p.image}
                    alt={p.name}
                    width={56}
                    height={56}
                    quality={90}
                    className="size-12 rounded-full object-cover object-top ring-[3px] ring-ice md:size-14"
                  />
                ))}
              </div>
              <div>
                <p className="font-display text-2xl font-semibold leading-none tracking-tight text-navy md:text-[1.75rem]">
                  100 godina <span className="accent text-blue">tradicije</span>
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  Četiri generacije oftalmologa u istoj porodici
                </p>
              </div>
            </div>
          </div>

          {/* Fotografija tima (autentična, izvor: sefic.ba) */}
          <div className="relative">
            <div
              className="hero-rise relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-navy/5 shadow-[0_40px_80px_-40px_rgba(7,29,54,0.45)] sm:aspect-[5/4] md:rounded-[2rem] lg:aspect-[5/6]"
              style={d(300)}
            >
              <Image
                src="/images/team/tim-grupna.jpg"
                alt="Tim Očne poliklinike Dr. Sefić u prostorijama poliklinike u Sarajevu"
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[50%_35%]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/55 to-transparent"
              />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90 md:bottom-6 md:left-7">
                Tim Očne poliklinike Dr. Sefić
              </p>
            </div>

            <div
              style={d(1100)}
              className="hero-pop absolute -left-6 top-[14%] hidden md:block"
            >
              <div className={`hero-float ${chip}`}>
                <span className="flex size-8 items-center justify-center rounded-full bg-blue text-white">
                  <ShieldCheck aria-hidden className="size-4" />
                </span>
                AKAZ certifikat
              </div>
            </div>
            <div
              style={d(1250)}
              className="hero-pop absolute -right-4 top-[58%] hidden md:block"
            >
              <div style={d(-2500)} className={`hero-float ${chip}`}>
                <span className="flex size-8 items-center justify-center rounded-full bg-navy text-white">
                  <MapPin aria-hidden className="size-4" />
                </span>
                Ferhadija 5/1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
