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
import { buttonConstant } from "../../Constants/buttonConstants";
import { DivProjectCounter } from "./styles";
// import GoUp from "../../Components/GoUpAndDownButtons/GoUp";
import GoDown from "../../Components/GoUpAndDownButtons/GoDown";

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

  function clearChosenButton() {
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
      {/* <GoDown /> */}
      <ButtonRenderer
        propsName={"addGrid"}
        buttonData={buttonConstant}
        handleClickButton={changeSelectedKeyOfButton}
      />
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
        <DivProjectCounter>
          <p>
            According to your selections, {filteredProjectConstants.length}{" "}
            projects were found.
          </p>
          <ButtonRenderer
            propsName={"withoutGrid"}
            buttonData={projectButtonConstant}
            handleClickButton={clearChosenButton}
          />
        </DivProjectCounter>
      )}
      {/* </ScrollToBottom> */}
    </PageContainer>
  );
};

export default ProjectPage;
