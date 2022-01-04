import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
  @media only screen and (min-width: 1200px) {
    width: 90%;
  }
  .ship__error {
    padding: 15px 0;
    color: #868686;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
