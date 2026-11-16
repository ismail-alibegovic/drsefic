export type Doctor = {
  slug: string;
  name: string;
  title: string;
  role: string;
  focus: string;
  focusTags: string[];
  image: string; // izrezani portret (prozirna pozadina)
  imageW: number;
  imageH: number;
  avatar: string;
  statement: string;
  statementIsQuote: boolean;
  facts: { label: string; value: string }[];
  services: string[]; // slugovi usluga
};

export const doctors: Doctor[] = [
  {
    slug: "sanja-sefic-kasumovic",
    name: "Sanja Sefić Kasumović",
    title: "Prof. dr.",
    role: "Specijalista oftalmologije",
    focus: "Oftalmologija",
    focusTags: ["Oftalmologija", "Porodica Sefić"],
    image: "/images/team/sanja-sefic-kasumovic.webp",
    imageW: 640,
    imageH: 960,
    avatar: "/images/team/sanja-portret.webp",
    statement:
      "Pozivam vas da predstavite vaše oftalmološke probleme i dopustite da vam svojim stručnim znanjem i višegodišnjim iskustvom u oftalmologiji pomognem da prevaziđete vaš problem sa vidom.",
    statementIsQuote: true,
    facts: [
      { label: "Zvanje", value: "Prof. dr. sc." },
      { label: "Porodična tradicija", value: "Porodica Sefić" },
    ],
    services: [],
  },
  {
    slug: "aida-kasumovic-becirevic",
    name: "Aida Kasumović Bećirević",
    title: "Dr.",
    role: "Spec. oftalmologije i optometrije, FEBO",
    focus: "Prednji segment oka i refraktivna hirurgija",
    focusTags: ["Prednji segment oka", "Refraktivna hirurgija"],
    image: "/images/team/aida-kasumovic-becirevic.webp",
    imageW: 640,
    imageH: 960,
    avatar: "/images/team/aida-portret.webp",
    statement:
      "Dio sam porodice Sefić, specijalizaciju iz oftalmologije završila sam na KBC Sestre milosrdnice u Zagrebu i položila EBO (European Board of Ophthalmology) ispit, međunarodno priznatu provjeru znanja iz oblasti oftalmologije, s užim područjem stručnog interesa u oblasti prednjeg segmenta oka i refraktivne hirurgije. Trenutno sam redovna doktorandica.",
    statementIsQuote: true,
    facts: [
      { label: "Specijalizacija", value: "KBC Sestre milosrdnice, Zagreb" },
      { label: "Međunarodni ispit", value: "EBO – European Board of Ophthalmology (FEBO)" },
      { label: "Naučni rad", value: "Redovna doktorandica" },
    ],
    services: ["laserska-korekcija-dioptrije", "kornealni-cross-linking"],
  },
  {
    slug: "armin-kasumovic",
    name: "Armin Kasumović",
    title: "Dr.",
    role: "Spec. oftalmologije i optometrije, FEBO",
    focus: "Medicinska i hirurška retina",
    focusTags: ["Medicinska i hirurška retina", "Intravitrealna terapija"],
    image: "/images/team/armin-kasumovic.webp",
    imageW: 1100,
    imageH: 1872,
    avatar: "/images/team/armin-portret.webp",
    statement:
      "Dio sam porodice Sefić, specijalizaciju iz oftalmologije završio sam na KBC Sestre milosrdnice u Zagrebu i položio EBO (European Board of Ophthalmology) ispit, međunarodno priznatu provjeru znanja iz oblasti oftalmologije. Uže područje mog stručnog interesa obuhvata medicinsku i hiruršku retinu, s posebnim fokusom na intravitrealnu terapiju i savremeno liječenje bolesti mrežnice. Trenutno sam redovni doktorand, aktivno uključen u naučno-istraživački rad iz oblasti retinalnih oboljenja.",
    statementIsQuote: true,
    facts: [
      { label: "Specijalizacija", value: "KBC Sestre milosrdnice, Zagreb" },
      { label: "Međunarodni ispit", value: "EBO – European Board of Ophthalmology (FEBO)" },
      { label: "Naučni rad", value: "Redovni doktorand – retinalna oboljenja" },
    ],
    services: ["bolesti-mreznice"],
  },
  {
    slug: "ines-matoc-kasumovic",
    name: "Ines Matoc Kasumović",
    title: "Dr.",
    role: "Spec. oftalmologije i optometrije, FEBO",
    focus: "Glaukom i okuloplastična hirurgija",
    focusTags: ["Glaukom", "Okuloplastična hirurgija"],
    image: "/images/team/ines-matoc-kasumovic.webp",
    imageW: 1100,
    imageH: 1640,
    avatar: "/images/team/ines-portret.webp",
    statement:
      "Specijalizaciju iz oftalmologije završila sam na KBC Sestre milosrdnice u Zagrebu i položila EBO (European Board of Ophthalmology) ispit, međunarodno priznatu provjeru znanja iz oblasti oftalmologije. Uže područje mog stručnog interesa obuhvata glaukom i okuloplastičnu hirurgiju, s posebnim fokusom na savremenu dijagnostiku, laserske i hirurške metode liječenja. Trenutno sam redovna doktorandica, aktivno uključena u stručni i naučno-istraživački rad.",
    statementIsQuote: true,
    facts: [
      { label: "Specijalizacija", value: "KBC Sestre milosrdnice, Zagreb" },
      { label: "Međunarodni ispit", value: "EBO – European Board of Ophthalmology (FEBO)" },
      { label: "Naučni rad", value: "Redovna doktorandica" },
    ],
    services: ["lijecenje-glaukoma", "okuloplastika"],
  },
];

export const nurses = [
  {
    name: "Meliha Poturković",
    role: "dipl. med. sestra",
    image: "/images/team/meliha-poturkovic.webp",
    text: "Kao diplomirana medicinska sestra u Očnoj poliklinici, svakodnevno sam uz pacijente – pružajući stručnu, smirenu i empatičnu podršku u svim fazama pregleda i liječenja.",
  },
  {
    name: "Lamija Đulan",
    role: "dipl. med. sestra",
    image: "/images/team/lamija-dulan.webp",
    text: "Lamija je dio medicinskog tima koji osigurava stručnu pripremu pacijenata, podršku tokom pregleda i urednu organizaciju svakodnevnog rada poliklinike.",
  },
  {
    name: "Ajla Šeho",
    role: "pedijatrijska med. sestra",
    image: "/images/team/ajla-seho.webp",
    text: "Ajla svojim pristupom pomaže da se pacijenti, posebno najmlađi, osjećaju sigurno, smireno i adekvatno pripremljeno za pregled i tretman.",
  },
];

// Izvor: onama.php, sekcija «Porodica Sefić». Godine su navedene kako stoje na izvornoj stranici.
export const lineage = [
  { name: "Prim. dr. Šefkija Sefić", years: "1898 – 1962", image: "/images/team/sefkija-sefic.jpg", note: "Začetnik porodične oftalmološke tradicije" },
  { name: "Prof. dr. sc. Mustafa Sefić", years: "r. 1940", image: "/images/team/mustafa-sefic.jpg", note: "" },
  { name: "Prof. dr. sc. Sanja Sefić Kasumović", years: "r. 1965", image: "/images/team/sanja-portret.webp", note: "" },
  { name: "Dr. Aida Kasumović Bećirević", years: "r. 1991", image: "/images/team/aida-portret.webp", note: "" },
  { name: "Dr. Armin Kasumović", years: "r. 1994", image: "/images/team/armin-portret.webp", note: "" },
];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
