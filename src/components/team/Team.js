import React from 'react';
import {teamInfo} from './teamInfo';
import './team.scss';

export const Team = () => {
    return (
        <div className='teampage-container'>
            <h1>The Team</h1>
            {teamInfo.map(person => 
                <div className='team-card'>
                     <div className='card-img'>
                        <img src={person.img} alt={person.alt}/>
                    </div>
                    <div className='card-text'>
                        <h3>{person.name}</h3>
                        <p>{person.info}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
