import React from 'react';

import chart from '../assets/img/charts.png';
import deviceImg from '../assets/img/smart-watch.png';

class Info extends React.Component{
    render(){
        return(
            <>
                <section id="info">
                    <div className="charts">
                        <div className="description">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, aperiam.</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima maxime aspernatur 
                            fuga modi explicabo voluptates perspiciatis suscipit quisquam architecto!</p>
                        </div>
                        <img src={chart} alt="graph" className="img-chart" />
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