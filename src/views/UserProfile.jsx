import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/avatar.png";
import firebase from '../firebase';

class UserProfile extends Component {
  state = {
    name : '',
    lastName : '',
    email: ''
  }
  async componentDidMount() {
    const id = localStorage.getItem('uid');
    const doctor = await firebase.firestore().collection('doctors').doc(id).get()
    this.setState({ ...doctor.data()});
  }
  render() {
    const { name, lastName, email } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Datos de la cuenta"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-8", "col-md-4"]}
                      properties={[
                        {
                          label: "Clínica",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ejemplo: INN Tlalpan",
                          defaultValue: "Instituto Nacional de Neurología (Tlalpan)",
                          disabled: false
                        },
                        {
                          label: "Número de cédula",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "00000000",
                          defaultValue: "854269317"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre(s)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre(s)",
                          value: `${name}`
                        },
                        {
                          label: "Apellidos",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "A. paterno",
                          value: `${lastName}`
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Domicilio",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Dirección completa",
                          defaultValue:
                            "Homero No. 1339"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Estado",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Estado",
                          defaultValue: "Ciudad de México"
                        },
                        {
                          label: "Colonia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "País",
                          defaultValue: "Polanco II sección"
                        },
                        {
                          label: "Código Postal",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "00000",
                          defaultValue: "11500"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Resumen</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Resumen de su trayectoria médica"
                            defaultValue="Cuando un paciente acude a mi consulta realizo siempre una historia clínica completa y abordo el problema 
                            de manera integral cuidando todos los aspectos que considero pudieran estar contribuyendo a la queja principal
                            y a la salud general cada paciente."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Actualizar datos
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"                
                avatar="https://picsum.photos/200"
                name={`${name} ${lastName}`}
                userName={email}
                description={
                  <span>
                    lorem
                    <br />
                    ipsu                 
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
