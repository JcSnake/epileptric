import React from 'react';
import { slide as MenuHamburguesa } from 'react-burger-menu';

import Menu from './Menu';

import '../assets/sass/mobile.scss';
import '../assets/sass/styles.scss';

class Navbar extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      closeMenu () {
        this.setState({menuOpen: false})
      }
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
    
    render () {
        return (
          <>
            <i className="fa fa-bars fa-lg burguer-button" id = "burguer-menu" onClick={() => this.toggleMenu()}></i>
            <header className="main-header">
                <div className="containerNav">
                    <Menu />
                    <div className="active">Epileptrik</div>
                    <MenuHamburguesa right disableAutoFocus
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        className = {"menu"}
                        width = { '50%' }
                        id={ "sidebar" } className={ "my-menu" }
                    >
                        <ul>
                            <li><a className="link" onClick={() => this.closeMenu()}>About</a></li>
                            <li><a className="link" onClick={() => this.closeMenu()}>Questions</a></li>
                            <li><a className="link" onClick={() => this.closeMenu()}>Contact</a></li>
                            <li><a className="link btn" onClick={() => this.closeMenu()}>Sign In</a></li>
                            <li><a className="link btn" onClick={() => this.closeMenu()}>Sign Up</a></li>
                        </ul>
                    </MenuHamburguesa>
                </div>
            </header>
          </>
        )
      }
    
    /* render(){
        return (
            <>
                <i className="fa fa-bars fa-lg burguer-button" id = "burguer-menu"></i>
                <header className="main-header">
                    <div className="containerNav">
                        <div className="active">Epileptrik</div>
                        <nav id="menu">
                            <div className="refContainer">
                                <div><a href="" className="link">About</a></div>
                                <div><a href="#" className="link">Questions</a></div>
                                <div><a href="#" className="link">Contact</a></div>
                            </div>
                            <div className="buttonContainer">
                                <button className="link">Sing In</button>
                                <button className="link">Sing Up</button>
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        );
    }
} */
}


export default Navbar;



