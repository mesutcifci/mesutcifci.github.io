import React from "react";
import { projectConstant } from "./projectConstant";
import {
  PageContainer,
  GridContainer,
  Img,
  Title,
  LinkContainer,
  PreviewAndMediumLink,
  ProjectCodeLink,
  Card
} from "../../styles/styles";
import SearchInput from "../../components/SearchInput/index"
import Button from "../../components/Button/index"

const ProjectPage = (filteredProjectConstant) => {

  return (  
    <PageContainer>
      <SearchInput/>
      <Button/>

      <GridContainer>
        {projectConstant.map((object) => {
          return (
            <Card key={object.title}>
              <Img src={object.imgSrc} alt={object.title} />
              <Title id="projectTitle">{object.title}</Title>
              <LinkContainer>
                <PreviewAndMediumLink href={object.previewLink} target="_blank">
                  Preview
                </PreviewAndMediumLink>
                <ProjectCodeLink href={object.codeLink} target="_blank">Code</ProjectCodeLink>
              </LinkContainer>
            </Card>
          );
        })}
      </GridContainer>
    </PageContainer>
  );
};

export default ProjectPage;
