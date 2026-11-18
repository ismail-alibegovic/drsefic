import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const wayIcons = [MapPin, Phone, Mail, MessageCircle];
import { bookingWays, site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Rings } from "./Rings";
import { SplitHeading } from "@/components/SplitHeading";

export function AppointmentCTA() {
  return (
    <section aria-labelledby="cta-naslov" className="container-x py-6 md:py-10">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#06204a_0%,#004a80_100%)] px-6 py-16 text-white md:rounded-[2.25rem] md:px-16 md:py-20">
        <Rings tone="light" className="pointer-events-none absolute -right-40 -top-40 -z-10 w-[44rem] opacity-60 max-md:opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[36rem] rounded-full bg-sky/25 blur-[120px]"
        />
        <Reveal>
          <p className="eyebrow !text-blue-300">Naručivanje</p>
          <h2 id="cta-naslov" className="display t-1 mt-6 max-w-4xl">
            <SplitHeading text="Vaš vid zaslužuje posebnu pažnju." />
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

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bookingWays.map((w, i) => {
            const Icon = wayIcons[i];
            return (
              <li key={w.title} className="rounded-[1.25rem] bg-white/[0.06] p-6 ring-1 ring-inset ring-white/10">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-blue-300">
                  <Icon aria-hidden className="size-[1.1rem]" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-1 text-[0.95rem] text-white/65">{w.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
