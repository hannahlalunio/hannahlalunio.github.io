import React from "react";

import {Container, Row, Col} from "react-bootstrap";
import ButtonComp from "./../../src/Components/button";

// images
import KJ from "./../../src/assets/images/kj.jpg";
import TNB from "./../../src/assets/images/tnb.jpg";
import stemCord from "./../../src/assets/images/stemCord.jpg";
import ThinkTeach from "./../../src/assets/images/ThinkTeach.jpg";

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
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                    <img
                        src={stemCord}
                        alt="StemCord"
                    />
                    </div>
                    <div className="project-title">
                    <p>StemCord</p>
                    </div>
                    <div className="project-details">
                    <div className="project-about">
                        <p>
                        StemCord is an autologous, private Cord Blood Bank that focuses on
                        processing and preserving your baby’s cord blood stem cells. This
                        website is made of HTML and CSS for front end, and PHP wordpress for
                        backend.
                        </p>
                        <a href="http://www.stemcord.com/" target="_blank">
                        <button type="button" className="all-btn btn btn-primary">
                            View Project
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
            </Col>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img
                        src={ThinkTeach}
                        alt="Thinkteach"
                        />
                    </div>
                    <div className="project-title">
                        <p>Think Teach Academy</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                        <p>
                            A top-tier education academy that embodies the core philosophy of
                            teaching and thinking smart. This website is made of HTML and CSS for
                            front end, and PHP wordpress for backend.
                        </p>
                        <a href="https://thinkteachacademy.com/dhp-2022/" target="_blank">
                            <button type="button" className="all-btn btn btn-primary">
                            View Project
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Wordpress;