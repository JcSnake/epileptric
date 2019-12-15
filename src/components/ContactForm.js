import React from 'react';

class ContactForm extends React.Component {

  handleClick = e => {
    console.log('Button was clicked');
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
            <input 
                type="text" 
                name="name" 
                className="input-sign" 
                placeholder = "Nombre Completo"
                onChange= {this.props.onChange}
                value={this.props.formValues.name}
            />
            <input 
                type="email" 
                name="email"
                className="input-sign" 
                placeholder = "Correo Electrónico"
                onChange= {this.props.onChange}
                value={this.props.formValues.email}
            />
            <textarea
                name="message"
                className="input-sign" 
                placeholder = "Mensaje" 
                rows = "8"
                onChange= {this.props.onChange}
                value={this.props.formValues.message}
            />
        <div className="container-button">
            <button className = "btn-form" onClick={this.handleClick} >Enviar</button>
        </div>
    </form>
    );
  }
}

export default ContactForm;