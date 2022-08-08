import React, { useState } from "react";

import { NavbarItem } from "../NavbarItem/Index";
import { navbarConstants } from "../../Constants/navbarConstants";

import { NavbarItems, navbarItemsAnimationConfigs } from "./styles";

export const Navigation = ({ toggle }) => {
  const [constant, setConstant] = useState([...navbarConstants]);

  const handleClick = (event) => {
    scrollTop();
    selectNavbarItem(event);
    toggle();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const selectNavbarItem = (event) => {
    const copyConstant = [...constant];
    const selectedText = event.target.text;

    copyConstant.forEach((item) => {
      const isTextsMatched = item.navbarTitles === selectedText;
      item.selected = isTextsMatched;
    });

    setConstant([...copyConstant]);
  };

  return (
    <NavbarItems variants={navbarItemsAnimationConfigs}>
      {constant.map((constant) => (
        <NavbarItem
          key={constant.id}
          selected={constant.selected}
          onClick={handleClick}
          link={constant.navbarLinks}
          title={constant.navbarTitles}
          viewBox={constant.viewBox}
          icon={constant.icon}
        />
      ))}
    </NavbarItems>
  );
};
