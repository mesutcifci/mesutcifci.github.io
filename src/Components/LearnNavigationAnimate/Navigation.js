import * as React from "react";
import { MenuItem } from "./MenuItem";
import { UlStyle } from "./styles";
import { navbarConstants } from "../../Constants/navbarConstants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [0, 1, 2];

export const Navigation = () => (
  <UlStyle variants={variants}>
    {navbarConstants.map((constant, index) => (
      <MenuItem i={index} title={constant.navbarTitles} key={constant.id} />
    ))}
  </UlStyle>
);
