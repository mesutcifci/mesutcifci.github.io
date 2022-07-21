import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { projectConstant } from "../../Constants/projectConstant";
import { projectButtonConstant } from "../../Constants/projectClearChosenButton";
import {
  PageContainer,
  GridContainer,
  Img,
  Title,
  LinkContainer,
  PreviewAndMediumLink,
  ProjectCodeLink,
  Card,
} from "../../styles/styles";
import ButtonRenderer from "../../Components/ButtonRenderer/Index";
import NoticeMessage from "./NoticeMessage" 
import { buttonConstant } from "../../Constants/buttonConstants";
import { ButtonContainer } from "./styles";

const ProjectPage = () => {
  const projects = [...projectConstant];
  const [selectedTechnologyNames, setSelectedTechnologyNames] = useState([]);
  const [filteredProjectConstants, setFilteredProjectConstants] = useState([]);
  const [buttonConstantsState, setButtonConstantsState] =
    useState(buttonConstant);

  useEffect(() => {
    changeSelectedTechnologyNamesState();
  }, [buttonConstantsState]);

  useEffect(() => {
    filterProjects();
  }, [selectedTechnologyNames]);

  //buttonConstants has selected key, and we change them true if they have the same target technology name.
  function changeSelectedKeyOfButton(event) {
    let technologyName = event.target.id;
    let modifiedButtonConstants = [...buttonConstantsState];
    modifiedButtonConstants.forEach((constant) => {
      if (constant.id === technologyName) {
        constant.selected = !constant.selected;
      }
    });
    setButtonConstantsState(modifiedButtonConstants);
  }

  /**
   *  @return {[string]} ["js", "react", "css"]
   */
  function changeSelectedTechnologyNamesState() {
    let temporary = [];
    buttonConstantsState.forEach((constant) => {
      constant.selected && temporary.push(constant.id);
    });
    setSelectedTechnologyNames([...temporary]);
  }

  //Clear chosen button and change color with the default color.
  function clearChosenButton() {
    let modifiedButtonConstants = [...buttonConstantsState];

    for (let button of selectedTechnologyNames) {
      modifiedButtonConstants.forEach((constant) => {
        if (constant.id === button) {
          constant.selected = !constant.selected;
        }
      });
      setButtonConstantsState(modifiedButtonConstants);
    }
    setFilteredProjectConstants([...projects]);
  }

  function filterProjects() {
    let filteredProjects = projects.filter((project) => {
      let isProjectIncludesAllSelectedTechnologies = true;

      for (let technology of selectedTechnologyNames) {
        if (!project.technologies.includes(technology)) {
          isProjectIncludesAllSelectedTechnologies = false;
          break;
        }
      }

      return isProjectIncludesAllSelectedTechnologies;
    });

    setFilteredProjectConstants([...filteredProjects]);
  }

  return (
    <PageContainer>
      <ButtonContainer>
        <ButtonRenderer
          propsName={"addGrid"}
          buttonData={buttonConstant}
          handleClickButton={changeSelectedKeyOfButton}
        />
        <ButtonRenderer
          disabled={selectedTechnologyNames.length === 0 && true}
          propsName={"withoutGrid"}
          buttonData={projectButtonConstant}
          handleClickButton={clearChosenButton}
        />
      </ButtonContainer>

      {/* <ScrollToBottom > */}
      <GridContainer>
        {filteredProjectConstants.map((object) => {
          return (
            <Card key={object.title}>
              <Img src={object.imgSrc} alt={object.title} />
              <Title id={object.title}>{object.title}</Title>
              <LinkContainer>
                <PreviewAndMediumLink href={object.previewLink} target="_blank">
                  Preview
                </PreviewAndMediumLink>
                <ProjectCodeLink href={object.codeLink} target="_blank">
                  Code
                </ProjectCodeLink>
              </LinkContainer>
            </Card>
          );
        })}
      </GridContainer>
      {filteredProjectConstants.length === 0 && (
        <NoticeMessage filteredProject = {filteredProjectConstants}/>
        
      )}
      {/* </ScrollToBottom> */}
    </PageContainer>
  );
};

export default ProjectPage;
