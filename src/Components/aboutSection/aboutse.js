import React from 'react';

import './aboutse.css'
import { Link } from 'react-router-dom';

import b2 from '../Assets/b2.png'



const AboutSection = () => {
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
                        ABOUT US
                    </span>
                    <span className='redText'>
                        Welcome to Our Ad Engineering
                    </span>
                    <div className=''>
                        <p className='para'>
                            At AD Engineering, we strive to build long-lasting relationships with our clients based on trust,
                            integrity, and exceptional service. Whether you require installation, maintenance, or repair services,
                            we have the expertise and resources to meet your needs. Contact us today to learn more about how AD Engineering
                            can assist you with your next project.
                        </p>
                        <p className='para'>
                            Our team of experienced professionals is dedicated to providing reliable
                            and efficient solutions that adhere to the highest safety standards.
                            We take pride in our ability to deliver projects on time and within budget,
                            ensuring customer satisfaction at every step of the way.
                        </p>

                    </div>
                    <div className="buttonContainer">
                      <Link to="/ourservice" >  <button className="btn-services button " type = "button" >OUR SERVICE</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;