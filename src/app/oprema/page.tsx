import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { equipment, facilities } from "@/content/equipment";

export const metadata: Metadata = {
  title: "Oprema i tehnologija",
  description:
    "WaveLight EX500 excimer laser, AngioVue OCT angiografija, Corvis ST, IRIDEX mikropulsni laser, Constellation Vision System i ostala dijagnostička i hirurška oprema Očne poliklinike Dr. Sefić.",
};

export default function EquipmentPage() {
  const featured = equipment.filter((e) => e.details);
  const rest = equipment.filter((e) => !e.details);
  return (
    <>
      <PageHero
        eyebrow="Oprema i tehnologija"
        crumbs={[{ label: "Oprema" }]}
        title={
          <>
            Tehnologija u službi <em className="text-blue">tačne dijagnoze.</em>
          </>
        }
        lead="Pregled dijagnostičke i hirurške opreme koju poliklinika navodi na svojoj stranici – s tehničkim podacima kako ih iznosi poliklinika."
      />

      <section aria-label="Istaknuta oprema" className="container-x py-20 md:py-28">
        <ul>
          {featured.map((e, i) => (
            <li key={e.id} id={e.id} className="scroll-mt-28 border-t border-line py-12 first:border-0 first:pt-0 md:py-16">
              <Reveal>
                <article className="grid gap-8 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold tracking-[0.12em] text-blue">{String(i + 1).padStart(2, "0")}</span>
                      <span className="rounded-full bg-ice px-3 py-1 text-xs font-semibold tracking-wide text-navy">{e.category}</span>
                    </div>
                    <h2 className="display t-2 mt-5 !text-[clamp(1.9rem,3.4vw,3rem)] text-navy">{e.name}</h2>
                    {e.specs && (
                      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                        {e.specs.map((s) => (
                          <div key={s.label}>
                            <dd className="font-display text-4xl font-semibold tracking-tight text-blue md:text-5xl">{s.value}</dd>
                            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                          </div>
                        ))}
                      </dl>
                    )}
                    {e.image && (e.imageW ?? 0) >= 600 && (
                      <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-line">
                        <Image
                          src={e.image}
                          alt={e.name}
                          width={e.imageW}
                          height={e.imageH}
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="mx-auto h-auto max-h-[22rem] w-auto object-contain p-6"
                        />
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
                    <p className="lead !text-ink">{e.summary}</p>
                    <div className="prose-clinic mt-6 text-ink/80">
                      {e.details?.map((d) => (
                        <p key={d.slice(0, 32)}>{d}</p>
                      ))}
                    </div>
                    {e.image && (e.imageW ?? 0) < 600 && (
                      <figure className="mt-8 inline-block overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-line">
                        <Image src={e.image} alt={e.name} width={e.imageW} height={e.imageH} className="h-auto w-auto max-w-full" />
                      </figure>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ostala-oprema" className="bg-ice py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Dijagnostički kabinet</p>
            <h2 id="ostala-oprema" className="display t-2 mt-6 text-navy">
              Ostala <em className="text-blue">oprema.</em>
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((e, i) => (
              <li key={e.id}>
                <Reveal delay={(i % 3) * 0.06}>
                  <article className="flex h-full gap-5 rounded-[1.5rem] bg-white p-6">
                    {e.image && (
                      <Image
                        src={e.image}
                        alt=""
                        width={e.imageW}
                        height={e.imageH}
                        className="size-20 shrink-0 rounded-xl object-contain ring-1 ring-line"
                      />
                    )}
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-navy">{e.name}</h3>
                      <p className="mt-2 text-[0.95rem] text-muted">{e.summary}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-5">
            <div className="grid items-center gap-8 rounded-[1.5rem] bg-navy p-8 text-white md:p-12 lg:grid-cols-12">
              <p className="font-display text-7xl font-semibold tracking-tighter lg:col-span-4">
                4<span className="accent ml-3 text-4xl text-blue-300">ambulante</span>
              </p>
              <p className="text-lg text-white/75 lg:col-span-8">{facilities.text}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
