import React from 'react';
import {whatWeDoData} from './whatWeDoData';

export const WhatWeDo = () => {
    return (
        <div>
            {whatWeDoData.map(item => 
                <div className='item'>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <img src={item.img} alt={item.alt}/>
                </div>
            )}
        </div>
    )
}
