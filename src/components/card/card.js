import React from "react";
import { Wrapper } from "./card.styled";
import Header from "../header/header";
import Mission from "../mission/mission";
import Ships from "../ships/ships";

function Card() {
  return (
    <Wrapper>
      <Header />
      <Mission />
      <Ships />
    </Wrapper>
  );
}

export default Card;
