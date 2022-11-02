import styled from "styled-components";
import { motion } from "framer-motion";
import { devices, colors } from "../../styles/globalStyles";

export const Svg = styled(motion.svg)`
  fill: ${colors.primary};
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 15px;
  padding: 0;
  margin: 0;
  z-index: 1;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
  }

  @media ${devices.mobileM} {
    right: 15px;
  }

  @media ${devices.tablet} {
    right: 20px;
  }

  @media ${devices.laptop} {
    right: 60px;
  }
  @media ${devices.laptopL} {
    right: 110px;
  }
  @media ${devices.desktop} {
    right: 370px;
  }
`;

export const ScrollIcon = styled(Svg)`
  ${(props) => {
    if (props.direction === "scrollUp") {
      return `
      bottom: 80px;
    @media ${devices.laptop}{
      bottom: 90px; 
    }
    @media ${devices.laptopL}{
      bottom: 120px; 
    }
    @media ${devices.desktop}{
      bottom: 200px; 
    }`;
    } else {
      return `
      transform: rotate(180deg);
      top: 40px;

      @media ${devices.laptop}{
        top: 130px;  
      }
      @media ${devices.desktop}{
        top: 220px; 
      }
      `;
    }
  }}
`;
