import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "@/components/icons";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";
import { DoctorCard } from "@/components/DoctorCard";
import { Reveal } from "@/components/Reveal";
import { Rings } from "@/components/Rings";
import { getService } from "@/content/services";
import { doctors, getDoctor } from "@/content/team";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/nas-tim/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) return {};
  return {
    title: `${d.title} ${d.name}`,
    description: `${d.title} ${d.name} – ${d.role}. ${d.focus}. Očna poliklinika Dr. Sefić, Sarajevo.`,
  };
}

export default async function DoctorPage({ params }: PageProps<"/nas-tim/[slug]">) {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) notFound();
  const related = d.services.map((x) => getService(x)).filter((x) => !!x);
  const others = doctors.filter((x) => x.slug !== d.slug);

  return (
    <>
      <section className="container-x pt-2 md:pt-3">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-ice md:rounded-[2.5rem] lg:grid-cols-12">
          <div className="px-6 pb-10 pt-8 md:px-14 md:pb-16 md:pt-10 lg:col-span-7">
            <nav aria-label="Putanja">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-blue">
                    Početna
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden className="size-3.5" />
                  <Link href="/nas-tim" className="hover:text-blue">
                    Naš tim
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden className="size-3.5" />
                  <span aria-current="page" className="text-ink">
                    {d.name}
                  </span>
                </li>
              </ol>
            </nav>
            <p className="eyebrow mt-12 md:mt-20">{d.role}</p>
            <h1 className="display t-1 mt-5 text-navy">
              <span className="accent block text-[0.55em] text-blue">{d.title}</span>
              {d.name}
            </h1>
            <ul className="mt-8 flex flex-wrap gap-2">
              {d.focusTags.map((t) => (
                <li key={t} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/kontakt#termin" arrow>
                Zakažite pregled
              </Button>
            </div>
          </div>
          <div className="relative min-h-[22rem] lg:col-span-5 lg:min-h-[36rem]">
            <Rings className="pointer-events-none absolute left-1/2 top-[8%] -z-10 w-[120%] -translate-x-1/2" />
            <Image
              src={d.image}
              alt={`${d.title} ${d.name}`}
              width={d.imageW}
              height={d.imageH}
              priority
              quality={90}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="absolute inset-x-0 top-[6%] mx-auto h-auto w-[72%] max-w-[26rem] lg:w-[80%]"
            />
          </div>
        </div>
      </section>

      <div className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <h2 className="eyebrow">{d.statementIsQuote ? "Riječ ljekara" : "O ljekaru"}</h2>
          <blockquote className="mt-8 font-display text-[clamp(1.35rem,2.3vw,2rem)] font-medium leading-[1.35] tracking-tight text-navy">
            <span aria-hidden className="accent mr-1 text-blue">
              «
            </span>
            {d.statement}
            <span aria-hidden className="accent ml-1 text-blue">
              »
            </span>
          </blockquote>
          <p className="mt-6 text-sm text-muted">Izvor: sefic.ba</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <dl className="rounded-[1.5rem] bg-soft p-7 ring-1 ring-line md:p-8">
            {d.facts.map((f) => (
              <div key={f.label} className="border-b border-line py-4 first:pt-0 last:border-0 last:pb-0">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-display text-lg font-semibold leading-snug tracking-tight text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
          {related.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Povezane usluge</h2>
              <ul className="mt-3">
                {related.map((s) => (
                  <li key={s.slug} className="border-b border-line">
                    <Link href={`/usluge/${s.slug}`} className="group flex items-center justify-between py-4 font-display text-lg font-medium tracking-tight text-navy hover:text-blue">
                      {s.navTitle}
                      <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </div>

      <section aria-labelledby="ostali" className="bg-soft py-20 md:py-24">
        <div className="container-x">
          <h2 id="ostali" className="display t-2 text-navy">
            Ostali specijalisti.
          </h2>
          <ul className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <DoctorCard doctor={o} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppointmentCTA />
      <div className="h-16 md:h-24" />
    </>
  );
}
