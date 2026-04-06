import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis <span className="purple">Mustapha Idabella</span>{" "}
            originaire d'<span className="purple">Agadir, Maroc</span>.
            <br />
            Je suis actuellement en cycle ingénieur{" "}
            <span className="purple">Data Science, Big Data & IA</span> à{" "}
            <span className="purple">l'ENSA Agadir</span>.
            <br />
            J'ai réalisé un stage chez{" "}
            <span className="purple">Vala Bleu</span> où j'ai conçu un{" "}
            <span className="purple">chatbot RAG production-ready</span> avec FastAPI, React et Docker.
            <br />
            <br />
            En dehors du code, voici quelques activités qui m'inspirent :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploration de l'IA Générative 
            </li>
            <li className="about-activity">
              <ImPointRight /> Projets open-source & Data Engineering 
            </li>
            <li className="about-activity">
              <ImPointRight /> Lecture et apprentissage continu 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des solutions qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Mustapha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
