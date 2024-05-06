import React from "react";
import './intro.css';
import IntroImage from '../Assets/Untitled design.png';
import { Link } from "react-router-dom";
const HomeIntro = () => {
    return (
        <div className="homeIntroMain">
            <div className="homeIntro-container">

                <div className="contact-section">

                    <div className="title-container">
                        <div className="orangeCircle" />
                        <h1 className="title-heading">
                            WELCOME TO  <br />
                            AD ENGINEERING
                        </h1>
                    </div>

                    <div className="desc-container">
                        <span className="desc-style">
                        We always try to give our best whether it is product quality or service 
                        </span>
                        <span className="desc-style">
                        or the customer experience, we always strive hard for excellence.
                        </span>
                    </div>

                    <div className="buttonContainer">
                        <Link to="/about"><button className="btn-about button " type="button" >ABOUT US</button></Link>
                        <Link to="/ourservice"><button className="btn-services button " type="button" >OUR SERVICE</button></Link>
                    </div>

                </div>


                <div className="image-section">
                    <div className="image-container">
                        <img src={IntroImage} alt="introImage" className="imageStyle" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;