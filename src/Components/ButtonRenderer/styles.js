import styled, { css} from "styled-components";

export const ButtonContainer = styled.div`
  width: auto;

  ${(props) => props.propsName == "addGrid"  && css `
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @media (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
      }
    
      @media (min-width: 720px) {
        grid-template-columns: repeat(6, 1fr);
      }
 `}

  
`;
