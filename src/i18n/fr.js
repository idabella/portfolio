// ─── French Translations ───────────────────────────────────────────────────
const fr = {
  // ── Navbar ──
  nav: {
    home: "Accueil",
    about: "À Propos",
    projects: "Projets",
    skills: "Compétences",
    resume: "CV",
  },

  // ── Home ──
  home: {
    greeting: "Bonjour !",
    iAm: "Je suis",
    findMeOn: "Retrouvez-moi sur",
    contactMe: "N'hésitez pas à ",
    contactHighlight: "me contacter",
    typewriterStrings: [
      "Ingénieur en Formation",
      "Data Science & Big Data",
      "Full-Stack Developer",
      "AI & LLM Enthusiast",
    ],
  },

  // ── Home2 ──
  home2: {
    letMeIntroduce: "LAISSEZ-MOI ME",
    introduce: "PRÉSENTER",
    bio1:
      "Ingénieur en formation passionné par la Data Science, l'IA Générative et les architectures scalables. J'aime transformer des données brutes en solutions intelligentes et impactantes.",
    bio2part1: "Je maîtrise principalement",
    bio2highlight: "Python, React, Node.js, SQL et Docker",
    bio2part2:
      "— et j'apprécie travailler sur des projets full-stack comme sur des pipelines de données.",
    bio3part1: "Mes domaines d'intérêt incluent le développement de",
    bio3highlight1: "Chatbots RAG,",
    bio3part2: "la",
    bio3highlight2: "Data Engineering",
    bio3part3: "et les systèmes",
    bio3highlight3: "NLP & LLM",
    bio4part1: "Certifié",
    bio4oracle: "Oracle",
    bio4part2: "(OCI AI Foundations) et",
    bio4nvidia: "NVIDIA",
    bio4part3:
      "(Building RAG Agents with LLMs), je m'engage dans un apprentissage autonome continu.",
  },

  // ── About ──
  about: {
    pageTitle: "Qui",
    pageTitleHighlight: "Suis-Je ?",
    techSkillsHeading: "Compétences",
    techSkillsHighlight: "Techniques",
    toolsHeadingPre: "",
    toolsHighlight: "Outils",
    toolsHeadingPost: "que j'utilise",
  },

  // ── AboutCard ──
  aboutCard: {
    intro1: "Bonjour ! Je suis",
    intro2: "originaire d'",
    intro3: ".",
    currentlyAt1: "Je suis actuellement en cycle ingénieur",
    currentlyAt2: "à",
    currentlyAt3: ".",
    internship1: "J'ai réalisé un stage chez",
    internship2: "où j'ai conçu un",
    internship3: "avec FastAPI, React et Docker.",
    activitiesIntro: "En dehors du code, voici quelques activités qui m'inspirent :",
    activity1: "Exploration de l'IA Générative",
    activity2: "Projets open-source & Data Engineering",
    activity3: "Lecture et apprentissage continu",
    quote: "\"Construire des solutions qui font la différence !\"",
  },

  // ── Projects ──
  projects: {
    heading: "Mes",
    headingHighlight: "Projets",
    headingSuffix: "Récents",
    subtitle: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
    cards: [
      {
        title: "Chatbot RAG – Vala Bleu (Stage)",
        description:
          "Chatbot production-ready avec recherche sémantique sur documents internes. API REST FastAPI, interface React responsive et déploiement Docker. Architecture RAG scalable avec réponses contextualisées (Juillet – Août 2025).",
      },
      {
        title: "AgriHelp – Assistant IA Agricole",
        description:
          "Assistant de diagnostic des maladies des cultures avec recommandations multilingues (Darija · Arabe · Français) et analyse d'images via backend AI/LLM. Construit avec React/TypeScript et une API LLM.",
      },
      {
        title: "BusManager – Gestion Complète de Flotte",
        description:
          "Plateforme complète pour gérer vos lignes de bus, chauffeurs, stations, abonnements et incidents. Interface intuitive, données en temps réel et contrôle total de votre réseau de transport. Stack : React · Node.js · Oracle DB.",
      },
      {
        title: "London Transport Data Platform",
        description:
          "Pipeline de données en temps réel pour le réseau de transport londonien. Ingestion via TfL API, streaming avec Apache Kafka & Spark, stockage Medallion Architecture (AWS S3), modélisation en schéma étoile et reporting Power BI / Grafana.",
      },
      {
        title: "Morocco Tourism ETL Pipeline",
        description:
          "Pipeline ETL complet : ingestion depuis HCP, Data.gov.ma et ObservatoireDuTourisme.ma, transformation et validation qualité automatisée, chargement dans un Data Warehouse PostgreSQL en schéma étoile avec dashboard KPI.",
      },
    ],
  },

  // ── Skills ──
  skills: {
    heading: "Mes",
    headingHighlight: "Compétences",
    subtitle: "Compétences techniques, certifications et langues.",
    techGroups: [
      "Langages & Frameworks",
      "Données & Bases",
      "Data Engineering",
      "IA & LLM",
      "DevOps & Outils",
    ],
    softSkillsHeading: "Savoir-être",
    softSkills: [
      "Résolution analytique",
      "Apprentissage rapide",
      "Travail en équipe",
      "Adaptabilité",
    ],
    certificationsHeading: "Mes",
    certificationsHighlight: "Certifications",
    languagesHeading: "Langues",
    languageLevels: [
      { lang: "Arabe", level: "Langue maternelle" },
      { lang: "Tamazight", level: "Langue maternelle" },
      { lang: "Français", level: "B2 – Niveau avancé" },
      { lang: "Anglais", level: "B1 – Niveau intermédiaire" },
    ],
  },

  // ── Resume ──
  resume: {
    downloadBtn: "Télécharger CV",
  },

  // ── Footer ──
  footer: {
    designedBy: "Conçu et Développé par Mustapha Idabella",
    copyright: "Copyright ©",
    copyrightSuffix: "Mustapha Idabella",
  },
};

export default fr;
