import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 120px 20px 40px 20px;
`;

export const GridContainer = styled.div`
display: grid;
margin: 15px;

@media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 1030px) {
    grid-template-columns: repeat(3, 1fr);
}
`;

export const Card = styled.div`
border: 3px solid white;
padding: 0;
border-radius: 10px;
margin: 15px;
`;
export const Img = styled.img`
width: 280px;
height: 200px;
object-fit: cover;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
`;
export const Title = styled.p`
color: white;
background-color: rgb(45, 38, 38);
text-align: center;
box-sizing: border-box;
height: 50px;
width: 280px;
margin: -10px 0 0 0;
padding: 0 10px 0 10px;
line-height: 50px;
font-weight: bold;
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis;
`;
export const LinkContainer = styled.div`
display: flex;
width: 280px;
height: 55px;
`;
export const PreviewAndMediumLink = styled.a`
color: white;
text-decoration: none;
background-color: rgb(174, 34, 34);
text-align: center;
border-bottom-left-radius: 10px;
line-height: 50px;
width: 50%;
height: 100%;

`;
export const ProjectCodeLink = styled.a`
text-decoration: none;
color: white;
background-color: #131215;
text-align: center;
border-bottom-right-radius: 10px;
line-height: 50px;
width: 50%;
height: 100%;
`;

export const ContentHoverText = styled.a`
text-decoration: none;
color: white;
background-color: #131215;
text-align: center;
padding-top: 14px;
border-bottom-right-radius: 10px;
width: 50%;

&:hover {
    cursor: help;
}
`;

export const H2 = styled.h2`
font-size: 20px;
`
export const learn = styled.div`
{
    font-family: Calibri, Arial, sans-serif;
    font-size: 20px;
    width: 500px;
}
`

export const learnA = styled.a`
{
   text-decoration: none;
   color: #000;
}

`

