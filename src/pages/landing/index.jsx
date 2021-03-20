import MainImg from "./landingImg.svg";
import Header from "../../components/header";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";

import {
  MainContainer,
  TitleContainer,
  MainImageContainer,
  Img,
  Title,
  ButtonsContainer,
  AllContentContainer,
  Ocean,
  Wave,
} from "./style";

const Landing = () => {
  let history = useHistory();
  return (
    <>
      <Header></Header>
      <AllContentContainer>
        <MainContainer>
          <TitleContainer>
            <Title>Easy Wash</Title>
          </TitleContainer>
          <MainImageContainer>
            <Img src={MainImg}></Img>
          </MainImageContainer>
          <ButtonsContainer>
            <DefaultButton
              _func={() => {
                history.push("/login");
              }}
              name={"Login"}
            />
            <DefaultButton
              _func={() => {
                history.push("/registertype");
              }}
              name={"Register"}
            />
          </ButtonsContainer>
        </MainContainer>
        <Ocean>
          <Wave></Wave>
          <Wave></Wave>
        </Ocean>
      </AllContentContainer>
    </>
  );
};

export default Landing;
