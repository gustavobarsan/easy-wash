import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const MainContainer = styled.div`
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

  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  height: 80vh;
  position: relative;
  text-align: center;
  z-index: 1;
`;

export const InformationContainer = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: 15%;
  z-index: 1;
  /* background-color: brown; */
  h4,
  p {
    text-align: left;
    padding-left: 5%;
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

export const Select = styled(TextField)`
  width: ${({ width }) => (width ? width : "25.5rem")};
  height: ${({ height }) => (height ? height : "4.6rem")};
  margin-right: 0.7rem !important;
  z-index: 1;
`;
export const Ocean = styled.div`
  min-height: 450px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 0;
`;
export const Wave = styled.div`
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg)
    repeat-x;
  position: fixed;
  bottom: 0;
  z-index: 0;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  .wave:nth-of-type(2) {
    bottom: 25px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;
