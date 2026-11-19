"use client";

import { useState } from "react";
import { Mail } from "@/components/icons";
import { site } from "@/content/site";
import { services } from "@/content/services";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20";

// Demo nema pozadinski sistem za naručivanje. Obrazac samo priprema e-mail poruku
// u korisnikovom e-mail programu (mailto:) – ništa se ne šalje s ove stranice.
export function InquiryForm() {
  const [prepared, setPrepared] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("ime") ?? "").trim();
    const phone = String(data.get("telefon") ?? "").trim();
    const service = String(data.get("usluga") ?? "").trim();
    const message = String(data.get("poruka") ?? "").trim();
    const subject = `Upit za termin${service ? ` – ${service}` : ""}`;
    const body = [
      "Poštovani,",
      "",
      "želim dogovoriti termin u Očnoj poliklinici Dr. Sefić.",
      "",
      `Ime i prezime: ${name}`,
      `Telefon: ${phone}`,
      service ? `Usluga: ${service}` : null,
      message ? `\nNapomena: ${message}` : null,
      "",
      "Srdačan pozdrav",
    ]
      .filter((l) => l !== null)
      .join("\n");
    const link = document.createElement("a");
    link.href = `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.click();
    setPrepared(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.5rem] bg-white p-7 ring-1 ring-line md:rounded-[2rem] md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Ime i prezime
          <input name="ime" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Telefon
          <input name="telefon" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Usluga <span className="font-normal text-muted">(opcionalno)</span>
          <select name="usluga" defaultValue="" className={field}>
            <option value="">Nisam siguran/na – trebam savjet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.navTitle}>
                {s.navTitle}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Napomena <span className="font-normal text-muted">(opcionalno)</span>
          <textarea name="poruka" rows={4} className={field} placeholder="Npr. željeni dan ili ljekar" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-blue px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-600 sm:w-auto"
      >
        <Mail aria-hidden className="size-4" />
        Pripremi e-mail upit
      </button>
      <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
        {prepared
          ? `Poruka je pripremljena u vašem e-mail programu. Ako se program nije otvorio, pišite direktno na ${site.email}.`
          : `Dugme otvara vaš e-mail program s pripremljenom porukom za ${site.email}. Ova demo stranica ne prikuplja i ne šalje podatke.`}
      </p>
    </form>
  );
}
