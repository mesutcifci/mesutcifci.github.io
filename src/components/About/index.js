import React from "react";
import { Avatar } from "react-lorem-ipsum";

import { Container, Wrapper, AboutMe } from "./styles";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Avatar src="./img/profile.jpg" className="about-img" />

        <AboutMe>
          I am a professional frontend developer eager to improve himself and
          develop new things. Previously worked at{" "}
          <a href="https://www.patika.dev/about">patika.dev</a> and
          <a href="https://radity.com/en/"> Radity</a>.
        </AboutMe>
      </Wrapper>
    </Container>
  );
};

export default About;
