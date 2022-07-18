import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { TechnologyButton } from "../../styles/styles";
import { ButtonContainer } from "./styles";

const ButtonRenderer = ({ buttonData, handleClickButton }) => {
  return (
    <ButtonContainer>
      {buttonData.map((data) => {
        return (
          <TechnologyButton
            key={data.id}
            id={data.id}
            onClick={handleClickButton}
            selected={data.selected}
          >
            {data.title}
          </TechnologyButton>
        );
      })}
    </ButtonContainer>
  );
};
export default ButtonRenderer;
