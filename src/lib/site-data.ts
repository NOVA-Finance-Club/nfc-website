// Central content source for the NFC V0 site.
// Every fact here comes from the "NOVA FINANCE CLUB — Estrutura e Pessoas — Mandato 2026/2027" brief.
// Nothing here is invented — gaps are left out and flagged with PENDING notes on the pages themselves.

export const siteConfig = {
  name: "Nova Finance Club",
  shortName: "NFC",
  institution: "FCT-NOVA",
  mandate: "2026/2027",
  memberCount: 27,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
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
  "Rogério Barros Maia Lopes Soares": { code: "MEI", name: "Computer Engineering", level: "MSc" },
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

export const governanceUnits: GovernanceUnit[] = [
  {
    slug: "board",
    name: "Board (Direção)",
    badgeImage: "/brand/dept-direcao.png",
    summary:
      "The club's elected executive leadership for the 2026/2027 mandate.",
    people: board,
  },
  {
    slug: "general-council",
    name: "General Council (Conselho Geral)",
    badgeImage: "/brand/dept-conselho-geral.png",
    summary:
      "The General Assembly Board and the Fiscal Council together.",
    subgroups: [
      {
        title: "General Assembly Board (Mesa da Assembleia Geral)",
        people: generalAssemblyBoard,
      },
      {
        title: "Fiscal Council (Conselho Fiscal)",
        people: fiscalCouncil,
      },
    ],
  },
];

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
      "Plans and runs the club's internal events — the opening/onboarding ceremony, socials, and the end-of-semester and end-of-mandate ceremonies — as well as external events, such as a panel or masterclass with guests from the financial sector (banks, asset managers, alumni) open to the wider FCT community. The department also runs the semesterly recruitment campaign (materials, promotion, and onboarding of new members), manages relationships with partners and sponsors, and coordinates with other national finance clubs.",
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
      "Split into two divisions, each with its own focus and its own regular publication.",
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
      "Rogério Barros Maia Lopes Soares",
      "Afonso Jerónimo",
      "Matilde Duarte",
      "Vasco Cruz",
      "João Henriques",
      "Maria Neves",
      "Joana Ferreira",
    ],
    summary: "Produces real quantitative finance projects, starting from a shared bootcamp.",
    description:
      "Focused on producing real quantitative finance projects. Members start with a levelling bootcamp — a repository of 33 Jupyter notebooks on the NFC GitHub — covering Fundamentals; Market Microstructure; Portfolio Construction (Markowitz, Black-Litterman, Risk Parity, HRP); Quantitative Strategies (momentum, pairs trading, carry trade); Statistical Modelling (Kalman Filter, HMM, cointegration); Machine Learning in Finance; Risk Management (Kelly Criterion, VaR, stress testing); and Execution & Systems (backtesting, paper trading). After the bootcamp, members move on to individual real projects (e.g. portfolio optimization, pairs trading, a momentum strategy), with minimum deliverables of documented code on the NFC GitHub, a report covering thesis, methodology and results, and a final presentation to the department (15–20 minutes).",
    notes: [
      "Source material describes the bootcamp as \"7 modules\" but lists 8 module names (Fundamentals through Execution & Systems). Confirm the correct module count before publishing.",
    ],
    badgeImage: "/brand/dept-quant.png",
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
