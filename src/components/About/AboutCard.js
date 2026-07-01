import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLang } from "../../i18n/LanguageContext";

function AboutCard() {
  const { t } = useLang();
  const c = t.aboutCard;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {c.intro1} <span className="purple">Mustapha Idabella</span>{" "}
            {c.intro2}<span className="purple">Agadir, Maroc</span>{c.intro3}
            <br />
            {c.currentlyAt1}{" "}
            <span className="purple">Data Science, Big Data &amp; IA</span> {c.currentlyAt2}{" "}
            <span className="purple">l'ENSA Agadir</span>{c.currentlyAt3}
            <br />
            {c.internship1}{" "}
            <span className="purple">Vala Bleu</span> {c.internship2}{" "}
            <span className="purple">chatbot RAG production-ready</span> {c.internship3}
            <br />
            <br />
            {c.activitiesIntro}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {c.activity1}
            </li>
            <li className="about-activity">
              <ImPointRight /> {c.activity2}
            </li>
            <li className="about-activity">
              <ImPointRight /> {c.activity3}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {c.quote}{" "}
          </p>
          <footer className="blockquote-footer">Mustapha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
