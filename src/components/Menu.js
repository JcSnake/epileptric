import React from 'react';

function Menu(){
    return(
        <>
        <nav id="menu">
                            <div className="refContainer">
                                <div><a href="#about" className="link">Acerca de nosotros</a></div>
                                <div><a href="#device"  className="link"> Información del dispositivo</a></div>
                                <div><a href="#contact"  className="link">Contacto</a></div>
                            </div>
        </nav>
        </>
    )
}

export default Menu;