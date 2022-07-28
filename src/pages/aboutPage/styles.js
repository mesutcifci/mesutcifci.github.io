import styled from "styled-components";
import { motion } from "framer-motion";
import {colors} from "../../styles/globalStyles"

export const AboutMe = styled.div`
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${colors.blue};
`
export const ProfileFigure = styled.figure`
display: grid;
grid-template-columns: 4fr 1fr;
justify-content: center;
max-width: 70%;
`
export const ProfileImg = styled.img`
border-radius: 60%;
width: 120px;
height: 120px;
object-fit: cover;
margin-left: 25px

`
export const ProfileP = styled.p`
color: ${colors.white};
`
export const ContactPart = styled.div`
margin-top: 50px
`
export const ContactLink = styled(motion.a)`
text-decoration: none;
color: ${colors.white};
width: 50px;
box-sizing:border-box;
padding: 7px;
`