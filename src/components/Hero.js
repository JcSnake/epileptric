import React from 'react';

class Hero extends React.Component{
    render(){
        return (
            <section id="mainSection">
                <div class="title">
                    <div class="flex">
                        <div class="containerTitle">
                            <h1>Learn. Control. <span class="c-orange">Epilepsy</span> in the power of your wrist</h1>
                            <div class="container-buttons">
                                <button class="btn-main">Learn more with us</button>
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