import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: #be3144;
  color: #fff;
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

  @media (min-width: 500px) {
    width: 450px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 1441px) {
    width: 1000px;
  }
`;
export const NavbarLi = styled(motion.li)`
  background-color: "#be3144";
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  background-color: "#be3144";
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  height: 100%;
`;

