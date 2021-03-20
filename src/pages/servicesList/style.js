import styled from "styled-components";

export const AllContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  overflow-y: hidden !important;
`;
export const MainContainer = styled.div`
  width: 100%;
  max-width: 728px;
  background-color: #ffffff;
  padding-bottom: 6rem;
  overflow-y: hidden !important;
  overflow-x: hidden !important;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 65%;
  }
`;
export const ServiceImageContainer = styled.div`
  width: 100%;
  height: 8rem;

  @media (min-width: 1024px) {
    height: 5rem;
  }
`;
export const ServiceImage = styled.img`
  width: 100%;
  height: 8rem;
  margin: 5px 0;
  filter: blur(5px);
  @media (min-width: 1024px) {
    height: 5rem;
  }
`;
export const ServiceInfo = styled.div`
  width: 100%;
  height: 15rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);

  display: flex;
  flex-wrap: wrap;

  @media (min-width: 450px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    height: 10rem;
  }
`;
export const Title = styled.h1`
  width: 69%;
  height: 4rem;
  margin-bottom: 0;
  font-weight: normal;
  text-align: left;
  padding-left: 0.5rem;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const Rate = styled.h2`
  width: 29%;
  height: 4rem;
  font-weight: normal;
  margin-bottom: 0;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const Description = styled.h1`
  width: 100%;
  height: 4rem;
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-y: scroll;

  padding: 1rem;
`;
export const CartContainer = styled.div`
  width: 100%;
  max-width: 728px;
  height: 3rem;
  background-color: #3d90ab;
  z-index: 0;
  overflow-y: hidden !important;

  display: flex;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  @media (min-width: 728px) {
    border-radius: 5px 5px 0 0;
  }
`;
export const CartItems = styled.div`
  width: 33.33%;
  height: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartText = styled.h3`
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  color: white;
  cursor: pointer;

  font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FinalPrice = styled.h2`
  font-weight: normal;
  margin: 0;
  color: white;
`;
