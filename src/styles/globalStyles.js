import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
const GlobalStyle = createGlobalStyle`
body {
  margin: 0px;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #232526, #3a3d40);
}

html {
scroll-behavior: smooth;
}

.container {
flex: 1 1 100%;
}
`;

export default GlobalStyle;

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const colors = {
  white: "#fff",
  red: "#be3144",
  blue: "#45567d",
  lightBlue: "#316bbe",
  gray: "#303841",
  darkGray: "#2e2727",
  black: "#2d2626",
  titleBlack: "rgb(45, 38, 38)",
  detailBlack: "#131215",
  openedCardBackground: "rgba(0, 0, 0, 0.8)",
}

export const PageTitle = styled.h1` 
  display: block;
  color: ${colors.white};
  text-align: center;
`;

