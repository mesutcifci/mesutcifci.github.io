import styled from "styled-components";
import { fontSizes, colors, devices } from "../../styles/globalStyles";

export const Container = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: ${colors.textColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
