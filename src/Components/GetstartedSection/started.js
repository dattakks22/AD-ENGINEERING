import React from 'react';
import './started.css';
import { Link } from 'react-router-dom';

const Started = () => {
    return (
        <div className='started-main-container'>
            <div className='started-container'>
                <div className='started-inner-container'>
                    <span className='heading started-text'>
                        Get Started with AD ENGINEERING
                    </span>

                    <div className="address-section">
                        <div className="address-text-section ">
                            <h3 className="text-heading">
                                ADDRESS
                            </h3>
                            <p className="address-details">
                                Plot No. 191, Ramakrishna Nagar, Chengicherla, Medchal-Malkajgari-500051, T.S.
                            </p>
                        </div>

                        <div className="address-text-section">
                            <h3 className="text-heading">
                                PHONE NUMBER
                            </h3>
                            <p className="address-details">
                                7286813817,
                            </p>
                            <p className="address-details">
                                8179569697.
                            </p>
                        </div>

                        <div className="address-text-section">
                            <h3 className="text-heading">
                                EMAIL ID
                            </h3>
                            <p className="address-details">
                                ad.engg2023@gmail.com
                            </p>
                        </div>
                    </div>
                    <Link to='/contectUs'> <button className=' button btn-services' type="button">Contac Us</button></Link>

                </div>
            </div>
        </div>
    )
}


export default Started;