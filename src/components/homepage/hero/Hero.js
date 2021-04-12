import React, {useEffect} from 'react'
import './hero.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {Swamp} from '../swamp/Swamp';

export const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='hero-container'>
            <div className='text-container'>
                <div className='text' data-aos='fade-right'>
                    <h1>Muuras</h1>
                    <h3>A natural solution for urban wastewater</h3>
                </div>
            </div>
            <Link to={Swamp}>
                <button id='hero-btn'>Find Out More...</button>
            </Link>
        </div>
    )
}
