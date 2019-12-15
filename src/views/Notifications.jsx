import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Mensajes</h4>
              <p className="category">
                Listado de los últimos mensajes y actualizaciones de pacientes
              </p>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Mensajes de la clínica</h5>
                  <Alert bsStyle="info">
                    <span>Junta con los colegas para planeación de cirugías</span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notificaciones de pacientes</h5>
                  <Alert bsStyle="success">
                    <span>
                      <b> Alberto Hernández: </b> Registro menos crisis que hace 1 mes
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <span>
                      <b> Margarita Benavides - </b> Ha registrado 2 nuevas crisis
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <span>
                      <b> Hugo Lugo - </b> Ha registrado nuevas crisis, posible cándidato a cirugía
                    </span>
                  </Alert>
                </Col>
              </Row>
              <br />
              <br />
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
