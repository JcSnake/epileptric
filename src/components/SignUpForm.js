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
                name="lastName"
                className="input-sign" 
                placeholder = "Last Name"
                onChange= {this.props.onChange}
                value={this.props.formValues.lastName}
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
        <label>Gender: </label>
            <input 
                list="gender" 
                className="input-sign" 
                name="gender" 
                onChange= {this.props.onChange}
                value={this.props.formValues.gender}
                />
                <datalist id="gender">
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
                type="password" 
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