import React from "react";
import { Container } from "./styles";


function PageNotFound() {
  return (
    <Container className="PageNotFound">
        <div className="title">404</div>
        <div className="description">Sorry! That page doesn't exist!</div>
    </Container>
  );
}

export default PageNotFound;
