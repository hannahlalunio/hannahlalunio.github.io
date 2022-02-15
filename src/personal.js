import React from 'react';

import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

// IMAGES
import logo2 from './../src/assets/images/logo2.png';
import aestheticme2 from './../src/assets/images/aestheticme2.png';
import aestheticme from './../src/assets/images/aestheticme.png';
import bluegmail from './../src/assets/images/bluegmail.png';
import bluelinkedin from './../src/assets/images/bluelinkedin.png';
import html from './../src/assets/images/html.png';
import css3 from './../src/assets/images/css3.png';
import javascript from './../src/assets/images/javascript.png';
import reactjs from './../src/assets/images/reactjs.png';
import uidesign from './../src/assets/images/uidesign.png';
import coding from './../src/assets/images/coding.png';
import contentwrite from './../src/assets/images/contentwrite.png';
import cbmarine from './../src/assets/images/cbmarine.png';
import fontanacasino from './../src/assets/images/fontanacasino.png';
import freeviral from './../src/assets/images/freeviral.png';

export default function PersonalWebsite() {
    return (
        <>
            {/* HEADER NAV */}
            <Row className="header padding margin">
                <Col lg="6" md="6" sm="4" xs="3" className="logo">
                    <img src={logo2} alt="Logo" />
                </Col>
                <Col lg="6" md="6" sm="8" xs="9" className="navbar-main">
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
                <Col lg="5" md="5" sm="12">
                    <div className="intro-div">
                        <p className="intro1"><span className="im">I'm</span> Hannah Mae</p>
                        <p className="intro2">Front end developer and designer</p>
                    </div>
                    <div className="banner-btn">
                        <a href="#works">
                            <button type="button" className="green-btn">
                                See my works
                            </button>
                        </a>
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
                <Col lg="7" md="7" sm="12">
                    <img src={aestheticme2} alt="cover" className="banner-img"/>
                </Col>
            </Row>

            {/* SKILLS */}
            <div className="section-title padding margin">
                <p>My Skills</p>
            </div>
            <Row className="skill-set padding margin">
                <Col lg="3" md="6" sm="6" xs="6" className="circle-main">
                    <div className="circle-skill">
                        <img src={html} alt="skill" />
                    </div>
                    <div className="language">
                        HTML
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" xs="6" className="circle-main">
                    <div className="circle-skill">
                        <img src={css3} alt="skill" />
                    </div>
                    <div className="language">
                        CSS
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" xs="6" className="circle-main">
                    <div className="circle-skill">
                        <img src={javascript} alt="skill" />
                    </div>
                    <div className="language">
                        Javascript
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" xs="6" className="circle-main">
                    <div className="circle-skill">
                        <img src={reactjs} alt="skill" />
                    </div>
                    <div className="language">
                        React Js
                    </div>
                </Col>
            </Row>
            {/* SERVICES */}
            <div className="section-title padding margin">
                <p>Services</p>
            </div>
            <Row className="service-set padding margin">
                <Col lg="4" md="12" sm="12" className="service-set padding">
                    <div className="service-card">
                        <div className="icon">
                            <img src={coding} alt="ui design" />
                        </div>
                        <div className="title">
                            Front end development
                        </div>
                        <div className="desc">
                            As a front end developer, I practiced having clean coding. I always ensure to implement and provide the best UI experience to the users. 
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="12" sm="12" className="service-set padding">
                    <div className="service-card">
                        <div className="icon">
                            <img src={uidesign} alt="ui design" />
                        </div>
                        <div className="title">
                            UI / UX design
                        </div>
                        <div className="desc">
                            As a Front end developer, I also engaged myself in the UI / UX designing. I trained myself to be deatil-oriented as I can be to have the best output for the projects.
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="12" sm="12" className="service-set padding">
                    <div className="service-card">
                        <div className="icon">
                            <img src={contentwrite} alt="ui design" />
                        </div>
                        <div className="title">
                            Content Writing
                        </div>
                        <div className="desc">
                            Working on some freelance projects eneables me to learn writing contents. 
                        </div>
                    </div>
                </Col>
            </Row>

            {/* WORKS */}
            <div className="section-title padding" id="works">
                <p>Works I've done</p>
            </div>
            <Row className="padding margin">
                <Col lg="12" md="12" sm="12" className="projects-card">
                    <div className="project-img">
                        <img src={cbmarine} alt="cb marine products"/>
                    </div>
                    <div className="desc-div">
                        <p className="title">
                            CB Marine Products
                        </p>
                        <p className="desc">
                            This is a website that shows the different seafood products that the company offers. For this project, I used WordPress and AWS Lightsail as the server.
                        </p>
                        <a href="https://cbmarineproducts.com/" target="_blank">
                            <button type="button" className="green-btn">
                                View Project
                            </button>
                        </a>
                    </div>
                </Col>
                <Col lg="12" md="12" sm="12" className="projects-card">
                    <div className="project-img">
                        <img src={fontanacasino} alt="fontana casino"/>
                    </div>
                    <div className="desc-div">
                        <p className="title">
                            Fontana Casino
                        </p>
                        <p className="desc">
                            This is the company's own Casino Platform that we made with the help of my teammates where I am the front end developer, designer and the graphic artist. This platform also includes its own admin platform considering to handle multiple levels of users (Master Operator, Headquarter Operators and Store Users)
                        </p>
                        <a href="https://ftn-77.com/" target="_blank">
                            <button type="button" className="green-btn">
                                View Project
                            </button>
                        </a>
                    </div>
                </Col>
                <Col lg="12" md="12" sm="12" className="projects-card">
                    <div className="project-img">
                        <img src={freeviral} alt="fontana casino"/>
                    </div>
                    <div className="desc-div">
                        <p className="title">
                            Free Viral Products
                        </p>
                        <p className="desc">
                            Free Viral Products is a FREE tool that allows you to jump-start your eCommerce business. This is the first project that I worked on as a freelancer. This is made with ReactJs, Material UI and Sass.
                        </p>
                        <a href="https://freeviralproducts.com/" target="_blank">
                            <button type="button" className="green-btn">
                                View Project
                            </button>
                        </a>
                    </div>
                </Col>
            </Row>
            {/* ABOUT ME */}
            <div className="section-title padding" id="aboutme">
                <p>About Me</p>
            </div>
            <Row className="about-me margin padding">
                <Col lg="6" md="12" sm="12">
                    <img src={aestheticme} alt="me"/>
                </Col>
                <Col lg="6" md="12" sm="12">
                    <p className="aboutme">
                        I am Hannah Mae Lalunio. A front end developer and designer based in the Philippines. In the beginning of my career, I was trained to be as detail-oriented as I can be and working in a fast-paced projects. My first projects includes converting PSD and Figma templates into responsive web pages which taught me the pixel-perfect aspect, and clean-coding in front end development. As I implement the web designs into codes, I was also inspired to be a designer as well. I trained myself and enhanced my UI / UX designing skills. As I was working in the industry I was able to learn using React Js as well. <br/>
                        Working 2 years in the industry enables me to learn many things about my career. In every projects that I am working on, I always make sure that I give my best shot to it to be able to give the best possible output for the project and the client.
                    </p>
                </Col>
            </Row>

            {/* CONTACT ME */}
            <div className="contactme padding" id="contact">
                <p className="title">Get in touch with me :)</p>
                <p className="email">Send me a message at <a href="mailto:webmaster@example.com" className="email-link">laluniohannah@gmail.com</a></p>
                <ul className="social-media">
                    <li>
                        <a href="mailto:webmaster@example.com" target="_blank">
                            <img src={bluegmail} alt="gmail" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/hannah-mae-lalunio-9a4857185/" target="_blank">
                            <img src={bluelinkedin} alt="linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
           

            {/* COPYRIGHT */}
            <div className="copyright">
                <p>&#169; Designed by Hannah</p>
            </div>
        </>
    )
}