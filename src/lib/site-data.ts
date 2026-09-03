// Central content source for the NFC V0 site.
// Every fact here comes from the "NOVA FINANCE CLUB — Estrutura e Pessoas — Mandato 2026/2027"
// brief, or was supplied directly by the user in chat. Nothing here is invented.

export const siteConfig = {
  name: "Nova Finance Club",
  shortName: "NFC",
  institution: "FCT-NOVA",
  institutionFullName: "NOVA School of Science and Technology",
  slogan: "Bridging Science & Finance",
  foundedYear: 2024,
  mandate: "2026/2027",
  memberCount: 27,
  email: "nfc@ae.fct.unl.pt",
  instagram: "https://www.instagram.com/novafinanceclub_fct/",
  linkedin: "https://www.linkedin.com/company/nova-finance-club/",
  github: "https://github.com/NOVA-Finance-Club",
};

export const missionStatement = `Founded in ${siteConfig.foundedYear}, the ${siteConfig.name} is a student-led organization at the ${siteConfig.institutionFullName}. Our mission is to foster financial literacy, ignite interest in financial markets, and equip students with practical skills.`;

// The club's founding story, written by the user for the About page, split
// into the beats the page's layout uses (hero statement, the gap, NFC's
// response, the community it wants to be). English here is a translation;
// the Portuguese original lives in translations-pt.ts under the matching
// "about.*" keys.
export const aboutStory = {
  heroHeadline: "There's a significant gap in how engineering students are trained.",
  heroSubtext: "Nova Finance Club was born from that observation.",
  gapBody:
    "Most curricula in the field don't include management or economics courses, subjects that turn out to be essential later in a career. This gap matters because of where many engineers end up: as careers progress, they often take on roles in management, finance or leadership, where this knowledge becomes essential.",
  responseStatement:
    "NFC exists to close exactly that gap: a space built by and for students, to complement technical training with the financial and management skills the university doesn't provide on its own.",
  communityLead:
    "More than an academic club, it's meant to be a community for sharing knowledge, where members helping each other is what drives everything we do. We believe that bringing together people with different backgrounds and interests benefits everyone:",
  communityExperienced: "Those with more experience help those just starting out.",
  communityNewcomers: "Newcomers bring fresh perspectives and energy to the group.",
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Alumni", href: "/alumni" },
  { label: "Articles", href: "/articles" },
  { label: "Fund", href: "/fund" },
  { label: "Join", href: "/join" },
] as const;

export type Person = { role: string; name: string };

// Academic programme per member, from Data/NFC_Membros_2026-2027.csv.
// Level (BSc/MSc) is derived from the course's own full name ("Licenciatura"
// vs "Mestrado") rather than the CSV's separate Nível column, because that
// column disagrees with the course name for 3 people (Gisela Alves,
// Guilherme Tenório, Bernardo Barata) — flagged for the user to verify.
export type Degree = { code?: string; name: string; level: "BSc" | "MSc" };

export const memberDegrees: Record<string, Degree> = {
  "Sara Abrantes": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Diogo Ruivo": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "João Henriques": { code: "LEI", name: "Computer Engineering", level: "BSc" },
  "Samuel Pires Gonçalves": { code: "MEG", name: "Geological Engineering", level: "MSc" },
  "Duarte Esteves": { code: "LEGI", name: "Industrial Engineering and Management", level: "BSc" },
  "Tiago Santos": { code: "MEI", name: "Computer Engineering", level: "MSc" },
  "Rodrigo Devesa": { code: "LEEC", name: "Electrical and Computer Engineering", level: "BSc" },
  "Joana Ferreira": { code: "MMA", name: "Mathematics and Applications", level: "MSc" },
  "Gisela Alves": { code: "LM", name: "Mathematics", level: "BSc" },
  "Tiago Albuquerque": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Marta Jesus": { code: "MMA", name: "Mathematics and Applications", level: "MSc" },
  "Isabel Monteiro": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Filipe Parreira": { code: "LEGI", name: "Industrial Engineering and Management", level: "BSc" },
  "Gonçalo Vieira": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Rita Almeida": { code: "BQ", name: "Biochemistry", level: "BSc" },
  "Guilherme Tenório": { code: "LEGI", name: "Industrial Engineering and Management", level: "BSc" },
  "Bernardo Barata": { code: "MEI", name: "Computer Engineering", level: "MSc" },
  "Miguel Maria": { code: "LEB", name: "LEB", level: "BSc" },
  "José Seixas da Fonseca": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Mateo Kirk": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "José Faria": { code: "LEEC", name: "Electrical and Computer Engineering", level: "BSc" },
  "Guilherme Azevedo": { code: "MEGI", name: "Industrial Engineering and Management", level: "MSc" },
  "Rogério Soares": { code: "MEI", name: "Computer Engineering", level: "MSc" },
  "Afonso Jerónimo": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Matilde Duarte": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Vasco Cruz": { code: "LMAGR", name: "Applied Mathematics for Risk Management", level: "BSc" },
  "Maria Neves": { name: "Big Data Analytics and Engineering", level: "MSc" },
};

