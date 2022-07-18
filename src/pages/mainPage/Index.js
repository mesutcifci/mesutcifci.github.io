import React from "react";
import {
  MainPageContainer,
  WelcomeContainer,
  MainPageH1,
  MainPageP,
} from "./styles";
import AboutPage from "../AboutPage/Index";

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <WelcomeContainer>
          <MainPageH1>Welcome!</MainPageH1>
          <MainPageH1>I am Mesut.</MainPageH1>
          <MainPageP>a front-end developer</MainPageP>
        </WelcomeContainer>
      </MainPageContainer>
      <AboutPage />
    </>
  );
};

export default MainPage;
