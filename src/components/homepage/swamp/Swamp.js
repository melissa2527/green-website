import React, {useEffect} from 'react';
import './swamp.scss';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

export const Swamp = () => {

    // useEffect(() => {
    //     Aos.init({duration: 1500})
    // }, []) 

    return (
        <div className='swamp-container'>
            <h2>Swamp Title</h2>
            
            <div className='swamp-info'>
                <div className='swamp-text'>
                    <p>Swamp Text</p>
                    <div className='btn-container'>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='swamp-img'>
                    <img src='./img/muuras-building.jpg' alt='Muuras building'/>
                </div>
            </div>
        </div>
    )
}

