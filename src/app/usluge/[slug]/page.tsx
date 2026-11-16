import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { equipment } from "@/content/equipment";
import { getService, services } from "@/content/services";
import { getDoctor } from "@/content/team";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/usluge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.short,
    openGraph: { title: `${s.title} – Dr. Sefić`, description: s.short, images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: PageProps<"/usluge/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const idx = services.findIndex((x) => x.slug === s.slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const doctor = s.doctor ? getDoctor(s.doctor) : undefined;
  const gear = (s.equipment ?? []).map((id) => equipment.find((e) => e.id === id)).filter((e) => !!e);

  return (
    <>
      <PageHero
        eyebrow={`${s.number} · ${s.category}`}
        crumbs={[{ href: "/usluge", label: "Usluge" }, { label: s.navTitle }]}
        title={s.title}
        lead={s.intro}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/kontakt#termin" arrow>
            Zakažite pregled
          </Button>
        </div>
      </PageHero>

      <div className="container-x">
        <figure className="relative -mt-0 pt-5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-[21/9] md:rounded-[2.5rem]">
            <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width: 1344px) 1264px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm text-muted">Fotografija: Očna poliklinika Dr. Sefić (sefic.ba)</figcaption>
        </figure>
      </div>

      <div className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <dl className="rounded-[1.5rem] bg-ice p-7 md:p-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">Ukratko</div>
              {s.facts.map((f) => (
                <div key={f.label} className="border-b border-blue/15 py-4 last:border-0 last:pb-0">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="mt-0.5 font-display text-lg font-semibold tracking-tight text-navy">{f.value}</dd>
                </div>
              ))}
            </dl>

            {doctor && (
              <Link
                href={`/nas-tim/${doctor.slug}`}
                className="group mt-5 flex items-center gap-4 rounded-[1.5rem] p-5 ring-1 ring-line transition-colors hover:bg-soft"
              >
                <Image
                  src={doctor.avatar}
                  alt=""
                  width={72}
                  height={72}
                  className="size-16 shrink-0 rounded-full bg-ice object-cover object-top"
                />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Uže područje interesa
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold leading-tight tracking-tight text-navy group-hover:text-blue">
                    {doctor.title} {doctor.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{doctor.focus}</span>
                </span>
              </Link>
            )}
          </div>
        </aside>

        <article className="lg:col-span-7 lg:col-start-6">
          {s.sections.map((sec, i) => (
            <Reveal key={sec.title}>
              <section className={i > 0 ? "mt-14 border-t border-line pt-14" : ""}>
                <h2 className="display t-3 !text-[clamp(1.6rem,2.6vw,2.25rem)] text-navy">{sec.title}</h2>
                {sec.body && (
                  <div className="prose-clinic mt-5 text-ink/85">
                    {sec.body.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                )}
                {sec.list && (
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {sec.list.map((li) => (
                      <li key={li} className="flex items-start gap-3">
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-ice text-blue">
                          <Check aria-hidden className="size-3.5" strokeWidth={3} />
                        </span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.items && (
                  <dl className="mt-6">
                    {sec.items.map((it) => (
                      <div key={it.title} className="grid gap-2 border-t border-line py-6 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-8">
                        <dt className="font-display text-lg font-semibold tracking-tight text-navy">{it.title}</dt>
                        <dd className="text-ink/85">{it.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            </Reveal>
          ))}

          {s.faqs && (
            <Reveal>
              <section className="mt-14 border-t border-line pt-14">
                <h2 className="display t-3 !text-[clamp(1.6rem,2.6vw,2.25rem)] text-navy">Česta pitanja</h2>
                <div className="mt-6">
                  {s.faqs.map((f) => (
                    <details key={f.q} className="group border-b border-line first:border-t">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold tracking-tight text-navy [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ice text-blue transition-transform duration-300 group-open:rotate-45">
                          <Plus aria-hidden className="size-4" />
                        </span>
                      </summary>
                      <p className="max-w-[68ch] pb-6 text-ink/85">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          <p className="mt-14 rounded-2xl bg-soft p-5 text-sm text-muted ring-1 ring-line">
            Informacije na ovoj stranici su opće prirode, preuzete i jezički uređene s javne stranice poliklinike. Ne
            zamjenjuju pregled i savjet oftalmologa.
          </p>
        </article>
      </div>

      {gear.length > 0 && (
        <section aria-labelledby="oprema-usluga" className="bg-ice py-20 md:py-24">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Tehnologija</p>
                <h2 id="oprema-usluga" className="display t-2 mt-5 text-navy">
                  Oprema u <em className="text-blue">ovoj oblasti.</em>
                </h2>
              </div>
              <Button href="/oprema" variant="ghost" arrow>
                Sva oprema
              </Button>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gear.map((e) => (
                <li key={e.id} className="flex flex-col rounded-[1.5rem] bg-white p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">{e.category}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-navy">{e.name}</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{e.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav aria-label="Ostale usluge" className="container-x grid gap-5 py-16 sm:grid-cols-2 md:py-20">
        <Link href={`/usluge/${prev.slug}`} className="group rounded-[1.5rem] p-7 ring-1 ring-line transition-colors hover:bg-soft">
          <span className="flex items-center gap-2 text-sm text-muted">
            <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" /> Prethodna usluga
          </span>
          <span className="mt-2 block font-display text-2xl font-medium tracking-tight text-navy">{prev.navTitle}</span>
        </Link>
        <Link
          href={`/usluge/${next.slug}`}
          className="group rounded-[1.5rem] p-7 text-right ring-1 ring-line transition-colors hover:bg-soft"
        >
          <span className="flex items-center justify-end gap-2 text-sm text-muted">
            Sljedeća usluga <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="mt-2 block font-display text-2xl font-medium tracking-tight text-navy">{next.navTitle}</span>
        </Link>
      </nav>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
