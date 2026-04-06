import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  SiFastapi,
  SiJupyter,
  SiScikitlearn,
  SiDatacamp,
  SiFreecodecamp,
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiApachecassandra,
  SiOracle,
  SiOpenai,
} from "react-icons/si";
import { TbVectorTriangle } from "react-icons/tb";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

const certCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#C74634">
        <path d="M7.5 4.5C3.36 4.5 0 7.86 0 12s3.36 7.5 7.5 7.5h9C20.64 19.5 24 16.14 24 12s-3.36-7.5-7.5-7.5h-9zm0 2h9C19.53 6.5 22 8.97 22 12s-2.47 5.5-5.5 5.5h-9C4.47 17.5 2 15.03 2 12s2.47-5.5 5.5-5.5z"/>
      </svg>
    ),
    title: "Oracle OCI 2025",
    subtitle: "AI Foundations Associate",
    color: "#C74634",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#76B900">
        <path d="M12 0L.5 6v12L12 24l11.5-6V6L12 0zm0 2.5l9 4.7v9.6l-9 4.7-9-4.7V7.2l9-4.7z" />
      </svg>
    ),
    title: "NVIDIA",
    subtitle: "Building RAG Agents with LLMs",
    color: "#76B900",
  },
  {
    icon: <SiDatacamp size={40} color="#03EF62" />,
    title: "DataCamp",
    subtitle: "Data Science · SQL · Web Scraping",
    color: "#03EF62",
  },
  {
    icon: <SiFreecodecamp size={40} color="#0A0A23" />,
    title: "freeCodeCamp",
    subtitle: "Responsive Web Design",
    color: "#9D2FFF",
  },
];

const languages = [
  { lang: "Arabe", level: "Langue maternelle", pct: 100, color: "#c084fc" },
  { lang: "Tamazight", level: "Langue maternelle", pct: 100, color: "#c084fc" },
  { lang: "Français", level: "B2 – Niveau avancé", pct: 72, color: "#818cf8" },
  { lang: "Anglais", level: "B1 – Niveau intermédiaire", pct: 55, color: "#60a5fa" },
];

