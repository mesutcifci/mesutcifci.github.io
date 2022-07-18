import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: right;
`;

export const ArrowUpContainer = styled.div`
  display: flex;
  height: 100%;

  justify-content: right;
  align-items: end;
  width: 100%;
  position: absolute;
`;

export const ArrowUpSvg = styled.svg`
  fill: white;
  display: none;
  height: 30px;
  weight: auto;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 500px) {
    display: initial;
    margin: 0px 30px 0 0;
  }

  @media (min-width: 720px) {
    margin: 0px 20px 0 0;
  }

  @media (min-width: 1200px) {
    margin: 0px 100px 0 0;
  }
`;

export const Svg = styled.svg`
  display: none;
  fill: white;
  height: 30px;
  weight: auto;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 500px) {
    display: initial;
    margin: 0px 30px 0 0;
  }

  @media (min-width: 720px) {
    margin: 0px 20px 0 0;
  }

  @media (min-width: 1200px) {
    margin: 0px 100px 0 0;
  }
`;

export const Paragraph = styled.p`
  color: white;
`;
