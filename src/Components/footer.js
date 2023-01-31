import React from "react";

import { Row, Col, Navbar, Container } from 'react-bootstrap';

function Footer(){
    return(
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Call Me :)</h3>
                        <a href="tel:+639167886528" className="a-style">09167886528</a>
                        <h3>Send me an email</h3>
                        <a href="mailto:laluniohannah@gmail.com" className="a-style">laluniohannah@gmail.com</a>
                    </Col>
                </Row>
            </Container>
        </section>
        

    );

}
export default Footer;