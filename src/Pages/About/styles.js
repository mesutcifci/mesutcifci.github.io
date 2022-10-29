import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, devices } from "../../styles/globalStyles";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .about-heading {
    color: ${colors.textColor};
    line-height: 30px;
  }
`;
export const Wrapper = styled.figure`
  max-width: 70%;

  .about-img {
    display: none;
    border-radius: 60%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 45px;
    border: 3px solid ${colors.borderColor};

    @media (${devices.tablet}) {
      display: initial;
    }
  }

  @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: center;
  }
`;

export const AboutMe = styled.p`
  color: ${colors.textColor};
  line-height: 30px;
  margin-top: 20px;

  a {
    color: ${colors.secondary};
    font-weight: 600;
  }

  a:hover {
    color: ${colors.textColor};
  }
`;

export const ContactContainer = styled.div`
  margin-top: 50px;
`;

export const ContactLink = styled(motion.a)`
  text-decoration: none;
  color: ${colors.textColor};
  width: 50px;
  box-sizing: border-box;
  padding: 7px;
`;
