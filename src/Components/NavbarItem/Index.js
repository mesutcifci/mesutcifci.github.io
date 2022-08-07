import * as React from "react";
import { ItemContainer, NavbarLink, NavbarIcon, Paths } from "./styles";

const variants = {
  open: {
    x: [0, 0],
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    x: [0, -1, -300],
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const NavbarItem = ({
  link,
  title,
  onClick,
  selected,
  icon,
  viewBox,
}) => {
  
  const icons = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        default: { delay: 1.4, duration: 1, ease: "easeInOut" },
        fill: { duration: 1, ease: [1, 0, 0.8, 1] },
      },
    },
  };

  return (
    <ItemContainer onClick={onClick} selected={selected} variants={variants}>
      <NavbarIcon viewBox={viewBox}>
        <Paths
          d={`${icon}`}
          variants={icons}
          initial="hidden"
          animate="visible"
        />
      </NavbarIcon>
      <NavbarLink to={link}>{title}</NavbarLink>
    </ItemContainer>
  );
};
