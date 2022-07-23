import React, { useEffect, useState } from "react";
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
import { AnimatePresence } from "framer-motion";

const ArticlePage = () => {
  const modifiedArticle = [...articleConstant];
  const [articleConstantState, setArticleConstantState] = useState([
    ...articleConstant,
  ]);

  const updateSelected = (event) => {
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
            <Card  key={article.title} 
            
            props = {article.selected}>
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
                  <ContentHoverText onClick={updateSelected} id={article.id}>
                    Detail
                  </ContentHoverText>
                </LinkContainer>
              )}
              <AnimatePresence>

              {article.selected && (
                <Details
                  handleClickButton={updateSelected}
                  articleID={article.id}
                />
              )}
              </AnimatePresence>

            </Card>
          );
        })}

      </GridContainer>
    </PageContainer>
  );
};

export default ArticlePage;
