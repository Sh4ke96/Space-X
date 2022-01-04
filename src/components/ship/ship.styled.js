import styled from "styled-components";

export const Container = styled.div`
  width: 345px;
  margin: 20px 0;
  @media only screen and (min-width: 1200px) {
    margin: 15px;
  }
  img {
    width: 345px;
    height: 200px;
    border-radius: 20px 20px 0 0;
  }
  .ship__information {
    padding: 15px 15px 20px 15px;
    background-color: white;
    border-radius: 0 0 20px 20px;
    .ship__name {
      color: black;
      font-size: 24px;
      font-weight: 700;
    }
    .ship__details {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #e8e8e8;
      .ship__port {
        display: flex;
        .port__title {
          font-size: 12px;
          text-transform: uppercase;
          color: #868686;
        }
        .port__name {
          margin-left: 38px;
          font-size: 14px;
          color: black;
          font-weight: 700;
        }
      }
      .ship__weight {
        display: flex;
        margin-top: 10px;
        .weight__title {
          font-size: 12px;
          text-transform: uppercase;
          color: #868686;
        }
        .weight__value {
          margin-left: 38px;
          font-size: 14px;
          color: black;
          font-weight: 700;
        }
      }
    }
  }
`;
