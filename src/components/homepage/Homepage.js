import React from 'react';
import { Hero } from './hero/Hero';
import {Footer} from '../footer/Footer';
import {Challenge} from './challenge/Challenge';
import { SwampSection } from './swampSection/SwampSection';
import { AMS } from './ams/AMS';

export const Homepage = () => {
    return (
        <div>
            <Hero />
            <SwampSection />
            <Challenge />
            <AMS/>
            <Footer/>
        </div>
    )
}
