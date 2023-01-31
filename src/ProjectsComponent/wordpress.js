import React from "react";

import {Container, Row, Col} from "react-bootstrap";
import ButtonComp from "./../../src/Components/button";

// images
import KJ from "./../../src/assets/images/kj.jpg";
import TNB from "./../../src/assets/images/tnb.jpg";

function Wordpress(){
    return(
        <>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={KJ} alt="KJ"/>
                    </div>
                    <div className="project-title">
                        <p>K&J Engineering</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>K&J Engineering is one of Singapore's most trusted names in the professional supply and installation of PLUMBING, SANITARY, GAS and FIRE PROTECTION SERVICES. This website is made of HTML and CSS for front end, and PHP wordpress for backend.</p>
                            <a href="https://kj.engineering/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={TNB} alt="TNB"/>
                    </div>
                    <div className="project-title">
                        <p>TNB</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>TnB provides a suite of packages designed to help entrepreneurs start their businesses in Singapore irrespective of their location. This website is made of HTML and CSS for front end, and PHP wordpress for backend.</p>
                            <a href="https://qbo.tnbgo.com/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Wordpress;