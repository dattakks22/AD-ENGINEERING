import React from 'react';
import './home.css';
import NavBar from '../Header/Header';
import HomeIntro from '../HeaderIntro/intro';
import Section2 from '../homesection2/home2'
import ServiceSection from '../serviceSlider/serviceS';
import AboutSection from '../aboutSection/aboutse';
import ContectSection from '../ContectSection/contectse';
import StartedSection from "../GetstartedSection/started";
import FSection from '../f-section/fot';
import ProjectSection from '../projectSection/projectse';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="inner-container">
                <div className='white-gradient' />
                <NavBar />
                <HomeIntro />
            </div>
            <AboutSection />
            <Section2 />
            <ServiceSection />
            <ProjectSection />
            <ContectSection />
            <StartedSection />
            <FSection />
        </div>


    )
}
export default Home;
