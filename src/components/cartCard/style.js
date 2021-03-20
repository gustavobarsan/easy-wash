import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;

  margin: 2rem auto;
  padding: 1rem;

  width: calc(100% - 4rem);
  height: 8rem;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

  border-radius: 5px;

  position: relative;
  @media (min-width: 400px) {
    width: 34rem;
  }
  .remove {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const InfoContainer = styled.div`
  width: calc(70% - 2rem);
  height: 100%;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 1.4rem;
  width: 100%;
  padding: 1rem;
  font-weight: normal;
  margin: 0;
`;
export const Value = styled.h3`
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-weight: normal;

  margin: 0;
`;
export const ImgContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DefaultImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
