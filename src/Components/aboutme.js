import React from "react";

import { Row, Col, Navbar, Container } from 'react-bootstrap';

// images
import AboutImg from "./../../src/assets/images/aestheticme.png";

function About() {
    return (
        <section id="aboutme">
            <Container>
                <h2 className="text-center section-title" > About ME </h2>
                <Row className="mt-5">
                    <Col lg="6" md="6" sm="6">
                        <div className="about-img" >
                            <img src={AboutImg} alt="AboutImg" />
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="6" className="d-flex align-items-center">
                        <div className="about-content">
                            <p>Hi! I’m Hannah, a web developer with a strong foundation in HTML and CSS. I specialize in building responsive and visually appealing websites using both code and visual builders like Elementor and Divi. With experience as a Fullstack WordPress developer, I’ve handled everything from front-end design to back-end customization—delivering functional, user-friendly websites that meet real business needs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;