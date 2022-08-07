import React, { useEffect, useState } from "react";

import { projectConstant } from "../../Constants/projectConstant";
import { projectButtonConstant } from "../../Constants/projectClearChosenButton";
import { buttonConstant } from "../../Constants/buttonConstants";

import Scroll from "../../Components/Scroll/index";
import ButtonRenderer from "../../Components/ButtonRenderer/Index";
import NoticeMessage from "./NoticeMessage";
import ProjectCard from "./ProjectCard";

import { Container, CardContainer, ButtonContainer } from "./styles";

const Project = () => {
  const [selectedTechnologyNames, setSelectedTechnologyNames] = useState([]);
  const [filteredProjectConstants, setFilteredProjectConstants] = useState([]);
  const [buttonConstantsState, setButtonConstantsState] = useState([
    ...buttonConstant,
  ]);

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
    setFilteredProjectConstants([...projectConstant]);
  }

  function filterProjects() {
    let filteredProjects = [...projectConstant].filter((project) => {
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
    <Container>
      <Scroll scrollPoint={66} visibleLength={500} direction={"up"} />
      <Scroll scrollPoint={99999} visibleLength={65} direction={"down"} />

      <h1 className="project-heading">My Projects</h1>

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

      <CardContainer>
        {filteredProjectConstants.map((object) => (
          <ProjectCard key={object.title} {...object} />
        ))}
      </CardContainer>

      {filteredProjectConstants.length === 0 && (
        <NoticeMessage filteredProject={filteredProjectConstants} />
      )}
    </Container>
  );
};
export default Project;
