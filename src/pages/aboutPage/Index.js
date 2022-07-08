import React from "react";
import { contactConstants } from "./contactConstants";
import {AboutMe, ProfileFigure, ProfileImg, ProfileP, ContactPart, ContactLink} from "./style"

const AboutPage = () => {

    return (
        <div>
            <AboutMe id="aboutMe">
                <ProfileFigure >
                    <ProfileP>
                        Hello, I am Mesut Çiftçi, I have been working as a frontend developer for a year and a half. Everyday I learn something new and try to improve myself.
                    </ProfileP>
                    <ProfileImg src="https://mesutcifci.github.io/images/profile.jpg" />
                </ProfileFigure>

                <ContactPart>
                    {contactConstants.map((object, index) => {
                        return (<a key={index} href={object.contactLink} target="_blank">
                            <ContactLink
                                className={`${object.contactIcon}`}
                                whileHover={{
                                    scale: 1.8,
                                    x: 7,
                                    color: "#be3144",
                                    opacity: 0.9
                                }}
                            >
                            </ContactLink>
                        </a>)
                    })}
                </ContactPart>
            </AboutMe>
        </div>
    )
}

export default AboutPage;