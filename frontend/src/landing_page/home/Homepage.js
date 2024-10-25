//Here we collect all home file 
import React from 'react';
import Education from './Education';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Openaccount from '../Openaccount';


function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards/>
            <Stats />
            <Pricing />
            <Education/>
            <Openaccount/>
        </>
     );
}

export default HomePage;