import React from "react";
import {
  NavbarContainer,
  NavbarStyles,
  NavbarUl,
  NavbarLi,
  NavbarLink
} from "./style";
import NavbarAnimatedIcon from "./NavbarIcon";
import { navbarConstants } from "./navbarConstants";

const NavbarPart = () => {
  return (
    <NavbarContainer>
        <NavbarAnimatedIcon/>
      <NavbarStyles className="nav">
        <NavbarUl className="ul">
          {navbarConstants.map((object) => {
            return (
              <NavbarLi
                key={object.navbarTitles}
                initial={{
                  background: "#be3144",
                }}
                whileHover={{
                  background: "#45567d",
                }}
              >
                <NavbarLink to={object.navbarLinks}>{object.navbarTitles}</NavbarLink>
              </NavbarLi>
            );
          })}
        </NavbarUl>
      </NavbarStyles>
    </NavbarContainer>
  );
};

export default NavbarPart;
