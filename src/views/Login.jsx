import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {

  state = {
    usernameLogin: '',
    passwordLogin: ''
  };

  onChange(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const { usernameLogin: email, passwordLogin } = this.state;

    try {
      firebase.auth().signInWithEmailAndPassword(email, passwordLogin);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (!user.emailVerified) {
            alert('Debes de verificar tu cuenta');
            user.sendEmailVerification();
          } else {
            console.log(user);
            alert('Bienvenido ');
            localStorage.setItem('uid', user.uid);
            this.props.history.push('/dashboard');
          }
        }
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {

    return (
      <form className="form-signin" onSubmit={ (event) => this.onSubmit(event) }>
        <input type="email" id="inputEmailLogin" className="form-control" placeholder="Correo Electrónico" onChange={ this.onChange('usernameLogin') }/>
        <input type="password" id="inputPasswordLogin" className="form-control mb-3" placeholder="Contraseña" onChange={ this.onChange('passwordLogin') }/>
        <button className="btn btn-lg btn-log btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}

export default Login;
