import React from 'react';
import { slide as MenuHamburguesa } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import Menu from './Menu';

import logo from '../assets/img/logo-epileptric.png';
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
              <Link to="/" ><img src={logo} className="logo" alt=""/></Link>
                <div className="containerNav">
                    <Menu />
                    <MenuHamburguesa right disableAutoFocus
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        className = {"menu"}
                        width = { '50%' }
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
}

export default Navbar;