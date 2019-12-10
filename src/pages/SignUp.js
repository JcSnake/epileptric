import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';

import '../assets/sass/forms.scss';

class SignUp extends React.Component{
    state = {
        form:{
          firstName: '',
          lastNameP: '',
          lastNameM: '',
          birthday: '',
          genre: '',
          email: '',
          password: ''
        }
      }
      handleChange = e =>{
        this.setState({
          form:{
            ...this.state.form,
            [e.target.name] : e.target.value,
          }
        })
      }
      handleSubmit = e =>{
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
      }
      handleClick = e => {
        console.log('Button was clicked');
      };
    render(){
        

        return(
            <>
                <div className = "container-form">
                    <SignUpForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}
                    />
                    <span className= "span-up">
                        Already have an account? 
                        <Link className = "link-form" to = "/signin"> Sign In</Link>
                    </span>
                </div>
            </>
        );
    }
}

export default SignUp;