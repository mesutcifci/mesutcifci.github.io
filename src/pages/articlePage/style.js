import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {colors, devices} from "../../styles/globalStyles"

export const PageContainer = styled.div`
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 50px;
`;

export const PageTitle = styled.h1`
  display: block;
  color: ${colors.white};
  text-align: center;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 25px 0px 25px;
  width: 100%;
  max-width: 2000px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  
  @media ${devices.tablet} {
    padding: 0 30px 0 30px;
  }

  @media ${devices.laptop} {
    padding: 0 150px 0 150px;
  }
`;

export const CardItem = styled.li`
  position: relative;
  height: 430px;
  flex: 1 0 100%;
  max-width: 100%;
  padding: 10px;
  padding-left: 0;
  padding-right: 0;
  list-style: none;
  box-sizing: border-box;

  @media ${devices.mobileL} {
    padding: 25px;
    height: 460px;
  }

  @media ${devices.tablet} {
    flex: 0 0 40%;
    padding: 25px;
    min-width: 40%;
    height: 460px;

    &:nth-child(4n + 1) {
      flex: 1 0 60%;
      max-width: 60%;
    }

    &:nth-child(4n + 4) {
      flex: 1 0 60%;
      max-width: 60%;
    }
  }

  @media ${devices.laptop} {
    padding: 25px;
    height: 460px;
  }
`;

export const CardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;
`;

export const CardContent = styled(motion.div)`
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: #1c1c1e;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 3px solid ${colors.white};
  box-sizing: border-box;

`;

export const CardImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100%;
`;
export const ArticleImg = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 313px;
  left: 0;
  width: 100%;
`;

export const Title = styled.h2`
  color: white;
  font-size: 18px;
  background-color: ${colors.titleBlack} ;
  text-align: center;
  box-sizing: border-box;
  height: 55px;
  width: 100%;
  margin: -10px 0 0 0;
  padding: 10px;
  line-height: 38px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 55px;
  position: absolute;
  top: 357px;
`;

export const MediumLinkOption = styled.a`
  color: ${colors.white};
  text-decoration: none;
  background-color: ${colors.red};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  border-bottom-left-radius: 10px;
  line-height: 50px;
  width: 50%;
  height: 100%;
`;

export const ContentDetailOption = styled(motion.span)`
  background-color: ${colors.detailBlack};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border-bottom-right-radius: 10px;
  width: 50%;
  height: 100%;
  line-height: 50px;
  margin: 0;
`;

export const CardOpenLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${colors.white};
  display: inline-block;
`;

export const DetailCloseContainer = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: ${colors.openedCardBackground};
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

export const DetailCloseLink = styled(Link)`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
`;

export const OpenedCardContentContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
display: block;
pointer-events: none;
top: 0;
left: 0;
right: 0;
position: fixed;
z-index: 1;
overflow: hidden;
padding: 120px 10px;
box-sizing: border-box;

  @media (${devices.mobileL}) {
    padding: 120px 50px;
  }
`;

export const OpenedCardContent = styled(CardContent)`
height: auto;
max-width: 700px;
overflow: hidden;
pointer-events: none;
`;

export const OpenedCardImageContainer = styled(CardImageContainer)`
  z-index: 1;
`;

export const OpenedTitleContainer = styled(TitleContainer)`
top: 0px;
left: 0px;
font-size: 16px;
padding: 5px 0 5px 20px;
width: 100%;
background-color: ${colors.openedCardBackground};
z-index: 1;
`;

export const OpenedCardTitle = styled.h2`
color: ${colors.white};
margin: 8px 0;
`;

export const ContentContainer = styled(motion.div)`
padding: 420px 0px 0 0;
max-width: 700px;
`;

export const DetailOfArticle = styled.p`
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 25px;
  margin: 0;
  box-sizing: border-box;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
`;