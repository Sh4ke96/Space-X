import React from "react";
import { Container } from "./ships.styled";
import Ship from "../ship/ship";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

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
  const { data, loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
  return (
    <Container>
      <h2 className="ships__title">Rescue Ships</h2>
      <Ship
        images={props.image_ship}
        portTitle={props.home_port}
        shipName={props.ship_name}
        shipWeight={props.ship_weight}
      />
      <Ship
        images={props.image_ship_1}
        portTitle={props.home_port_1}
        shipName={props.ship_name_1}
        shipWeight={props.ship_weight_1}
      />
      <Ship
        images={props.image_ship_2}
        portTitle={props.home_port_2}
        shipName={props.ship_name_2}
        shipWeight={props.ship_weight_2}
      />
    </Container>
  );
}

export default Ships;
