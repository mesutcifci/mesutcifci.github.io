import React from "react";
import { Avatar } from "react-lorem-ipsum";

import { Container, Wrapper, AboutMe } from "./styles";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Avatar src="./img/profile-img.jpg" className="about-img" />

        <AboutMe>
          <p>
            I am an experienced front-end developer building websites and web
            applications mainly with JavaScript, React, and CSS. I also use
            various tools and technologies such as SCSS, Tailwind CSS, Material
            UI, Redux Toolkit, etc. Beyond code, I am a cat and anime lover and
            I also play guitar and sing.
          </p>
        </AboutMe>
      </Wrapper>
    </Container>
  );
};

export default About;
