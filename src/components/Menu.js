import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <>
        <nav id="menu">
                            <div className="refContainer">
                                <div><Link to="/about" className="link">About</Link></div>
                                <div><Link to="/questions"  className="link">Questions</Link></div>
                                <div><Link to="/contact"  className="link">Contact</Link></div>
                            </div>
                            <div className="buttonContainer">
                                <Link to="/signin" className = "btn-nav"><button className="link">Sign In</button></Link>
                                <Link to="/signup" className = "btn-nav"><button className="link">Sign Up</button></Link>
                            </div>
        </nav>
        </>
    )
}

export default Menu;