const techGroups = [
  {
    label: "Langages & Frameworks",
    items: [
      { icon: <img src={Python} alt="Python" style={{ width: 48 }} />, name: "Python" },
      { icon: <img src={ReactIcon} alt="React" style={{ width: 48 }} />, name: "React.js" },
      { icon: <img src={Typescript} alt="TypeScript" style={{ width: 48 }} />, name: "TypeScript" },
      { icon: <img src={Javascript} alt="JS" style={{ width: 48 }} />, name: "JavaScript" },
      { icon: <img src={Node} alt="Node.js" style={{ width: 48 }} />, name: "Node.js" },
      { icon: <SiFastapi size={48} />, name: "FastAPI" },
    ],
  },
  {
    label: "Données & Bases",
    items: [
      { icon: <img src={SQL} alt="PostgreSQL" style={{ width: 48 }} />, name: "PostgreSQL" },
      { icon: <img src={Mongo} alt="MongoDB" style={{ width: 48 }} />, name: "MongoDB" },
      { icon: <SiOracle size={48} color="#C74634" />, name: "Oracle" },
      {
        icon: (
          <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7em", fontWeight: 900, color: "white", background: "linear-gradient(135deg,#C74634,#e8603c)", borderRadius: "10px", letterSpacing: "-0.5px", textAlign: "center", lineHeight: 1.1 }}>
            PL/<br/>SQL
          </div>
        ),
        name: "PL/SQL",
      },
      { icon: <SiScikitlearn size={48} />, name: "Scikit-learn" },
      { icon: <SiJupyter size={48} />, name: "Jupyter" },
      {
        icon: (
          <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6em", fontWeight: 800, color: "#ff6933" }}>
            n8n
          </div>
        ),
        name: "n8n",
      },
    ],
  },
  {
    label: "Data Engineering",
    items: [
      { icon: <SiApacheairflow size={48} color="#00AAE7" />, name: "Airflow" },
      { icon: <SiApachekafka size={48} color="#ffffff" />, name: "Kafka" },
      { icon: <SiApachespark size={48} color="#E25A1C" />, name: "Spark" },
      { icon: <SiApachecassandra size={48} color="#1287B1" />, name: "Cassandra" },
    ],
  },
  {
    label: "IA & LLM",
    items: [
      {
        icon: (
          <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1em", fontWeight: 800, color: "#1C3C3C", background: "#00A67E", borderRadius: "10px" }}>
            🦜
          </div>
        ),
        name: "LangChain",
      },
      {
        icon: <SiOpenai size={48} color="#ffffff" />,
        name: "LLMs",
      },
      {
        icon: <TbVectorTriangle size={48} color="#a78bfa" />,
        name: "RAG",
      },
    ],
  },
  {
    label: "DevOps & Outils",
    items: [
      { icon: <img src={Docker} alt="Docker" style={{ width: 48 }} />, name: "Docker" },
      { icon: <img src={Git} alt="Git" style={{ width: 48 }} />, name: "Git" },
      { icon: <img src={vsCode} alt="VS Code" style={{ width: 48 }} />, name: "VS Code" },
    ],
  },
];

function Skills() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* ── Titre ── */}
        <h1 className="project-heading">
          Mes <strong className="purple">Compétences</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "50px" }}>
          Compétences techniques, certifications et langues.
        </p>

        {/* ── Tech Skills ── */}
        {techGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: "40px" }}>
            <h2
              style={{
                color: "white",
                fontSize: "1.3em",
                marginBottom: "20px",
                borderLeft: "4px solid #c770f0",
                paddingLeft: "12px",
              }}
            >
              {group.label}
            </h2>
            <Row style={{ justifyContent: "center", marginBottom: "10px" }}>
              {group.items.map((item) => (
                <Col
                  key={item.name}
                  xs={4}
                  md={2}
                  className="tech-icons"
                  style={{ marginBottom: "20px" }}
                >
                  {item.icon}
                  <div className="tech-icons-text">{item.name}</div>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        {/* ── Soft Skills ── */}
        <h2
          style={{
            color: "white",
            fontSize: "1.3em",
            margin: "10px 0 20px",
            borderLeft: "4px solid #c770f0",
            paddingLeft: "12px",
          }}
        >
          Savoir-être
        </h2>
        <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
          {[
            " Résolution analytique",
            " Apprentissage rapide",
            " Travail en équipe",
            " Adaptabilité",
          ].map((s) => (
            <Col key={s} xs={6} md={3} style={{ marginBottom: "16px" }}>
              <div
                style={{
                  background: "rgba(199, 112, 240, 0.1)",
                  border: "1px solid rgba(199, 112, 240, 0.3)",
                  borderRadius: "12px",
                  padding: "16px",
                  textAlign: "center",
                  color: "white",
                  fontSize: "0.95em",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(199, 112, 240, 0.25)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(199, 112, 240, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s}
              </div>
            </Col>
          ))}
        </Row>

        {/* ── Certifications ── */}
        <h1 className="project-heading" style={{ marginBottom: "30px" }}>
          Mes <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
          {certCards.map((c) => (
            <Col key={c.title} xs={12} sm={6} md={3} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${c.color}44`,
                  borderRadius: "16px",
                  padding: "28px 20px",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${c.color}18`;
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${c.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ marginBottom: "14px" }}>{c.icon}</div>
                <h3 style={{ color: "white", fontSize: "1em", marginBottom: "6px" }}>
                  {c.title}
                </h3>
                <p style={{ color: "#b0b0b0", fontSize: "0.82em", margin: 0 }}>
                  {c.subtitle}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* ── Langues ── */}
        <h1 className="project-heading" style={{ marginBottom: "30px" }}>
          <strong className="purple">Langues</strong>
        </h1>
        <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
          <Col md={8}>
            {languages.map((l) => (
              <div key={l.lang} style={{ marginBottom: "22px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ color: "white", fontWeight: 600 }}>{l.lang}</span>
                  <span style={{ color: "#b0b0b0", fontSize: "0.88em" }}>{l.level}</span>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    height: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${l.pct}%`,
                      background: `linear-gradient(90deg, ${l.color}, #c770f0)`,
                      height: "100%",
                      borderRadius: "999px",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
