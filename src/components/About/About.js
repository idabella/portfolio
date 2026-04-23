import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/profile2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Qui <strong className="purple">Suis-Je ?</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid img-about-glow"
                style={{ maxHeight: "470px" }}
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            Compétences <strong className="purple">Techniques </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Outils</strong> que j'utilise
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
