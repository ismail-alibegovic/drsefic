import Image from "next/image";
import { Phone } from "@/components/icons";
import { Button } from "@/components/Button";
import { Rings } from "@/components/Rings";
import { site } from "@/content/site";
import { lineage } from "@/content/team";
import { HeroStage } from "./HeroStage";

// Statički prvi kadar je potpun: bez JS-a i uz smanjeno kretanje sve je odmah vidljivo,
// a GSAP sekvencu u HeroStage pokreće samo kada je kretanje dozvoljeno.
export function Hero() {
  return (
    <section className="container-x pt-2 md:pt-3">
      <HeroStage className="relative isolate overflow-hidden rounded-[1.75rem] bg-[linear-gradient(105deg,#cfe7fa_0%,#e3f1fc_42%,#f3f9fe_100%)] md:rounded-[2.25rem] lg:min-h-[41rem]">
        {/* blagi «svjetlosni» krug iza ljekara */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_74%_46%,#ffffff_0%,rgba(255,255,255,0.65)_22%,transparent_52%)]"
        />
        <div
          data-depth="-22"
          data-rings-spin
          className="pointer-events-none absolute right-[3%] top-1/2 -z-10 hidden w-[52%] max-w-[46rem] -translate-y-[46%] lg:block"
        >
          <Rings animated className="w-full" />
        </div>

        <div data-hero-copy className="relative flex flex-col px-6 pt-10 md:px-14 md:pt-16 lg:min-h-[41rem] lg:w-[50%] lg:justify-center lg:pb-36 lg:pt-14">
          <p data-hero-fade className="eyebrow self-start !bg-white/70">
            Očna poliklinika i Optički studio, Sarajevo
          </p>
          <h1 className="display t-hero mt-7 max-w-[12ch] text-navy">
            <span className="hero-line">
              <span data-hero-line>Generacije</span>
            </span>
            <span className="hero-line">
              <span data-hero-line>posvećene</span>
            </span>
            <span className="hero-line">
              <span data-hero-line>vašem vidu.</span>
            </span>
          </h1>
          <div data-hero-fade className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/kontakt#termin">Zakažite pregled</Button>
            <Button href={site.phoneHref} variant="soft" icon={<Phone aria-hidden className="size-4" />}>
              {site.phoneLocal}
            </Button>
          </div>
        </div>

        {/* Autentična fotografija ljekara poliklinike (izvor: sefic.ba) */}
        <div className="relative mt-8 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[54%] lg:max-w-[52rem]">
          <Rings animated className="pointer-events-none absolute inset-x-0 -top-8 -z-10 mx-auto w-[94%] lg:hidden" />
          <div data-hero-photo className="origin-bottom">
            <div data-depth="12">
              <Image
                src="/images/hero/doktori-grupa.webp"
                alt="Ljekari Očne poliklinike Dr. Sefić: Prof. dr. Sanja Sefić Kasumović, dr. Armin Kasumović, dr. Ines Matoc Kasumović i dr. Aida Kasumović Bećirević"
                width={1266}
                height={832}
                priority
                quality={90}
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* Bijeli «usjek» s podatkom o tradiciji */}
        <div
          data-hero-notch
          className="relative bg-white px-6 py-5 lg:absolute lg:bottom-0 lg:left-0 lg:rounded-tr-[2rem] lg:py-6 lg:pl-14 lg:pr-9"
        >
          <span
            aria-hidden
            className="absolute bottom-full left-0 hidden size-8 bg-[radial-gradient(circle_at_100%_0,transparent_2rem,#fff_calc(2rem+0.5px))] lg:block"
          />
          <span
            aria-hidden
            className="absolute bottom-0 left-full hidden size-8 bg-[radial-gradient(circle_at_100%_0,transparent_2rem,#fff_calc(2rem+0.5px))] lg:block"
          />
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {lineage.slice(0, 3).map((p) => (
                <Image
                  key={p.name}
                  src={p.image}
                  alt={p.name}
                  width={56}
                  height={56}
                  quality={90}
                  className="size-11 rounded-full object-cover object-top ring-[3px] ring-white md:size-12"
                />
              ))}
            </div>
            <div>
              <p className="font-display text-xl font-semibold leading-none tracking-tight text-navy md:text-2xl">
                100 godina tradicije
              </p>
              <p className="mt-1 text-sm text-muted">Četiri generacije oftalmologa u istoj porodici</p>
            </div>
          </div>
        </div>
      </HeroStage>
    </section>
  );
}
