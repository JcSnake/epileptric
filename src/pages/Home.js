import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Info from '../components/Info';

import '../assets/sass/styles.scss';

function Home(){
    return (
        <>
            <Hero />
            <Info />
        </>
    );
}

export default Home;