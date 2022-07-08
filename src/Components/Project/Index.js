import React from "react";
import { projectConstant } from "./projectConstant";
import {
  PageContainer,
  GridContainer,
  Img,
  Figcaption,
  LinkContainer,
  ProjectPreviewLink,
  ProjectCodeLink,
} from "../../styles/styles";

const ProjectPage = () => {
  return (
    <PageContainer>
      {projectConstant.map((object) => {
        return (
          <GridContainer key={object.title}>
            <Img src={object.imgSrc} alt={object.title} />
            <Figcaption id="projectTitle">
              {object.title}
            </Figcaption>
            <LinkContainer>
              <ProjectPreviewLink href={object.previewLink}>
                Preview
              </ProjectPreviewLink>
              <ProjectCodeLink href={object.codeLink}>Code</ProjectCodeLink>
            </LinkContainer>
          </GridContainer>
        );
      })}
    </PageContainer>
  );
};

export default ProjectPage;
