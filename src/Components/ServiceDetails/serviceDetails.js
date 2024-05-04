import React from 'react';
import './serviceDetails.css';

import s1 from '../Assets/s1.png';
import s2 from '../Assets/s2.png';
import s3 from '../Assets/s3.png';
import s4 from '../Assets/s4.png';
import s5 from '../Assets/s5.png';
import s6 from '../Assets/s6.png';
import s7 from '../Assets/s7.png';
import s8 from '../Assets/s8.png';
import s9 from '../Assets/s9.png';
import s10 from '../Assets/s10.png';
import s11 from '../Assets/s11.png'

const ServiceDetails = () => {
    return (
        <div className='service-details-main-container'>

            <div className='service-detals-container'>
                <div className=' servicese-card auto-width '>
                    <img src={s1} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Gas Piping & Utility</span> <br />
                        <span className='secondaryText'>Installing, repairing, and maintaining gas piping systems for
                            heating, cooking, following safety regulations.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width '>
                    <img src={s2} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Lab Drain (PPR nad HDPE)"</span> <br />
                        <span className='secondaryText'>Installing and maintaining laboratory drain
                            age systems using PPR (polypropylene random copolymer) and HDPE (high-density polyethylene).</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s3} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Regulators and Loopings</span> <br />
                        <span className='secondaryText'>Installing and maintaining gas regulators and
                            loopings in gas piping systems for safety and efficiency.</span>
                    </div>
                </div>


                <div className=' servicese-card auto-width'>
                    <img src={s4} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Auto Change Overs</span> <br />
                        <span className='secondaryText'>Installing and maintaining automatic changeovers
                            for gas systems to switch between gas sources seamlessly.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s5} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Gas Manifold</span> <br />
                        <span className='secondaryText'>Installing and maintaining gas manifolds for
                            distributing gas from a single source to multiple points.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s6} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Detection and Low Gas Alaram</span> <br />
                        <span className='secondaryText'>Installing and maintaining gas detection systems
                            with low gas alarms for safety in gas piping.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s7} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Purification Pannels</span> <br />
                        <span className='secondaryText'>Installing and maintaining purification panels
                            for gas systems to ensure gas quality and safety.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s8} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>SS , MS , CPVC , UPVC , PPR, HDPE and PVDF</span> <br />
                        <span className='secondaryText'>Materials for piping: SS, MS, CPVC, UPVC, PPR,
                            HDPE, PVDF, chosen based on system requirements.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s9} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Valves and Fittings</span> <br />
                        <span className='secondaryText'>Installing and maintaining valves and fittings
                            for controlling flow and connecting pipes in gas systems.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s10} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Chilled Water and Hot Water Lines</span> <br />
                        <span className='secondaryText'>Installing and maintaining chilled water and hot
                            water lines for heating and cooling systems.</span>
                    </div>
                </div>

                <div className=' servicese-card auto-width'>
                    <img src={s11} alt="cardImg" className='card-img' />

                    <div className='inner-card-container'>
                        <span className='primaryText'>Gas Banks and Structure Works</span> <br />
                        <span className='secondaryText'>Installing and maintaining gas banks and structural
                            components for gas distribution and storage systems.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ServiceDetails;