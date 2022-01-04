import React from "react";
import { Container } from "./ship.styled";

function Ship(props) {
  return (
    <Container>
      <img src={props.images} alt="ship-image" />
      <div className="ship__information">
        <h1 className="ship__name">{props.shipName}</h1>
        <div className="ship__details">
          <div className="ship__port">
            <h3 className="port__title">Home Port</h3>
            <p className="port__name">{props.portTitle}</p>
          </div>
          <div className="ship__weight">
            <h3 className="weight__title">Weight [KG]</h3>
            <p className="weight__value">{props.shipWeight}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Ship;
