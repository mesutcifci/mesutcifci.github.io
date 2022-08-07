import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../../styles/globalStyles";

export const ToggleIcon = styled(motion.button)`
  outline: none;
  border: none;
  z-index: 2;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  background: transparent;

  @media ${devices.laptop} {
    display: none;
    width: 0px;
    height: 0px;
    position: static;
  }
`;