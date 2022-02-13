import React from 'react';

import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

// IMAGES
import logo2 from './../src/assets/images/logo2.png';
import aestheticme2 from './../src/assets/images/aestheticme2.png';
import bluegmail from './../src/assets/images/bluegmail.png';
import bluelinkedin from './../src/assets/images/bluelinkedin.png';
import html from './../src/assets/images/html.png';
import css3 from './../src/assets/images/css3.png';
import javascript from './../src/assets/images/javascript.png';
import reactjs from './../src/assets/images/reactjs.png';

export default function PersonalWebsite() {
    return (
        <>
            {/* HEADER NAV */}
            <Row className="header padding margin">
                <Col lg="6" md="12" sm="12" className="logo">
                    <img src={logo2} alt="Logo" />
                </Col>
                <Col lg="6" md="12" sm="12" className="navbar-main">
                    <Navbar>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="navbar-right">
                                <Nav>
                                    <Nav.Link href="#works">Works</Nav.Link>
                                    <Nav.Link href="#aboutme">About me</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            {/* BANNER */}
            <Row className="banner-div margin padding">
                <Col lg="5" md="12" sm="12">
                    <div className="intro-div">
                        <p className="intro1"><span className="im">I'm</span> Hannah Mae</p>
                        <p className="intro2">Front end developer and designer</p>
                    </div>
                    <div className="banner-btn">
                        <button type="button" className="green-btn">
                            See my works
                        </button>
                    </div>
                    <div className="banner-social">
                        <ul>
                            <li>
                                <img src={bluegmail} alt="gmail" />
                            </li>
                            <li>
                                <img src={bluelinkedin} alt="linkedin" />
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg="7" md="12" sm="12">
                    <img src={aestheticme2} alt="cover" className="banner-img"/>
                </Col>
            </Row>

            {/* SKILLS */}
            <div className="section-title padding">
                <p>My Skills</p>
            </div>
            <div className="skill-set padding">
                <div className="circle-main">
                    <div className="circle-skill">
                        <img src={html} alt="skill" />
                    </div>
                    <div className="language">
                        HTML
                    </div>
                </div>
                <div className="circle-main">
                    <div className="circle-skill">
                        <img src={css3} alt="skill" />
                    </div>
                    <div className="language">
                        CSS
                    </div>
                </div>
                <div className="circle-main">
                    <div className="circle-skill">
                        <img src={javascript} alt="skill" />
                    </div>
                    <div className="language">
                        Javascript
                    </div>
                </div>
                <div className="circle-main">
                    <div className="circle-skill">
                        <img src={reactjs} alt="skill" />
                    </div>
                    <div className="language">
                        React Js
                    </div>
                </div>
                
                
            </div>
        </>
    )
}