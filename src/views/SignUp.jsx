import React from 'react';
import firebase from 'firebase';

class SignUp extends React.Component {

  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  onChange(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  async onSubmit(event) {
    event.preventDefault();

    const { email, password, name, lastName } = this.state;

    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.sendEmailVerification();

          firebase.firestore().collection('doctors').doc(user.uid).set({
            name, lastName, email
          });

          window.location.href = "/home";
          alert("Registrado con éxito, verifica tu correo");
        }
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {

    return (
      <form className="form-signin" onSubmit={ (event) => this.onSubmit(event) }>
        <input type="text" id="inputName" className="form-control" placeholder="Nombre" onChange={ this.onChange('name') }/>
        <input type="text" id="inputLastName" className="form-control" placeholder="Apellido(s)" onChange={ this.onChange('lastName') }/>
        <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" onChange={ this.onChange('email') }/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" onChange={ this.onChange('password') }/>
        <button className="btn btn-lg btn-log btn-block" type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignUp;
