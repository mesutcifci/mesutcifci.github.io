import React from "react";
import { contactConstants } from "../../Constants/contactConstants";
import { PageTitle } from "../../styles/globalStyles";
import {colors} from "../../styles/globalStyles"

import {
  AboutMe,
  ProfileFigure,
  ProfileImg,
  ProfileP,
  ContactPart,
  ContactLink,
} from "./styles";

const variants = {
  hover: {
    scale: 1.8,
    color: colors.red,
  },
};

const AboutPage = () => {
  return (
    <div>
      <AboutMe>
        <PageTitle>Who am I?</PageTitle>
        <ProfileFigure>
        <ProfileImg src="https://mesutcifci.github.io/images/profile.jpg" />

          <ProfileP>
            Hello, I am Mesut Çiftçi, I have been working as a frontend
            developer for a year and a half. Everyday I learn something new and
            try to improve myself.
          </ProfileP>
        </ProfileFigure>

        <ContactPart>
          {contactConstants.map((object, index) => {
            return (
              <ContactLink
                key={index}
                href={object.contactLink}
                target="_blank"
                className={`${object.contactIcon}`}
                variants={variants}
                whileHover="hover"
              ></ContactLink>
            );
          })}
        </ContactPart>
      </AboutMe>
    </div>
  );
};

export default AboutPage;
