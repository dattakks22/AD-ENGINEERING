import React from 'react';
import Section2 from '../homesection2/home2';
import ContectSection from '../ContectForm/form';
import ProjectSection from '../projectSection/projectse';
import Started from '../GetstartedSection/started';
import FSection from '../f-section/fot';

import './contact.css';
import NavBar from '../Header/Header';

const ContectUs = () => {
    return (
        <div className='contect_container'>
            <NavBar/>
           
            <div className='about-margin'>
                <p className="fon">CONTACT US</p>
                <ContectSection />
            </div>
                <Section2 />
                <ProjectSection />
                <Started />
                <FSection />
        </div>
    )
}


export default ContectUs;
