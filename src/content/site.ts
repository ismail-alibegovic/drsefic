// Sav sadržaj je preuzet s javno dostupne stranice https://www.sefic.ba (novembar 2026).
// Vidi docs/CONTENT-AUDIT.md za izvore i uočene nedosljednosti.

export const site = {
  name: "Očna poliklinika Dr. Sefić",
  fullName: "Očna poliklinika i Optički studio «Dr. Sefić»",
  tagline: "Tradicija, znanje i ljubaznost",
  url: "https://www.sefic.ba",
  address: {
    street: "Ferhadija 5/1",
    city: "71000 Sarajevo",
    country: "Bosna i Hercegovina",
  },
  phone: "+387 (0)33 210 212",
  phoneLocal: "033 210 212",
  phoneHref: "tel:+38733210212",
  email: "info@sefic.ba",
  emailHref: "mailto:info@sefic.ba",
  facebook: "https://www.facebook.com/PoliklinikaDrSefic77/",
  // Izvor: kontakt.php, narucivanje.php i zaglavlje stranice.
  // Podnožje naslovnice navodi 09:00–18:00 / 09:00–14:00 – potrebno potvrditi s klinikom.
  hours: [
    { days: "Ponedjeljak – petak", short: "Pon – Pet", time: "08:30 – 19:00" },
    { days: "Subota", short: "Sub", time: "08:30 – 14:00" },
    { days: "Nedjelja", short: "Ned", time: "Zatvoreno" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.8606693349657!2d18.42086971547191!3d43.85871647911475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8cf8303a363%3A0xa7c5cb22c2e42b5c!2sDr.+Sefi%C4%87!5e0!3m2!1sen!2sba!4v1506084914219",
  mapLink:
    "https://www.google.com/maps/dir/?api=1&destination=Dr.+Sefi%C4%87%2C+Ferhadija+5%2C+Sarajevo",
} as const;

export const nav = [
  { href: "/#poliklinika", label: "Poliklinika" },
  { href: "/usluge", label: "Usluge" },
  { href: "/nas-tim", label: "Naš tim" },
  { href: "/o-nama", label: "O nama" },
  { href: "/opticki-studio", label: "Optički studio" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const bookingWays = [
  { title: "Lično", text: "Na recepciji poliklinike, Ferhadija 5/1." },
  { title: "Telefonom", text: "Na broj 033 210 212, u toku radnog vremena." },
  { title: "E-mailom", text: "Na info@sefic.ba – u bilo koje doba dana." },
  {
    title: "Društvene mreže",
    text: "Putem zvanične Facebook ili Instagram stranice poliklinike.",
  },
] as const;

export const insurers = [
  { name: "ASA Osiguranje", logo: "/branding/asa.webp", w: 900, h: 258 },
  { name: "UNIQA Osiguranje", logo: "/branding/uniqa.svg", w: 986, h: 768 },
  { name: "Triglav Osiguranje", logo: "/branding/triglav.png", w: 398, h: 126 },
] as const;
