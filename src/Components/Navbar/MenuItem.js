import * as React from "react";
import {
  LiStyle,
  NavbarLink
} from "./styles";
import { colors } from "../../styles/globalStyles";

const variants = {
  open: {
    x: [0, 0,],
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

export const MenuItem = ({ link, title, onClick, selected }) => {
  const style = { background: colors.secondary};

  return (
    <LiStyle
      onClick={onClick}
      style={style}
      selected={selected}
      variants={variants}
      whileHover={{ background: colors.tertiary }}
      whileTap={{ scale: 0.90 }}
    >
      <NavbarLink  to={link}>{title}</NavbarLink>
    </LiStyle>
  );
};
