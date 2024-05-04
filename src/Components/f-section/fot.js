import React from "react"
import logoImg from '../Assets/Logo.png';
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";
import './fot.css';


const FSection = () => {
    return (
        <section className="footer-main-container">
            <div className="footer-container">

                <div className="footer-brand-container">
                    <div className="footer-brand">
                        <img src={logoImg} alt="websitelogo" className="footer-logo" />
                        <h1 className="footer-companyname">AD ENGINEERING</h1>
                    </div>
                    <div>
                        <p className="des">We always ready to help by providijng the best services for you</p><br />
                    </div>

                </div>

                <div className="footer-menu">
                    <Link to='/' className="footerlink">HOME</Link>
                    <Link to="/about" className="footerlink">ABOUT US</Link>
                    <Link to="/ourservice" className='footerlink'>OUR SERVICE</Link>
                    <button className="btn-contact footerlink mbd"><Link to='/contectUs' className="contactlink">CONTACT US</Link></button>

                </div>

                

            </div>
            <div className="copy-right">
                <p className="dess"> Copyright <FaCopyright /> <span className="bold">AD ENGINEERING</span> All Rights Reserved. </p>
                <p className="dess">Designed By Datta Gangadhar</p>
            </div>


        </section>
    )
}

export default FSection;