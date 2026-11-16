import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Optički studio",
  description:
    "Optički studio «Dr. Sefić», Ferhadija 5/1, Sarajevo: okviri, leće za naočale, sunčane naočale, kontaktne leće i edukacija o njihovom pravilnom korištenju.",
};

const offer = [
  { t: "Okviri za naočale", d: "Okviri raznih vrsta i oblika." },
  { t: "Leće za naočale", d: "Staklo, plastika i polikarbonat, svih dimenzija i jačina, renomiranih proizvođača." },
  { t: "Sunčane naočale", d: "Fotosenzibilne, bojene i sunčane naočale." },
  { t: "Kontaktne leće", d: "Polutvrde gas-permeabilne i mekane leće različite dužine nošenja." },
  { t: "Održavanje leća", d: "Sredstva za održavanje higijene kontaktnih leća." },
  { t: "Pribor", d: "Ostali pomoćni pribor koji se inače može naći u optikama." },
];

const lenses = [
  {
    t: "Polutvrde gas-permeabilne (GP) leće",
    d: "Kisik-propusne leće propuštaju kisik na rožnicu. U početku je katkada potreban period privikavanja, ali ne duži od sedam dana. Najbolje ih je mijenjati jednom godišnje.",
  },
  {
    t: "Mekane leće",
    d: "Mekše konzistencije, lako se podnose i ne mogu ispasti kod sporta ili drugih aktivnosti. U ponudi su leće koje se koriste dva, tri i dvanaest mjeseci.",
  },
  {
    t: "Torične leće",
    d: "Kod jačih slučajeva astigmatizma primjenjuju se torične GP leće, koje se naručuju direktno u tvornici; nabavka traje oko dvije sedmice.",
  },
  {
    t: "Rose-K leće za keratokonus",
    d: "Specijalne gas-propusne leće čija geometrija omogućava bolju centraciju, stabilnost i optičku korekciju kod nepravilnog astigmatizma. Osoblje pruža strpljivu edukaciju i podršku pri adaptaciji.",
  },
];

export default function OpticalPage() {
  return (
    <>
      <PageHero
        eyebrow="Optički studio"
        crumbs={[{ label: "Optički studio" }]}
        title={
          <>
            Kompletna optika, <em className="text-blue">korak od ordinacije.</em>
          </>
        }
        lead="Optička prodavaonica i radionica koja korisniku pruža sve usluge u vezi s nabavkom očnih pomagala."
      />

      <div className="container-x pt-5">
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-[21/9] md:rounded-[2.5rem]">
            <Image
              src="/images/optical/opticki-studio.jpg"
              alt="Optički studio Dr. Sefić – police s okvirima za naočale i članica tima"
              fill
              priority
              sizes="(min-width: 1344px) 1264px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">Fotografija: Optički studio Dr. Sefić (sefic.ba)</figcaption>
        </figure>
      </div>

      <section aria-labelledby="ponuda" className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Ponuda</p>
          <h2 id="ponuda" className="display t-2 mt-6 text-navy">
            Sve za jasan vid <em className="text-blue">na jednoj adresi.</em>
          </h2>
          <p className="lead mt-6">
            Leće se u okvire naočala montiraju automatski, na kompjuterskoj 3-D mašini, čime je isključena mogućnost
            grešaka koje mogu nastati kod ručnog brušenja i montiranja.
          </p>
          <p className="mt-8 border-l-2 border-blue pl-4 text-sm text-muted">
            Optički studio i Očna poliklinika «Dr. Sefić» su dvije odvojene privatne firme. Nakon oftalmološkog
            pregleda u poliklinici, pacijent se u Optičkom studiju može opskrbiti odgovarajućim očnim pomagalom.
          </p>
        </Reveal>
        <dl className="lg:col-span-6 lg:col-start-7">
          {offer.map((o, i) => (
            <Reveal key={o.t} delay={i * 0.04}>
              <div className="grid grid-cols-[3rem_1fr] border-b border-line py-6 first:border-t">
                <span className="pt-1 text-sm font-semibold tracking-[0.12em] text-blue">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <dt className="t-3 text-navy">{o.t}</dt>
                  <dd className="mt-1 text-muted">{o.d}</dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <section aria-labelledby="savjetovanje" className="bg-navy py-20 text-white md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
              <Image
                src="/images/clinic/opticki-studio-pult.jpg"
                alt="Prostor optičkog studija s policama okvira"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow !text-blue-300">Savjetovanje</p>
            <h2 id="savjetovanje" className="display t-2 mt-6">
              Most između pregleda <em className="text-blue-300">i svakodnevnog života.</em>
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Medicinska sestra zaposlena u optici ima važnu ulogu u završnoj fazi zbrinjavanja pacijenta – od pravilne
              izrade i prilagođavanja naočala do stručnog savjetovanja pri njihovom odabiru, vodeći računa o dioptriji,
              životnom stilu i estetskim preferencijama.
            </p>
            <p className="mt-4 text-white/60">
              Pacijentima se pruža detaljna edukacija o pravilnom korištenju i održavanju naočala i kontaktnih leća, uz
              naglasak na higijenu i redovne kontrole.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="lece" className="container-x py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Kontaktne leće</p>
          <h2 id="lece" className="display t-2 mt-6 max-w-3xl text-navy">
            Leće odabrane nakon pregleda, <em className="text-blue">uz obuku.</em>
          </h2>
          <p className="lead mt-6 max-w-2xl">
            Unutar kompletnog oftalmološkog pregleda predviđena je obrada i obuka za korištenje kontaktnih leća.
            Oftalmolog savjetuje koji tip leća najviše odgovara u konkretnom slučaju.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {lenses.map((l, i) => (
            <li key={l.t}>
              <Reveal delay={(i % 2) * 0.08}>
                <article className="h-full rounded-[1.5rem] bg-ice p-8">
                  <h3 className="t-3 text-navy">{l.t}</h3>
                  <p className="mt-3 text-ink/80">{l.d}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-5">
          <div className="rounded-[1.5rem] p-8 ring-1 ring-line">
            <h3 className="t-3 text-navy">Edukacija o pravilnom korištenju</h3>
            <p className="mt-3 max-w-3xl text-ink/80">
              Stručno osoblje je osposobljeno za demonstraciju i nadzor prvog postavljanja i skidanja leća te za
              detaljno objašnjenje pravila higijene, održavanja i čuvanja leća i rastvora. Poseban naglasak stavlja se
              na prevenciju komplikacija kroz edukaciju o vremenu nošenja, redovnim kontrolama i prepoznavanju
              simptoma eventualnih neželjenih reakcija.
            </p>
          </div>
        </Reveal>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
