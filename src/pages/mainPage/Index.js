import React from "react";
import ScrollBottom from "../../Components/ScrollTopBottom/ScrollBottom";
import ScrollTop from "../../Components/ScrollTopBottom/ScrollTop";
import AboutPage from "../AboutPage/Index";

import {
  MainPageContainer,
  WelcomeContainer,
  MainPageH1,
  MainPageP,
} from "./styles";

const MainPage = () => {
  return (
    <>
      <ScrollBottom/>
      <ScrollTop />
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
