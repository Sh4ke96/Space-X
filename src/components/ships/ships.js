import React from "react";
import { Container } from "./ships.styled";
import Ship from "../ship/ship";
import { gql, useQuery } from "@apollo/client";

const information = gql`
  {
    launchesPast(limit: 5) {
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;

function Ships(props) {
  const { loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <Container>
      <h2 className="ships__title">Rescue Ships</h2>
      <div className="ships__wrapper">
        <Ship
          images={props.image_ship}
          portTitle={props.home_port}
          shipName={props.ship_name}
          shipWeight={props.ship_weight || "N/A"}
        />
        <Ship
          images={props.image_ship_1}
          portTitle={props.home_port_1}
          shipName={props.ship_name_1}
          shipWeight={props.ship_weight_1 || "N/A"}
        />
        <Ship
          images={props.image_ship_2}
          portTitle={props.home_port_2}
          shipName={props.ship_name_2}
          shipWeight={props.ship_weight_2 || "N/A"}
        />
      </div>
    </Container>
  );
}

export default Ships;
