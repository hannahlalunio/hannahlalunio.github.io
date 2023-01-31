import React from "react";
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

// images


function Header(){
    return(
        <div className="header-main">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#works">Works</Nav.Link>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
}

export default Header;