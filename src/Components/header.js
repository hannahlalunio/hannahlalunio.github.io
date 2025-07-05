import React from "react";
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

// images


function Header() {
    return (
        <div className="header-main">
            <Navbar expand="lg">
                <Container>
                    <Nav>
                        <Nav.Link href="#works">My Works</Nav.Link>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;