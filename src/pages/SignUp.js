import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';

import '../assets/sass/forms.scss';

class SignUp extends React.Component{
    state = {
        loading: false,
        error: null,
        form:{
          firstName: '',
          lastName: '',
          birthday: '',
          gender: '',
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
      handleSubmit = async e =>{
        e.preventDefault();
        this.setState({
          loading: true,
          error: null
        })
        try{
          this.setState({loading: false});
          //this.props.history.push('/users');
        }catch(error){
          this.setState({
            loading: false,
            error: error
          })
          console.log(error);
        }
      }
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