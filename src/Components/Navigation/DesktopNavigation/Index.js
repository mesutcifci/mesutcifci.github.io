import React from "react";
import {
  NavbarContainer,
  NavbarUl,
  NavbarLi,
  NavbarLink
} from "./styles";

import { navbarConstants } from "../../../Constants/navbarConstants";

const NavbarPart = () => {
  return (
      <NavbarContainer className="nav">
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
      </NavbarContainer>
  );
};

export default NavbarPart;
