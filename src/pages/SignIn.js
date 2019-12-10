import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/sass/forms.scss';

class SignIn extends React.Component{
    render(){
        return(
            <>
                <div className = "container-form">
                    <form action="">
                        <input type="email" name="" id="" className="input-sign" placeholder = "E-mail" />
                        <input type="password" name="" id="" className="input-sign" placeholder = "Password" />
                        <div className="container-button">
                            <button className = "btn-form">Sign In</button>
                            <span>
                                Don't have an account? 
                                <Link className = "link-form" to = "/signup"> Create one</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignIn;