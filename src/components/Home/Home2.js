import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profilelogo.png";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../i18n/LanguageContext";

function Home2() {
  const { t } = useLang();
  const h = t.home2;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="home2-glass-container">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                {h.letMeIntroduce} <span className="purple"> {h.introduce} </span>
              </h1>
              <p className="home-about-body">
                {h.bio1}
                <br />
                <br />
                {h.bio2part1}{" "}
                <i>
                  <b className="purple">
                    {h.bio2highlight}{" "}
                  </b>
                </i>
                {h.bio2part2}
                <br />
                <br />
                {h.bio3part1}{" "}
                <i>
                  <b className="purple">{h.bio3highlight1} </b>
                </i>
                {h.bio3part2}{" "}
                <i>
                  <b className="purple">{h.bio3highlight2} </b>
                </i>
                {h.bio3part3}{" "}
                <i>
                  <b className="purple">{h.bio3highlight3}</b>
                </i>
                .
                <br />
                <br />
                {h.bio4part1} <b className="purple">{h.bio4oracle}</b> {h.bio4part2}{" "}
                <b className="purple">{h.bio4nvidia}</b> {h.bio4part3}
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