export const board: Person[] = [
  { role: "President", name: "Sara Abrantes" },
  { role: "Vice President", name: "Diogo Ruivo" },
  { role: "Secretary-General", name: "João Henriques" },
];

export const generalAssemblyBoard: Person[] = [
  { role: "President", name: "Samuel Pires Gonçalves" },
  { role: "Vice President", name: "Duarte Esteves" },
  { role: "Secretary", name: "Tiago Santos" },
];

export const fiscalCouncil: Person[] = [
  { role: "President", name: "Rodrigo Devesa" },
  { role: "Vice President", name: "Joana Ferreira" },
];

// Governance bodies, presented on /departments alongside the four functional
// departments. The General Council is the General Assembly Board and the
// Fiscal Council together — not a third, separate body.
export type GovernanceUnit = {
  slug: string;
  name: string;
  badgeImage: string;
  summary: string;
  people?: Person[];
  subgroups?: { title: string; people: Person[] }[];
};

export type EditorialSeries = {
  name: string;
  englishGloss?: string;
  cadence: string;
  description: string;
};

export type Division = {
  name: string;
  description: string;
};

export type Department = {
  slug: string;
  name: string;
  formerly?: string;
  coordinator: string;
  members: string[];
  summary: string;
  description?: string;
  mandateGoal?: string;
  editorialSeries?: EditorialSeries[];
  divisions?: Division[];
  notes?: string[];
  badgeImage: string;
};

export const departments: Department[] = [
  {
    slug: "events-external-relations",
    name: "Events & External Relations Department",
    formerly: "Marketing & Operations",
    coordinator: "Gisela Alves",
    members: ["Tiago Albuquerque", "Marta Jesus"],
    summary:
      "Runs the club's events, its recruitment campaign, and its external relationships.",
    description:
      "The Events & External Relations department plans and runs NFC's events, from internal socials and onboarding ceremonies to external panels and masterclasses with guests from the financial sector. It also leads the semesterly recruitment campaign, manages relationships with partners and sponsors, and coordinates with other national finance clubs.",
    mandateGoal: "1,000 LinkedIn followers by the end of the 2026/2027 mandate.",
    badgeImage: "/brand/dept-eventos-re.png",
  },
  {
    slug: "personal-finance",
    name: "Personal Finance Department",
    coordinator: "Isabel Monteiro",
    members: ["Filipe Parreira", "Gonçalo Vieira", "Rita Almeida"],
    summary:
      "NFC's public face to the FCT community and on LinkedIn, through three regular editorial series.",
    description:
      "The Personal Finance department is NFC's public face to the FCT community and on LinkedIn. It produces educational content that makes economics and personal finance accessible to a non-specialist audience, and covers European Central Bank policy decisions as they happen.",
    editorialSeries: [
      {
        name: "Economia numa Imagem",
        englishGloss: "The Economy in One Image",
        cadence: "Fortnightly",
        description:
          "A chart or statistic that tells an economic story, with minimal text.",
      },
      {
        name: "O Segredo dos Números",
        englishGloss: "The Secret of the Numbers",
        cadence: "Fortnightly",
        description:
          "A short, accessible analysis of a single economic statistic.",
      },
      {
        name: "European Monetary Policy",
        cadence: "About 8 times a year",
        description:
          "Published one week after each European Central Bank (ECB) meeting: the rate decision, its rationale, and euro-area inflation and growth data.",
      },
    ],
    badgeImage: "/brand/dept-financas-pessoais.png",
  },
  {
    slug: "investment",
    name: "Investment Department",
    coordinator: "Rodrigo Devesa",
    members: [
      "Guilherme Tenório",
      "Bernardo Barata",
      "Miguel Maria",
      "José Seixas da Fonseca",
      "Mateo Kirk",
      "José Faria",
    ],
    summary: "Runs the club's virtual investment fund and covers global capital markets.",
    description:
      "The Investment department manages NFC's virtual fund and covers global capital markets. It is split into two divisions: Asset Management, which runs the fund's coverage teams and reports performance each quarter, and Global Markets, which tracks yields, commodities and FX in a weekly overview.",
    divisions: [
      {
        name: "Division 01 — Asset Management",
        description:
          "Runs a virtual fund with an initial allocation set at the start of the mandate, split into coverage teams (e.g. Iberia & Europe, Emerging Markets, Global Macro), each managing its own portion of the fund. Produces the quarterly NFC Shareholders Report on LinkedIn, including an executive summary, performance versus a benchmark (e.g. the S&P 500), the Sharpe ratio, maximum drawdown, the top 3 best- and worst-performing positions, and performance attribution by position.",
      },
      {
        name: "Division 02 — Global Markets & Markets Overview",
        description:
          "Publishes a short weekly report on capital markets performance (yields, commodities, FX) with a recap of the week's key events.",
      },
    ],
    badgeImage: "/brand/dept-investimentos.png",
  },
  {
    slug: "quantitative-trading",
    name: "Quantitative Trading Department",
    formerly: "Innovative Trading",
    coordinator: "Diogo Ruivo",
    members: [
      "Guilherme Azevedo",
      "Rogério Soares",
      "Afonso Jerónimo",
      "Matilde Duarte",
      "Vasco Cruz",
      "João Henriques",
      "Maria Neves",
      "Joana Ferreira",
    ],
    summary: "Produces real quantitative finance projects, starting from a shared bootcamp.",
    description:
      "The Quantitative Trading department produces real quantitative finance projects. Members start with a shared bootcamp, a set of Jupyter notebooks on the NFC GitHub covering portfolio construction, quantitative strategies, statistical modelling, machine learning and risk management. They then move on to individual projects such as portfolio optimization or pairs trading, each with documented code, a written report and a final presentation to the department.",
    notes: [
      "Source material describes the bootcamp as \"7 modules\" but lists 8 module names (Fundamentals through Execution & Systems). Confirm the correct module count before publishing.",
    ],
    badgeImage: "/brand/dept-quant.png",
  },
];

