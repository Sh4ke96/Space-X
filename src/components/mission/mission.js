import React from "react";
import { Container } from "./mission.styled";

function Mission() {
  return (
    <Container>
      <div className="mission__container">
        <h2 className="mission__title">Mission</h2>
        <h1 className="mission__subtitle">Starlink-12 (v1.0)</h1>
      </div>
      <div className="rocket__container">
        <h2 className="rocket__title">Rocket</h2>
        <div className="rocket__subcontainer">
          <h1 className="rocket__subtitle">Falcon 9</h1>
          <p className="rocket__status">Recovered</p>
        </div>
        <button className="button">Learn More</button>
      </div>
      <div className="launch__container">
        <h2 className="launch__title">Launch Date</h2>
        <p className="launch__date">2020-10-06 07:29:00-04:00</p>
      </div>
      <div className="site__container">
        <h2 className="site__title">Lanuch Site</h2>
        <p className="site__place">KSC LC 39A</p>
      </div>
    </Container>
  );
}

export default Mission;
