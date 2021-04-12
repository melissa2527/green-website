import React from 'react';
import {ChallengeData} from './ChallengeData'

export const Challenge = () => {
    return (
        <div className='container'>
                    <img src={ChallengeData.image} alt='Circular Cycle'/>
                    <h2>{ChallengeData.title}</h2>
                    <p>{ChallengeData.description}</p>
        </div>
    )
}
