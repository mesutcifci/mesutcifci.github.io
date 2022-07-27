import React from "react";
import { contactConstants } from "../../Constants/contactConstants";
import {
  AboutMe,
  ProfileFigure,
  ProfileImg,
  ProfileP,
  ContactPart,
  ContactLink,
} from "./styles";

const AboutPage = () => {
  return (
    <div>
      <AboutMe id="aboutMe">
        <ProfileFigure>
          <ProfileP>
            Hello, I am Mesut Çiftçi, I have been working as a frontend
            developer for a year and a half. Everyday I learn something new and
            try to improve myself.
          </ProfileP>
          <ProfileImg src="https://mesutcifci.github.io/images/profile.jpg" />
        </ProfileFigure>

        <ContactPart>
          {contactConstants.map((object, index) => {
            return (
                <ContactLink
                key={index} href={object.contactLink} target="_blank"
                  className={`${object.contactIcon}`}
                  whileHover={{
                    scale: 1.8,
                    color: "#aed6f1",
                  }}
                ></ContactLink>
            );
          })}
        </ContactPart>
      </AboutMe>
    </div>
  );
};

export default AboutPage;
