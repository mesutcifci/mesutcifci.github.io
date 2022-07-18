import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMe = styled.div`
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #45567d;
`
export const ProfileFigure = styled.figure`
display: grid;
grid-template-columns: repeat(2, auto);
`
export const ProfileImg = styled.img`
border-radius: 60%;
width: 120px;
height: 120px;
object-fit: cover;
margin-left: 15px
`
export const ProfileP = styled.p`
color: white;
`
export const ContactPart = styled.div`
margin-top: 50px
`
export const ContactLink = styled(motion.i)`
color: white;
width: 30px;
padding: 7px;
scale: 1.5;
`