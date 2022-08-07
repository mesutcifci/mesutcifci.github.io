import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, devices } from "../../styles/globalStyles";

export const sidebarAnimationConfigs = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 12 + 100}px at 40px 400px)`,
    transition: {
      type: "spring",
      stiffness: 30,
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
  background-color: ${colors.mobileNavbarBackground};
  position: fixed;

  @media ${devices.laptop} {
    background-color: ${colors.primary};
    position: fixed;
    box-shadow: 0px 1px 2px ${colors.tertiary};
    width: 100%;
    height: 65px;
    display: none;
  }
`;

export const Container = styled(motion.nav)`
  width: 100%;
  height: ${(props) => (props.isOpen ? "100%" : "0%")};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
`;