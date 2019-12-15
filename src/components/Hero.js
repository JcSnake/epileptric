import React from 'react';

class Hero extends React.Component{
    render(){
        return (
            <section id="mainSection">
                <div className="title">
                    <div className="flex">
                        <div className="containerTitle">
                            <h1>Aprende. Controla. <span className="c-orange">Epilepsia</span> en el poder de tu muñeca</h1>
                            <div className="container-buttons">
                                <button className="btn-main"><a href="https://dashboard-epileptric.firebaseapp.com">Empieza hoy</a></button>
                                <div><a href="https://dashboard-epileptric.firebaseapp.com/home">Accede</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;