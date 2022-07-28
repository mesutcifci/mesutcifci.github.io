import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {colors, devices} from "../../../styles/globalStyles"

export const NavbarContainer = styled.nav`
  background-color: ${colors.red};
  color: ${colors.white};
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 1px 2px black;
  display: flex;
  justify-content: center;
`;

export const NavbarUl = styled(motion.ul)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  height: 65px;
  padding-left: 0px;
  margin: 0;
  width: 300px;

  @media ${devices.mobileL} {
    width: 450px;
  }

  @media ${devices.tablet} {
    width: 750px;
  }

  @media ${devices.laptop}  {
    width: 1000px;
  }
`;
export const NavbarLi = styled(motion.li)`
  background-color: ${colors.red};
  text-align: center;
  font-size: 18px;
  line-height: 60px;
`;

export const NavbarLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  height: 100%;
`;

