import React from 'react';
import './contectse.css';
import b3 from '../Assets/b3.png'
import ContectForm from "../ContectForm/form"

const ContectSection = () => {
    return (
        <div className='contectse-main-container'>
            <div className='contectse-container'>

                <div className='contectse-left'>
                  <span className='service-heading'>
                    OUR CONTACTS
                  </span>
          
                  <span className='contect-sec-text mg'>
                    Easy to Contact Us
                  </span>
          
                  <span className='secondaryText width'>
                  We always ready to help by providing the best services for you
                  </span>

                    <div className = "margin-top">
                        <ContectForm/>
                    </div>

                </div>

                <div className='contectse-right'>
                    <div className='con-image-container'>
                        <img src = {b3} alt = 'im' className='imageStyle'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContectSection;