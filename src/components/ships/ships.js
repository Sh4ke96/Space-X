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
    launchesPast(limit: 1) {
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;

function Ships() {
  const { data, loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <Container>
      <h2 className="ships__title">Rescue Ships</h2>
      <Ship
        images={data.launchesPast[0].ships[0].image}
        portTitle={data.launchesPast[0].ships[0].home_port}
        shipName={data.launchesPast[0].ships[0].name}
        shipWeight={data.launchesPast[0].ships[0].weight_kg}
      />
      <Ship
        images={data.launchesPast[0].ships[1].image}
        portTitle={data.launchesPast[0].ships[1].home_port}
        shipName={data.launchesPast[0].ships[1].name}
        shipWeight={data.launchesPast[0].ships[1].weight_kg}
      />
      <Ship
        images={data.launchesPast[0].ships[2].image}
        portTitle={data.launchesPast[0].ships[2].home_port}
        shipName={data.launchesPast[0].ships[2].name}
        shipWeight={data.launchesPast[0].ships[2].weight_kg}
      />
    </Container>
  );
}

export default Ships;
