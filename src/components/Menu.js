import React from 'react';

function Menu(){
    return(
        <nav id="menu">
                            <div className="refContainer">
                                <div><a href="" className="link">About</a></div>
                                <div><a href="#" className="link">Questions</a></div>
                                <div><a href="#" className="link">Contact</a></div>
                            </div>
                            <div className="buttonContainer">
                                <button className="link">Sign In</button>
                                <button className="link">Sign Up</button>
                            </div>
        </nav>
    )
}

export default Menu;