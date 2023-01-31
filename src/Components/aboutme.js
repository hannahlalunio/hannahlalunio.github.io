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
                        <p> I am Hannah Mae Lalunio.A front end developer and designer based in the Philippines. </p>
                        <p> In my past work experiences I was able to learn working in a fast - pace environment but still ensuring to provide the highest quality of output possible. </p> 
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    );
}

export default About;