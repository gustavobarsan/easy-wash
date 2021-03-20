import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1rem;
  width: calc(100% - 4rem);
  height: 15rem;
  background-color: #ffffff;

  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;

  margin: 2rem;
  @media (min-width: 450px) {
    width: 36rem;
  }
`;
export const ImgContainer = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DefaultImg = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;
export const InfoContainer = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Title = styled.h2`
  text-align: left;
  padding: 1rem;
  width: calc(100% - 2rem);
  height: 20%;
  margin: 0;
  font-weight: normal;
  overflow: hidden;
  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;
export const Description = styled.p`
  text-align: left;
  padding: 0 1rem;
  width: calc(100% - 2rem);
  height: 30%;
  margin: 0;

  overflow: hidden;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;
export const ProductSelectContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
`;
export const Quantify = styled.h3`
  line-height: 1.2rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: 500;
`;
export const PriceText = styled.h3`
  text-align: center;
  margin: 0;
  font-weight: normal;
`;
export const PriceContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
