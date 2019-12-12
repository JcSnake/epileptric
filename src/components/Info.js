import React from 'react';

import chart from '../assets/img/chart-1.svg';
import chartPie from '../assets/img/chart-2.svg';
import deviceImg from '../assets/img/smart-watch.png';

class Info extends React.Component{
    render(){
        return(
            <>
                <section id="info">
                    <div className="charts">
                        <div className="description">
                            <h2>We have some awesome graphs...</h2>
                            <p>So you can control your patient's list of episodes, 
                            the data showed comes from our super special devices 
                            (description below)</p>
                            <p>We have a linear chart and some comes with pie.</p>
                        </div>
                        <div className="charts-img">
                            <img src={chart} alt="graph" className="img-chart" />
                            <img src={chartPie} alt="graph" className="img-chart" />
                        </div>
                    </div>
                    <div className="device">
                        <img src={deviceImg} alt="smartwatch" className="img-device" />
                        <div className="lt-text">
                            water proof
                        </div>
                        <div className="rt-text">
                            cool charts
                        </div>
                        <div className="lb-text">
                            sensors
                        </div>
                        <div className="rb-text">
                            ...and more amazing features
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Info;