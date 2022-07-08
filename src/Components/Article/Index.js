import React from "react";
import { articleConstant } from "./articleConstant";
import {
  PageContainer,
  GridContainer,
  Img,
  Figcaption,
  LinkContainer,
  ProjectPreviewLink,
  ProjectCodeLink,
  ContentHoverText
  } from "../../styles/styles";

const ArticlePage = () => {
  return (
    <PageContainer>
      {articleConstant.map((object) => {
        return (
          <GridContainer>
            <Img src={object.imgLink} alt="" />
            <Figcaption>{object.title}</Figcaption>
            <LinkContainer>
              <ProjectPreviewLink href={object.mediumLink}>
                Medium
              </ProjectPreviewLink>
              <ContentHoverText title={object.explanation}>
                Content
              </ContentHoverText>
            </LinkContainer>
          </GridContainer>
        );
      })}
    </PageContainer>
  );
};

export default ArticlePage;
