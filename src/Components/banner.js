import React from "react";

import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import Header from "./header";
import ButtonComp from "./button";

// images
import BannerImg from "./../../src/assets/images/bannerimg.png";
import resume from "./../assets/LalunioHannahMae.pdf";



function Banner() {
    return (
        <div class="banner-main">
            <Header />
            <div className="banner-content">

                <Container className="banner-container">
                    <Row>
                        <Col lg="6" md="6" sm="12" className="d-flex align-items-center">
                            <div className="banner-texts">
                                <h1><span className="text-color1">I'm</span><span className="text-color2"> Hannah Mae</span></h1>
                                <p>Front end developer and designer</p>
                                <a href={resume} target="_blank"><ButtonComp buttonText="Work with Me" /></a>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="banner-img">
                                <div className="banner-img-container">
                                    <img src={BannerImg} alt="vector image" />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default Banner;