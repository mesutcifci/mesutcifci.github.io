import styled from "styled-components";
import { motion } from "framer-motion";
import { fontSizes, colors, devices,directionColumnCenter } from "../../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 50px 20px;
  min-height: 100vh;
  box-sizing: border-box;

  .project-heading {
    display: block;
    color: ${colors.textColor};
    text-align: center;
    margin-top: 70px;
  }

  .notice-message {
    color: ${colors.textColor};
    font-size: ${fontSizes.m};
    margin: 20px;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
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
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled(motion.div)`
  padding: 0;
  border-radius: 10px;
  margin: 15px;

  .project-img {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border: 3px solid ${colors.borderColor};
    border-bottom: none;
    box-sizing: border-box;
  }

  .project-title{
    color: ${colors.textColor};
    font-size: ${fontSizes.s};
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
    border: 3px solid ${colors.borderColor};
    border-top: none;
    border-bottom: none;
  }
`;

export const LinkContainer = styled(motion.div)`
  display: flex;
  width: 280px;
  height: 55px;
  border: 3px solid ${colors.borderColor};
  border-top: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;

  .preview-link{
    color: white;
    text-decoration: none;
    background-color: ${colors.primary};
    font-weight: bold;
    text-align: center;
    font-size: ${fontSizes.xs};
    border-bottom-left-radius: 10px;
    line-height: 50px;
    width: 50%;
    height: 100%;
  }

  .project-code-link{
    text-decoration: none;
    color: ${colors.textColor};
    background-color: ${colors.cardDetail};
    font-size: ${fontSizes.xs};
    font-weight: bold;
    text-align: center;
    border-bottom-right-radius: 10px;
    line-height: 50px;
    width: 50%;
    height: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px;
  ${directionColumnCenter}

  @media${devices.tablet} {
    display: grid;
    grid-template-columns: 6fr 1fr;


  }
`;

export const ResetFilterButton = styled.button`
  margin: 20px;
  width: 97%;
  height: 85%;
  max-width: 280px;
  color: ${colors.textColor};
  background-color: ${(props) =>
    props.disabled ? colors.lightGray : colors.secondary};
  border: 2px solid ${colors.borderColor};
  border-radius: 10px;
  margin: 5px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => !props.disabled && colors.primary};
    cursor: ${(props) => !props.disabled && "pointer"};
  }

  @media${devices.tablet} {
  }
`;
