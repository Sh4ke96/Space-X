import React from "react";
import { Container } from "./ship.styled";
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

function Ship() {
  const { data, loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data.launchesPast);
  return (
    <Container>
      <img src={data.launchesPast[0].ships[0].image} alt="ship image" />
      <div className="ship__information">
        <h1 className="ship__name">{data.launchesPast[0].ships[0].name}</h1>
        <div className="ship__details">
          <div className="ship__port">
            <h3 className="port__title">Home Port</h3>
            <p className="port__name">
              {data.launchesPast[0].ships[0].home_port}
            </p>
          </div>
          <div className="ship__weight">
            <h3 className="weight__title">Weight [KG]</h3>
            <p className="weight__value">
              {data.launchesPast[0].ships[0].weight_kg}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Ship;
