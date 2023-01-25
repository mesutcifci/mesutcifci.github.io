import React from "react";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import { Wrapper } from "./styles";

const Main = () => {
  return (
    <Wrapper>
      <About />
      <Skills />
      <Contact />
    </Wrapper>
  );
};

export default Main;
