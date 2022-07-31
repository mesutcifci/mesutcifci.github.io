import * as React from "react";
import {
  LiStyle,
  NavbarLink
} from "./styles";


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
  const style = { background: "#45567d"};

  return (
    <LiStyle
      onClick={onClick}
      style={style}
      selected={selected}
      variants={variants}
      whileHover={{ background: "#2d2626" }}
      whileTap={{ scale: 0.90 }}
    >
      <NavbarLink  to={link}>{title}</NavbarLink>
    </LiStyle>
  );
};
