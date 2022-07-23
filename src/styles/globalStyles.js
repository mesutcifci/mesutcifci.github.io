import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background:linear-gradient(to bottom, #232526, #3a3d40);
}

html {
  scroll-behavior: smooth;
}

&:root {
    --main-white: #f0f0f0;
    --main-red: #be3144;
    --main-blue: #45567d;
    --main-gray: #303841;
    --main-title-gray: #2e2727;
  }
`;

export default GlobalStyle;
