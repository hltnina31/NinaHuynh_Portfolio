const no = {
  meta: {
    title: "Nina Huynh | Portefølje",
  },
  navigation: {
    mainLabel: "Hovednavigasjon",
    projects: "Prosjekter",
    skills: "Ferdigheter",
    timeline: "Tidslinje",
    contact: "Kontakt",
    enableDarkMode: "Aktiver mørk modus",
    enableLightMode: "Aktiver lys modus",
  },
  language: {
    openMenu: "Velg språk",
    menuLabel: "Språkvalg",
  },
  hero: {
    greeting: "Hei, jeg er",
    worksWith: "Jeg arbeider med",
    roles: [
      "Fullstack-utvikling",
      "UX/UI-design",
      "Tjenestedesign",
      "IT-konsulenttjenester",
    ],
    description:
      "Nyutdannet innen IT og informasjonssystemer med interesse for moderne webutvikling, brukervennlige grensesnitt og digitale tjenester.",
    projectsButton: "Se prosjektene mine",
    contactButton: "Kontakt meg",
  },
  contact: {
    emailSubject: "Henvendelse fra porteføljen",
  },
  projects: {
    heading: "Prosjekter",
    introduction:
      "Et utvalg av prosjekter som viser hvordan jeg arbeider med design, utvikling og problemløsning.",
    imagePlaceholder: "Prosjektbilde",
    imagePlaceholderFor: "Bildeplassholder for",
    items: [
      {
        id: "bachelor-tingtun",
        slug: "bachelor-tingtun",
        title: "KI-basert strukturering av testfest-tilbakemeldinger",
        description:
          "Bachelorprosjekt i samarbeid med Tingtun, hvor vi utviklet en KI-basert løsning for å analysere og strukturere tilbakemeldinger og foreslå forbedringer.",
      },
      {
        id: "placeholder-project-2",
        title: "Flere prosjekter kommer snart",
        description: "Jeg jobber med nye prosjekter som snart vil bli lagt til her.",
      },
      {
        id: "placeholder-project-3",
        title: "Flere prosjekter kommer snart",
        description: "Jeg jobber med nye prosjekter som snart vil bli lagt til her.",
      },
    ],
  },
  projectCaseStudies: {
    bachelorTingtun: {
      backToProjects: "Tilbake til prosjekter",
      title: "KI-basert strukturering av testfest-tilbakemeldinger",
      subtitle: "Bachelorprosjekt i samarbeid med Tingtun",
      period: "Januar 2026 – juni 2026",
      roles: ["Prosjektleder", "Scrum Master", "Fullstack-utvikler"],
      techStackHeading: "Teknologier",
      galleryControls: {
        openFullImage: "Åpne bildet i full størrelse",
        closeFullImage: "Lukk bildet",
      },
      overview: {
        heading: "Prosjektoversikt",
        body: "I samarbeid med Tingtun utviklet vi en KI-basert løsning som analyserer tilbakemeldinger fra tjenesteeiere og foreslår forbedringer basert på innholdet. Prosjektet ble gjennomført som bachelorprosjekt ved Universitetet i Agder i perioden januar til juni 2026, i et team på fem personer.",
      },
      problem: {
        heading: "Problemet",
        body: "Tingtun ønsket en løsning som kunne gjøre det enklere å håndtere og analysere tilbakemeldinger fra tjenesteeiere. Tilbakemeldingene kunne inneholde mye informasjon, og målet var å undersøke hvordan kunstig intelligens kunne bidra til å strukturere innholdet og foreslå relevante forbedringer.",
      },
      designProcess: {
        heading: "Designprosessen",
        body: "Jeg bidro til utformingen av løsningen og arbeidet med Figma som en del av designprosessen. Teamet brukte designarbeidet til å utforske struktur, brukerflyt og hvordan den analyserte informasjonen kunne presenteres tydelig.",
        gallery: {
          ariaLabel: "Bilder fra designprosessen",
          items: {
            wireframe: {
              alt: "Wireframe som viser den første strukturen og brukerflyten i Tingtun-løsningen",
              caption: "Den første layouten som ble brukt til å definere den overordnede strukturen og brukerflyten.",
            },
            mockup: {
              alt: "Mockup som viser den visuelle utformingen av Tingtun-løsningen",
              caption: "En visuell videreutvikling med fokus på layout, hierarki og grensesnittdesign.",
            },
            prototype: {
              alt: "Interaktiv prototype av Tingtun-løsningen før utviklingsstart",
              caption: "Den interaktive prototypen som ble brukt før utviklingen startet.",
            },
          },
        },
      },
      solution: {
        heading: "Løsningen",
        body: "Vi utviklet en fullstack-løsning der React.js håndterte brukergrensesnittet, mens Node.js behandlet forespørsler og kommunikasjon med eksterne tjenester. Brukeren kunne sende inn tilbakemeldinger i løsningen, som deretter ble sendt til Gemini API for analyse, strukturering og forslag til forbedringer. GitHub API koblet resultatet til GitHub Issues, slik at saker kunne opprettes, følges opp og håndteres videre i en etablert arbeidsflyt.",
      },
      architecture: {
        heading: "Arkitekturvalg",
        introduction: "Jeg foreslo for teamet å bruke GitHub Issues gjennom GitHub API i stedet for å bygge en komplett egen database og et eget saksbehandlingssystem. GitHub Issues hadde allerede funksjonalitet for:",
        features: [
          "å opprette saker",
          "å kommentere",
          "å åpne saker",
          "å lukke saker",
          "å følge statusen til saker",
        ],
        conclusion: "Dette tekniske valget reduserte unødvendig kompleksitet og lot teamet bruke mer tid på KI-funksjonaliteten og brukeropplevelsen. Forslaget var mitt bidrag til teamets tekniske beslutningsprosess, mens arkitekturen ble videreutviklet i samarbeid med resten av teamet.",
      },
      role: {
        heading: "Min rolle",
        areas: [
          {
            heading: "Prosjektleder",
            items: ["Planla møter", "Fulgte opp fremdrift", "Bidro til tydelig oppgavefordeling", "Kommuniserte med team, oppdragsgiver og veileder"],
          },
          {
            heading: "Scrum Master",
            items: ["Ledet daglige standups", "La til rette for sprintplanlegging", "Sørget for felles forståelse av målene", "La til rette for diskusjon og felles beslutninger"],
          },
          {
            heading: "Utvikler",
            items: ["Frontend- og backend-utvikling", "API-integrasjoner med GitHub API og Gemini API", "Testing", "Bidro til pull request-arbeidsflyten"],
          },
        ],
      },
      result: {
        heading: "Resultat",
        body: "Prosjektet resulterte i en funksjonell prototype som demonstrerte hvordan KI kan støtte analyse og strukturering av tilbakemeldinger.",
        gallery: {
          ariaLabel: "Bilder av det ferdige prosjektresultatet",
          items: {
            home: {
              alt: "Hjemmesiden i Tingtun-applikasjonen",
              caption: "Hjemmesiden er det første brukeren møter og gir en inngang til løsningen.",
            },
            form: {
              alt: "Skjema for å sende inn tilbakemelding i Tingtun-applikasjonen",
              caption: "Brukeren fyller inn tilbakemeldingen som skal analyseres.",
            },
            loading: {
              alt: "Loading-tilstand mens tilbakemeldingen analyseres",
              caption: "Mens tilbakemeldingen analyseres, vises en loading-tilstand mens KI-en genererer resultatet.",
            },
            analyse: {
              alt: "KI-generert analyse med forslag til forbedringer",
              caption: "KI-en analyserer den innsendte tilbakemeldingen og genererer forslag til forbedringer.",
            },
            edit: {
              alt: "Redigering av tilbakemelding før en ny analyse",
              caption: "Brukeren kan redigere den innsendte tilbakemeldingen og generere en ny analyse.",
            },
            sending: {
              alt: "Sending av den gjennomgåtte saken til GitHub",
              caption: "Etter gjennomgang kan brukeren sende saken videre til GitHub.",
            },
            github: {
              alt: "Den innsendte saken som et GitHub Issue",
              caption: "Den innsendte saken opprettes som et GitHub Issue, hvor den kan kommenteres, følges opp, åpnes og lukkes.",
            },
            contact: {
              alt: "Kontaktfunksjon for å sende e-post",
              caption: "Kontaktfunksjonen lar brukeren ta kontakt via e-post.",
            },
          },
        },
      },
      learning: {
        heading: "Hva jeg lærte",
        body: "Prosjektet lærte meg å kombinere utvikling og prosjektledelse, kommunisere med en reell oppdragsgiver og samarbeide i et team på fem personer. Jeg fikk dypere erfaring med API-integrasjoner og tekniske beslutninger, samtidig som jeg lærte å tilpasse arbeidet når planlagte løsninger ikke fungerte som forventet. En viktig del av erfaringen var å balansere teknisk arbeid med koordinering, kommunikasjon og jevn fremdrift.",
      },
    },
  },
  skills: {
    heading: "Ferdigheter",
    introduction:
      "Et utvalg av teknologier, designmetoder og verktøy jeg bruker for å utvikle gode digitale løsninger.",
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "React.js", description: "Bygging av komponentbaserte brukergrensesnitt." },
          { name: "JavaScript", description: "Interaktivitet og logikk i moderne nettløsninger." },
          { name: "HTML", description: "Semantisk og tilgjengelig struktur for nettsider." },
          { name: "CSS", description: "Responsiv layout og visuell utforming." },
          { name: "Material UI", description: "Tilgjengelige React-komponenter og temasystemer." },
          { name: "Bootstrap", description: "Rask utvikling med responsive komponenter." },
          { name: "Tailwind CSS", description: "Verktøyklasser for fleksibel grensesnittutvikling." },
          { name: "Responsive Design", description: "Løsninger tilpasset ulike skjermer og enheter." },
        ],
      },
      {
        name: "Backend og API",
        skills: [
          { name: "Node.js", description: "Serverlogikk skrevet med JavaScript." },
          { name: "Java", description: "Objektorientert utvikling av robuste applikasjoner." },
          { name: "C#", description: "Objektorientert utvikling i .NET-miljøet." },
          { name: "ASP.NET Core MVC", description: "Webapplikasjoner bygget med MVC-arkitektur." },
          { name: "REST API", description: "Strukturerte grensesnitt mellom digitale tjenester." },
          { name: "JSON", description: "Utveksling av strukturert data mellom systemer." },
          { name: "FastAPI", description: "Utvikling av raske API-er med Python." },
          { name: "GitHub API", description: "Integrasjon med data og tjenester fra GitHub." },
          { name: "Gemini API", description: "Integrasjon av generativ KI i applikasjoner." },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "MySQL", description: "Relasjonell lagring og spørring av data." },
          { name: "MariaDB", description: "Arbeid med relasjonelle databaser." },
          { name: "SQL", description: "Modellering, henting og behandling av data." },
        ],
      },
      {
        name: "Design og UX",
        skills: [
          { name: "Figma", description: "Design, prototyper og samarbeid i grensesnittprosjekter." },
          { name: "Design Thinking", description: "Brukersentrert utforsking og problemløsing." },
          { name: "Wireframing", description: "Tidlige skisser av struktur og brukerflyt." },
          { name: "Prototyping", description: "Interaktive modeller for utprøving av ideer." },
          { name: "Design Systems", description: "Gjenbrukbare prinsipper og komponenter for konsistens." },
          { name: "UX/UI", description: "Brukervennlige og tydelige digitale grensesnitt." },
          { name: "Universell utforming (WCAG)", description: "Tilgjengelige løsninger basert på WCAG." },
        ],
      },
      {
        name: "Verktøy",
        skills: [
          { name: "Git", description: "Versjonskontroll og strukturert kodehistorikk." },
          { name: "GitHub", description: "Kodehosting, samarbeid og prosjektflyt." },
          { name: "Docker", description: "Reproduserbare utviklings- og kjøremiljøer." },
          { name: "Docker Desktop", description: "Lokal administrasjon av containere." },
          { name: "Visual Studio Code", description: "Kodeutvikling med et fleksibelt redigeringsverktøy." },
          { name: "Rider", description: "Utviklingsmiljø for .NET og C#." },
          { name: "HTTP / HTTPS", description: "Forståelse av kommunikasjon og sikker dataoverføring på nett." },
        ],
      },
    ],
  },
  timeline: {
    heading: "Tidslinje",
    introduction: "En oversikt over tidligere utdanning og erfaring.",
    sliderLabel: "Velg hendelse i tidslinjen",
    entries: [
      {
        id: "thor-heyerdahl-start",
        title: "Thor Heyerdahl videregående skole",
        period: "august 2020",
        type: "Utdanning",
        description:
          "Begynte på studiespesialisering med fordypning i realfag, hvor jeg utviklet analytiske ferdigheter og la grunnlaget for videre studier innen teknologi.",
      },
      {
        id: "thor-heyerdahl-completed",
        title: "Fullførte videregående skole",
        period: "juni 2023",
        type: "Utdanning",
        description:
          "Fullførte studiespesialisering med realfag og opparbeidet et solid grunnlag for videre utdanning innen IT.",
      },
      {
        id: "university-start",
        title: "Bachelor i IT og informasjonssystemer",
        period: "august 2023",
        type: "Utdanning",
        description:
          "Begynte bachelorstudiet ved Universitetet i Agder (UiA) i Kristiansand, med fokus på systemutvikling, programmering, databaser og brukerorientert design.",
      },
      {
        id: "tingtun-internship",
        title: "Praksis hos Tingtun",
        period: "august 2025 – juni 2026",
        type: "Erfaring",
        description:
          "Gjennomførte praksis hos Tingtun, hvor jeg arbeidet i et tverrfaglig utviklingsteam. Fikk praktisk erfaring med samarbeid, smidige arbeidsmetoder og utvikling av digitale løsninger, samtidig som jeg videreutviklet ferdigheter innen blant annet fullstack-utvikling, UX/UI-design og tjenestedesign.",
      },
      {
        id: "university-completed",
        title: "Bachelorgrad fullført",
        period: "juni 2026",
        type: "Utdanning",
        description:
          "Fullførte bachelorgraden i IT og informasjonssystemer ved Universitetet i Agder og styrket både tekniske og samarbeidsorienterte ferdigheter gjennom studiet og praksis.",
      },
    ],
  },
  footer: {
    heading: "Ta kontakt",
    socialLabel: "Sosiale medier",
    copyright: "© 2026 Nina Huynh",
  },
};

export default no;
