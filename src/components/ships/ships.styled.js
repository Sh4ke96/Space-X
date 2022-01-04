import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 17px 15px;
  .ships__wrapper {
    display: flex;
    @media only screen and (min-width: 1200px) {
      margin-top: 15px;
    }
  }
  .ships__title {
    color: #868686;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
