import React from "react";

import { personConstant } from "../../Constants/personConstant";
import { Container, WelcomeContainer, Description } from "./styles";

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

const Main = () => {
  return (
    <>
      <Container>
        <WelcomeContainer>
          <h1 className="main-heading">
            Welcome! I am Mesut Çiftçi.
          </h1>

          <Description variants={variants} initial="hidden" animate="visible">
            a front-end developer
          </Description>
        </WelcomeContainer>
      </Container>
    </>
  );
};

export default Main;
