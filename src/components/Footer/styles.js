import styled from "styled-components";
import { fontSizes, colors } from "../../styles/globalStyles";

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.secondary};
  height: 10vh;
  color: ${colors.textColor};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${fontSizes.xs};
  padding: 10px;
`;

export const Link = styled.a`
  color: ${colors.secondary};
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: ${fontSizes.m};

  &:hover {
    cursor: pointer;
  }
`;