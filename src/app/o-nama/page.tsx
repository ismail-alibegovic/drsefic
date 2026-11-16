import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { lineage } from "@/content/team";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Porodica Sefić generacijama je vezana za oftalmologiju. Upoznajte historiju, misiju, vrijednosti i viziju Očne poliklinike Dr. Sefić u Sarajevu.",
};

const gallery = [
  { src: "/images/clinic/recepcija.jpg", alt: "Recepcija poliklinike s natpisom Dr. Sefić", span: "md:col-span-4" },
  { src: "/images/clinic/ambulanta-djecija.jpg", alt: "Dječija ambulanta sa šarenim zidom i malim stolicama", span: "md:col-span-2" },
  { src: "/images/clinic/operativni-blok.jpg", alt: "Ulaz u operativni blok", span: "md:col-span-2" },
  { src: "/images/clinic/opticki-studio-pult.jpg", alt: "Prostor optičkog studija s policama okvira i dijagnostičkim kabinetom", span: "md:col-span-2" },
  { src: "/images/clinic/cekaonica.jpg", alt: "Čekaonica sa zelenim foteljama", span: "md:col-span-2" },
  { src: "/images/clinic/ambulanta-01.jpg", alt: "Ambulanta 01 s dijagnostičkim uređajima", span: "md:col-span-3" },
  { src: "/images/clinic/dijagnostika.jpg", alt: "Dijagnostički uređaji u ambulanti", span: "md:col-span-3" },
];

const mvv = [
  {
    k: "Misija",
    v: "Pružiti usluge savremene oftalmološke prakse, zasnovane na dobrom empirijskom iskustvu, vrhunskog kvaliteta i uz najviši etički kodeks u radu s pacijentima.",
  },
  {
    k: "Vrijednost",
    v: "Usluge savremenog znanja iz oftalmologije i optometrije, zasnovane na relevantnim dokazima, kliničkim studijama i decenijama dugom iskustvu. Cilj je da pacijent na jednom mjestu obavi svu dijagnostičku i terapijsku uslugu.",
  },
  {
    k: "Vizija",
    v: "Biti lider privatnog, ali i javno-privatnog partnerstva u zdravstvu Bosne i Hercegovine, uz kontinuirani razvoj sistema kontrole kvaliteta, sigurnosti i upravljanja rizikom.",
  },
];

