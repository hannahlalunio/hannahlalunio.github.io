import React from "react";

import {Container, Row, Col} from "react-bootstrap";
import ButtonComp from "./../../src/Components/button";

// images
import GoldWind from "./../../src/assets/images/goldwind.jpg";
import Suntoyo from "./../../src/assets/images/Suntoyo.jpg";
import CBmarine from "./../../src/assets/images/cbmarine.jpg";

function ReactProject(){
    return(
        <>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={Suntoyo} alt="KJ"/>
                    </div>
                    <div className="project-title">
                        <p>Suntoyo Technology Pte Ltd</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>Suntoyo Technology Pte Ltd Is An IT Industry Service Provider In Asia Since 1981. Suntoyo mainly deals with Cash registers and Touch screen based point of Sales</p>
                            <a href="https://psg.suntoyo.com.sg/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={GoldWind} alt="KJ"/>
                    </div>
                    <div className="project-title">
                        <p>Gold Wind Engineering (S) PTE LTD</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>A warehouse racking provider company. This project is made with Elementor</p>
                            <a href="https://mezzanine-floor.gw-racking.com/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="4" md="6" sm="12">
                <div className="project-box">
                    <div className="project-image">
                        <img src={CBmarine} alt="KJ"/>
                    </div>
                    <div className="project-title">
                        <p>CB Marine</p>
                    </div>
                    <div className="project-details">
                        <div className="project-about">
                            <p>CB Marine Products is a company that sells different frozen and frozen half cooked fish and fishery products.</p>
                            <a href="https://cbmarineproducts.com/" target="_blank"><ButtonComp buttonText="View Project"/></a>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ReactProject;