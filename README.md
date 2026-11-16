# Dr. Sefić — demo koncept redizajna

Nezavisni, nenaručeni prijedlog redizajna web stranice **Očne poliklinike i Optičkog studija «Dr. Sefić»** (Ferhadija 5/1, Sarajevo).
Ovo **nije službena stranica poliklinike** (službena: <https://www.sefic.ba>). Stranica nosi vidljivu oznaku «Demo koncept», ne indeksira se (`robots: noindex`) i ne zaprima zahtjeve za termine.

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Tehnologija

Next.js 16 (App Router, statički generisane stranice) · React 19 · TypeScript · Tailwind CSS 4 · Lucide · Motion (samo za otkrivanje pri skrolanju i mobilni meni) · `next/image`.
Fontovi (lokalno, preko Fontsource): Schibsted Grotesk (naslovi), Instrument Sans (tekst), Instrument Serif Italic (akcenti).

## Struktura

| Putanja | Sadržaj |
| --- | --- |
| `src/content/` | Strukturirani sadržaj: `site.ts`, `services.ts`, `team.ts`, `equipment.ts` |
| `src/components/` | Zajedničke komponente; `home/` sadrži sekcije naslovnice |
| `src/app/` | Rute: `/`, `/o-nama`, `/usluge`, `/usluge/[slug]`, `/nas-tim`, `/nas-tim/[slug]`, `/oprema`, `/opticki-studio`, `/kontakt` |
| `public/images`, `public/branding` | Optimizirane fotografije i logotipi preuzeti sa sefic.ba |
| `docs/CONTENT-AUDIT.md` | Izvori sadržaja, uočene nedosljednosti i izostavljene tvrdnje |
| `docs/ASSETS.md` | Porijeklo svake datoteke i šta zahtijeva odobrenje klijenta |

## Važne napomene

- Sav tekst potiče s javne stranice sefic.ba; jezički je uređen i skraćen bez promjene medicinskog značenja. Nema izmišljenih ljekara, recenzija, statistika ni opreme.
- Obrazac na `/kontakt` samo priprema `mailto:` poruku u korisnikovom e-mail programu — ništa se ne šalje s ove stranice.
- Prije bilo kakve javne ili komercijalne upotrebe potrebna je saglasnost poliklinike za sadržaj, fotografije i logotip (vidi `docs/ASSETS.md`).

## Animacije

- **Hero:** naslov se otkriva red po red (maska), tekst i dugmad ulaze sa zadrškom, fotografija ljekara se podiže, a koncentrični krugovi se iscrtavaju i zatim polako rotiraju uz povremeni «puls». Sve je čisti CSS (`globals.css`), bez JavaScripta.
- **Skrol** (`src/components/ScrollFx.tsx`): paralaks fotografija, otkrivanje slike maskom, iscrtavanje vremenske linije, pomak velikog broja «100», brojač i linija napretka ispod zaglavlja.
- Animira se samo `transform`, `opacity` i (jednokratno) `clip-path`. Uz `prefers-reduced-motion` sve se svodi na trenutni prikaz bez kretanja.
- Ako se izmjene u `globals.css` ne vide u `npm run dev`, obrišite `.next` i ponovo pokrenite server.
