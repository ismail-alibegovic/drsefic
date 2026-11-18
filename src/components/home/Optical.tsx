import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/ScrollFx";
import { SplitHeading } from "@/components/SplitHeading";

const offer = [
  "Okviri za naočale raznih vrsta i oblika",
  "Leće za naočale renomiranih proizvođača",
  "Fotosenzibilne, bojene i sunčane naočale",
  "Kontaktne leće i sredstva za njihovo održavanje",
];

export function Optical() {
  return (
    <section aria-labelledby="optika-naslov" className="container-x py-24 md:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[3/2] md:rounded-[2rem] lg:aspect-[4/5]">
              <Parallax amount={6}>
                <Image
                  src="/images/optical/opticki-studio.jpg"
                  alt="Optički studio Dr. Sefić – police s okvirima za naočale i članica tima"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[62%_50%]"
                />
              </Parallax>
            </div>
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy backdrop-blur">
              Optički studio · Ferhadija 5/1
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">Optički studio</p>
          <h2 id="optika-naslov" className="display t-2 mt-6 text-navy">
            <SplitHeading text="Od nalaza do naočala – bez lutanja." />
          </h2>
          <p className="lead mt-6">
            Kompletna optička prodavaonica i radionica. Leće se u okvire montiraju automatski, na kompjuterskoj 3-D
            mašini, čime se isključuje mogućnost grešaka ručnog brušenja.
          </p>
          <ul className="mt-8 space-y-3">
            {offer.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-ice text-blue">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-blue pl-4 text-sm text-muted">
            Očna poliklinika i Optički studio «Dr. Sefić» su dvije odvojene privatne firme koje djeluju na istoj
            adresi.
          </p>
          <Button href="/opticki-studio" variant="ghost" arrow className="mt-8">
            Posjetite Optički studio
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
