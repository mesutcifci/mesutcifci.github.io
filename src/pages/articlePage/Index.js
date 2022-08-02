import React from "react";
import Card from "./Card";
import { articleConstant } from "../../Constants/articleConstant";
import { PageContainer, CardContainer } from "./style";
import { PageTitle } from "../../styles/globalStyles";
import Scroll from "../../Components/Scroll/index";

function ArticlePage({ selectedId }) {
  return (
    <PageContainer>
      <Scroll scrollPoint={65} visibleLength={500} direction={"up"} />
      <Scroll scrollPoint={99999} visibleLength={65} direction={"down"} />
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
