import React from 'react';
import {Link} from 'react-router-dom';

class Hero extends React.Component{
    render(){
        return (
            <section id="mainSection">
                <div className="title">
                    <div className="flex">
                        <div className="containerTitle">
                            <h1>Learn. Control. <span className="c-orange">Epilepsy</span> in the power of your wrist</h1>
                            <div className="container-buttons">
                                <button className="btn-main"><Link to ="/about">Learn more with us</Link></button>
                                <div><Link to="/signin">Sign in</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;