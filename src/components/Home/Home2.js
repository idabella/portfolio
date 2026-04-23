import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profilelogo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="home2-glass-container">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
              </h1>
              <p className="home-about-body">
                Ingénieur en formation passionné par la Data Science, l'IA
                Générative et les architectures scalables. J'aime transformer des
                données brutes en solutions intelligentes et impactantes.
                <br />
                <br />
                Je maîtrise principalement{" "}
                <i>
                  <b className="purple">
                    Python, React, Node.js, SQL et Docker{" "}
                  </b>
                </i>
                — et j'apprécie travailler sur des projets full-stack comme sur
                des pipelines de données.
                <br />
                <br />
                Mes domaines d'intérêt incluent le développement de{" "}
                <i>
                  <b className="purple">Chatbots RAG, </b>
                </i>
                la{" "}
                <i>
                  <b className="purple">Data Engineering </b>
                </i>
                et les systèmes{" "}
                <i>
                  <b className="purple">NLP & LLM</b>
                </i>
                .
                <br />
                <br />
                Certifié <b className="purple">Oracle</b> (OCI AI Foundations) et{" "}
                <b className="purple">NVIDIA</b> (Building RAG Agents with LLMs),
                je m'engage dans un apprentissage autonome continu.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid img-home2-glow" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
export default Home2;
