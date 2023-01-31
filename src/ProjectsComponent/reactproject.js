import React from "react";

import {Container, Row, Col} from "react-bootstrap";
import ButtonComp from "./../../src/Components/button";

// images
import Church from "./../../src/assets/images/church.jpg";

function ReactProject(){
    return(
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={Church} alt="KJ"/>
                    </div>
                    <div className="project-title">
                        <p>National Shrine of Our Lady of Sorrows</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>National Shrine of Our Lady of Sorrows is an Information website about the church in Dolores Quezon. This is a thesis project, made with React Js.</p>
                            <a href="https://church-information-system.github.io/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
    );
}

export default ReactProject;