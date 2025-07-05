import React from "react";

import { Row, Col, Navbar, Container } from 'react-bootstrap';

function Footer() {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3 className="section-title">Send me an email</h3>
                        <a href="mailto:laluniohannah@gmail.com" className="a-style">laluniohannah@gmail.com</a>
                    </Col>
                </Row>
            </Container>
        </section>


    );

}
export default Footer;