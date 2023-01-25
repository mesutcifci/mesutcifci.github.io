import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.secondary};
  color: ${colors.textColor};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 10px;
  height: 100px;
  margin-top: 100px;
  p {
    width: max-content;
  }
`;

export const Link = styled.a`
  color: ${colors.secondary};
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
