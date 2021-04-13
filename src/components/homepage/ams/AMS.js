import React, {useState, useEffect} from 'react';
import {AMSData} from './AMSData';
import './ams.scss';

export const AMS = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    // const handleClick = () => {setClicked(!clicked)};
    // const closeMenuMobile = () => setClicked(false);


    const isSmallerScreen = () => {
        if(window.innerWidth <= 960) {
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }
    }

    useEffect(() => {
        isSmallerScreen();
    }, []);

    window.addEventListener('resize', isSmallerScreen);

    return (
        <div className='ams-container'>
            {smallScreen ? 
            <>
            <div data-aos="fade-right" className='ams-img-container'>
            <img src={AMSData.image} alt='Circular Cycle'/>
        </div>
        <div data-aos="fade-left" className='ams-text-container'>
            <h2>{AMSData.title}</h2>
            <h5>{AMSData.date}</h5>
            <p>{AMSData.description}</p>
        </div> </> : 
         <div data-aos="fade-right" className='ams_large'>
            <img src={AMSData.image} alt='Circular Cycle'/>
            <div className='ams_large_text'>
                <h2>{AMSData.title}</h2>
                <h5>{AMSData.date}</h5>
                <p>{AMSData.description}</p>
            </div>  
        </div> 
        }     
        </div>
    )
}
