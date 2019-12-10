import React from 'react';
import { Link } from 'react-router-dom';
class SignUp extends React.Component{
    render(){
        return(
            <>
                <div className = "container-form">
                    <form action="">
                        <label>First Name: </label>
                            <input type="text" name="firstName" id="" className="input-sign" placeholder = "Name" />
                        <label>Last Name: </label>
                            <input type="text" name="lastNameP" id="" className="input-sign" placeholder = "Last Name" />
                            <input type="text" name="lastNameM" id="" className="input-sign" placeholder = "Last Name" />
                        <label>Birthday: </label>
                            <input 
                                type="date" 
                                name="birthday" 
                                id="" 
                                className = "input-sign"
                                min = "01/01/1930"
                            />
                        <label>Genre: </label>
                            <input list="genres" className="input-sign" name="genre" />
                                <datalist id="genres">
                                    <option value="Female"> Female </option>
                                    <option value="Male"> Male </option>
                                </datalist>
                        <div className="container-button">
                            <button className = "btn-form">Sign Up</button>
                            <span>
                                Already have an account? 
                                <Link className = "link-form" to = "/signup"> Sign In</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignUp;