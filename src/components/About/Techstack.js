import React from "react";
import { Col, Row } from "react-bootstrap";
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
import {
  SiFastapi,
  SiJupyter,
  SiScikitlearn,
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiApachecassandra,
  SiOracle,
  SiOpenai,
} from "react-icons/si";
import { TbBrain, TbVectorTriangle } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* ── Langages & Frameworks ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"4em"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      {/* ── Données & Bases ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle fontSize={"4em"} color="#C74634" />
        <div className="tech-icons-text">Oracle</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75em",
            fontWeight: 900,
            color: "white",
            background: "linear-gradient(135deg,#C74634,#e8603c)",
            borderRadius: "10px",
            letterSpacing: "-0.5px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          PL/<br />SQL
        </div>
        <div className="tech-icons-text">PL/SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"4em"} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter fontSize={"4em"} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8em",
            fontWeight: 800,
            color: "#ff6933",
          }}
        >
          n8n
        </div>
        <div className="tech-icons-text">n8n</div>
      </Col>

      {/* ── Data Engineering ── */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow fontSize={"4em"} color="#00AAE7" />
        <div className="tech-icons-text">Airflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka fontSize={"4em"} color="#ffffff" />
        <div className="tech-icons-text">Kafka</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark fontSize={"4em"} color="#E25A1C" />
        <div className="tech-icons-text">Spark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra fontSize={"4em"} color="#1287B1" />
        <div className="tech-icons-text">Cassandra</div>
      </Col>

      {/* ── IA & LLM ── */}
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8em",
            fontWeight: 800,
            color: "#1C3C3C",
            background: "#00A67E",
            borderRadius: "10px",
          }}
        >
          🦜
        </div>
        <div className="tech-icons-text">LangChain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"4em"} color="#ffffff" />
        <div className="tech-icons-text">LLMs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbVectorTriangle fontSize={"4em"} color="#a78bfa" />
        <div className="tech-icons-text">RAG</div>
      </Col>

      {/* ── DevOps & Outils ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Techstack;
