import styled from "styled-components";
import Ondas from "./image/ondas.svg";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  height: calc(100vh - 5rem);
  @media (max-height: 700px) {
    min-height: 600px;
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  height: 30%;
  z-index: 1;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-height: 700px) {
    height: 30%;
    z-index: 1;

    p {
      padding: 0;
      margin: 0;
      z-index: 1;
    }
  }
  @media (max-height: 500px) {
    height: 50%;
    z-index: 1;

    p {
      padding: 0;
      margin: 0;
      z-index: 1;
    }

    input {
      z-index: 1;
    }
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  z-index: 1;
`;
export const Containertitle = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${Ondas});
  background-repeat: no-repeat;
  border: 2px solid black;
  z-index: 1;
  @media (max-height: 700px) {
    height: 20%;
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  @media (max-height: 700px) {
    height: 200px;
  }
`;
export const Image = styled.img`
  width: 80%;
  z-index: 1;
  @media (max-height: 700px) {
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  margin: 3rem 0 1rem 0;
  z-index: 1;
  @media (max-height: 500px) {
    margin: 0.5rem;

    button {
      height: 30px;
    }
  }
  @media (max-height: 700px) {
    margin: 0.5rem;

    button {
      height: 40px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  z-index: 1;
`;
export const Ocean = styled.div`
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
  z-index: 0;
  bottom: 0;
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
