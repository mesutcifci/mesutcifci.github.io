import styled from "styled-components";

export const Div = styled.div`
  width: 280px;
  background-color: #45567d;
  color: white;
  padding: 15px;
  box-sizing: border-box;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  padding-top: 30px;

`;

export const Close = styled.i`
  color: black;
  margin: 5px;
  position: absolute;
  width: 30px;
  height: 30px;
  display:flex;
  justify-content: center;
  box-sizing: border-box;
  :hover{
    cursor: pointer;
  }
`;

export const DetailsAndCloseIcon = styled.div`
  display:flex;
  justify-content: right;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  :hover{
    cursor: pointer;
  }
`;