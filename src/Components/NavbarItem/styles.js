import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fontSizes, devices } from "../../styles/globalStyles";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  border-radius: 15px;
  height: 55px;
  line-height: 55px;

  @media ${devices.laptop} {
    border-radius: 0;
    height: max-content;
    line-height: normal;
    width: max-content;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #e6dede;
      border-radius: 50%;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      transition: all 200ms linear;
    }

    &:hover {
      color: #e6dede;
      &:after {
        height: 1px;
        width: 100%;
        transition: all 300ms linear;
        border-bottom: 2px solid white;
        border-radius: 2px;
      }
    }
  }
`;

export const ItemContainer = styled(motion.li)`
  list-style-type: none;
  font-size: ${fontSizes.m};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  width: 80%;
  height: 50px;
  text-align: center;
  flex: 1;
  list-style: none;
  font-weight: bold;
  box-sizing: border-box;
  padding: 0px 20px 0px 20px;

  @media ${devices.mobileS} {
    font-size: ${fontSizes.lm};
  }

  @media ${devices.laptop} {
    background-color: unset;
    transform: unset !important;
    opacity: 1 !important;
    height: max-content;
    margin-bottom: 0;
    border-radius: 0;
    padding: 0;
    flex: 0;
  }
`;
