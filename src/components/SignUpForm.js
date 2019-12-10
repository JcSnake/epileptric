import React from 'react';

class SignUpForm extends React.Component {

  handleClick = e => {
    console.log('Button was clicked');
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>First Name: </label>
            <input 
                type="text" 
                name="firstName" 
                className="input-sign" 
                placeholder = "Name"
                onChange= {this.props.onChange}
                value={this.props.formValues.firstName}
            />
        <label>Last Name: </label>
            <input 
                type="text" 
                name="lastNameP"
                className="input-sign" 
                placeholder = "Last Name"
                onChange= {this.props.onChange}
                value={this.props.formValues.lastNameP}
            />
            <input 
                type="text" 
                name="lastNameM"
                className="input-sign" 
                placeholder = "Last Name" 
                onChange= {this.props.onChange}
                value={this.props.formValues.lastNameM}
            />
        <label>Birthday: </label>
            <input 
                type="date" 
                name="birthday" 
                className = "input-sign"
                min = "01/01/1930"
                onChange= {this.props.onChange}
                value={this.props.formValues.birthday}
            />
        <label>Genre: </label>
            <input 
                list="genres" 
                className="input-sign" 
                name="genre" 
                onChange= {this.props.onChange}
                value={this.props.formValues.genre}
                />
                <datalist id="genres">
                    <option value="Female"> Female </option>
                    <option value="Male"> Male </option>
                </datalist>
        <label>E-mail: </label>
            <input 
                type="text" 
                name="email"
                className="input-sign" 
                placeholder = "E-mail" 
                onChange= {this.props.onChange}
                value={this.props.formValues.email}
            />
        <label>Password: </label>
            <input 
                type="text" 
                name="password"
                className="input-sign" 
                placeholder = "Password"
                onChange= {this.props.onChange}
                value={this.props.formValues.password}    
            />
        <div className="container-button">
            <button className = "btn-form" onClick={this.handleClick} >Sign Up</button>
        </div>
    </form>
    );
  }
}

export default SignUpForm;