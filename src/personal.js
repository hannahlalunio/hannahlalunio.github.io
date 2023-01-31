import React from 'react';

// components
import Banner from "./Components/banner";
import Skills from "./Components/skills";
import About from "./Components/aboutme";
import Projects from "./Components/projects";
import Footer from "./Components/footer";


function PersonalWebsite() {
    return (
        <>
            <Banner />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </>
    );
}

export default PersonalWebsite;
