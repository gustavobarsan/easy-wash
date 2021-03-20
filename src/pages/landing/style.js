import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 720px;

  font-family: "Ubuntu", sans-serif;
  @media (min-height: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-height: 800px) {
    height: 70%;
  }
`;
export const AllContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  );
  @media (min-height: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  overflow: hidden;
`;
export const TitleContainer = styled.div`
  width: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;

  text-align: center;

  @media (max-height: 376px) {
    height: 20%;
  }
  @media (min-height: 600px) {
    padding-top: 5rem;
  }
`;
export const Title = styled.h1`
  font-weight: normal;
  font-size: 50px;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 400px) {
    margin: 1rem;
  }

  @media (min-width: 1280px) {
    margin: 2rem;
  }
  @media (max-height: 376px) {
    font-size: 40px;
  }

  @media (min-height: 600px) {
    font-size: 50px;
  }
`;
export const MainImageContainer = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    height: 50%;
  }
  @media (min-width: 720px) {
    height: 40%;
  }
`;
export const Img = styled.img`
  width: 70%;
  max-width: 300px;
  z-index: 1;

  @media (min-width: 1024px) {
    width: 19rem;
  }

  @media (min-width: 1280px) {
    width: 15rem;
  }

  @media (max-height: 449px) {
    width: 15%;
  }
  @media (min-height: 450px) {
    width: 10rem;
  }
  @media (min-height: 550px) {
    width: 12rem;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  height: 15%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-height: 600px) {
    padding-bottom: 5rem;
  }

  button {
    z-index: 1;
    margin: 0.5rem;
    width: 20rem;
    height: 2rem;
    font-size: 14px;

    @media (min-width: 400px) {
      height: 2.5rem;
      margin: 1rem;
    }
    @media (min-height: 600px) {
      height: 3rem;
    }
  }
`;

export const Ocean = styled.div`
  min-height: 450px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  bottom: 0;
`;
export const Wave = styled.div`
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg)
    repeat-x;
  position: fixed;
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
  @media (max-height: 449px) {
    height: 100px;
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
