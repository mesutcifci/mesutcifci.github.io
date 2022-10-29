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

export const NavbarItemsWrapper = styled.div`
  width: 100%;
  @media ${devices.laptop} {
    height: 60px;
    margin-top: 60px;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const NavbarItems = styled(motion.ul)`
  margin: 0;
  padding: 0px;
  position: absolute;
  top: 150px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media ${devices.laptop} {
    position: static;
    flex-direction: row;
    justify-content: space-between;
    transform: unset !important;
    padding: 0px 25px;
    width: 400px;
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
    background-color: unset;
    border-radius: 0;
    line-height: 10px;
    width: max-content;
  }
`;
