import styled, {css} from "styled-components";

export const ButtonContainer = styled.div`
  width: auto;

  ${(props) =>
    !props.withoutGrid && css `
      display: grid;
      grid-template-columns: repeat(3, 1fr);

    `}

  @media(min-width: 600px) {
    ${(props) => !props.withoutGrid && css `
        grid-template-columns: repeat(4, 1fr);
      `}
  }

  @media (min-width: 720px) {
    ${(props) =>
      
      !  props.withoutGrid && css `
        grid-template-columns: repeat(6, 1fr);
      `}
  }
`;
