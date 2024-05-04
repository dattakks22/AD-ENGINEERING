import React from 'react';

import './serviceIntro.css';
import b2 from '../Assets/b2.png'
import { Link } from 'react-router-dom';

const ServiceIntro = () => {
    return (

        <div className="aboutse-main-container">

            <div className='aboutse-container'>

                <div className='left-side'>
                    <div className='image-about-section'>
                        <img src={b2} alt="imgBg" className="about-section-imageStyle" />
                    </div>
                </div>



                <div className='right-side'>
                    <span className='heading'>
                        OUR SERVICE
                    </span>
                    <span className='redText'>
                        Welcome to Our Ad Engineering
                    </span>
                    <div className=''>
                        <p className='para'>
                            AD Engineering offers a comprehensive range of services in Gas Piping & Utility, Lab Drains,
                            Regulators and Looping, Auto Change Overs, Gas Manifolds, Detections and Low Gas Alarms,
                            Purification Panels, SS, MS, CPVC, UPVC, PPR, HDPE & PVDF, Valves and Fittings, Chilled Water
                            and Hot Water Lines, Gas Banks, and Structural Works. Our services are designed to meet the
                            diverse needs of our clients across various industries.
                        </p>


                    </div>
                    <div className="buttonContainer">
                        <Link to="/ourservice" >  <button className="btn-services button " type="button" >OUR SERVICE</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceIntro;