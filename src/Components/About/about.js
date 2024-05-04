import React from 'react';

import './about.css';
import NavBar from '../Header/Header';
import AboutSection from '../aboutSection/aboutse'
import TeamSection from '../Our Team/team';
import ContectSection from '../ContectForm/form';
import ProjectSection from '../projectSection/projectse';
import Started from '../GetstartedSection/started';
import FSection from '../f-section/fot';
const About = () => {
    return (
        <div className='about_container'>
            <NavBar />
            <AboutSection />
            <TeamSection />
            <div className='about-margin'>
                <p className="fon">CONTACT US</p>
                <ContectSection />
            </div>
                <ProjectSection />
                <Started />
                <FSection />
        </div>
    )
}
export default About;
