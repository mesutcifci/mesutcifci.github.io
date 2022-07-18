import React from "react";
import {
  IconContainer,
  NavbarIcon,
} from "./styles";

const NavbarAnimatedIcon = () => {
  return (
    <IconContainer
      initial={{
        width: 20,
      }}
      whileHover={{
        marginLeft: 5,
        rotate: 90,
        y: -10,
        x: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <NavbarIcon></NavbarIcon>
      <NavbarIcon></NavbarIcon>
      <NavbarIcon></NavbarIcon>
    </IconContainer>
  );
};

export default NavbarAnimatedIcon;
