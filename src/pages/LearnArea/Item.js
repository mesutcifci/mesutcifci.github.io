import React from "react";
import {
  DetailCloseContainer,
  DetailCloseLink,
  OpenedCardContentContainer,
  OpenedCardContent,
  OpenedCardImageContainer,
  OpenedTitleContainer,
  ContentContainer,
  DetailOfArticle,
  OpenedCardTitle
} from "./style";

//<CloseIcon
//  fill={"white"}
//  xmlns="http://www.w3.org/2000/svg"
//  viewBox="0 0 320 512"
//>
//  <Link to="/learn-page">
//    <path
//      id={`${id}`}
//      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
//    />
//  </Link>
// </CloseIcon>

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
        <DetailCloseLink to="/learn-page" />
      </DetailCloseContainer>

      <  OpenedCardContentContainer>
        <OpenedCardContent layoutId={`card-container-${id}`}>
          <OpenedCardImageContainer layoutId={`card-image-container-${id}`}>
            <img className="card-image" src={imgSrc} alt="" />
          </OpenedCardImageContainer>

          <OpenedTitleContainer layoutId={`title-container-${id}`}>
            <OpenedCardTitle>{title}</OpenedCardTitle>
          </OpenedTitleContainer>

          <ContentContainer animate>
            <DetailOfArticle>{explanation}</DetailOfArticle>
          </ContentContainer>
        </OpenedCardContent>
      </  OpenedCardContentContainer>
    </>
  );
}
