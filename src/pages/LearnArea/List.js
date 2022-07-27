import React from "react";
import { articleConstant } from "../../Constants/articleConstant";
import {
  PageContainer,
  CardContainer,
  CardItem,
  CardContentContainer,
  CardContent,
  CardImageContainer,
  TitleContainer,
  Title,
  LinkContainer,
  MediumLinkOption,
  ContentDetailOption,
  CardOpenLink,
} from "./style";

function Card({ id, title, imgLink, mediumLink }) {
  return (
    <CardItem>
      <CardContentContainer>
        <CardContent layoutId={`card-container-${id}`}>
          <CardImageContainer layoutId={`card-image-container-${id}`}>
            <img className="card-image" src={`${imgLink}`} alt="" />
          </CardImageContainer>

          <TitleContainer layoutId={`title-container-${id}`}>
            <Title>{title}</Title>
          </TitleContainer>

          <LinkContainer>
            <MediumLinkOption href={mediumLink} target="_blank">
              Go to Medium
            </MediumLinkOption>

            <ContentDetailOption id={id}>
              <CardOpenLink to={`/learn-page/${id}`}>
                Detail
              </CardOpenLink>
            </ContentDetailOption>
          </LinkContainer>
        </CardContent>
      </CardContentContainer>
    </CardItem>
  );
}

export function List({ selectedId }) {
  return (
    <PageContainer>
      <CardContainer>
        {articleConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </PageContainer>
  );
}

//  isSelected={card.id === { selectedId }.selectedId}
