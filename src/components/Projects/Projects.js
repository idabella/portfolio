import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import busmanager from "../../Assets/Projects/busmanager.png";
import londonTransport from "../../Assets/Projects/london_transport.png";
import agrihelp from "../../Assets/Projects/agrihelp.png";
import moroccoTourism from "../../Assets/Projects/morocco_tourism.png";
import ragChatbot from "../../Assets/Projects/rag_chatbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ragChatbot}
              isBlog={false}
              title="Chatbot RAG – Vala Bleu (Stage)"
              description="Chatbot production-ready avec recherche sémantique sur documents internes. API REST FastAPI, interface React responsive et déploiement Docker. Architecture RAG scalable avec réponses contextualisées (Juillet – Août 2025)."
              ghLink="https://github.com/idabella"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrihelp}
              isBlog={false}
              title="AgriHelp – Assistant IA Agricole"
              description="Assistant de diagnostic des maladies des cultures avec recommandations multilingues (Darija · Arabe · Français) et analyse d'images via backend AI/LLM. Construit avec React/TypeScript et une API LLM."
              ghLink="https://github.com/idabella"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busmanager}
              isBlog={false}
              title="BusManager – Gestion Complète de Flotte"
              description="Plateforme complète pour gérer vos lignes de bus, chauffeurs, stations, abonnements et incidents. Interface intuitive, données en temps réel et contrôle total de votre réseau de transport. Stack : React · Node.js · Oracle DB."
              ghLink="https://github.com/idabella"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={londonTransport}
              isBlog={false}
              title="London Transport Data Platform"
              description="Pipeline de données en temps réel pour le réseau de transport londonien. Ingestion via TfL API, streaming avec Apache Kafka & Spark, stockage Medallion Architecture (AWS S3), modélisation en schéma étoile et reporting Power BI / Grafana."
              ghLink="https://github.com/idabella"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moroccoTourism}
              isBlog={false}
              title="Morocco Tourism ETL Pipeline"
              description="Pipeline ETL complet : ingestion depuis HCP, Data.gov.ma et ObservatoireDuTourisme.ma, transformation et validation qualité automatisée, chargement dans un Data Warehouse PostgreSQL en schéma étoile avec dashboard KPI."
              ghLink="https://github.com/idabella"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
