import React from 'react';

class Navbar extends React.Component{

    render(){
        return (
            <header class="main-header">
                <div class="containerNav">
                    <div class="active">Epileptrik</div>
                    <nav id="menu">
                        <div class="refContainer">
                            <div><a href="" class="link">About</a></div>
                            <div><a href="#" class="link">Questions</a></div>
                            <div><a href="#" class="link">Contact</a></div>
                        </div>
                        <div class="buttonContainer">
                            <button class="link">Sing In</button>
                            <button class="link">Sing Up</button>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}


export default Navbar;



