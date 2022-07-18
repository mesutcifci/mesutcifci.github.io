import React, { useState } from "react";
import { articleConstant } from "../../Constants/articleConstant";
import {
  PageContainer,
  GridContainer,
  Title,
  LinkContainer,
  PreviewAndMediumLink,
  ContentHoverText,
  Card,
  Img,
} from "../../styles/styles";
import Details from "./ArticlesDetail";
// import { AnimatePresence, layout } from "framer-motion";
import { Close, IconAngImg } from "./styles";

const ArticlePage = () => {
  const modifiedArticle = [...articleConstant];
  const [articleConstantState, setArticleConstantState] = useState([
    ...articleConstant,
  ]);

  const isSelectedTrue = (event) => {
    console.log("event: ", event.target);

    modifiedArticle.forEach((articleKnowledge) => {
      if (articleKnowledge.id == event.target.id) {
        articleKnowledge.selected = !articleKnowledge.selected;
      }
      setArticleConstantState(modifiedArticle);
    });
  };


  return (
    <PageContainer>
      <GridContainer layout>
        {articleConstant.map((article) => {
          return (
            <Card layout key={article.title}>
              <Img src={article.imgLink} alt="" />
              <Title>{article.title}</Title>
              {!article.selected && (
                <LinkContainer>
                  <PreviewAndMediumLink
                    href={article.mediumLink}
                    target="_blank"
                  >
                    Go to Medium
                  </PreviewAndMediumLink>
                  <ContentHoverText onClick={isSelectedTrue} id={article.id}>
                    Detail
                  </ContentHoverText>
                </LinkContainer>
              )}
              {article.selected && (
                <Details
                  handleClickButton={isSelectedTrue}
                  articleID={article.id}
                />
              )}
            </Card>
          );
        })}
      </GridContainer>
    </PageContainer>
  );
};

export default ArticlePage;
