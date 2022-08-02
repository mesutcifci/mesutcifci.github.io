import styled from "styled-components";
import {colors} from "../../styles/globalStyles"

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.primary};
  height: 10vh;
  color: ${colors.textColor};
  box-sizing: border-box;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 14px;
`;

export const Link = styled.a`
  line-height: 50px;
  color: ${colors.textColor};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
