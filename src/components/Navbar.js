import React from 'react';

class Navbar extends React.Component{

    render(){
        return (
            <header className="main-header">
                <div className="containerNav">
                    <div className="active">Epileptrik</div>
                    <nav id="menu">
                        <div className="refContainer">
                            <div><a href="" className="link">About</a></div>
                            <div><a href="#" className="link">Questions</a></div>
                            <div><a href="#" className="link">Contact</a></div>
                        </div>
                        <div className="buttonContainer">
                            <button className="link">Sing In</button>
                            <button className="link">Sing Up</button>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}


export default Navbar;



