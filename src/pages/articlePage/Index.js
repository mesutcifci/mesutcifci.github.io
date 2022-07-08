import React from "react";
import { articleConstant } from "./articleConstant";
import {
  PageContainer,
  GridContainer,
  Img,
  Title,
  LinkContainer,
  PreviewAndMediumLink,
  ContentHoverText,
  Card,
} from "../../styles/styles";

const ArticlePage = () => {
  return (
    <PageContainer>
      <GridContainer>
        {articleConstant.map((object) => {
          return (
            <Card key={object.title}>
              <Img src={object.imgLink} alt="" />
              <Title>{object.title}</Title>
              <LinkContainer>
                <PreviewAndMediumLink href={object.mediumLink} target="_blank">
                  Medium
                </PreviewAndMediumLink>
                <ContentHoverText title={object.explanation}>
                  Content
                </ContentHoverText>
              </LinkContainer>
            </Card>
          );
        })}
      </GridContainer>
    </PageContainer>
  );
};

export default ArticlePage;
