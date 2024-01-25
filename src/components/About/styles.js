import styled from "styled-components";
import { colors, devices } from "../../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${devices.tablet}) {
    margin-top: 100px;
  }
`;
export const Wrapper = styled.div`
  .about-img {
    display: none;
    border-radius: 60%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 40px;
    border: 3px solid ${colors.borderColor};

    @media (${devices.tablet}) {
      display: initial;
    }
  }

  @media (${devices.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutMe = styled.div`
  color: ${colors.textColor};
  line-height: 30px;
  margin-top: 100px;
  margin-bottom: 0;
  text-align: center;

  @media (${devices.tablet}) {
    margin-top: 0;
    max-width: 600px;
    text-align: left;
  }

  a {
    color: ${colors.secondary};
    font-weight: 600;
  }

  a:hover {
    color: ${colors.textColor};
  }
`;
