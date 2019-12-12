import React from 'react';

class ContactForm extends React.Component {

  handleClick = e => {
    console.log('Button was clicked');
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Name: </label>
            <input 
                type="text" 
                name="name" 
                className="input-sign" 
                placeholder = "Name"
                onChange= {this.props.onChange}
                value={this.props.formValues.name}
            />
        <label>E-mail: </label>
            <input 
                type="email" 
                name="email"
                className="input-sign" 
                placeholder = "E-mail"
                onChange= {this.props.onChange}
                value={this.props.formValues.email}
            />
        <label>Message: </label>
            <textarea
                name="message"
                className="input-sign" 
                placeholder = "Message" 
                rows = "8"
                onChange= {this.props.onChange}
                value={this.props.formValues.message}
            />
        <div className="container-button">
            <button className = "btn-form" onClick={this.handleClick} >Send</button>
        </div>
    </form>
    );
  }
}

export default ContactForm;