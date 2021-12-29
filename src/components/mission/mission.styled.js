import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 17px 15px;
  border: 1px solid #5c5c5d;
  border-width: 1px 0px;
  .mission__container {
    .mission__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
    }
    .mission__subtitle {
      margin-top: 6px;
      font-size: 34px;
      font-weight: 700;
    }
  }
  .rocket__container {
    margin-top: 20px;
    .rocket__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
    }
    .rocket__subcontainer {
      display: flex;
      margin-top: 9px;
      .rocket__subtitle {
        font-size: 16px;
        font-weight: 500;
      }
      .rocket__status {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        width: 88px;
        height: 20px;
        border-radius: 4px;
        background-color: #6fb46e;
        color: black;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    .button {
      width: 345px;
      height: 54px;
      margin-top: 33px;
      border: 2px solid white;
      background-color: transparent;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .launch__container {
    margin-top: 27px;
    .launch__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
    }
    .launch__date {
      margin-top: 7px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .site__container {
    margin-top: 20px;
    .site__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
    }
    .site__place {
      margin-top: 7px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