// Department coordinators, listed together on the Board page alongside the
// elected officers. Role labels include the department name so PeopleGrid's
// lead-role featuring (which matches on the exact role string "Coordinator")
// doesn't single one out — they're peers here, not a department's own lead.
export const departmentCoordinators: Person[] = departments.map((dept) => ({
  role: `${dept.name.replace(/ Department$/, "")} Coordinator`,
  name: dept.coordinator,
}));

export const governanceUnits: GovernanceUnit[] = [
  {
    slug: "board",
    name: "Board",
    badgeImage: "/brand/dept-direcao.png",
    summary:
      "The club's elected executive leadership for the 2026/2027 mandate.",
    people: board,
    subgroups: [
      {
        title: "Department Coordinators",
        people: departmentCoordinators,
      },
    ],
  },
  {
    slug: "general-council",
    name: "General Council",
    badgeImage: "/brand/dept-conselho-geral.png",
    summary:
      "The General Assembly Board and the Fiscal Council together.",
    subgroups: [
      {
        title: "General Assembly Board",
        people: generalAssemblyBoard,
      },
      {
        title: "Fiscal Council",
        people: fiscalCouncil,
      },
    ],
  },
];

// The recurring, named outputs NFC produces — used as the type legend on the
// Articles archive page. Each one is already described in more depth on its
// producing department's card on /departments; this is the publication-facing view.
export type PublicationSeries = {
  name: string;
  englishGloss?: string;
  cadence: string;
  producedBy: string; // department slug
  channel: string;
};

export const publicationSeries: PublicationSeries[] = [
  {
    name: "Economia numa Imagem",
    englishGloss: "The Economy in One Image",
    cadence: "Fortnightly",
    producedBy: "personal-finance",
    channel: "LinkedIn",
  },
  {
    name: "O Segredo dos Números",
    englishGloss: "The Secret of the Numbers",
    cadence: "Fortnightly",
    producedBy: "personal-finance",
    channel: "LinkedIn",
  },
  {
    name: "European Monetary Policy",
    cadence: "About 8 times a year",
    producedBy: "personal-finance",
    channel: "LinkedIn",
  },
  {
    name: "NFC Shareholders Report",
    cadence: "Quarterly",
    producedBy: "investment",
    channel: "LinkedIn",
  },
  {
    name: "Global Markets & Markets Overview",
    cadence: "Weekly",
    producedBy: "investment",
    channel: "LinkedIn",
  },
];

