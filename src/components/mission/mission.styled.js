import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 17px 15px;
  border: 1px solid #5c5c5d;
  border-width: 1px 0px;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .mission__container {
    .mission__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
      @media only screen and (min-width: 1200px) {
        font-size: 16px;
      }
    }
    .mission__subtitle {
      margin-top: 6px;
      font-size: 34px;
      font-weight: 700;
      @media only screen and (min-width: 1200px) {
        font-size: 43px;
      }
    }
  }
  .rocket__container {
    margin-top: 20px;
    .rocket__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
      @media only screen and (min-width: 1200px) {
        font-size: 16px;
      }
    }
    .rocket__subcontainer {
      display: flex;
      margin-top: 9px;
      .rocket__subtitle {
        font-size: 16px;
        font-weight: 500;
        @media only screen and (min-width: 1200px) {
          font-size: 18px;
        }
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
      @media only screen and (min-width: 700px) {
        width: 300px;
      }
    }
  }
  .launch__container {
    margin-top: 27px;
    @media only screen and (min-width: 700px) {
      margin-top: 0;
    }
    .launch__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
      @media only screen and (min-width: 1200px) {
        font-size: 16px;
      }
    }
    .launch__date {
      margin-top: 7px;
      font-size: 16px;
      font-weight: 500;
      @media only screen and (min-width: 1200px) {
        font-size: 18px;
      }
    }
  }
  .site__container {
    margin-top: 20px;
    .site__title {
      font-size: 14px;
      font-weight: 500;
      color: #868686;
      text-transform: uppercase;
      @media only screen and (min-width: 1200px) {
        font-size: 16px;
      }
    }
    .site__place {
      margin-top: 7px;
      font-size: 16px;
      font-weight: 500;
      @media only screen and (min-width: 1200px) {
        font-size: 18px;
      }
    }
  }
`;
