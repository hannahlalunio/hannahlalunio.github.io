import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ButtonComp from "../Components/button";

// images 
import Taspin from "./../../src/assets/images/taspin.jpg";

function ReactProject() {
    return (
        <>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={Taspin} alt="KJ" />
                    </div>
                    <div className="project-title">
                        <p>Taspin</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>Client Management For Freelancers</p>
                            <a href="https://www.taspin.com/" target="_blank"><ButtonComp buttonText="View Project" /></a>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ReactProject;