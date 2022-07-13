import styled from "styled-components"

export const ButtonContainer = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 1fr);

@media(min-width: 720px){
    grid-template-columns: repeat(6, 1fr);
}
`

export const TechnologyButton = styled.button`
color: white;
background-color: ${className =>( className == "selected") ? "#be3144" : "#45567d"};
border: 2px solid white;
border-radius: 10px;
margin: 5px;
padding: 10px;
&:hover {
    background-color: #be3144 ;
    cursor: pointer;
}
` 

