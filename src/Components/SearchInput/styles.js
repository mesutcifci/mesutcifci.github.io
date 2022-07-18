import styled from "styled-components";

export const searchContainer = styled.div`
display: flex;
justify-content: center;
`
export const Input = styled.input`
margin: 0 6px 20px 0;
width: 290px;
height: 40px;
padding: 4px;
color: #303841;
border: 3px solid white;
border-radius: 10px;
box-sizing: border-box;
background: url(./img/search-icon.png) no-repeat left;
background-size: 20px;
background-color: white;


`
export const Button = styled.button`
margin: -1px 0 20px 0;
border: 2px solid white;
border-radius: 10px;
background-color: white;
color: #303841;
padding: 10px;

&:hover {
    background-color: #45567d;
    color: white;
    cursor: pointer;
}
`

