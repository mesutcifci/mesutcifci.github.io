import * as React from "react";
import { LiStyle, NavbarLink, IconPlaceholderStyle, Paths } from "./styles";
import { colors } from "../../styles/globalStyles";
import { motion } from "framer-motion";
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

export const MenuItem = ({ link, title, onClick, selected, icon, viewBox }) => {
  const icons = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      fill: "rgba(255, 255, 255, 1)",
    },
    test: {
      pathLength: 1,
      fill: colors.primary,
    },
  };

  return (
    <LiStyle
      onClick={onClick}
      selected={selected}
      variants={variants}
    >
      <IconPlaceholderStyle  viewBox={viewBox}>
        <Paths
          d={`${icon}`}
          variants={icons}
          initial="hidden"
          animate="visible"
          whileHover="test"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
            fill: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
        />
      </IconPlaceholderStyle>
      <NavbarLink to={link}>{title}</NavbarLink>
    </LiStyle>
  );
};
