import React from 'react';
import {AMSData} from './AMSData';
import './ams.scss';

export const AMS = () => {
    return (
        <div className='ams-container'>
            <div data-aos="fade-right" className='ams-img-container'>
                <img src={AMSData.image} alt='Circular Cycle'/>
            </div>
            <div data-aos="fade-left" className='ams-text-container'>
                <h2>{AMSData.title}</h2>
                <h5>{AMSData.date}</h5>
                <p>{AMSData.description}</p>
            </div>   
        </div>
    )
}
