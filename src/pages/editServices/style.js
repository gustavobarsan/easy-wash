import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 728px;
  height: 80vh;
  position: relative;
  text-align: center;
  margin: 0 auto;
  h2 {
    margin-top: 5rem;
  }

  .remove {
    background-color: #f00;
    border: none;
    color: #e5e5e5;
    padding: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 2px 0px;
    margin: 1rem 0;
    /* position: fixed;
    right: 0; */
  }

  .remove:hover {
    background-color: #a00;
    cursor: pointer;
  }

  /* background-color: aliceblue; */
  @media (min-width: 1024px) {
  }
`;

export const InformationContainer = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: 15%;
  /* background-color: brown; */
  h4,
  h3,
  p {
    text-align: center;
  }
  hr {
    margin-bottom: 4rem;
  }
  @media (min-width: 980px) {
    margin-top: 0;
    width: 90%;
    height: 95%;
  }
`;

export const InputContainer = styled.div`
  /* margin-bottom: 1rem; */
  /* background-color: pink; */
`;
