import React from "react";
import {
  DetailCloseContainer,
  DetailCloseLink,
  ArticleImg,
  OpenedCardContentContainer,
  OpenedCardContent,
  OpenedCardImageContainer,
  OpenedTitleContainer,
  ContentContainer,
  DetailOfArticle,
  OpenedCardTitle,
} from "./style";

export function Item({ title, id, imgSrc, explanation }) {
  return (
    <>
      <DetailCloseContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
      >
        <DetailCloseLink to="/article-page" />
      </DetailCloseContainer>

      <OpenedCardContentContainer>
        <OpenedCardContent layoutId={`card-container-${id}`}>
          <OpenedCardImageContainer layoutId={`card-image-container-${id}`}>
            <ArticleImg src={imgSrc} alt="" />
          </OpenedCardImageContainer>

          <OpenedTitleContainer layoutId={`title-container-${id}`}>
            <OpenedCardTitle>{title}</OpenedCardTitle>
          </OpenedTitleContainer>

          <ContentContainer animate>
            <DetailOfArticle>
              Topics of this article:
              <br /> {explanation}
            </DetailOfArticle>
          </ContentContainer>
        </OpenedCardContent>
      </OpenedCardContentContainer>
    </>
  );
}
