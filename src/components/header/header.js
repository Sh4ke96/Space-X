import React from "react";
import { Container } from "./header.styled";

function Header() {
  return (
    <Container>
      <img className="logo" src="images/logo.png" alt="grey space-x logo" />
    </Container>
  );
}

export default Header;
