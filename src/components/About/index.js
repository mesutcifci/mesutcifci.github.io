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
            Passionate Frontend Developer with 2 years of professional
            experience across three diverse industries, complemented by over
            four years of dedicated self-learning and honing frontend
            development skills. A self-taught enthusiast with a proven track
            record of adapting swiftly to new code bases and contributing
            effectively to various projects.
          </p>
          <p>
            🚀Professional Expertise: Versatile experience in insurance,
            education, and e-commerce sectors, demonstrating adaptability and
            proficiency in diverse domains.
          </p>
          <p>
            💻 Tech Stack: Proficient and familiar in a range of tools and
            technologies including React, Vanilla JavaScript, CSS, Tailwind CSS,
            SCSS, Material UI, Bootstrap, and more. Adept at leveraging the
            right tools for optimal front-end development.
          </p>
          <p>
            👩‍💻 Collaborative Contributor: Quick to acclimate to new environments
            and contribute meaningfully to projects. Capable of diving into
            complex code bases and making valuable contributions from the
            get-go.
          </p>
          <p>
            🔄 Feedback-Driven and Adaptive: Open to feedback and committed to
            continuous improvement, always striving for excellence in coding
            practices and project delivery.
          </p>
          <p>
            🎸🎤 Beyond Coding: Beyond coding, I find joy in playing the guitar,
            singing songs, and fostering a love for cats. A well-rounded
            individual who brings creativity and passion to both code and life.
          </p>
        </AboutMe>
      </Wrapper>
    </Container>
  );
};

export default About;
