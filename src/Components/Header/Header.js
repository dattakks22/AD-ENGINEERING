import React from "react";
import logoImg from '../Assets/Logo.png';
import { Link , withRouter} from "react-router-dom";
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";

class HeaderSection extends React.Component {
    state = {
        mobileMenuOpen: false
    };

    toggleMobileMenu = () => {
        this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
    };

    render() {
        const { mobileMenuOpen } = this.state;

        return (
            <nav className="headermainContainer">
                <div className="header-container">

                    <div className="brand-container">
                        <img src={logoImg} alt="websitelogo" className="logo" />
                        <h1 className="companyname">AD ENGINEERING</h1>
                    </div>

                    <div className="header-menu" >
                        <Link to='/' className="navlink">HOME</Link>
                        <Link to="/about" className="navlink">ABOUT US</Link>
                        <Link to="/ourservice" className='navlink'>OUR SERVICE</Link>
                        <button className="btn-contact"><Link to='/contectUs' className="contactlink">CONTACT US</Link></button>
                    </div>

                    <div className="menu-icon" onClick={this.toggleMobileMenu}>
                        {mobileMenuOpen ? <IoMdCloseCircle size={40} /> : <BiMenuAltRight size={40} />}
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="mobile-header-menu">
                        <Link to='/' className="mob-navlink">HOME</Link>
                        <Link to="/about" className="mob-navlink">ABOUT US</Link>
                        <Link to="/ourservice" className='mob-navlink'>OUR SERVICE</Link>
                        <button className="btn-contact"><Link to='/contectUs' className="contactlink">CONTACT US</Link></button>
                    </div>
                )}

            </nav>
        );
    }
}

export default withRouter(HeaderSection);
