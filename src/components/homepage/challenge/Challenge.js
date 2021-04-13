import React, {useEffect} from 'react';
import {ChallengeData} from './ChallengeData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './challenge.scss';

export const Challenge = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='challenge-container'>
            <div data-aos="fade-right" className='challenge-img-container'>
                <img src={ChallengeData.image} alt='Circular Cycle'/>
            </div>
            <div data-aos="fade-left" className='challenge-text-container'>
                <h2>{ChallengeData.title}</h2>
                <h5>{ChallengeData.date}</h5>
                <p>{ChallengeData.description}</p>
            </div>        
        </div>
    )
}
