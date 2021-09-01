import React from "react";
import { Row, Col } from "antd";

import SampleTable from "../components/TripTable";
import Facts from "../components/Facts";
import DistanceChart from "../components/DistanceChart";
import TotalTripsChart from "../components/TotalTripsChart";

const LandingPage = () => {
  return (
    <div className="App">
      <h2>Dockless Scooters</h2>
      <hr></hr>
      <div>
        <Row justify="center">
          <Facts />
        </Row>
        <Row justify="center">
          <Col span={10}>
            <TotalTripsChart />
          </Col>
          <Col span={10}>
            <DistanceChart />
          </Col>
        </Row>
        <Row justify="center">
          <SampleTable />
        </Row>
      </div>
    </div>
  );
};

export default LandingPage;