const rights = [
  "Dostupnost zdravstvene zaštite",
  "Informacije o zdravlju i mogućnostima liječenja",
  "Učestvovanje u postupku liječenja",
  "Samoodlučivanje i pristanak",
  "Povjerljivost informacija i privatnost",
  "Lično dostojanstvo",
  "Izbor ljekara",
  "Drugo mišljenje",
  "Prigovor",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O nama"
        crumbs={[{ label: "O nama" }]}
        title={
          <>
            100 godina tradicije. <em className="text-blue">Četiri generacije</em> oftalmologa.
          </>
        }
        lead="Četvrta generacija oftalmologa u istoj porodici danas vodi polikliniku, spajajući naslijeđeno znanje i vrijednosti s najnovijim dostignućima savremene oftalmologije."
      />

      <section aria-labelledby="prica" className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 id="prica" className="display t-2 text-navy">
            Poliklinika i Optički studio <em className="text-blue">«Dr. Sefić»</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="prose-clinic text-lg text-ink/85 lg:col-span-6 lg:col-start-7">
          <p>
            Očna poliklinika i Optički studio «Dr. Sefić» su dvije odvojene privatne firme, osposobljene da u
            potpunosti obrade i pruže pomoć oftalmološkom bolesniku. U ordinaciji se vrše pregledi oka i sva
            dijagnostika, a u operacionoj sali operativni zahvati u lokalnoj anesteziji. U njihovom radu učestvuju
            članovi porodice Sefić, ljekari.
          </p>
          <p>
            Operaciona sala nalazi se u okviru prostora od oko 140 m² u ulici Ferhadija 5/1. Uz salu postoje
            prostorije za prijem pacijenata i odmor uposlenika. Operativni zahvati rade se po dogovoru s pacijentom i
            prema predviđenom planu, a pacijenti se nakon zahvata ne zadržavaju na bolničkom liječenju.
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="porodica" className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow !text-blue-300">Porodica Sefić</p>
            <h2 id="porodica" className="display t-2 mt-6 max-w-3xl">
              Tradicija oftalmologije <em className="text-blue-300">kroz više generacija.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Profesionalni put porodice započeo je radom prim. dr. Šefkije Sefića. Danas se znanje, iskustvo i
              porodične vrijednosti prenose kroz više generacija ljekara koji nastavljaju razvijati polikliniku i
              savremeni pristup liječenju očnih bolesti.
            </p>
          </Reveal>
          <ol className="mt-16 border-t border-white/15">
            {lineage.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={i * 0.05}>
                  <div className="grid grid-cols-[5rem_1fr] items-center gap-x-6 border-b border-white/15 py-6 md:grid-cols-[6rem_12rem_1fr] md:py-7">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={96}
                      height={96}
                      quality={90}
                      className="size-20 rounded-full bg-ice object-cover object-top md:size-24"
                    />
                    <p className="hidden text-sm font-semibold tracking-[0.12em] text-blue-300 md:block">{p.years}</p>
                    <div>
                      <p className="text-sm font-semibold tracking-[0.12em] text-blue-300 md:hidden">{p.years}</p>
                      <h3 className="font-display text-2xl font-medium tracking-tight md:text-4xl">{p.name}</h3>
                      {p.note && <p className="mt-1 text-white/60">{p.note}</p>}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-white/45">Imena i godine preneseni su kako ih navodi stranica sefic.ba.</p>
        </div>
      </section>

      <section aria-labelledby="mvv" className="container-x py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Misija, vrijednost i vizija</p>
          <h2 id="mvv" className="display t-2 mt-6 max-w-3xl text-navy">
            Na čemu <em className="text-blue">gradimo povjerenje.</em>
          </h2>
        </Reveal>
        <dl className="mt-14 grid gap-5 lg:grid-cols-3">
          {mvv.map((m, i) => (
            <Reveal key={m.k} delay={i * 0.08}>
              <div className={`h-full rounded-[1.5rem] p-8 ${i === 1 ? "bg-navy text-white" : "bg-ice"}`}>
                <dt className={`accent text-4xl ${i === 1 ? "text-blue-300" : "text-blue"}`}>{m.k}</dt>
                <dd className={`mt-6 ${i === 1 ? "text-white/80" : "text-ink/85"}`}>{m.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <section aria-labelledby="galerija" className="bg-soft py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Prostor</p>
            <h2 id="galerija" className="display t-2 mt-6 text-navy">
              Zavirite u <em className="text-blue">našu polikliniku.</em>
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-4 md:grid-cols-6 md:gap-5">
            {gallery.map((g, i) => (
              <li key={g.src} className={g.span}>
                <Reveal delay={(i % 3) * 0.06}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem]">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] ease-out-soft hover:scale-105" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">Fotografije enterijera: sefic.ba</p>
        </div>
      </section>

      <section aria-labelledby="prava" className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Informacije za pacijente</p>
          <h2 id="prava" className="display t-2 mt-6 text-navy">
            Jednak pristup <em className="text-blue">za svakog pacijenta.</em>
          </h2>
          <p className="lead mt-6">
            Svim pacijentima garantuje se jednak pristup i pružanje zdravstvenih usluga bez diskriminacije po bilo kom
            osnovu.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Pacijentima se garantuje pravo na</h3>
          <ol className="mt-4 grid sm:grid-cols-2 sm:gap-x-8">
            {rights.map((r, i) => (
              <li key={r} className="flex items-baseline gap-4 border-b border-line py-4">
                <span className="text-xs font-semibold tracking-[0.12em] text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium text-navy">{r}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
