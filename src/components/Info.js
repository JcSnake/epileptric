import React from 'react';

import chart from '../assets/img/chart-1.svg';
import chartPie from '../assets/img/chart-2.svg';
import deviceImg from '../assets/img/smart-watch.png';

class Info extends React.Component{
    render(){
        return(
            <>
                <section id="info">
                    <div className="charts" id = "device">
                        <div className="description">
                            <h2>Concentramos la información en unas asombrosas gráficas...</h2>
                            <p>Con el dispositivo de cada uno de tus pacientes recopilamos información
                                sobre sus episodios: fecha, hora, frecuencia, etc. Y te la mostramos en gráficas
                                para que lleves el control de una forma más gráfica.
                            </p>
                            <p>También te ofrecemos un dashboard personalizado con tu lista de pacientes, 
                                notificaciones e información relevante para el correcto seguimiento de cada uno de ellos.</p>
                            <p>El dispositivo no es instrusivo y fácil de utilizar para tus pacientes.</p>
                        </div>
                        <div className="charts-img">
                            <img src={chart} alt="graph" className="img-chart" />
                            <img src={chartPie} alt="graph" className="img-chart" />
                        </div>
                    </div>
                    <div className="device">
                        <img src={deviceImg} alt="smartwatch" className="img-device" />
                        <div className="lt-text">
                            a prueba de agua
                        </div>
                        <div className="rt-text">
                            gráficas
                        </div>
                        <div className="lb-text">
                            sensores
                        </div>
                        <div className="rb-text">
                            ...y mucho más
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Info;