import React from "react";
import { name, surname, Avatar } from "react-lorem-ipsum";

import { contactConstants } from "../../Constants/contactConstants";
import { colors } from "../../styles/globalStyles";

import {
  Container,
  Wrapper,
  AboutMe,
  ContactContainer,
  ContactLink,
} from "./styles";

const variants = {
  hover: {
    scale: 1.8,
    color: colors.secondary,
  },
};

const About = () => {
  return (
    <Container>
      <h1 className="about-heading">Who am I?</h1>
      <Wrapper>
        <Avatar
          src="https://avatars.githubusercontent.com/u/60754639?v=4"
          className="about-img"
        />

        <AboutMe>
          I am a frontend developer with 1.5 years of professional experience. I
          previously worked at <a href="https://www.patika.dev/about">patika.dev</a> and 
          <a href="https://radity.com/en/"> Radity</a>. I developed personal and professional projects
          with Vanilla JS, React JS, CSS, SCSS, Bootstrap, Material UI, GraphQL
          and git technologies.
        </AboutMe>
      </Wrapper>

      <ContactContainer>
        {contactConstants.map((contactConstant, index) => {
          return (
            <ContactLink
              key={index}
              href={contactConstant.contactLink}
              target="_blank"
              className={`${contactConstant.contactIcon}`}
              variants={variants}
              whileHover="hover"
            />
          );
        })}
      </ContactContainer>
    </Container>
  );
};

export default About;
