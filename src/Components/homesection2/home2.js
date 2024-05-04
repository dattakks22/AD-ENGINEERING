import React from "react";
import './home2.css';

import icon1 from '../Assets/1.png';
import icon2 from '../Assets/2.png';
import icon3 from '../Assets/3.png';
import icon4 from '../Assets/4.png';
import icon5 from '../Assets/5.png';

const Section2 = () => {
    return(
        <div className="home2-main-container">
            <div className="home2-innercontainer">
                <div className="icons-container">
                    <img className="icon" src = {icon1} alt = "icon1" />
                    <p className="icon-title">Great Support</p>
                </div>
                <div className="icons-container">
                    <img className="icon" src = {icon2} alt = "icon2" />
                    <p className="icon-title">Unique Technology</p>
                </div>
                <div className="icons-container">
                    <img className="icon" src = {icon3} alt = "icon3" />
                    <p className="icon-title">Awesome Team</p>
                </div>
                <div className="icons-container">
                    <img className="icon" src = {icon4} alt = "icon4" />
                    <p className="icon-title">Smart Work</p>
                </div>
                <div className="icons-container">
                    <img className="icon" src = {icon5} alt = "icon5" />
                    <p className="icon-title">Quality Materials</p>
                </div>
            </div>

        </div>
    )
}

export default Section2;