import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% - 4rem);
  padding: 2rem;
  margin: 0 auto;
  max-width: 980px;

  .addressContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    margin: 0 auto;

    h2 {
      text-align: left;
      font-weight: 400;
    }
  }
`;
export const LaundryContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;

  margin: 0 auto;
`;
