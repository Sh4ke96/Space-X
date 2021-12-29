import React from "react";
import { Container } from "./ship.styled";

function Ship() {
  return (
    <Container>
      <img src="images/placeholder.png" alt="ship image" />
      <div className="ship__information">
        <h1 className="ship__name">GO Ms Tree</h1>
        <div className="ship__details">
          <div className="ship__port">
            <h3 className="port__title">Home Port</h3>
            <p className="port__name">Port Canaveral</p>
          </div>
          <div className="ship__weight">
            <h3 className="weight__title">Weight [KG]</h3>
            <p className="weight__value">449964</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Ship;
