import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const BodyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
`;

export const NavStyle = styled(motion.nav)`
  width: 300px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyle = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

export const UlStyle = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 180px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: white;
  width: 100%;
`;

export const LiStyle = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  width: 180px;
  height: 50px;
  text-align: center;
  flex: 1;
  line-height: 50px;
  list-style: none;
  font-weight: bold;
`;

export const IconPlaceholderStyle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`;

export const RefreshStyle = styled(motion.div)`
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
