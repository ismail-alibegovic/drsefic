import type { Metadata } from "next";
import { Info } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { bookingWays, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt i naručivanje",
  description:
    "Očna poliklinika Dr. Sefić, Ferhadija 5/1, 71000 Sarajevo. Telefon +387 (0)33 210 212, e-mail info@sefic.ba. Radno vrijeme i načini naručivanja na pregled.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="kontakt-naslov" className="container-x pt-2 md:pt-3">
        <ContactBlock headingLevel="h1" />
        <p className="mt-4 flex items-start gap-2 text-sm text-muted">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-blue" />
          Radno vrijeme je navedeno prema stranici «Kontakt» na sefic.ba. Prije dolaska preporučujemo provjeru
          telefonom.
        </p>
      </section>

      <section id="termin" aria-labelledby="termin-naslov" className="container-x scroll-mt-28 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Naručivanje</p>
            <h2 id="termin-naslov" className="display t-2 mt-6 text-navy">
              Kako se naručiti na pregled?
            </h2>
            <p className="lead mt-6">
              Lično ili telefonom možete se naručiti svaki radni dan između 08:30 i 19:00 te subotom od 08:30 do 14:00
              sati. Na upite putem e-maila ili društvenih mreža odgovor stiže u najkraćem mogućem roku.
            </p>
            <ol className="mt-10">
              {bookingWays.map((w, i) => (
                <li key={w.title} className="grid grid-cols-[3rem_1fr] border-b border-line py-5 first:border-t">
                  <span className="pt-1 text-sm font-semibold tracking-[0.12em] text-blue">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-navy">{w.title}</h3>
                    <p className="mt-1 text-muted">{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-2xl bg-ice p-5 text-[0.95rem] text-ink/85">
              Sve usluge pacijenti u pravilu mogu dobiti u iduća dva do tri dana, a u hitnom slučaju istog dana u
              sklopu radnog vremena. Za hitne slučajeve nazovite{" "}
              <a href={site.phoneHref} className="font-semibold text-blue underline underline-offset-2">
                {site.phoneLocal}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
