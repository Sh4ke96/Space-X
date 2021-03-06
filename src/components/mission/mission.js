import React from "react";
import { Container } from "./mission.styled";
import { gql, useQuery } from "@apollo/client";

const information = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
    }
  }
`;

function Mission(props) {
  const { loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <Container>
      <div className="mission__wrapper">
        <div className="mission__container">
          <h2 className="mission__title">Mission</h2>
          <h1 className="mission__subtitle">{props.mission_name}</h1>
        </div>
        <div className="rocket__container">
          <h2 className="rocket__title">Rocket</h2>
          <div className="rocket__subcontainer">
            <h1 className="rocket__subtitle">{props.rocket_name}</h1>
            <p className="rocket__status">Recovered</p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </div>
      <div className="lanuch__wrapper">
        <div className="launch__container">
          <h2 className="launch__title">Launch Date</h2>
          <p className="launch__date">{props.date_local}</p>
        </div>
        <div className="site__container">
          <h2 className="site__title">Lanuch Site</h2>
          <p className="site__place">{props.site_name}</p>
        </div>
      </div>
    </Container>
  );
}

export default Mission;
