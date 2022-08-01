import styled, { css } from "styled-components";
import {colors} from "../../styles/globalStyles"

export const ButtonContainer = styled.div`
  width: auto;
  display: grid;

  ${(props) =>
    props.propsName == "addGrid" && css `
      grid-template-columns: repeat(3, 1fr);

      @media (min-width: 600px) {
        grid-template-columns: repeat(6, 1fr);
      }
    `}
`;

export const TechnologyButton = styled.button`
  color: ${colors.textColor};
  background-color: ${(props) => (props.selected ? colors.primary : colors.secondary)};
  background-color: ${(props) => props.disabled && "gray"};

  border: 2px solid ${colors.borderColor};
  border-radius: 10px;
  margin: 5px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => !props.disabled && colors.tertiary};
    cursor: ${(props) => !props.disabled && "pointer"};
  }
`;
