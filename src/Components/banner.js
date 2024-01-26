import React from "react";

import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import Header from "./header";
import ButtonComp from "./button";

// images
import BannerImg from "./../../src/assets/images/aestheticme2.png";
import resume from "./../assets/resume_2024.pdf"



function Banner(){
    return(
        // <div class="banner-main">
            <div className="banner-content">
            <Header />
                <Container className="banner-container">
                    <Row>
                        <Col lg="6" md="6" sm="12" className="d-flex align-items-center">
                            <div className="banner-texts">
                                <h1>I'm <b>Hannah Mae</b></h1>
                                <h2>Front end developer and designer</h2>
                                <a href={resume} target="_blank"><ButtonComp buttonText="Hire Me"/></a>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="banner-img">
                                <img src={BannerImg} alt="Banner image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        // </div>

    );
}

export default Banner;