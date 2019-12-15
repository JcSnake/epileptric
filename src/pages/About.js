import React from 'react';


import AboutProfile from '../components/AboutProfile';

import '../assets/sass/about.scss';

function About(){
    return (
        <>
            <div className="about-container" id ="about">
                <h2>Acerca de nosotros.</h2>
                <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Doloremque est blanditiis fuga aspernatur hic quod!
                </div>
                <h5>Descubre al asombroso equipo atrás de Epileptric: </h5>
                <AboutProfile />
            </div>
        </>
    );
}

export default About;