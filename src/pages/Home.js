import React from 'react';

import Hero from '../components/Hero';
import Info from '../components/Info';
import About from '../pages/About';
import Contact from '../pages/Contact';

import '../assets/sass/styles.scss';

function Home(){
    return (
        <>
            <Hero />
            <Info />
            <About />
            <Contact />
        </>
    );
}

export default Home;