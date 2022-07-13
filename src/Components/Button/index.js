import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import { ButtonContainer, TechnologyButton } from "./style";
import Filter from "../Filter/Filter";
import { projectConstant } from "../../pages/projectPage/projectConstant";
import { buttonConstant } from "./buttonConstants";

const Button = () => {
  const [technologySearch, setTechnologySearch] = useState([]);

  function clickTechnologyButton(event) {
    event.target.classList.toggle("selected");
    let technologyName = event.target.id;
    console.log("technologyName: ", technologyName);
  }

  useEffect(() => {
    console.log("technologySearch", technologySearch);
  }, [technologySearch]);

  return (
    <div>
      <ButtonContainer>
        {buttonConstant.map((object) => {
          return (
            <TechnologyButton key= {object.id} id={object.id} onClick={clickTechnologyButton}>
              {object.title}
            </TechnologyButton>
          );
        })}
      </ButtonContainer>
    </div>
  );
};
export default Button;
