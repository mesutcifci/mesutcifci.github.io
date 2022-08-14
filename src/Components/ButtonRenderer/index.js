import React from "react";
import { ButtonContainer, TechnologyButton } from "./styles";

const ButtonRenderer = ({ buttonData, handleClickButton, propsName , disabled}) => {
  return (
    <ButtonContainer  propsName = {propsName}>
      {buttonData.map((data) => {
        return (
          <TechnologyButton
            key={data.id}
            id={data.id}
            disabled={disabled}
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
