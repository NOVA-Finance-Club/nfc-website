// Portuguese translations, keyed by a stable dotted key. Looked up via
// useT()'s t(key, english) — see src/lib/language.tsx. English always lives
// at the call site (JSX or site-data.ts), never duplicated here.
//
// Kept in English on purpose, sitewide (not translated below): the club's
// own name/brand ("Nova Finance Club", "NFC", "NFC Fund", "NFC Shareholders
// Report"), governance body names (Board, General Council, General Assembly
// Board, Fiscal Council), department names (e.g. "Investment Department"),
// role titles (President, Vice President, Secretary, Coordinator, Member),
// people's names, and standard finance jargon (Sharpe ratio, benchmark,
// drawdown, Global Macro, S&P 500).
export const pt: Record<string, string> = {
  // Header / nav
  "nav.about": "Sobre",
  "nav.departments": "Departamentos",
  "nav.alumni": "Alumni",
  "nav.articles": "Artigos",
  "nav.fund": "Fundo",
  "nav.join": "Inscrever",
  "nav.joinButton": "Inscreve-te: Primavera 2027",
  "nav.openMenu": "Abrir menu",
  "nav.departmentCoordinators": "Coordenadores de Departamento",

  // Footer
  "footer.mandate": "Mandato",

  // Language toggle
  "language.toggleLabel": "Mudar de idioma",

  // Shared
  "institution.short": "NOVA FCT",
  "institution.full": "Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa",
  "site.missionStatement":
    "Fundado em {foundedYear}, o {name} é uma organização liderada por estudantes na {institutionFullName}. A nossa missão é fomentar a literacia financeira, despertar o interesse pelos mercados financeiros e dar aos estudantes competências práticas.",

  // Homepage
  "home.slogan": "A ponte entre a Ciência e as Finanças",
  "home.heroSubtitle": "Somos um clube de finanças liderado por estudantes da {institutionFullName}.",
  "home.contactButton": "Contacto",
  "home.numbersHeading": "{shortName} em números",
  "home.stat.members": "membros",
  "home.stat.departments": "departamentos",
  "home.stat.distinctBackgrounds": "formações distintas",
  "home.stat.yearsActive": "anos de atividade",
  "home.whatWeDoHeading": "O que fazemos",
  "home.articlesHeading": "Últimos Artigos da {shortName}",
  "home.articlesSubtitle":
    "Séries editoriais regulares e relatórios de mercado, publicados pelos vários departamentos.",
  "home.articlesEmpty": "Ainda não há artigos publicados.",
  "home.browseArchive": "Ver o arquivo",
  "home.fundHeading": "{shortName} Fund",
  "home.fundSubtitle":
    "O fundo virtual do Departamento de Investimentos. Mandato, metodologia e relatórios trimestrais.",
  "home.seeFund": "Ver o fundo",
  "home.followUsHeading": "Segue-nos",
  "home.followUsSubtitle":
    "Novidades dos departamentos, resumos de eventos e comentário de mercado, publicados onde os nossos membros já estão.",
  "home.getInTouchHeading": "Contacta-nos",

  // About
  "about.hero.headline":
    "Existe uma lacuna significativa na formação académica dos estudantes de engenharia.",
  "about.hero.subtext": "O Nova Finance Club nasceu dessa constatação.",
  "about.gapBody":
    "A maioria dos planos curriculares nesta área não contempla cadeiras de gestão ou de economia, disciplinas que se revelam fundamentais numa fase posterior do percurso profissional. Esta ausência é particularmente relevante quando se olha para o destino de muitos engenheiros, que, com o avançar da carreira, acabam por assumir funções em áreas de gestão, finanças ou até em cargos de liderança onde estes conhecimentos são essenciais.",
  "about.responseStatement":
    "Foi precisamente para colmatar esta lacuna que surgiu o NFC: um espaço criado por e para estudantes, com o objetivo de complementar a formação técnica com competências financeiras e de gestão que a universidade, por si só, não proporciona.",
  "about.communityLead":
    "Mais do que um simples clube académico, pretende ser uma comunidade de partilha de conhecimento, onde a entreajuda entre os diversos membros e colegas é o motor de tudo o que fazemos. Acreditamos que, ao juntarmos pessoas com diferentes backgrounds e interesses, todos saem a ganhar:",
  "about.communityExperienced":
    "Quem já tem mais conhecimento na área pode ajudar quem está a dar os primeiros passos.",
  "about.communityNewcomers":
    "Quem está a começar traz sempre novas perspetivas e motivação ao grupo.",
  "about.seeDepartments": "Ver os nossos departamentos",
  "about.joinButton": "Inscreve-te na {shortName}",

  // Departments index
  "departments.index.heading": "Departamentos",
  "departments.index.subtitle": "A governança da {shortName} e os seus quatro departamentos funcionais.",
  "departments.index.deptListHeading": "Departamentos",

  // Departments detail page (chrome, not data)
  "departmentsSlug.back": "Departamentos",
  "departmentsSlug.ourTeam": "A Nossa Equipa",
  "departmentsSlug.ourTeamButton": "A nossa equipa",

  // Governance unit names and summaries
  "gov.board.name": "Direção",
  "gov.board.summary": "A liderança executiva eleita da {shortName} para o mandato 2026/2027.",
  "gov.general-council.name": "Conselho Geral",
  "gov.general-council.summary": "A Mesa da Assembleia Geral e o Conselho Fiscal juntos.",

  // Governance subgroup titles (General Council's two constituent bodies)
  "subgroup.general-assembly-board": "Mesa da Assembleia Geral",
  "subgroup.fiscal-council": "Conselho Fiscal",

  // Role / position titles. Gender-neutral in Portuguese (Presidente,
  // Vice-Presidente) need no per-person variant; Secretary/Secretary-General
  // are masculine here because every person currently holding them is male
  // (verify before reusing this key for someone else). The department
  // Coordinator roles ARE gendered per the actual coordinator's name.
  "role.president": "Presidente",
  "role.vice-president": "Vice-Presidente",
  "role.secretary": "Secretário",
  "role.secretary-general": "Secretário-Geral",
  "role.member": "Membro",
  // Composite "X Coordinator" labels on the Board page's coordinators list.
  "role.events-external-relations-coordinator": "Coordenadora de Eventos e Relações Externas",
  "role.personal-finance-coordinator": "Coordenadora de Finanças Pessoais",
  "role.investment-coordinator": "Coordenador de Investimentos",
  "role.quantitative-trading-coordinator": "Coordenador de Quantitative Trading",
  // Plain "Coordinator" label on each department's own team page. Keyed by
  // the coordinator's own name (translation happens inside PersonCard,
  // which only has the person, not which department page it's on) so it's
  // gendered correctly regardless of context: Coordenador/Coordenadora.
  "role.coordinator.by-name.gisela-alves": "Coordenadora",
  "role.coordinator.by-name.isabel-monteiro": "Coordenadora",
  "role.coordinator.by-name.rodrigo-devesa": "Coordenador",
  "role.coordinator.by-name.diogo-ruivo": "Coordenador",

  // Department names — translated. "Quantitative Trading" itself stays
  // English inside the name (only "Department" becomes "Departamento de");
  // no key needed for the short form since it's just "Quantitative Trading"
  // in both languages, unchanged. "short" drops the "Department" /
  // "Departamento de" wrapper, for badges/filter chips.
  "dept.events-external-relations.name": "Departamento de Eventos e Relações Externas",
  "dept.events-external-relations.short": "Eventos e Relações Externas",
  "dept.personal-finance.name": "Departamento de Finanças Pessoais",
  "dept.personal-finance.short": "Finanças Pessoais",
  "dept.investment.name": "Departamento de Investimentos",
  "dept.investment.short": "Investimentos",
  "dept.quantitative-trading.name": "Departamento de Quantitative Trading",

  // Department summaries / descriptions
  "dept.events-external-relations.summary":
    "Organiza os eventos do clube, a sua campanha de recrutamento e as suas relações externas.",
  "dept.events-external-relations.description":
    "Planeia e organiza os eventos da NFC, desde socials internos e cerimónias de integração a painéis externos e masterclasses com convidados do setor financeiro. Lidera também a campanha de recrutamento semestral, gere as relações com parceiros e patrocinadores, e coordena com outros núcleos de finanças a nível nacional.",
  "dept.events-external-relations.mandateGoal":
    "1000 seguidores no LinkedIn até ao final do mandato 2026/2027.",

  "dept.personal-finance.summary":
    "A face pública da NFC junto da comunidade FCT e no LinkedIn, através de três séries editoriais regulares.",
  "dept.personal-finance.description":
    "A face pública da NFC junto da comunidade FCT e no LinkedIn, através de três séries editoriais regulares. Produz conteúdo educativo que torna a economia e as finanças pessoais acessíveis a um público não especializado, e acompanha as decisões de política do Banco Central Europeu à medida que acontecem.",
  "dept.personal-finance.series.0.description":
    "Um gráfico ou estatística que conta uma história económica, com o mínimo de texto.",
  "dept.personal-finance.series.1.description":
    "Uma análise curta e acessível a uma única estatística económica.",
  "dept.personal-finance.series.2.description":
    "Publicado uma semana após cada reunião do Banco Central Europeu (BCE): a decisão sobre as taxas, a sua justificação, e os dados de inflação e crescimento da zona euro.",

  "dept.investment.summary": "Gere o fundo de investimento virtual do clube e acompanha os mercados de capitais globais.",
  "dept.investment.description":
    "Gere o fundo virtual da NFC e acompanha os mercados de capitais globais, em duas divisões: Asset Management, que gere as equipas de cobertura do fundo e reporta o desempenho trimestralmente, e Global Markets, que acompanha yields, commodities e FX num resumo semanal.",
  "dept.investment.divisions.0.name": "Divisão 01 — Asset Management",
  "dept.investment.divisions.0.description":
    "Gere um fundo virtual com uma alocação inicial definida no início do mandato, dividido em equipas de cobertura (ex: Iberia & Europe, Emerging Markets, Global Macro), cada uma gerindo a sua própria parte do fundo e produz o NFC Shareholders Report trimestral no LinkedIn.",
  "dept.investment.divisions.1.name": "Divisão 02 — Global Markets & Markets Overview",
  "dept.investment.divisions.1.description":
    "Publica um relatório semanal curto sobre o desempenho dos mercados de capitais (yields, commodities, FX) com um resumo dos principais eventos da semana.",

  "dept.quantitative-trading.summary":
    "Produz projetos reais de finança quantitativa, a começar por um bootcamp partilhado.",
  "dept.quantitative-trading.description":
    "Produz projetos reais de finança quantitativa, a começar por um bootcamp partilhado: um conjunto de Jupyter notebooks no GitHub da NFC que cobre construção de portefólios, estratégias quantitativas, modelação estatística, machine learning e gestão de risco. Os membros avançam depois para projetos individuais como otimização de portefólios ou pairs trading, cada um com código documentado, um relatório escrito e uma apresentação final ao departamento.",

  // NFC Fund
  "fund.runByPrefix": "Gerido pela divisão de Asset Management do",
  "fund.runBySuffix": ".",
  "fund.mandateHeading": "Mandato",
  "fund.mandateBody":
    "Um fundo virtual com uma alocação inicial definida no início do mandato, dividido em equipas de cobertura, cada uma gerindo a sua própria parte do fundo.",
  "fund.benchmarkHeading": "Benchmark",
  "fund.benchmarkBodyStart": "O briefing que define o formato do Shareholders Report usa",
  "fund.benchmarkBodyTail": "apenas como exemplo de benchmark, não como uma escolha confirmada.",
  "fund.performanceHeading": "Desempenho",
  "fund.performanceBody":
    "Retorno acumulado face ao benchmark, mais os indicadores de risco principais de cada Shareholders Report.",
  "fund.cumulativePerformanceEmpty":
    "O desempenho acumulado aparecerá aqui assim que o fundo reportar o seu primeiro trimestre.",
  "fund.headlineFigures": "Indicadores principais",
  "fund.stat.cumulativeReturn": "Retorno acumulado",
  "fund.stat.sharpeRatio": "Sharpe ratio",
  "fund.stat.maxDrawdown": "Max drawdown",
  "fund.stat.vsBenchmark": "vs. benchmark",
  "fund.methodologyHeading": "Metodologia",
  "fund.methodologyBody":
    "O fundo está dividido em equipas de cobertura, cada uma gerindo a sua própria parte da alocação. O briefing apresenta estas como exemplos ilustrativos de equipas de cobertura, não como uma lista confirmada:",
  "fund.exampleSuffix": "(exemplo)",
  "fund.coverageTeam.iberia-europe": "Ibéria e Europa",
  "fund.coverageTeam.emerging-markets": "Mercados Emergentes",
  "fund.allocationHeading": "Alocação",
  "fund.allocationBody": "Como se distribuem as posições do fundo por equipa de cobertura.",
  "fund.byCoverageTeam": "Por equipa de cobertura",
  "fund.allocationEmpty":
    "A alocação por equipa de cobertura aparecerá aqui assim que o fundo reportar o seu primeiro trimestre.",
  "fund.reportingHeading": "Relatórios",
  "fund.reportingBodyStart": "O",
  "fund.reportingBodyMid": "é publicado",
  "fund.reportingBodyEnd": "no",
  "fund.reportingBodyTail": ", e cobre:",
  "fund.report.content.0": "Resumo executivo",
  "fund.report.content.1": "Desempenho vs. benchmark",
  "fund.report.content.2": "Sharpe ratio",
  "fund.report.content.3": "Drawdown máximo",
  "fund.report.content.4": "As 3 melhores e piores posições",
  "fund.report.content.5": "Atribuição de desempenho por posição",
  "fund.reportsHeading": "Shareholder Reports",
  "fund.reportsEmpty":
    "Ainda não foi publicado nenhum Shareholders Report. O primeiro relatório aparecerá aqui assim que o fundo reportar o seu primeiro trimestre.",
  "fund.disclaimer":
    "O {fundName} é um portefólio simulado e educativo, gerido por membros da {shortName}. Nada nesta página constitui aconselhamento de investimento.",
  "fund.cadence.quarterly": "trimestralmente",

  // Join
  "join.heading": "Inscreve-te",
  "join.applicationsClosed": "Candidaturas encerradas",
  "join.nextRecruitment": "Próximo recrutamento: Semestre de Primavera",
  "join.intro1":
    "Ao entrares na {shortName} vais conhecer outros estudantes interessados em finanças, acompanhar o que realmente se passa nos mercados e na economia, e pôr em prática parte do que aprendes nas aulas.",
  "join.intro2":
    "Os nossos membros dedicam uma parte real do seu tempo livre, e dir-te-iam que vale a pena. Se finanças é a tua área, não percas o próximo recrutamento.",
  "join.whoShouldApplyHeading": "Quem se deve candidatar?",
  "join.whoShouldApplySubtitle": "Procuramos estudantes para os seguintes departamentos.",
  "join.pitchHeadingSuffix": ": queremos-te se",
  "join.pitch.investment.0": "queres gerir ativamente um fundo real e ver os teus calls em ação",
  "join.pitch.investment.1": "queres melhorar a tua leitura dos mercados e a escolha de ações",
  "join.pitch.investment.2": "queres perceber como as decisões de investimento são tomadas na prática",
  "join.pitch.personal-finance.0": "gostas de explicar as coisas com clareza e escrever para um público real",
  "join.pitch.personal-finance.1": "és curioso sobre a economia e queres acompanhá-la mais de perto",
  "join.pitch.personal-finance.2": "queres que o teu trabalho seja visto por pessoas fora do clube",
  "join.pitch.quantitative-trading.0": "queres aprender quant finance do zero, sem precisares de experiência prévia",
  "join.pitch.quantitative-trading.1": "gostas de programar e queres aplicá-lo a problemas reais de finanças",
  "join.pitch.quantitative-trading.2": "queres acabar com um projeto que possas mesmo mostrar",
  "join.pitch.events-external-relations.0": "gostas de organizar coisas e falar com pessoas",
  "join.pitch.events-external-relations.1": "queres ajudar a trazer parceiros, oradores e eventos para o clube",
  "join.pitch.events-external-relations.2": "queres uma experiência que vá além do académico",
  "join.eligibility":
    "Para seres elegível precisas de ser estudante na {institution}, em qualquer curso, em qualquer ano. Procuramos interesse genuíno em finanças e algum tempo livre real para dar ao clube.",
  "join.processHeading": "Como funciona o processo",
  "join.process.0": "Submete o teu formulário de candidatura",
  "join.process.1": "Entrevista curta com o(s) departamento(s) da tua escolha",
  "join.process.2": "Resultados e sessão de integração",
  "join.questions": "Dúvidas? Contacta-nos em",

  // Articles
  "articles.heading": "Artigos",
  "articles.introStart": "Pesquisa os artigos e relatórios publicados pela NFC, dos departamentos de",
  "articles.introAnd": "e",
  "articles.searchPlaceholder": "Pesquisar artigos...",
  "articles.all": "Todos",
  "articles.noMatch": "Nenhum artigo corresponde à tua pesquisa.",
  "articles.noneYet": "Ainda não há edições publicadas. As primeiras entradas aparecerão aqui assim que forem publicadas.",

  // Alumni
  "alumni.heading": "Alumni",
  "alumni.subtitle": "A liderança eleita da {shortName} em mandatos anteriores.",
  "alumni.swornIn": "Tomaram posse a",
  "alumni.swornInAt": "em",
  "alumni.term.2025/2026.inaugurated": "17 de junho de 2025",
  "alumni.term.2024/2025.inaugurated": "4 de novembro de 2025",
  "alumni.location": "Edifício 7, Auditório 1A, {institutionFullName}",
  "alumni.group.board": "Direção",
  "alumni.group.general-council": "Conselho Geral",

  // Contact form
  "contact.yourName": "O teu nome",
  "contact.namePlaceholder": "Maria Silva",
  "contact.yourEmail": "O teu email",
  "contact.message": "Mensagem",
  "contact.messagePlaceholder": "Como podemos ajudar?",
  "contact.send": "Enviar Mensagem",
  "contact.opensEmailApp": "Abre a tua aplicação de email, endereçada a {email}.",
};
