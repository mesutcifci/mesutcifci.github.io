import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const NavbarContainer = styled(motion.div)`
width: 100%;
float: right;
display: grid;
grid-template-columns:0px auto;
box-shadow: 0px 1px 2px black;
position: fixed;
`
export const NavbarStyles = styled.nav`
background-color: #be3144;
color: #fff
`
export const IconContainer = styled(motion.div)`
z-index:1;
margin-top: 15px
`
export const NavbarIcon = styled(motion.div)`
height: 3px;
width: 20px;
margin: 4px 0 0 4px;
background-color: black;
`
export const NavbarUl = styled(motion.ul)`
list-style-type: none;
display: grid;
grid-template-columns:repeat(4, auto);
height: 65px;
padding-left: 30px;
margin: 0px;
width: auto
`
export const NavbarLi = styled(motion.li)`
background-color: "#be3144";
text-align: center;
font-size: 18px;
line-height: 60px;
background-color: "#be3144",

`

export const NavbarLink = styled(Link)`
color: white;
text-decoration: none;
width: 100%;
`