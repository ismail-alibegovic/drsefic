import { Mail, Phone } from "lucide-react";
import { bookingWays, site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Rings } from "./Rings";

export function AppointmentCTA() {
  return (
    <section aria-labelledby="cta-naslov" className="container-x py-6 md:py-10">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy px-6 py-16 text-white md:rounded-[2.5rem] md:px-16 md:py-24">
        <Rings tone="light" className="pointer-events-none absolute -right-40 -top-40 -z-10 w-[44rem] opacity-60 max-md:opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[36rem] rounded-full bg-blue/25 blur-[120px]"
        />
        <Reveal>
          <p className="eyebrow !text-blue-300">Naručivanje</p>
          <h2 id="cta-naslov" className="display t-1 mt-6 max-w-4xl">
            Vaš vid zaslužuje <em className="text-blue-300">posebnu pažnju.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Termin možete dogovoriti telefonom, e-mailom ili lično. Usluge su u pravilu dostupne u roku od dva do tri
            dana, a hitni slučajevi isti dan u sklopu radnog vremena.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-4 rounded-full bg-white py-2.5 pl-2.5 pr-7 text-navy transition-colors hover:bg-ice"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-blue text-white">
                <Phone aria-hidden className="size-5" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{site.phone}</span>
            </a>
            <Button href={site.emailHref} variant="outline-light" icon={<Mail aria-hidden className="size-4" />} className="!py-5">
              {site.email}
            </Button>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-x-8 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {bookingWays.map((w, i) => (
            <li key={w.title}>
              <span className="text-xs font-semibold tracking-[0.16em] text-blue-300">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-1.5 text-[0.95rem] text-white/60">{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
