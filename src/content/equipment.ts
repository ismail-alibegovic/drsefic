export type Equipment = {
  id: string;
  name: string;
  category: "Refraktivna hirurgija" | "Dijagnostika" | "Laseri" | "Hirurgija";
  summary: string;
  details?: string[];
  specs?: { value: string; label: string }[];
  image?: string;
  imageW?: number;
  imageH?: number;
  featured?: boolean;
};

// Izvor: oprema.php. Tehnički podaci su preneseni kako ih navodi poliklinika.
export const equipment: Equipment[] = [
  {
    id: "wavelight-ex500",
    name: "WaveLight EX500 Excimer Laser",
    category: "Refraktivna hirurgija",
    summary:
      "Jedna od najnaprednijih excimer laser tehnologija za lasersku korekciju dioptrije. Koristi se za precizno oblikovanje rožnice kod procedura LASIK i PRK.",
    details: [
      "Laser radi ultrabrzo – 500 impulsa u sekundi – uz sofisticirani sistem praćenja pokreta oka, što omogućava izuzetnu preciznost liječenja uz kraće vrijeme zahvata i oporavka.",
      "Profil laserske zrake u obliku Gaussove krivulje, uz vrlo mali promjer, dopušta blago preklapanje perifernih pulseva kako bi površina rožnice bila glatka i bez oštrih rubova.",
      "Aktivni sistem praćenja ne propušta nijednu lasersku zraku ukoliko prethodno nije utvrdio tačan položaj oka. Optičke zone od 6 do 8 mm smanjuju mogućnost odbljesaka pri širokim zjenicama u noćnim uslovima.",
    ],
    specs: [
      { value: "500 Hz", label: "impulsa u sekundi" },
      { value: "6 – 8 mm", label: "optičke zone" },
    ],
    image: "/images/equipment/wavelight-ex500.jpg",
    imageW: 730,
    imageH: 684,
    featured: true,
  },
  {
    id: "angiovue",
    name: "AngioVue – OCT angiografija",
    category: "Dijagnostika",
    summary:
      "Detaljna analiza krvnih sudova očnog dna bez ubrizgavanja kontrasta u venu. Pretraga je bezbolna, beskontaktna i može se ponavljati.",
    details: [
      "Ne zahtijeva širenje zjenice ni ukapavanje anestezije, a traje u prosjeku 5 minuta po oku. Izvodljiva je i kod veoma starih pacijenata te kod zamućenih očnih medija.",
      "Koristi se u analizi i praćenju dijabetičnih promjena na oku, tromboza i ostalih vaskularnih bolesti te oblika makularne degeneracije, kao i prije primjene anti-VEGF terapije.",
      "Prema navodima poliklinike, «Dr. Sefić» je prva klinika na Balkanu koja je AngioVue sistem uvela u svakodnevnu kliničku praksu.",
    ],
    specs: [
      { value: "≈ 5 min", label: "po oku, bez kontrasta" },
    ],
    featured: true,
  },
  {
    id: "corvis-st",
    name: "Corvis® ST",
    category: "Dijagnostika",
    summary:
      "Neinvazivno analizira biomehaničke osobine rožnice i precizno, bez kontakta, mjeri očni pritisak.",
    details: [
      "Ultra-brza Scheimpflug kamera snima više od 4 000 kadrova u sekundi i bilježi reakciju rožnice na lagani impuls zraka, što daje podatke o njenoj debljini, elastičnosti i stabilnosti.",
      "Ove informacije pomažu pri ranom otkrivanju keratokonusa, tačnijoj procjeni intraokularnog pritiska, planiranju refraktivnih zahvata i dijagnostici glaukoma.",
    ],
    specs: [{ value: "4 000+", label: "kadrova u sekundi" }],
    image: "/images/equipment/corvis-st.jpg",
    imageW: 2000,
    imageH: 1333,
    featured: true,
  },
  {
    id: "iridex",
    name: "IRIDEX mikropulsni žuti laser 577 nm",
    category: "Laseri",
    summary:
      "Mikropulsni laser za tretman bolesti mrežnice – laserska zraka je podijeljena u niz kratkih pulseva niske energije s periodima odmora, pa ne dolazi do porasta temperature tkiva.",
    details: [
      "Primjenjuje se kod oštećenja vida uzrokovanih promjenama na krvnim sudovima mrežnice, posebno kada je zahvaćena makula: edemi kod dijabetične retinopatije, okluzivne bolesti krvnih sudova, hronične centralne serozne retinopatije i makularni edemi drugih uzroka.",
      "Tretman se po potrebi može ponavljati i ne isključuje ostale metode liječenja bolesti zadnjeg segmenta oka, poput intravitrealnih injekcija.",
    ],
    specs: [{ value: "577 nm", label: "žuta talasna dužina" }],
    featured: true,
  },
  {
    id: "constellation",
    name: "Constellation® Vision System",
    category: "Hirurgija",
    summary:
      "Sistem za hirurške procedure prednjeg i stražnjeg segmenta oka te kombinovane zahvate – fakoemulzifikaciju mrene i vitrektomiju.",
    details: [
      "Konfiguracija objedinjuje vitrektom, fako aparat, integrisani PurePoint endolaser (532 nm) i ksenonski izvor svjetla.",
      "Omogućava automatsku kontrolu intraokularnog pritiska tokom zahvata i operacije kroz male hirurške rezove (20, 23, 25 i 27 G), što doprinosi bržem postoperativnom oporavku.",
    ],
    specs: [{ value: "27 G", label: "najmanji hirurški rez" }],
    image: "/images/equipment/constellation.jpg",
    imageW: 283,
    imageH: 382,
  },
  {
    id: "moria",
    name: "Mikrokeratom Moria One Use-Plus SBK",
    category: "Refraktivna hirurgija",
    summary:
      "Mikrokeratom za izradu vrlo tankih planarnih poklopaca rožnice (100 µm) kod LASIK procedure, što omogućava korekciju i pacijentima s tanjom rožnicom.",
    image: "/images/equipment/moria.jpg",
    imageW: 365,
    imageH: 150,
  },
  {
    id: "compact-touch",
    name: "Quantel Medical Compact Touch",
    category: "Dijagnostika",
    summary:
      "Oftalmološki ultrazvuk koji kombinuje A-scan i B-scan tehnologiju.",
    details: [
      "B-scan omogućava procjenu staklastog tijela, mrežnice i horoida kada pregled očnog dna nije moguć, dok A-scan pruža precizna biometrijska mjerenja neophodna za planiranje operacije katarakte.",
    ],
    image: "/images/equipment/compact-touch.jpg",
    imageW: 1130,
    imageH: 580,
  },
  {
    id: "soct",
    name: "Spektralni OCT 3D (SOCT 3D)",
    category: "Dijagnostika",
    summary:
      "Optička koherentna tomografija daje uvid u stanje mrežnice, debljinu mrežnice i sloja nervnih niti, s topografskim prikazima u tri dimenzije.",
    details: [
      "Koristi se kod bolesti mrežnice (senilna degeneracija makule, dijabetična i hipertonična retinopatija) te kod glaukoma, gdje se prati stanje nervnih niti na glavi vidnog živca.",
    ],
    image: "/images/equipment/soct-3d.jpg",
    imageW: 300,
    imageH: 226,
  },
  {
    id: "yag",
    name: "YAG laser",
    category: "Laseri",
    summary:
      "Precizni ambulantni zahvati bez rezova – najčešće uklanjanje zamućenja stražnje kapsule nakon operacije katarakte te laserska iridotomija kod određenih oblika glaukoma.",
    details: [
      "Zahvat traje nekoliko minuta, izvodi se u lokalnoj anesteziji kapima, a pacijent se odmah nakon procedure vraća svakodnevnim aktivnostima.",
    ],
  },
  {
    id: "optopol",
    name: "Automatski perimetar OPTOPOL PTS 100",
    category: "Dijagnostika",
    summary:
      "Kompjuterizovano određivanje vidnog polja, važno kod ranog otkrivanja oštećenja vidnog živca kod glaukoma i niza drugih bolesti.",
    image: "/images/equipment/optopol-pts-100.jpg",
    imageW: 150,
    imageH: 150,
  },
  {
    id: "nidek-speedy-k",
    name: "Autokeratorefraktometar Nidek Speedy-K",
    category: "Dijagnostika",
    summary:
      "Automatsko određivanje objektivne refrakcije oka i mjerenje prednje krivine rožnice – važno kod određivanja kontaktnih leća i intraokularne leće.",
    image: "/images/equipment/nidek-speedy-k.jpg",
    imageW: 150,
    imageH: 150,
  },
  {
    id: "nidek-sl-250",
    name: "Biomikroskop Nidek SL-250 s aplanacionim tonometrom",
    category: "Dijagnostika",
    summary:
      "Pregled prednjeg segmenta oka pod uvećanjem i procjepnim svjetlom, gonioskopija te mjerenje očnog pritiska aplanacionim tonometrom.",
    image: "/images/equipment/nidek-sl-250.jpg",
    imageW: 150,
    imageH: 150,
  },
  {
    id: "cine-scan",
    name: "Ultrazvuk A i B scan – Cine Scan",
    category: "Dijagnostika",
    summary:
      "Određivanje dužine očne jabučice i prikaz promjena unutar oka koje se zbog neprozirnih očnih medija inače ne mogu vidjeti.",
    image: "/images/equipment/cine-scan.jpg",
    imageW: 150,
    imageH: 150,
  },
  {
    id: "nikon",
    name: "Chart projektor Nikon NP-3S",
    category: "Dijagnostika",
    summary:
      "Projektor optotipa različitog oblika i veličine za određivanje oštrine vida.",
    image: "/images/equipment/nikon-np-3s.jpg",
    imageW: 150,
    imageH: 150,
  },
];

export const facilities = {
  title: "Četiri ambulante",
  text: "Poliklinika funkcioniše kroz četiri potpuno opremljene ambulante koje rade paralelno, što omogućava istovremeni prijem i obradu više pacijenata. Svaka ambulanta raspolaže kompletnom dijagnostičkom i informatičkom opremom potrebnom za savremeni oftalmološki pregled.",
};
