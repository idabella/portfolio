import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import { SiGithub, SiJupyter } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiJupyter fontSize={"4em"} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiGithub fontSize={"4em"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
