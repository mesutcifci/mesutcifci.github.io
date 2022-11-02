import * as React from "react";
import { ItemContainer, NavbarLink } from "./styles";

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

export const NavbarItem = ({ link, title, onClick, selected }) => {
  return (
    <ItemContainer onClick={onClick} selected={selected} variants={variants}>
      <NavbarLink to={link}>{title}</NavbarLink>
    </ItemContainer>
  );
};
