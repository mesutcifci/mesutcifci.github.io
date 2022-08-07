import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors, devices } from "../../styles/globalStyles";
 

export const navbarItemsAnimationConfigs = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x: [0, 0],
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    x: [0, 0, -1, -700],
  },
};

export const NavbarItems = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 250px;
  width: 100%;
  min-width: 200px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    top: 0px;
    padding: 0px;
    height: 75px;
    transform: unset !important;
    background-color: ${colors.primary};
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  background-color: ${colors.secondary};
  border-radius: 15px;
  height: 55px;
  line-height: 55px;
  
  @media ${devices.laptop} {
    padding: 20px;
    background-color: unset;
    border-radius: 0;
    height: 50px;
  }
`;