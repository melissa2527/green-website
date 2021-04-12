import React, {useEffect} from 'react';
import {ChallengeData} from './ChallengeData';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Challenge = () => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='container'>
                    <img src={ChallengeData.image} alt='Circular Cycle' data-aos='fade-left'/>
                    {/* <h2>{t("Challenge.title")}</h2>
                    <p>{t("Challenge.description")}</p> */}
        </div>
    )
}
