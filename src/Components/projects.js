import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Wordpress from "../ProjectsComponent/wordpress";
import ReactProjects from "../ProjectsComponent/reactproject";
import Elementor from "../ProjectsComponent/elementor";
import Divi from "../ProjectsComponent/divi";

function Projects() {

    const [toggleActive, setToggleActive] = useState(1);
    const toggleTab = (index) => {
        setToggleActive(index);
    }

    return (
        <section id="works">
            <Container>
                <h2 className="text-center section-title">Projects</h2>
                <Row>
                    <Col md="12">
                        <div className="bloc-tabs">
                            <div className={toggleActive === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}>All</div>
                            <div className={toggleActive === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}>React Js</div>
                            <div className={toggleActive === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}>Wordpress</div>
                            <div className={toggleActive === 4 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(4)}>Elementor</div>
                            <div className={toggleActive === 5 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(5)}>Divi</div>
                        </div>

                        <div className="content-tabs">
                            <div className={toggleActive === 1 ? "content active-content" : "content"}>
                                <Row>
                                    <Wordpress />
                                    <ReactProjects />
                                    <Elementor />
                                    <Divi />
                                </Row>

                            </div>
                            <div className={toggleActive === 2 ? "content active-content" : "content"}>
                                <Row>
                                    <ReactProjects />
                                </Row>
                            </div>
                            <div className={toggleActive === 3 ? "content active-content" : "content"}>
                                <Row>
                                    <Wordpress />
                                </Row>
                            </div>
                            <div className={toggleActive === 4 ? "content active-content" : "content"}>
                                <Row>
                                    <Elementor />
                                </Row>
                            </div>
                            <div className={toggleActive === 5 ? "content active-content" : "content"}>
                                <Row>
                                    <Divi />
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Projects;