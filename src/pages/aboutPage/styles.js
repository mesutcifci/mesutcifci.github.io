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
`
export const ProfileFigure = styled.figure`
display: grid;
grid-template-columns: 1fr 4fr;
justify-content: center;
max-width: 70%;
`
export const ProfileImg = styled(motion.img)`
border-radius: 60%;
width: 120px;
height: 120px;
object-fit: cover;
margin-right: 45px;
border: 3px solid ${colors.borderColor};

&:hover{
    border: 3px solid ${colors.primary};
}
`
export const ProfileP = styled.p`
color: ${colors.textColor};
line-height: 30px;
margin-top: 20px
`
export const ContactPart = styled.div`
margin-top: 50px
`

export const ContactLink = styled(motion.a)`
text-decoration: none;
color: ${colors.textColor};
width: 50px;
box-sizing:border-box;
padding: 7px;
`