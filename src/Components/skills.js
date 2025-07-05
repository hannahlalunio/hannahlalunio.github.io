import React from "react";
import { Row, Col, Navbar, Container } from 'react-bootstrap';

// images 
import HTMLicon from "./../../src/assets/images/html.png";
import CSSicon from "./../../src/assets/images/css3.png";
import JSicon from "./../../src/assets/images/js.png";
import WPicon from "./../../src/assets/images/wp.png";
import PHPicon from "./../../src/assets/images/phpLogo.png";
import Elementoricon from "./../../src/assets/images/elementor.png";
import Reacticon from "./../../src/assets/images/react.png";



function Skills() {
    return (
        <section className="section-padding" id="skills">
            <Container>
                <h2 className="text-center section-title">What I can do</h2>
                <Row className="justify-content-center mt-5">
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={HTMLicon} alt="HTMLicon" />
                            <h5>HTML</h5>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={CSSicon} alt="CSSicon" />
                            <h5>CSS</h5>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={JSicon} alt="JSicon" />
                            <h5>Javascript</h5>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={WPicon} alt="WPicon" />
                            <h5>Wordpress</h5>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={PHPicon} alt="PHPicon" />
                            <h5>PHP</h5>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="skill-box d-flex justify-content-center">
                            <img src={Elementoricon} alt="Elementoricon" />
                            <h5>Eelementor</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}

export default Skills;