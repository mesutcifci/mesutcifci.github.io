import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import { TechnologyButton } from "../../styles/styles";
import { ButtonContainer } from "./style";

const ButtonRenderer = ({ buttonData, handleClickButton }) => {
  const [technologySearch, setTechnologySearch] = useState([]);

  return (
    <ButtonContainer>
      {buttonData.map((data) => {
        return (
          <TechnologyButton
            key={data.id}
            id={data.id}
            onClick={handleClickButton}
          >
            {data.title}
          </TechnologyButton>
        );
      })}
    </ButtonContainer>
  );
};
export default ButtonRenderer;
