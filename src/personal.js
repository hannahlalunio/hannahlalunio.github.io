import React from 'react';

import { Row, Col, Navbar, Container, Nav, ProgressBar, Form } from 'react-bootstrap';

// IMAGES
import cat from './../src/assets/images/cat.png';
import bunny from './../src/assets/images/bunny.png';
import fb from './../src/assets/images/fb.png';
import ig from './../src/assets/images/ig.png';
import linkedin from './../src/assets/images/linkedin.png';
import email from './../src/assets/images/email.png';
import html from './../src/assets/images/html.png';
import css3 from './../src/assets/images/css3.png';
import javascript from './../src/assets/images/javascript.png';
import reactjs from './../src/assets/images/reactjs.png';
import s1 from './../src/assets/images/s1.png';
import s2 from './../src/assets/images/s2.png';
import s3 from './../src/assets/images/s3.png';
import address from './../src/assets/images/address.png';
import call from './../src/assets/images/call.png';
import gmail from './../src/assets/images/gmail.png';
import coding from './../src/assets/images/coding.png';
import uidesign from './../src/assets/images/uidesign.png';
import contentwrite from './../src/assets/images/contentwrite.png';

export default function PersonalWebsite() {
    return (
        <>
            {/* HEADER */}
            <Row className="margin padding-lr header">
                <Col lg="4" md="4" sm="12">
                    <img src={cat} alt="logo" />
                </Col>
                <Col lg="8" md="8" sm="12" className="nav-div">
                    <Navbar>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav navbar_right">
                                <Nav>
                                    <Nav.Link href="#home">About</Nav.Link>
                                    <Nav.Link href="#link">Works</Nav.Link>
                                    <Nav.Link href="#link">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            {/* BANNER */}
            <Row className="margin padding-lr section-margin">
                <Col lg="2" md="12" sm="12" className="social-media-div">
                    <ul className="socialmedia">
                        <li>
                            <img src={fb} alt="fb" />
                        </li>
                        <li>
                            <img src={ig} alt="fb" />
                        </li>
                        <li>
                            <img src={linkedin} alt="fb" />
                        </li>
                        <li>
                            <img src={email} alt="fb" />
                        </li>
                    </ul>
                </Col>
                <Col lg="5" md="12" sm="12" className="intro">
                    <p className="intro1">Hi ! I'm</p>
                    <p className="intro2">Hannah Mae</p>
                    <p className="intro3">Front end developer/ Designer</p>
                    <button type="button" className="peach-btn">
                        Hire me
                    </button>
                </Col>
                <Col lg="5" md="5" sm="12" className="banner-img">
                    <img src={bunny} alt="banner" />
                </Col>
            </Row>

            {/* SERVICES */}
            <Row className="margin padding-lr section-margin">
                <Col lg="6" md="12" sm="12">
                    <div className="section-title">
                        Services I can offer
                    </div>
                    <Row className="card-style section-margin">
                        <Col lg="2" md="2" sm="12">
                            <img src={uidesign} alt="ui" className="card-image" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <div className="card-title">
                                Website and App Design
                            </div>
                            <div className="card-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                        </Col>
                    </Row>
                    <Row className="card-style">
                        <Col lg="2" md="2" sm="12">
                            <img src={coding} alt="ui" className="card-image" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <div className="card-title">
                                Front end development
                            </div>
                            <div className="card-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                        </Col>
                    </Row>
                    <Row className="card-style">
                        <Col lg="2" md="2" sm="12">
                            <img src={contentwrite} alt="ui" className="card-image" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <div className="card-title">
                                Content Writing
                            </div>
                            <div className="card-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg="6" md="12" sm="12" className="section-margin">
                    <Row className="language-div">
                        <Col lg="2" md="2" sm="12" className="lang-img">
                            <img src={html} alt="html" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <ProgressBar now={98} />
                        </Col>
                    </Row>
                    <Row className="language-div">
                        <Col lg="2" md="2" sm="12" className="lang-img">
                            <img src={css3} alt="html" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <ProgressBar now={98} />
                        </Col>
                    </Row>
                    <Row className="language-div">
                        <Col lg="2" md="2" sm="12" className="lang-img">
                            <img src={javascript} alt="html" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <ProgressBar now={40} />
                        </Col>
                    </Row>
                    <Row className="language-div">
                        <Col lg="2" md="2" sm="12" className="lang-img">
                            <img src={reactjs} alt="html" />
                        </Col>
                        <Col lg="10" md="10" sm="12">
                            <ProgressBar now={40} />
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* MEE */}
            <Row className="margin padding-lr section-margin">
                <Col lg="6" md="6" sm="12">
                    <div className="section-title">
                        Me
                    </div>
                    <div className="me-img section-margin">
                        <img src={bunny} alt="bunny" />
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" className="section-margin">
                    <p className='me-par section-margin'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button type="button" className="peach-btn">
                        See my resume
                    </button>
                </Col>
            </Row>

            {/* How I started */}
            <div className="margin padding-lr section-margin">
                <div className="section-title">
                    How I started
                </div>
            </div>

            {/* WORKS */}
            <div className="margin padding-lr section-margin">
                <div className="section-title">
                    Works I've done
                </div>
                <Row className="margin padding-lr">
                    <Col lg="4" md="12" sm="12">
                        <img src={s1} alt="s1" />
                    </Col>
                    <Col lg="4" md="12" sm="12">
                        <img src={s2} alt="s2" />
                    </Col>
                    <Col lg="4" md="12" sm="12">
                        <img src={s3} alt="s3" />
                    </Col>
                </Row>
            </div>


            {/* Contact */}
            <Row className="margin padding-lr section-margin">
                <div className="section-title">
                    Works with me
                </div>
                <Col lg="6" md="6" sm="12" className="section-margin">
                    <div className="contact-card">
                        <img src={address} alt="addressicon" />
                        <p>Brgy. Matipunso San Antonio, Quezon</p>
                    </div>
                    <div className="contact-card">
                        <img src={gmail} alt="addressicon" />
                        <p>laluniohannah@gmail.com</p>
                    </div>
                    <div className="contact-card">
                        <img src={call} alt="addressicon" />
                        <p>+63-916-788-6528</p>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" className="section-margin">
                    <Form>
                        <Row>
                            <Col lg="6" md="12" sm="12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Name" className="form-class" />
                                </Form.Group>
                            </Col>
                            <Col lg="6" md="12" sm="12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email" className="form-class" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Message" className="form-class" />
                        </Form.Group>
                        <button type="button" className="peach-btn">Send</button>
                    </Form>
                </Col>
            </Row>

            {/* COPYRIGHT */}
            <Row className="margin padding-lr copyright-div">
                <Col>
                    <p className="copyright">Copyright - all rights reserved 2022</p>
                </Col>
            </Row>
        </>
    )
}