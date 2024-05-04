import React from 'react';

import './service.css';
import NavBar from '../Header/Header';
import ServiceIntro from '../serviceIntro/serviceintro';
import ServiceDetails from '../ServiceDetails/serviceDetails';
import Section2 from '../homesection2/home2';
import ContectSection from '../ContectForm/form';
import ProjectSection from '../projectSection/projectse';
import Started from '../GetstartedSection/started';
import FSection from '../f-section/fot';

const OurService = () => {
    return (
        <div className='service_container'>
            <NavBar/>
            <ServiceIntro/>
            <ServiceDetails/>
            <Section2 />
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

export default OurService;