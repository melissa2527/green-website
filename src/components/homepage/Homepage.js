import React from 'react';
import { Hero } from './hero/Hero';
import { Swamp } from './swamp/Swamp';
import {Footer} from '../footer/Footer';
import {Challenge} from './challenge/Challenge';

export const Homepage = () => {
    return (
        <div>
            <Hero />
            <Swamp />
            <Challenge />
            <Footer/>
        </div>
    )
}
