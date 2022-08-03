import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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
  pageBackground: "linear-gradient(to bottom, #232526, #3a3d40)",
  primary: "#be3144",
  secondary: "#F68989",
  tertiary: "#2d2626",
  textColor: "#fff",
  borderColor: "#fff",
  mobilNavbarBackground:"#fff",
  gray: "#303841",
  darkGray: "#2e2727",
  cardTitle: "rgb(45, 38, 38)",
  cardDetail: "#131215",
  openedCardBackground: "rgba(0, 0, 0, 0.8)",
}

export const PageTitle = styled.h1` 
  display: block;
  color: ${colors.textColor};
  text-align: center;
  margin-top: 70px;

`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0px;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: ${colors.pageBackground};
}

html {
scroll-behavior: smooth;
}

.container {
flex: 1 1 100%;
}
`;

export default GlobalStyle;