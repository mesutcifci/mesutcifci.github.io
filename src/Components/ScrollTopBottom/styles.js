import styled from "styled-components";
import {devices, colors} from "../../styles/globalStyles"
export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const Svg = styled.svg`
fill: ${colors.red};
display: flex;
justify-content: center;
height: 30px;
position: fixed;
right: 15px;
width: 30px;
padding: 0;
margin: 0;
z-index: 9999;
border-radius: 50%;
background-color: rgba(255,255,255, 0.5);

&:hover {
  cursor: pointer;
}

@media ${devices.mobileM}{
  right: 25px; 
  background-color: rgba(255,255,255, 0);

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
  
  @media ${devices.laptop}{
    bottom: 80px; 
  }

  @media ${devices.laptopL}{
    bottom: 100px; 
  }
`;

export const GoDownSvg = styled(Svg)`
  top: 90px;

`;
