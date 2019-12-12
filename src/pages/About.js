import React from 'react';
import {Link} from 'react-router-dom';

import AboutProfile from '../components/AboutProfile';

import '../assets/sass/about.scss';

function About(){
    return (
        <>
            <div className="about-container">
                <h2>About us.</h2>
                <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Doloremque est blanditiis fuga aspernatur hic quod!
                </div>
                <h5>Meet the awesome team: </h5>
                <AboutProfile />
            </div>
        </>
    );
}

export default About;