// Past elected leadership, one entry per mandate, before the current
// 2026/2027 mandate. Grouped the same way governanceUnits is (Board,
// General Council as one body split into its two subgroups, then
// Coordinators) so this page reads as the historical version of
// /departments. Nothing here is invented — add a term only once its
// tomada de posse details (and source file, dropped into Data/) are in hand.
export type AlumniGroup = {
  title: string;
  people?: Person[];
  subgroups?: { title: string; people: Person[] }[];
};

export type AlumniTerm = {
  label: string;
  inauguratedDisplay?: string;
  location?: string;
  groups: AlumniGroup[];
};

// Newest first.
export const alumniTerms: AlumniTerm[] = [
  {
    // From Data/NFC_Alumni_2025-06-17.csv. Student numbers from that source
    // are deliberately not carried over here; they stay in the CSV, not on
    // the public site.
    label: "2025/2026",
    inauguratedDisplay: "June 17, 2025",
    location: `Building 7, Auditorium 1A, ${siteConfig.institutionFullName}`,
    groups: [
      {
        title: "Board",
        people: [
          { role: "President", name: "Samuel Pires Gonçalves" },
          { role: "Vice President", name: "Duarte Esteves" },
          { role: "Secretary", name: "Tiago Santos" },
        ],
      },
      {
        title: "General Council",
        subgroups: [
          {
            title: "General Assembly Board",
            people: [
              { role: "President", name: "João Pinto" },
              { role: "Vice President", name: "António Ferreira" },
              { role: "Secretary", name: "Carlota Rito" },
            ],
          },
          {
            title: "Fiscal Council",
            people: [
              { role: "President", name: "Tiago Neves" },
              { role: "Vice President", name: "Rodrigo Freitas" },
            ],
          },
        ],
      },
      {
        title: "Coordinators",
        people: [
          { role: "Events & Marketing", name: "Hugo Pereira" },
          { role: "Investments", name: "João Gabriel Fonseca" },
          { role: "Innovative Trading", name: "Joana Ferreira" },
          { role: "Personal Finance", name: "António Pires" },
        ],
      },
    ],
  },
  {
    // From Data/NFC_Alumni_2025-11-04.csv. Student numbers from that source
    // are deliberately not carried over here; they stay in the CSV, not on
    // the public site.
    label: "2024/2025",
    inauguratedDisplay: "November 4, 2025",
    location: `Building 7, Auditorium 1A, ${siteConfig.institutionFullName}`,
    groups: [
      {
        title: "Board",
        people: [
          { role: "President", name: "Tiago Neves" },
          { role: "Vice President", name: "Constança Branco" },
          { role: "Secretary", name: "Beatriz Raimundo" },
        ],
      },
      {
        title: "General Council",
        subgroups: [
          {
            title: "General Assembly Board",
            people: [
              { role: "President", name: "Rita Milhazes" },
              { role: "Vice President", name: "Joana Silvestre" },
              { role: "Secretary", name: "Miguel Teles Pepino" },
            ],
          },
          {
            title: "Fiscal Council",
            people: [
              { role: "President", name: "Guilherme Antunes" },
              { role: "Vice President", name: "Mafalda Martins" },
            ],
          },
        ],
      },
      {
        title: "Coordinators",
        people: [
          { role: "Quantitative Trading", name: "Diogo Seves" },
          { role: "Finance", name: "Samuel Pires Gonçalves" },
          { role: "Image", name: "Tiago Santos" },
          { role: "Investments", name: "Rodrigo Freitas" },
        ],
      },
    ],
  },
];

// The NFC Fund — the Investment Department's Division 01 (Asset Management).
// Coverage teams and benchmark below are the brief's own illustrative examples
// ("ex:"), not confirmed choices — flagged as PENDING on the page itself.
export const nfcFund = {
  name: "NFC Fund",
  coordinator: "Rodrigo Devesa",
  mandate:
    "A virtual fund with an initial allocation set at the start of the mandate, split into coverage teams, each managing its own portion of the fund.",
  exampleCoverageTeams: ["Iberia & Europe", "Emerging Markets", "Global Macro"],
  exampleBenchmark: "S&P 500",
  report: {
    name: "NFC Shareholders Report",
    cadence: "Quarterly",
    channel: "LinkedIn",
    contents: [
      "Executive summary",
      "Performance vs. benchmark",
      "Sharpe ratio",
      "Maximum drawdown",
      "Top 3 best- and worst-performing positions",
      "Performance attribution by position",
    ],
  },
};
