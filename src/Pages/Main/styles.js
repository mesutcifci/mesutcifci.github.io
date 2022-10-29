import styled from "styled-components";
import { fontSizes, colors, devices } from "../../styles/globalStyles";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-heading {
    font-size: ${fontSizes.xl};
    display: flex;
    align-items: center;
    line-height: 55px;
    font-family: "Lato", sans-serif;
    color: ${colors.textColor};
    margin: 20px 0 0 0;
    text-align: center;

    @media (min-width: ${devices.laptop}) {
      font-size: ${fontSizes.xxl};
    }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Description = styled(motion.p)`
  color: ${colors.secondary};
  font-size: ${fontSizes.l};
  margin: 3px;
  font-style: italic;
  margin-top: 0px;
  font-weight: 200;
  padding-top: 15px;

  @media ${devices.tablet} {
    font-size: ${fontSizes.xl};
  }
`;
