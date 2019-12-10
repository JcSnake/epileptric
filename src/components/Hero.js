import React from 'react';

class Hero extends React.Component{
    render(){
        return (
            <section id="mainSection">
                <div className="title">
                    <div className="flex">
                        <div className="containerTitle">
                            <h1>Learn. Control. <span className="c-orange">Epilepsy</span> in the power of your wrist</h1>
                            <div className="container-buttons">
                                <button className="btn-main">Learn more with us</button>
                                <div><a href="#">Sing in</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;