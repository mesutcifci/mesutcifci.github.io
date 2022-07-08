import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px
`;
export const GridContainer = styled.div`
display: grid;
border: 3px solid white;
padding: 0;
border-radius: 10px;
min-width: 250px;
max-width: 300px;
margin: 15px;
`;
export const Img = styled.img`
width: 300px;
height: 224px;
object-fit: cover;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
`;
export const Figcaption = styled.figcaption`
color: white;
background-color: rgb(45, 38, 38);
text-align: center;
box-sizing: border-box;
height: 40px;
line-height: 36px;
font-weight: bold;
`;
export const LinkContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
height: 60px;
`;
export const ProjectPreviewLink = styled.a`
color: white;
text-decoration: none;
background-color: rgb(174, 34, 34);
text-align: center;
padding-top: 14px;
border-bottom-left-radius: 10px;
`;
export const ProjectCodeLink = styled.a`
text-decoration: none;
color: white;
background-color: #131215;
text-align: center;
padding-top: 14px;
border-bottom-right-radius: 10px;
`;

export const ContentHoverText = styled.a`
text-decoration: none;
color: white;
background-color: #131215;
text-align: center;
padding-top: 14px;
border-bottom-right-radius: 10px;

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

