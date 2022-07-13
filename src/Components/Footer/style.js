import styled from "styled-components";

export const Wrapper = styled.footer`
  border-top: 3px solid #be3144;
  height: 10vh;
  color: white;
  box-sizing: border-box;
  text-align: right;
  padding-right: 50px;
  font-size: 14px;
`;

export const Link = styled.a`
  line-height: 50px;
  color: white;
  text-decoration: none;

  &:hover {
    cursor: help;
  }
`;
