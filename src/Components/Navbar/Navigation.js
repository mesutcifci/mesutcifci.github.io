import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import { UlStyle } from "./styles";
import { navbarConstants } from "../../Constants/navbarConstants";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x: [0, 0],
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    x: [0, 0, -1, -700],
  },
};

export const Navigation = ({ toggle }) => {
  const [constant, setConstant] = useState([...navbarConstants]);
  const handleClick = (event) => {
    selectedToggle(event);
    toggle();
    scrollTop();
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const selectedToggle = (event) => {
    const copyConstant = [...constant];
    const selectedText = event.target.text;

    copyConstant.forEach((item) => {
      const isTextsMatched = item.navbarTitles === selectedText;
      item.selected = isTextsMatched;
    });

    setConstant([...copyConstant]);
  };

  return (
    <UlStyle variants={variants}>
      {constant.map((constant) => (
        <MenuItem
          key={constant.id}
          selected={constant.selected}
          onClick={handleClick}
          link={constant.navbarLinks}
          title={constant.navbarTitles}
          viewBox={constant.viewBox}
          icon={constant.icon}
        />
      ))}
    </UlStyle>
  );
};
