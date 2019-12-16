import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";


import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <>
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Últimos mensajes</h4>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Mensajes de la clínica</h5>
                  <Alert bsStyle="info">
                    <span>Junta a las 12:00 p.m.</span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notificaciones de pacientes</h5>
                  <p>...</p>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Pacientes con epilepsia"
                category="Registro de los últimos 2 años"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
                </Row>
              <br />
              <br />
            </div>
          </div>
        </Grid>
      </div>
      </>
    );
  }
}

export default Dashboard;
