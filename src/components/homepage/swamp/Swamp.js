import React from 'react';
import './swamp.scss';

export const Swamp = () => {
    return (
        <div className='swamp-container'>
            <h2>We Put Swamps on Walls</h2>
            
            <div className='swamp-info'>
                <div className='swamp-text'>
                    <p>Muuras develops green vertical wetland filters that can provide a range of environmental benefits.</p>
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
