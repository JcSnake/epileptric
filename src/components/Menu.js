import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <nav id="menu">
                            <div className="refContainer">
                                <div><a href="" className="link">About</a></div>
                                <div><a href="#" className="link">Questions</a></div>
                                <div><a href="#" className="link">Contact</a></div>
                            </div>
                            <div className="buttonContainer">
                                <Link to="/signin" className = "btn-nav"><button className="link">Sign In</button></Link>
                                <Link to="/signup" className = "btn-nav"><button className="link">Sign Up</button></Link>
                            </div>
        </nav>
    )
}

export default Menu;