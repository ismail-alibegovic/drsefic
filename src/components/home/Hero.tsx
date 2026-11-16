import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Rings } from "@/components/Rings";
import { lineage } from "@/content/team";

export function Hero() {
  return (
    <section className="container-x pt-2 md:pt-3">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-ice md:rounded-[2.5rem]">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_70%_80%_at_85%_60%,#ffffff_0%,transparent_70%)]"
        />
        <Rings className="pointer-events-none absolute -bottom-[32%] right-[-14%] -z-10 hidden w-[68%] max-w-[58rem] lg:block" />

        <div className="relative px-6 pb-0 pt-12 md:px-14 md:pt-16 lg:pb-40">
          <p className="eyebrow">Očna poliklinika i Optički studio · Sarajevo</p>
          <h1 className="display t-hero mt-6 max-w-[11ch] text-navy">
            Generacije posvećene <em className="text-blue">vašem vidu.</em>
          </h1>
          <p className="lead mt-7 max-w-[29rem] !text-ink/75">
            Četvrta generacija oftalmologa porodice Sefić danas vodi polikliniku, spajajući naslijeđeno znanje i
            vrijednosti s najnovijim dostignućima savremene dijagnostike i hirurgije oka.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/kontakt#termin" arrow>
              Zakažite pregled
            </Button>
            <Button href="/usluge" variant="ghost">
              Istražite usluge
            </Button>
          </div>
        </div>

        {/* Autentična fotografija ljekara poliklinike (izvor: sefic.ba) */}
        <div className="relative mt-10 lg:absolute lg:bottom-0 lg:right-[2%] lg:mt-0 lg:w-[56%] lg:max-w-[50rem]">
          <Rings className="pointer-events-none absolute inset-x-0 -top-10 -z-10 mx-auto w-[92%] lg:hidden" />
          <Image
            src="/images/hero/doktori-grupa.webp"
            alt="Ljekari Očne poliklinike Dr. Sefić: Prof. dr. Sanja Sefić Kasumović, dr. Armin Kasumović, dr. Ines Matoc Kasumović i dr. Aida Kasumović Bećirević"
            width={1266}
            height={832}
            priority
            quality={90}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="h-auto w-full"
          />
          <div className="absolute left-[7%] top-[30%] hidden items-center gap-2.5 rounded-full bg-white/90 py-2 pl-2 pr-4 text-sm font-semibold text-navy shadow-[0_12px_40px_-16px_rgba(7,29,54,0.35)] backdrop-blur md:flex">
            <span className="flex size-8 items-center justify-center rounded-full bg-blue text-white">
              <ShieldCheck aria-hidden className="size-4" />
            </span>
            AKAZ certifikat
          </div>
          <div className="absolute right-[3%] top-[2%] hidden items-center gap-2.5 rounded-full bg-white/90 py-2 pl-2 pr-4 text-sm font-semibold text-navy shadow-[0_12px_40px_-16px_rgba(7,29,54,0.35)] backdrop-blur md:flex">
            <span className="flex size-8 items-center justify-center rounded-full bg-navy text-white">
              <MapPin aria-hidden className="size-4" />
            </span>
            Ferhadija 5/1
          </div>
        </div>

        {/* Bijeli «usjek» s podatkom o tradiciji */}
        <div className="relative bg-white px-6 py-6 lg:absolute lg:bottom-0 lg:left-0 lg:rounded-tr-[2.5rem] lg:py-7 lg:pl-14 lg:pr-10">
          <span
            aria-hidden
            className="absolute bottom-full left-0 hidden size-10 bg-[radial-gradient(circle_at_100%_0,transparent_2.5rem,#fff_calc(2.5rem+0.5px))] lg:block"
          />
          <span
            aria-hidden
            className="absolute bottom-0 left-full hidden size-10 bg-[radial-gradient(circle_at_100%_0,transparent_2.5rem,#fff_calc(2.5rem+0.5px))] lg:block"
          />
          <div className="flex items-center gap-5">
            <div className="flex -space-x-3">
              {lineage.slice(0, 3).map((p) => (
                <Image
                  key={p.name}
                  src={p.image}
                  alt={p.name}
                  width={56}
                  height={56}
                  quality={90}
                  className="size-12 rounded-full object-cover object-top ring-[3px] ring-white md:size-14"
                />
              ))}
            </div>
            <div>
              <p className="font-display text-2xl font-semibold leading-none tracking-tight text-navy md:text-[1.75rem]">
                100 godina <span className="accent text-blue">tradicije</span>
              </p>
              <p className="mt-1.5 text-sm text-muted">Četiri generacije oftalmologa u istoj porodici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
