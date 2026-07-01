import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import busmanager from "../../Assets/Projects/busmanager.png";
import londonTransport from "../../Assets/Projects/london_transport.png";
import agrihelp from "../../Assets/Projects/agrihelp.png";
import moroccoTourism from "../../Assets/Projects/morocco_tourism.png";
import ragChatbot from "../../Assets/Projects/rag_chatbot.png";
import { useLang } from "../../i18n/LanguageContext";

const projectImages = [ragChatbot, agrihelp, busmanager, londonTransport, moroccoTourism];

function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {p.heading} <strong className="purple">{p.headingHighlight} </strong>{p.headingSuffix}
        </h1>
        <p style={{ color: "white" }}>
          {p.subtitle}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {p.cards.map((card, i) => (
            <Col key={i} md={4} className="project-card">
              <ProjectCard
                imgPath={projectImages[i]}
                isBlog={false}
                title={card.title}
                description={card.description}
                ghLink="https://github.com/idabella"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
