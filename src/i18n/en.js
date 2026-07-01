// ─── English Translations ───────────────────────────────────────────────────
const en = {
  // ── Navbar ──
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    resume: "Resume",
  },

  // ── Home ──
  home: {
    greeting: "Hi There!",
    iAm: "I'M",
    findMeOn: "FIND ME ON",
    contactMe: "Feel free to ",
    contactHighlight: "connect with me",
    typewriterStrings: [
      "Engineering Student",
      "Data Science & Big Data",
      "Full-Stack Developer",
      "AI & LLM Enthusiast",
    ],
  },

  // ── Home2 ──
  home2: {
    letMeIntroduce: "LET ME",
    introduce: "INTRODUCE MYSELF",
    bio1:
      "An engineering student passionate about Data Science, Generative AI, and scalable architectures. I love transforming raw data into intelligent and impactful solutions.",
    bio2part1: "I am fluent in classics like",
    bio2highlight: "Python, React, Node.js, SQL & Docker",
    bio2part2:
      "— and I enjoy working on both full-stack projects and data pipelines.",
    bio3part1: "My field of interest includes building",
    bio3highlight1: "RAG Chatbots,",
    bio3part2: "",
    bio3highlight2: "Data Engineering",
    bio3part3: "and",
    bio3highlight3: "NLP & LLM",
    bio4part1: "Certified by",
    bio4oracle: "Oracle",
    bio4part2: "(OCI AI Foundations) and",
    bio4nvidia: "NVIDIA",
    bio4part3:
      "(Building RAG Agents with LLMs), I am committed to continuous self-learning.",
  },

  // ── About ──
  about: {
    pageTitle: "Who",
    pageTitleHighlight: "Am I?",
    techSkillsHeading: "Professional",
    techSkillsHighlight: "Skillset",
    toolsHeadingPre: "Tools",
    toolsHighlight: "I Use",
    toolsHeadingPost: "",
  },

  // ── AboutCard ──
  aboutCard: {
    intro1: "Hi Everyone, I am",
    intro2: "from",
    intro3: ".",
    currentlyAt1: "I am currently pursuing an engineering degree in",
    currentlyAt2: "at",
    currentlyAt3: ".",
    internship1: "I did an internship at",
    internship2: "where I built a",
    internship3: "with FastAPI, React & Docker.",
    activitiesIntro: "Apart from coding, some other activities that I love to do!",
    activity1: "Exploring Generative AI",
    activity2: "Open-source & Data Engineering Projects",
    activity3: "Reading & Continuous Learning",
    quote: "\"Build things that make a difference!\"",
  },

  // ── Projects ──
  projects: {
    heading: "My Recent",
    headingHighlight: "Works",
    headingSuffix: "",
    subtitle: "Here are a few projects I've worked on recently.",
    cards: [
      {
        title: "RAG Chatbot – Vala Bleu (Internship)",
        description:
          "Production-ready chatbot with semantic search on internal documents. FastAPI REST API, responsive React interface and Docker deployment. Scalable RAG architecture with contextualized responses (July – August 2025).",
      },
      {
        title: "AgriHelp – AI Agricultural Assistant",
        description:
          "Crop disease diagnostic assistant with multilingual recommendations (Darija · Arabic · French) and image analysis via AI/LLM backend. Built with React/TypeScript and an LLM API.",
      },
      {
        title: "BusManager – Complete Fleet Management",
        description:
          "Full-featured platform to manage bus lines, drivers, stations, subscriptions and incidents. Intuitive interface, real-time data and total control of your transport network. Stack: React · Node.js · Oracle DB.",
      },
      {
        title: "London Transport Data Platform",
        description:
          "Real-time data pipeline for the London transport network. Ingestion via TfL API, streaming with Apache Kafka & Spark, Medallion Architecture storage (AWS S3), star schema modeling and Power BI / Grafana reporting.",
      },
      {
        title: "Morocco Tourism ETL Pipeline",
        description:
          "Complete ETL pipeline: ingestion from HCP, Data.gov.ma and ObservatoireDuTourisme.ma, automated transformation and quality validation, loading into a PostgreSQL Data Warehouse in star schema with KPI dashboard.",
      },
    ],
  },

  // ── Skills ──
  skills: {
    heading: "My",
    headingHighlight: "Skills",
    subtitle: "Technical skills, certifications and languages.",
    techGroups: [
      "Languages & Frameworks",
      "Data & Databases",
      "Data Engineering",
      "AI & LLM",
      "DevOps & Tools",
    ],
    softSkillsHeading: "Soft Skills",
    softSkills: [
      "Analytical Problem Solving",
      "Fast Learner",
      "Team Player",
      "Adaptability",
    ],
    certificationsHeading: "My",
    certificationsHighlight: "Certifications",
    languagesHeading: "Languages",
    languageLevels: [
      { lang: "Arabic", level: "Native language" },
      { lang: "Tamazight", level: "Native language" },
      { lang: "French", level: "B2 – Advanced level" },
      { lang: "English", level: "B1 – Intermediate level" },
    ],
  },

  // ── Resume ──
  resume: {
    downloadBtn: "Download CV",
  },

  // ── Footer ──
  footer: {
    designedBy: "Designed and Developed by Mustapha Idabella",
    copyright: "Copyright ©",
    copyrightSuffix: "Mustapha Idabella",
  },
};

export default en;
