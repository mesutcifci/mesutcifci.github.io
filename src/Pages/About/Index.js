import React from "react";
import { name, surname, Avatar } from "react-lorem-ipsum";

import { contactConstants } from "../../Constants/contactConstants";
import { personConstant } from "../../Constants/personConstant";
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
        <Avatar gender="female" className="about-img" />

        <AboutMe>
          {personConstant[3]}
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
