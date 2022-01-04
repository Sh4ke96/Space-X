import React from "react";
import { Wrapper } from "./card.styled";
import Mission from "../mission/mission";
import Ships from "../ships/ships";
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
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;

function Card() {
  const { data, loading, error } = useQuery(information);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
  console.log(data.launchesPast[0].ships.length);
  console.log(data.launchesPast[2].ships.length);
  return (
    <Wrapper>
      <Mission
        mission_name={data.launchesPast[0].mission_name}
        rocket_name={data.launchesPast[0].rocket.rocket_name}
        date_local={data.launchesPast[0].launch_date_local}
        site_name={data.launchesPast[0].launch_site.site_name}
      />
      {data.launchesPast[0].ships.length >= 1 ? (
        <Ships
          image_ship={data.launchesPast[0].ships[0].image}
          home_port={data.launchesPast[0].ships[0].home_port}
          ship_name={data.launchesPast[0].ships[0].name}
          ship_weight={data.launchesPast[0].ships[0].weight_kg}
          image_ship_1={data.launchesPast[0].ships[1].image}
          home_port_1={data.launchesPast[0].ships[1].home_port}
          ship_name_1={data.launchesPast[0].ships[1].name}
          ship_weight_1={data.launchesPast[0].ships[1].weight_kg}
          image_ship_2={data.launchesPast[0].ships[2].image}
          home_port_2={data.launchesPast[0].ships[2].home_port}
          ship_name_2={data.launchesPast[0].ships[2].name}
          ship_weight_2={data.launchesPast[0].ships[2].weight_kg}
        />
      ) : (
        <p>There is no ships rescue</p>
      )}
      <Mission
        mission_name={data.launchesPast[1].mission_name}
        rocket_name={data.launchesPast[1].rocket.rocket_name}
        date_local={data.launchesPast[1].launch_date_local}
        site_name={data.launchesPast[1].launch_site.site_name}
      />
      {data.launchesPast[1].ships.length >= 1 ? (
        <Ships />
      ) : (
        <p className="ship__error">There is no ships rescue</p>
      )}
      <Mission
        mission_name={data.launchesPast[2].mission_name}
        rocket_name={data.launchesPast[2].rocket.rocket_name}
        date_local={data.launchesPast[2].launch_date_local}
        site_name={data.launchesPast[2].launch_site.site_name}
      />
      {data.launchesPast[2].ships.length >= 1 ? (
        <Ships
          image_ship={data.launchesPast[2].ships[0].image}
          home_port={data.launchesPast[2].ships[0].home_port}
          ship_name={data.launchesPast[2].ships[0].name}
          ship_weight={data.launchesPast[2].ships[0].weight_kg}
        />
      ) : (
        <p className="ship__error">There is no ships rescue</p>
      )}
      <Mission
        mission_name={data.launchesPast[3].mission_name}
        rocket_name={data.launchesPast[3].rocket.rocket_name}
        date_local={data.launchesPast[3].launch_date_local}
        site_name={data.launchesPast[3].launch_site.site_name}
      />
      {data.launchesPast[3].ships.length >= 1 ? (
        <Ships
          image_ship={data.launchesPast[3].ships[0].image}
          home_port={data.launchesPast[3].ships[0].home_port}
          ship_name={data.launchesPast[3].ships[0].name}
          ship_weight={data.launchesPast[3].ships[0].weight_kg}
          image_ship_1={data.launchesPast[3].ships[1].image}
          home_port_1={data.launchesPast[3].ships[1].home_port}
          ship_name_1={data.launchesPast[3].ships[1].name}
          ship_weight_1={data.launchesPast[3].ships[1].weight_kg}
          image_ship_2={data.launchesPast[3].ships[2].image}
          home_port_2={data.launchesPast[3].ships[2].home_port}
          ship_name_2={data.launchesPast[3].ships[2].name}
          ship_weight_2={data.launchesPast[3].ships[2].weight_kg}
        />
      ) : (
        <p className="ship__error">There is no ships rescue</p>
      )}
      <Mission
        mission_name={data.launchesPast[4].mission_name}
        rocket_name={data.launchesPast[4].rocket.rocket_name}
        date_local={data.launchesPast[4].launch_date_local}
        site_name={data.launchesPast[4].launch_site.site_name}
      />
      {data.launchesPast[3].ships.length >= 1 ? (
        <Ships
          image_ship={data.launchesPast[4].ships[0].image}
          home_port={data.launchesPast[4].ships[0].home_port}
          ship_name={data.launchesPast[4].ships[0].name}
          ship_weight={data.launchesPast[4].ships[0].weight_kg}
          image_ship_1={data.launchesPast[4].ships[1].image}
          home_port_1={data.launchesPast[4].ships[1].home_port}
          ship_name_1={data.launchesPast[4].ships[1].name}
          ship_weight_1={data.launchesPast[4].ships[1].weight_kg}
          image_ship_2={data.launchesPast[4].ships[2].image}
          home_port_2={data.launchesPast[4].ships[2].home_port}
          ship_name_2={data.launchesPast[4].ships[2].name}
          ship_weight_2={data.launchesPast[4].ships[2].weight_kg}
        />
      ) : (
        <p className="ship__error">There is no ships rescue</p>
      )}
    </Wrapper>
  );
}

export default Card;
