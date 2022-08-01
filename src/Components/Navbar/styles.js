import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors, devices } from "../../styles/globalStyles";

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

export const sidebar = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 7 }px at 40px 400px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = styled(motion.div)`
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: ${colors.mobilNavbarBackground};
  position: fixed;

  @media (min-width: 550px) {
    width: 300px;
  }

  @media ${devices.laptop} {
    background-color: ${colors.primary};
    position: fixed;
    box-shadow: 0px 1px 2px ${colors.tertiary};
    width: 100%;
    height: 65px;
    display: none;
  }
`;

export const NavStyle = styled(motion.nav)`
  width: 300px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const ToggleIcon = styled(motion.button)`
  outline: none;
  border: none;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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

export const UlStyle = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media (min-width: 550px) {
    width: 230px;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    top: 0px;
    padding: 0px;
    height: 65px;
    background-color: ${colors.primary};
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${colors.textColor};
  width: 100%;

  @media ${devices.laptop} {
    padding: 20px;
  }
`;

export const LiStyle = styled(motion.li)`
  list-style-type: none;
  font-size: 20px;
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

  background-color: ${colors.secondary};

  &:hover {
    background-color: ${colors.tertiary};
  }

  @media ${devices.laptop} {
    line-height: 25px;
    height: 65px;
    margin-bottom: 0px;
    border-radius: 0px;
    opacity: 1 !important;
    transform: unset !important;
    background-color: ${(props) => (props.selected ? colors.cardTitle : colors.primary)} !important;

    &:hover {
      background-color: ${colors.secondary} !important;
    }
  }
`;


export const IconPlaceholderStyle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  @media ${devices.laptop} {
  }
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
  @media ${devices.laptop} {
  }
`;
