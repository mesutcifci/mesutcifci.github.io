import React from "react";
import Card from "./Card";
import { articleConstant } from "../../constants/articleConstant";
import { Container, CardContainer } from "./style";

function Article({ selectedId }) {
  return (
    <Container>
      <h1 className="article-heading">My Articles</h1>
      <CardContainer>
        {articleConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </Container>
  );
}
export default Article;
