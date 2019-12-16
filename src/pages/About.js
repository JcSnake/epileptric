import React from 'react';


import AboutProfile from '../components/AboutProfile';

import '../assets/sass/about.scss';

function About(){
    return (
        <>
            <div className="about-container" id ="about">
                <h2>Acerca de nosotros.</h2>
                <div className="text">
                    <span>Epileptric </span> nace a raíz de la necesidad de proporcionar a los especialistas en neurología una plataforma 
                    para organizar la información de acuerdo de las señales provenientes del dispositivo del paciente , 
                    así como un historial de las crisis que presentó durante un periodo determinado, para observar la evolución de la 
                    enfermedad y presentar un mejor diagnóstico de su padecimiento al momento de realizar una consulta.
                    <br/>
                    Desde que comenzamos con el desarrollo del dispositivo de control, no hemos parado, cada paciente merece un sistema
                        integral, confiable y medible para el tratamiento de su enfermedad, nuestro equipo está consciente de este hecho
                        por lo que cada día nos concentramos en mejorar ambas plataformas.
                </div>
                <h5>Descubre al asombroso equipo atrás de Epileptric: </h5>
                <AboutProfile />
            </div>
        </>
    );
}

export default About;