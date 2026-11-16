export type ServiceSection = {
  title: string;
  body?: string[];
  list?: string[];
  items?: { title: string; text: string }[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  navTitle: string;
  category: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
  doctor?: string; // slug ljekara čije uže područje interesa obuhvata ovu oblast
  facts: { label: string; value: string }[];
  sections: ServiceSection[];
  faqs?: { q: string; a: string }[];
  equipment?: string[];
};

// Izvori: usluge.php, operacije.php, refrakciona.php, operacija-mrene.php, operacije-glaukoma.php,
// vitrektomija.php, kauterizacija.php, kornealni.php, oprema.php, faq.php (sefic.ba).
// Tekst je jezički uređen i skraćen; medicinsko značenje nije mijenjano.
export const services: Service[] = [
  {
    slug: "oftalmoloski-pregledi",
    number: "01",
    title: "Oftalmološki pregledi i dijagnostika",
    navTitle: "Pregledi i dijagnostika",
    category: "Pregledi",
    short:
      "Od prvog pregleda djeteta do kompleksne dijagnostike odraslih – kompletni pregledi svih struktura oka uz savremenu tehnologiju.",
    intro:
      "U ordinaciji se obavljaju pregledi oka i sva dijagnostika. Cilj je da pacijent na jednom mjestu obavi svu dijagnostičku i terapijsku uslugu koja može riješiti oftalmološki problem.",
    image: "/images/services/dijagnostika-pregled.jpg",
    imageAlt: "Ljekarka poliklinike Dr. Sefić tokom dijagnostičkog pregleda pacijentice",
    facts: [
      { label: "Termin", value: "U pravilu u roku od dva do tri dana" },
      { label: "Hitni slučajevi", value: "Isti dan, u sklopu radnog vremena" },
      { label: "Ambulante", value: "Četiri potpuno opremljene ambulante" },
    ],
    sections: [
      {
        title: "Vrste pregleda",
        list: [
          "Opći oftalmološki pregled",
          "Dječiji oftalmološki pregled",
          "Retinološki pregled i dijagnostika",
          "Glaukomski pregled i dijagnostika",
          "Pregled za refraktivnu hirurgiju",
          "Pregled za operaciju mrene",
          "Pregled i fitanje kontaktnih leća",
        ],
      },
      {
        title: "Dijagnostičke pretrage",
        list: [
          "OCT angiografija",
          "Kornealna tomografija",
          "Perimetrija (vidno polje)",
          "Biometrija",
          "Gonioskopija",
          "Analiza suznog filma",
          "Proštrcavanje suznih kanalića",
        ],
      },
      {
        title: "Oko kao pokazatelj općeg zdravlja",
        body: [
          "Broj pravih očnih bolesti je, zapravo, mali. Najveći broj tegoba su manifestacije oboljenja organizma u cjelini – oko je osjetljiv i precizan indikator zdravlja cijelog organizma.",
          "Poznate su promjene na očnom aparatu kod šećerne bolesti, moždanog udara, multiple skleroze, upalnih stanja, tumora i krvnih bolesti. Kod ovih i niza drugih općih bolesti detaljan pregled oka pomaže dijagnozi, ali i praćenju terapije i njene efikasnosti.",
        ],
      },
      {
        title: "Pregledi djece",
        body: [
          "Posebno mjesto zauzima oftalmologija dječije dobi. Prvi pregled očiju obavlja se u porodilištu. Ako se dijete normalno razvija, a oči su pravilne, prvi pregled kod oftalmologa savjetuje se s tri godine – posebno ako u porodici ima nasljednih ili očnih bolesti vezanih za najraniji uzrast.",
          "Ako roditelji imaju neku od refraktivnih anomalija, savjetuje se pregled na široku zjenicu.",
        ],
      },
    ],
    equipment: ["angiovue", "corvis-st", "soct", "optopol"],
  },
  {
    slug: "laserska-korekcija-dioptrije",
    number: "02",
    title: "Lasersko skidanje dioptrije",
    navTitle: "Lasersko skidanje dioptrije",
    category: "Refraktivna hirurgija",
    short:
      "Laserska korekcija refraktivnih grešaka omogućava precizno oblikovanje rožnice i savremeno rješavanje najčešćih dioptrijskih anomalija.",
    intro:
      "Laserska korekcija refraktivnih grešaka, popularno nazvana «lasersko skidanje dioptrije», naziv je za različite postupke kojima se vid koriguje oblikovanjem rožnice oka.",
    image: "/images/services/operaciona-sala.jpg",
    imageAlt: "Ljekarke poliklinike Dr. Sefić u sali za lasersku korekciju vida",
    doctor: "aida-kasumovic-becirevic",
    facts: [
      { label: "Metode", value: "LASIK, PRK" },
      { label: "Laser", value: "WaveLight EX500 Excimer" },
      { label: "Anestezija", value: "Lokalna, kapima" },
      { label: "Kontrole", value: "Dan nakon tretmana i 7. dan" },
    ],
    sections: [
      {
        title: "Kako djeluje excimer laser",
        body: [
          "Rožnica se oblikuje excimer laserom, visokofrekventnim UV laserom. Za razliku od drugih lasera, svjetlosna zraka excimer lasera ne uzrokuje toplinska oštećenja – hladnom zrakom svjetla precizno se remodelira površina rožnice.",
          "Laser skida mikroskopsku količinu tkiva, čime se ispravlja zakrivljenost rožnice i omogućava jasnije fokusiranje svjetla na mrežnici.",
        ],
      },
      {
        title: "Metode",
        items: [
          {
            title: "LASIK",
            text: "Laser In Situ Keratomileusis koriguje kratkovidnost, dalekovidnost i astigmatizam. Mikrokeratomom se odigne tanki površinski poklopac rožnice, laser oblikuje dublji sloj, a poklopac se vraća u prirodni položaj – bez šavova i zavoja, uz brz oporavak.",
          },
          {
            title: "PRK",
            text: "Fotorefraktivna keratektomija modelira rožnicu laserom nakon uklanjanja epitela. Primjenjuje se kod male do umjerene kratkovidnosti, dalekovidnosti i astigmatizma do 4 D ili kod pacijenata čija debljina rožnice nije dovoljna za LASIK. Postoperativni tretman kapima i terapijskim kontaktnim sočivima je neophodan.",
          },
        ],
      },
      {
        title: "Priprema",
        body: [
          "Ljekar obavlja detaljan specijalistički pregled kako bi utvrdio da li je oko zdravo i pogodno za predloženi tretman. Prije zahvata potrebno je ljekara obavijestiti o svim lijekovima koje koristite, prethodnim upalama ili povredama oka te nasljednim bolestima.",
          "Ako nosite tvrda ili polutvrda kontaktna sočiva, potrebno ih je 3 do 4 sedmice prije pregleda zamijeniti naočalama. Meka kontaktna sočiva skidaju se sedmicu prije pregleda.",
        ],
      },
      {
        title: "Tok tretmana",
        body: [
          "Na početku tretmana ukapaju se kapi za lokalnu anesteziju oka, a zahvat se izvodi u operacionoj sali. Sam laserski dio traje kratko; dužina zavisi od visine dioptrije. Nakon završetka tretmana u oko se ukapaju antibiotske kapi.",
        ],
      },
      {
        title: "Nakon tretmana",
        list: [
          "Neko vrijeme možete osjećati svrab, peckanje ili pojačanu osjetljivost na svjetlo; neophodan je odmor.",
          "Obezbijedite osobu s kojom ćete nakon tretmana otići kući.",
          "Zatamnjene naočale nosite naredne 4 sedmice u budnom stanju; tokom spavanja preporučuje se zaštitnik za oko.",
          "Umivajte se i tuširajte zatvorenih očiju najmanje 24 sata nakon operacije.",
          "Izbjegavajte sport 1 do 2 sedmice, a plivanje najmanje 2 sedmice.",
          "Šminka se ne preporučuje bar dva dana, a maskara 4 sedmice nakon tretmana.",
        ],
      },
      {
        title: "Mogući rizici",
        body: [
          "Kao i kod svih hirurških intervencija, moguće su komplikacije i neželjeni efekti. Sve detaljne informacije o neželjenim efektima i mogućim komplikacijama dobit ćete od oftalmologa prije nego što se odlučite za operaciju.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ko je dobar kandidat za laser?",
        a: "Osoba treba biti punoljetna, a dioptrija stabilna najmanje godinu dana kod starijih, odnosno najmanje dvije godine kod mlađih kandidata. Oko mora biti zdravo, bez upalnih i degenerativnih bolesti, bez mrene ili glaukoma. Eliminatorna pretraga je debljina i zakrivljenost prednje i zadnje strane rožnice, koja se analizira tomografom.",
      },
      {
        q: "Koja je razlika između LASIK-a i PRK-a?",
        a: "LASIK je najkomfornija procedura, s postoperativnim oporavkom od par dana; izvodi se kod srednje debele, pravilno zakrivljene rožnice. Kod tanje rožnice savjetuje se PRK, kojim se «štedi» tkivo rožnice; postoperativni period traje do 7 dana, uz nelagodu prvih sati nakon intervencije. Dugoročno gledajući, rezultat jedne i druge operacije je isti.",
      },
      {
        q: "Kako izgleda oporavak nakon LASIK-a?",
        a: "Na tretirano oko stavlja se zaštitno sočivo koje se skida sutradan, kada se ispituje vid i analizira stanje rožnice. Kapaju se antibiotske kapi i umjetne suze. Na posao se u pravilu ide dva dana nakon intervencije; bazen se ne savjetuje 4 sedmice.",
      },
    ],
    equipment: ["wavelight-ex500", "moria", "corvis-st"],
  },
  {
    slug: "operacija-mrene",
    number: "03",
    title: "Operacija mrene",
    navTitle: "Operacija mrene",
    category: "Hirurgija katarakte",
    short:
      "Katarakta je vodeći uzrok slabljenja vida u starijoj dobi, a operativni zahvat omogućava siguran i brz oporavak uz savremene hirurške tehnike.",
    intro:
      "Katarakta je zamućenje sočiva koje je u zdravom oku potpuno prozirno. Jedini način liječenja je operacija – fakoemulzifikacija, pri kojoj se zamućeno sočivo uklanja ultrazvukom i zamjenjuje savitljivim vještačkim sočivom.",
    image: "/images/clinic/operativni-blok.jpg",
    imageAlt: "Ulaz u operativni blok poliklinike Dr. Sefić",
    facts: [
      { label: "Metoda", value: "Fakoemulzifikacija (ultrazvuk)" },
      { label: "Rez", value: "2,2 mm na rožnici" },
      { label: "Anestezija", value: "Lokalna, kapima" },
      { label: "Boravak", value: "Pacijent isti dan odlazi kući" },
    ],
    sections: [
      {
        title: "Šta je katarakta",
        body: [
          "Najčešća je starosno uzrokovana katarakta, koja se javlja u drugoj polovini života i čini oko 90% svih operisanih katarakti. Obično je obostrana i progresivna. Od ostalih uzroka treba navesti nasljeđe, upale, metaboličke bolesti, izloženost zračenju te povrede oka.",
        ],
      },
      {
        title: "Najčešći simptomi",
        list: [
          "Smanjenje vidne oštrine i povremeno zamagljenje vida",
          "Rasipanje svjetla, blještanje i areole oko izvora svjetla",
          "Blijeđa ili prebojena slika, dupla slika",
          "Otežano čitanje ili vožnja, posebno noću",
          "Česta potreba za promjenom dioptrije naočala",
        ],
      },
      {
        title: "Kako se izvodi operacija",
        body: [
          "Ultrazvučnom sondom katarakta se izdrobi i usisa kroz mali rez na rožnici, a na njeno mjesto ugrađuje se savitljivo sočivo ranije određene jačine i dizajna, zavisno od dobi pacijenta i njegovih životnih navika.",
          "Poliklinika izvodi operaciju katarakte s ugradnjom monofokalnih, EDOF, multifokalnih i toričnih intraokularnih leća, kao i kombinovanu operaciju katarakte i glaukoma.",
        ],
      },
      {
        title: "Kada je pravo vrijeme",
        body: [
          "Pravi trenutak je onaj kada slabljenje vida počne ometati pacijenta u svakodnevnom životu. Ne treba čekati da vidna oštrina ozbiljno padne: ranija operacija je preduslov lagane, komforne i sigurne operacije s predvidljivim postoperativnim tokom.",
        ],
      },
      {
        title: "Priprema i oporavak",
        body: [
          "Prije operacije potreban je pregled interniste i uredni laboratorijski nalazi krvi. Pacijent nakon operacije odlazi kući sa zavojem na operisanom oku; sutradan je kontrola, na kojoj se savjetuje terapija kapima.",
          "Mjesec dana nakon operacije utvrđuje se postoperativno stanje i po potrebi određuju naočale. Drugo oko se obično operiše nakon što se prvo u potpunosti oporavi.",
        ],
      },
      {
        title: "Sekundarna katarakta",
        body: [
          "Kod dijela pacijenata nakon operacije može doći do zamućenja stražnje kapsule sočiva, što ponovo slabi vid. Rješava se ambulantno, YAG laser kapsulotomijom – bezbolnim zahvatom od nekoliko minuta.",
        ],
      },
    ],
    equipment: ["constellation", "compact-touch", "yag"],
  },
  {
    slug: "lijecenje-glaukoma",
    number: "04",
    title: "Liječenje glaukoma",
    navTitle: "Liječenje glaukoma",
    category: "Glaukom",
    short:
      "Dijagnostika, laserski zahvati i hirurško liječenje glaukoma usmjereni su na očuvanje vidnog živca i dugoročno snižavanje očnog pritiska.",
    intro:
      "Povišen očni pritisak ne boli, pa pacijent često i ne zna da ima glaukom. Savremena dijagnostika omogućava da se bolest otkrije u ranoj fazi i tako uspori propadanje vidnog živca.",
    image: "/images/clinic/dijagnostika.jpg",
    imageAlt: "Dijagnostički uređaji u ambulanti poliklinike Dr. Sefić",
    doctor: "ines-matoc-kasumovic",
    facts: [
      { label: "Pristup", value: "Lijekovi, laser ili operacija" },
      { label: "Laseri", value: "SLT, YAG iridotomija" },
      { label: "Hirurgija", value: "Trabekulektomija" },
    ],
    sections: [
      {
        title: "O bolesti",
        body: [
          "Glaukom je najčešće bolest starije populacije: zbog otežanog oticanja očne vodice dolazi do povišenog očnog pritiska, jednog od glavnih znakova glaukoma. Postoje, međutim, i oblici razvijenog glaukoma bez povišenog pritiska.",
          "Glaukom se često otkrije kada pacijent dođe odrediti naočale za blizinu. Danas je pritisak u oku moguće smanjiti lijekovima, laserom i operacijom i tako zaustaviti razvoj bolesti koja bi inače vodila ka gubitku vida.",
        ],
      },
      {
        title: "Dijagnostika i praćenje",
        list: [
          "Glaukomski pregled i dijagnostika",
          "Perimetrija – kompjuterizovano vidno polje",
          "OCT – analiza sloja nervnih niti i glave vidnog živca",
          "Gonioskopija – pregled komornog ugla",
          "Beskontaktno mjerenje očnog pritiska i biomehanike rožnice (Corvis ST)",
        ],
      },
      {
        title: "Laserski zahvati",
        items: [
          {
            title: "Selektivna laser trabekuloplastika (SLT)",
            text: "SLT laser snižava očni pritisak djelujući selektivno na drenažni sistem oka, bez oštećenja okolnog tkiva. Zahvat se izvodi ambulantno, u kapljičnoj anesteziji, a postupak se prema potrebi može ponoviti.",
          },
          {
            title: "Nd:YAG laser iridotomija",
            text: "Ambulantni laserski zahvat koji se primjenjuje kod određenih oblika glaukoma. Traje nekoliko minuta i izvodi se u lokalnoj anesteziji kapima.",
          },
        ],
      },
      {
        title: "Hirurško liječenje",
        body: [
          "Hirurško liječenje namijenjeno je pacijentima kojima kapi i laserski zahvati nisu dovoljni. Poliklinika izvodi operaciju glaukoma (trabekulektomiju) te kombinovanu operaciju katarakte i glaukoma.",
        ],
      },
    ],
    equipment: ["optopol", "soct", "corvis-st", "yag"],
  },
  {
    slug: "bolesti-mreznice",
    number: "05",
    title: "Bolesti mrežnice",
    navTitle: "Bolesti mrežnice",
    category: "Retina",
    short:
      "Zaštita najosjetljivijeg dijela oka: OCT angiografija, mikropulsni laser, anti-VEGF terapija i vitrektomija.",
    intro:
      "Promjene na mrežnici uzrokovane dijabetesom, hipertenzijom i drugim hroničnim bolestima, kao i odljubljenje mrežnice, danas se uspješno dijagnostikuju i liječe laserom, intravitrealnom terapijom ili operacijom.",
    image: "/images/clinic/ambulanta-01.jpg",
    imageAlt: "Ambulanta 01 s dijagnostičkim uređajima u poliklinici Dr. Sefić",
    doctor: "armin-kasumovic",
    facts: [
      { label: "Dijagnostika", value: "OCT i OCT angiografija" },
      { label: "Laser", value: "IRIDEX mikropulsni, 577 nm" },
      { label: "Terapija", value: "Anti-VEGF, triamcinolon" },
      { label: "Hirurgija", value: "Pars plana vitrektomija" },
    ],
    sections: [
      {
        title: "OCT angiografija",
        body: [
          "OCT angiografija omogućava detaljnu analizu krvnih sudova očnog dna bez ubrizgavanja kontrasta u venu. Pretraga je bezbolna i beskontaktna, ne zahtijeva širenje zjenice ni anesteziju, a traje u prosjeku 5 minuta po oku.",
          "Koristi se u analizi i praćenju dijabetičnih promjena, tromboza i drugih vaskularnih bolesti te makularne degeneracije, kao i prije primjene anti-VEGF terapije.",
        ],
      },
      {
        title: "Mikropulsni laser",
        body: [
          "IRIDEX mikropulsni laser primjenjuje se u tretmanu bolesti mrežnice, uključujući dijabetičku retinopatiju, makularni edem, centralnu seroznu horioretinopatiju i druge vaskularne poremećaje, te za panretinalnu fotokoagulaciju.",
          "Laserska zraka podijeljena je u niz kratkih pulseva niske energije, razdvojenih periodima odmora, pa ne dolazi do porasta temperature tkiva – terapija je ciljana, uz maksimalnu zaštitu okolnog tkiva.",
        ],
      },
      {
        title: "Anti-VEGF terapija",
        body: [
          "Anti-VEGF terapija predstavlja grupu lijekova koji zaustavljaju ili usporavaju stvaranje novih i neželjenih krvnih sudova u makuli i oko nje. Primjenjuje se intravitrealno, nakon odgovarajuće dijagnostičke obrade.",
        ],
      },
      {
        title: "Vitrektomija",
        body: [
          "Vitrektomija je mikrohirurška operativna tehnika koja se izvodi u zadnjem segmentu oka kod različitih bolesti mrežnice i staklastog tijela: krvarenja u staklovini kod šećerne bolesti, odljubljenja mrežnice, makularnih rupa, stranih tijela u oku i upalnih bolesti dubokih dijelova oka.",
          "Staklovina se odstranjuje kroz milimetarske rezove i zamjenjuje gasom ili silikonskim uljem. Većina vitrektomija izvodi se u kapljičnoj, lokalnoj anesteziji, a u težim slučajevima u općoj. Poliklinika izvodi i evakuaciju silikonskog ulja.",
        ],
      },
    ],
    equipment: ["angiovue", "iridex", "constellation", "soct"],
  },
  {
    slug: "okuloplastika",
    number: "06",
    title: "Okuloplastika",
    navTitle: "Okuloplastika",
    category: "Okuloplastična hirurgija",
    short:
      "Zdravlje, funkcija i estetika: operacije kapaka uz pažljivo planiranje funkcionalnog i estetskog rezultata.",
    intro:
      "Operacije okuloplastike izvode se uz individualno planiranje postupka, funkcionalno očuvanje oka i estetski prihvatljiv rezultat – uz patohistološku analizu uzoraka kada je to potrebno za sigurnu dijagnostiku i dalji tretman.",
    image: "/images/clinic/operativni-blok-ulaz.jpg",
    imageAlt: "Operativni blok poliklinike Dr. Sefić",
    doctor: "ines-matoc-kasumovic",
    facts: [
      { label: "Anestezija", value: "Najčešće lokalna" },
      { label: "Analiza", value: "Patohistološka dijagnostika po potrebi" },
    ],
    sections: [
      {
        title: "Zahvati",
        items: [
          {
            title: "Entropij i ektropij",
            text: "Entropij je stanje kod kojeg je ivica kapka okrenuta prema unutra, pa trepavice iritiraju rožnicu; ektropij je izvrtanje kapka prema vani. Oba zahvata izvode se u lokalnoj anesteziji i vraćaju kapak u pravilan položaj.",
          },
          {
            title: "Gornja i donja blefaroplastika",
            text: "Gornjom blefaroplastikom uklanja se višak kože i masnog tkiva gornjih kapaka, koji može sužavati vidno polje; zahvat traje oko 30–60 minuta, a oporavak 7 do 14 dana. Donja blefaroplastika uklanja višak kože i masne jastučiće ispod očiju.",
          },
          {
            title: "Ptoza kapaka i brow ptoza",
            text: "Operacija ptoze podiže spušteni gornji kapak i poboljšava vidno polje; tehnika zavisi od jačine mišića koji podiže kapak. Kod spuštenih obrva zahvat vraća obrve u prirodan položaj. Oporavak traje oko 1–2 sedmice.",
          },
          {
            title: "Tumori kapaka i rekonstrukcija",
            text: "Operacija podrazumijeva potpuno uklanjanje promjene uz sigurnosnu marginu zdravog tkiva; uklonjeno tkivo šalje se na patohistološku analizu. Rekonstruktivni zahvati planiraju se individualno, s ciljem zaštite oka i obnove funkcije kapka.",
          },
          {
            title: "Pterigij",
            text: "Dobroćudna izraslina spojnice koja se može širiti prema rožnici. Zahvat se izvodi u lokalnoj anesteziji, najčešće uz transplantaciju vlastite spojnice kako bi se smanjio rizik ponovnog rasta.",
          },
          {
            title: "Ječmenac, halacion i kauterizacija",
            text: "Manji zahvati u lokalnoj anesteziji, kratkog trajanja i brzog oporavka. Kauterizacija se koristi kod određenih izraslina po kapcima i licu.",
          },
        ],
      },
      {
        title: "Ostali zahvati iz ponude",
        list: [
          "Operacija tumora spojnice",
          "Transplantacija limbalnih stanica rožnice",
          "Aplikacija botulinum toksina",
          "Mali zahvati na kapku",
        ],
      },
    ],
  },
  {
    slug: "kornealni-cross-linking",
    number: "07",
    title: "Kornealni cross-linking",
    navTitle: "Kornealni cross-linking",
    category: "Rožnica",
    short:
      "Metoda učvršćivanja rožnice riboflavinom i UV-A zracima, kojom se zaustavlja napredovanje keratokonusa.",
    intro:
      "Kornealni cross-linking (CXL, Ultra B2 metoda) mijenja biomehaničke osobine rožnice: rožnica se tretira riboflavinom (vitaminom B2) i UV-A zracima, čime se učvršćuje i stabilizira. U poliklinici se primjenjuje savremeni akcelerirani protokol koji skraćuje trajanje zahvata.",
    image: "/images/clinic/iris-certifikat.jpg",
    imageAlt: "Detalj enterijera poliklinike Dr. Sefić s fotografijama šarenice",
    doctor: "aida-kasumovic-becirevic",
    facts: [
      { label: "Indikacija", value: "Keratokonus i druge ektazije rožnice" },
      { label: "Anestezija", value: "Topikalna, kapima" },
      { label: "Terapijsko sočivo", value: "Skida se nakon 3 do 5 dana" },
    ],
    sections: [
      {
        title: "Kada se primjenjuje",
        body: [
          "Glavna klinička indikacija je zaustavljanje progresije ektazija kod bolesti rožnice kao što su keratokonus ili marginalna pelucidna degeneracija. Ova stanja ugrožavaju biomehaničku stabilnost rožnice i dovode do nepravilnog astigmatizma i kratkovidnosti.",
          "Metodu treba primijeniti čim se utvrdi napredovanje keratokonusa, naročito ako je debljina rožnice kritična.",
        ],
      },
      {
        title: "Tok zahvata i oporavak",
        body: [
          "Procedura se izvodi u strogo kontrolisanim, sterilnim uslovima, u kapljičnoj anesteziji. Prije intervencije mjeri se debljina rožnice kako bi se zaštitile dublje strukture oka.",
          "Nakon zahvata koristi se lokalna terapija kapima, a terapijsko kontaktno sočivo skida se nakon 3 do 5 dana. Vidna funkcija se vraća u prvobitno stanje 2 do 3 sedmice nakon intervencije.",
        ],
      },
      {
        title: "Praćenje keratokonusa",
        body: [
          "Glavni faktori napredovanja keratokonusa su dob, često trljanje očiju i trudnoća. Pacijente mlađe od dvadeset godina potrebno je kontrolisati tomografijom rožnice svaka tri do šest mjeseci, a starije svakih šest do osam mjeseci.",
        ],
      },
      {
        title: "Kombinacija s drugim metodama",
        body: [
          "Cross-linking se može kombinovati s topografski vođenom laserskom ablacijom (T-CAT) ili ugradnjom intrakornealnih prstenova, s ciljem smanjenja nepravilnog astigmatizma uz očuvanje stabilnosti rožnice.",
          "Pacijentima s keratokonusom Optički studio nudi i prilagodbu specijalnih Rose-K kontaktnih leća.",
        ],
      },
    ],
    equipment: ["corvis-st", "wavelight-ex500"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Izvor: usluge.php – kompletan popis usluga kako ga navodi poliklinika, grupisan radi preglednosti.
export const serviceCatalogue = [
  {
    group: "Pregledi",
    items: [
      "Opći oftalmološki pregled",
      "Dječiji oftalmološki pregled",
      "Retinološki pregled i dijagnostika",
      "Glaukomski pregled i dijagnostika",
      "Pregled za refraktivnu hirurgiju",
      "Pregled i fitanje kontaktnih leća",
      "Pregled za operaciju mrene",
    ],
  },
  {
    group: "Dijagnostika i ambulantni zahvati",
    items: [
      "Gonioskopija",
      "Analiza suznog filma",
      "Proštrcavanje suznih kanalića",
      "Perimetrija (vidno polje)",
      "OCT angiografija",
      "Kornealna tomografija",
      "Biometrija",
      "Vađenje stranog tijela",
    ],
  },
  {
    group: "Refraktivna hirurgija i rožnica",
    items: [
      "LASIK / PRK",
      "Kornealni cross-linking",
      "Operacija pterigija s transplantacijom spojnice",
      "Operacija tumora spojnice",
      "Transplantacija limbalnih stanica rožnice",
    ],
  },
  {
    group: "Katarakta i glaukom",
    items: [
      "Operacija katarakte s ugradnjom monofokalne / EDOF / multifokalne / torične IOL",
      "Operacija glaukoma (trabekulektomija)",
      "Operacija katarakte i glaukoma",
      "Nd:YAG laser kapsulotomija",
      "Nd:YAG laser iridotomija",
      "Selektivna laser trabekuloplastika",
    ],
  },
  {
    group: "Retina",
    items: [
      "Pars plana vitrektomija",
      "Evakuacija silikonskog ulja",
      "Laserska fotokoagulacija",
      "Anti-VEGF terapija",
      "Aplikacija triamcinolona",
    ],
  },
  {
    group: "Okuloplastika",
    items: [
      "Blefaroplastika gornjih kapaka s ekstirpacijom masnih jastučića",
      "Blefaroplastika donjih kapaka",
      "Operacija entropija i ektropija",
      "Operacija ptoze kapka",
      "Operacija tumora kapka s rekonstrukcijom",
      "Patohistološka dijagnostika tumora",
      "Operacija ječmenca",
      "Mali zahvat na kapku",
      "Aplikacija botulinum toksina",
    ],
  },
];
