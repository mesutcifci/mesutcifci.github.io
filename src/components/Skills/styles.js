import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-heading {
    color: ${colors.textColor};
    line-height: 30px;
    font-size: 30px;
    margin-bottom: 60px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 30px;
  width: max-content;
  max-width: 310px;
  justify-content: center;

  @media (min-width: 500px) {
    max-width: 100%;
    column-gap: 20px;
  }

  @media (min-width: 600px) {
    column-gap: 30px;
  }
`;

export const Icon = styled.a`
  width: 40px;
  height: 40px;
  svg {
    box-sizing: border-box;
    height: 40px;
    width: 40px;
  }
`;
