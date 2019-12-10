import React from 'react';

import chart from '../assets/img/charts.png';
import deviceImg from '../assets/img/smart-watch.png';

class Info extends React.Component{
    render(){
        return(
            <>
                <section id="info">
                    <div class="charts">
                        <div class="description">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, aperiam.</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima maxime aspernatur 
                            fuga modi explicabo voluptates perspiciatis suscipit quisquam architecto!</p>
                        </div>
                        <img src={chart} alt="graph" class="img-chart" />
                    </div>
                    <div class="device">
                        <img src={deviceImg} alt="smartwatch" class="img-device" />
                        <div class="lt-text">
                            water proof
                        </div>
                        <div class="rt-text">
                            cool charts
                        </div>
                        <div class="lb-text">
                            sensors
                        </div>
                        <div class="rb-text">
                            ...and more amazing features
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Info;