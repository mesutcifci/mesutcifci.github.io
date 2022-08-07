import React from "react";
import { Link } from "react-router-dom";

import {
  DetailCloseContainer,
  OpenedCardContainer,
  OpenedCardContent,
  OpenedCardImageContainer,
  OpenedTitleContainer,
  Content,
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
        <Link className="detail-close-link" to="/article-page" />
      </DetailCloseContainer>

      <OpenedCardContainer>
        <OpenedCardContent layoutId={`card-container-${id}`}>
          <OpenedCardImageContainer layoutId={`card-image-container-${id}`}>
            <img className="card-img" src={imgSrc} alt="" />
          </OpenedCardImageContainer>

          <OpenedTitleContainer layoutId={`title-container-${id}`}>
            <h2 className="opened-card-title">{title}</h2>
          </OpenedTitleContainer>

          <Content animate>
            <p className="opened-card-description">
              Topics of this article:
              <span>{explanation}</span>
            </p>
          </Content>
        </OpenedCardContent>
      </OpenedCardContainer>
    </>
  );
}
