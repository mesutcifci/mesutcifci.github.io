import styled from "styled-components";
import {colors} from "../../styles/globalStyles"
import {motion} from "framer-motion";

export const MainPageContainer = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const MainPageH1 = styled.h1`
  font-size: 40px;
  font-family: "Lato", sans-serif;
  color: ${colors.textColor};
  margin: 20px 0 0 0;
`;

export const MainPageP = styled(motion.p)`
  color: ${colors.primary};
  font-size: 25px;
  margin: 3px;
  font-style: italic;
  font-size: 25px;
  margin-top: 0px;
  font-weight: 200;
`;
