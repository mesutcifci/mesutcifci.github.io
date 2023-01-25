import styled from "styled-components";
import { colors } from "../../styles/globalStyles";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContactLink = styled(motion.a)`
  text-decoration: none;
  color: ${colors.textColor};
  width: 50px;
  box-sizing: border-box;
  padding: 7px;
`;
