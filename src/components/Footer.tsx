import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
              Tradicija, znanje <span className="accent text-blue-300">i ljubaznost.</span>
            </p>
            <p className="mt-6 max-w-md text-[0.95rem] text-white/60">
              Očna poliklinika i Optički studio «Dr. Sefić» su dvije odvojene privatne firme, osposobljene da u
              potpunosti obrade i pruže pomoć oftalmološkom bolesniku.
            </p>
          </div>

          <nav aria-label="Navigacija u podnožju" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Stranice</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-white/85 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/oprema" className="link-underline text-white/85 hover:text-white">
                  Oprema
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Usluge" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Usluge</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/usluge/${s.slug}`} className="link-underline text-white/85 hover:text-white">
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Kontakt</h2>
            <ul className="mt-5 space-y-4 text-white/85">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-blue-300" />
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.address.street}
                  <br />
                  {site.address.city}, BiH
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-1 size-4 shrink-0 text-blue-300" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-1 size-4 shrink-0 text-blue-300" />
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-1 size-4 shrink-0 text-blue-300" />
                <span>
                  {site.hours[0].short}: {site.hours[0].time}
                  <br />
                  {site.hours[1].short}: {site.hours[1].time}
                </span>
              </li>
            </ul>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white"
            >
              Facebook <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-start md:justify-between">
          <p>
            Sadržaj i fotografije: © Očna poliklinika i Optički studio «Dr. Sefić», preuzeto s{" "}
            <a href="https://www.sefic.ba" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
              sefic.ba
            </a>
            .
          </p>
          <p className="max-w-md md:text-right">
            Nezavisni demo koncept redizajna, izrađen bez narudžbe i odobrenja poliklinike. Nije službena stranica i ne
            zaprima zahtjeve za termine.
          </p>
        </div>
      </div>
    </footer>
  );
}
