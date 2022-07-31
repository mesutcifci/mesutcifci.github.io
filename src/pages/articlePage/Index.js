import React from "react";
import Card from "./Card";
import { articleConstant } from "../../Constants/articleConstant";
import {
  PageContainer,
  CardContainer,
} from "./style";
import {PageTitle} from "../../styles/globalStyles"


function ArticlePage({ selectedId }) {
  return (
    <PageContainer>
      <PageTitle>My Articles</PageTitle>
      <CardContainer>
        {articleConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </PageContainer>
  );
}
export default ArticlePage;
