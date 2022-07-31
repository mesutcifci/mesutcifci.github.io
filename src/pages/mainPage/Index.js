import React from "react";

import {
  MainPageContainer,
  WelcomeContainer,
  MainPageH1,
  MainPageP,
} from "./styles";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const MainPage = () => {

  return (
    <>
      <MainPageContainer>
        <WelcomeContainer>
          <MainPageH1>Welcome!</MainPageH1>
          <MainPageH1>I am Mesut.</MainPageH1>
          <MainPageP variants={variants} initial="hidden" animate="visible">
            a front-end developer
          </MainPageP>
        </WelcomeContainer>
      </MainPageContainer>
    </>
  );
};

export default MainPage;
