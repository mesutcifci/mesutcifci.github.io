import styled from "styled-components"

export const ButtonContainer = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 1fr);

@media(min-width: 720px){
    grid-template-columns: repeat(6, 1fr);
}
`

