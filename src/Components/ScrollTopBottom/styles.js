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

export const Svg = styled.svg`
fill: #F5B7B1;
height: 30px;
position: fixed;
right: 15px;
width: 40px;
padding: 0;
margin: 0;
z-index: 9999;
&:hover {
  cursor: pointer;
}

@media ${devices.mobileM}{
  right: 25px; 
}

@media ${devices.tablet} {
  right: 20px; 
}

@media ${devices.laptop}{
  right: 70px; 
}

@media ${devices.desktop}{
  right: 170px; 
}
`;


export const GoUpSvg = styled(Svg)`
  bottom: 30px;
`;

export const GoDownSvg = styled(Svg)`
  top: 90px;

`;
