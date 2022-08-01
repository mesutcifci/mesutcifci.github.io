import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, devices } from "../../styles/globalStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 40px 20px;
  min-height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  margin: 15px;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Card = styled(motion.div)`
  border: 3px solid ${colors.borderColor};
  padding: 0;
  border-radius: 10px;
  margin: 15px;
`;

export const Img = styled(motion.img)`
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Title = styled.h2`
  color: ${colors.textColor};
  font-size: 17px;
  background-color: ${colors.cardTitle};
  text-align: center;
  box-sizing: border-box;
  height: 50px;
  width: 280px;
  margin: -10px 0 0 0;
  padding: 0 10px 0 10px;
  line-height: 55px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkContainer = styled(motion.div)`
  display: flex;
  width: 280px;
  height: 55px;
`;

export const PreviewLink = styled.a`
  color: white;
  text-decoration: none;
  background-color: ${colors.primary};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  border-bottom-left-radius: 10px;
  line-height: 50px;
  width: 50%;
  height: 100%;
`;

export const ProjectCodeLink = styled.a`
  text-decoration: none;
  color: ${colors.textColor};
  background-color: ${colors.cardDetail};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-bottom-right-radius: 10px;
  line-height: 50px;
  width: 50%;
  height: 100%;
`;

export const Message = styled.div`
  color: ${colors.textColor};
  font-size: 18px;
  margin: 20px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin: 20px;

  @media${devices.tablet} {
    display: flex;
    justify-content: space-around;
  }
`;