import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import avatar from "assets/img/faces/face-0.jpg";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title="Dr. Gerardo Ramos"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Estatus: <b>Conectado</b></MenuItem>
            <MenuItem eventKey={2.2}>Configuración de la cuenta</MenuItem>
            <MenuItem eventKey={2.3}>Acerca de</MenuItem>
            <MenuItem eventKey={2.4}>Cerrar sesión</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <img src={avatar} alt="perfil" width="20"/>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
