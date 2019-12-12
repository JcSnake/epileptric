import React from 'react';
import {Link} from 'react-router-dom';

import ContactForm from '../components/ContactForm';

import '../assets/sass/contact.scss';
import '../assets/sass/forms.scss';

class Contact extends React.Component{
    state = {
        form:{
          name: '',
          email: '',
          message: '',
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
                <div className = "contact-container">
                    <div className="message">
                        Do you want to tell us something? Send us a <span> mail.</span>
                    </div>
                    <div className="contact-form">
                    <ContactForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}
                    />
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;