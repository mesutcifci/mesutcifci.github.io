import styled, { css } from "styled-components";

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
  color: white;
  background-color: ${(prop) => (prop.selected ? "#be3144" : "#45567d")};
  background-color: ${(props) => props.disabled && "gray"};

  border: 2px solid white;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => !props.disabled && "rgb(45, 38, 38)"};
    cursor: ${(props) => !props.disabled && "pointer"};
  }
`;
