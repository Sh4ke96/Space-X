import React from "react";
import { Container } from "./ships.styled";
import Ship from "../ship/ship";

function Ships() {
  return (
    <Container>
      <h2 className="ships__title">Rescue Ships</h2>
      <Ship />
      <Ship />
      <Ship />
    </Container>
  );
}

export default Ships;
