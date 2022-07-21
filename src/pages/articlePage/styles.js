import styled from "styled-components";

export const DetailOfArticle = styled.div`
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
export const DetailsAndCloseIcon = styled.div`
  display: flex;
  justify-content: right;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CloseIcon = styled.svg`
  color: black;
  margin: 5px;
  position: absolute;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 9;
  :hover {
    cursor: pointer;
    fill: rgb(45, 38, 38);
  }
`;
