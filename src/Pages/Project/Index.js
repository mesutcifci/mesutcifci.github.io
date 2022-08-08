import React, { useEffect, useState } from "react";

import { projectConstant } from "../../Constants/projectConstant";
import { buttonConstant } from "../../Constants/buttonConstants";

import ButtonRenderer from "../../Components/ButtonRenderer";
import ProjectCard from "./ProjectCard";

import {
  Container,
  CardContainer,
  ButtonContainer,
  ResetFilterButton,
} from "./styles";

const Project = () => {
  const [selectedTechnologyNames, setSelectedTechnologyNames] = useState([]);
  const [filteredProjectConstants, setFilteredProjectConstants] = useState([]);
  const [buttonConstantsState, setButtonConstantsState] = useState([
    ...buttonConstant,
  ]);
  let SelectedTechnologies;

  useEffect(() => {
    changeSelectedTechnologyNamesState();
    filterProjects();
    countSelectedTechnologies();
  }, [buttonConstantsState]);

  // buttonConstants has selected key, and we change them true if they have the same target technology name.
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

  function changeSelectedTechnologyNamesState() {
    let temporary = [];
    buttonConstantsState.forEach((constant) => {
      constant.selected && temporary.push(constant.id);
    });
    setSelectedTechnologyNames([...temporary]);
  }

  function countSelectedTechnologies() {
    SelectedTechnologies = [];
    buttonConstantsState.forEach((constant) => {
      constant.selected && SelectedTechnologies.push(constant.id);
    });
    console.log("SelectedTechnologies Test: ", SelectedTechnologies);
  }

  //Clear chosen button and change color with the default color.
  function clearChosenButton() {
    let modifiedButtonConstants = [...buttonConstantsState];

    for (let button of buttonConstantsState) {
      let isSelected = button.selected;
      let technologyName = button.id;

      modifiedButtonConstants.forEach((constant) => {
        if (isSelected) {
          constant.id === technologyName && (constant.selected = !constant.selected);
        }
      });
      setButtonConstantsState(modifiedButtonConstants);
    }
    setFilteredProjectConstants([...projectConstant]);
  }

  function filterProjects() {
    let filteredProjects = [...projectConstant].filter((project) => {
      let isProjectIncludesAllSelectedTechnologies = true;

      for (let button of buttonConstantsState) {
        let isSelected = button.selected;
        let technologyName = button.id;

        if (isSelected) {
          !project.technologies.includes(technologyName) &&
            (isProjectIncludesAllSelectedTechnologies = false);
          continue;
        }
      }

      return isProjectIncludesAllSelectedTechnologies;
    });
    setFilteredProjectConstants([...filteredProjects]);
  }

  return (
    <Container>
      <h1 className="project-heading">My Projects</h1>

      <ButtonContainer>
        <ButtonRenderer
          buttonData={buttonConstant}
          handleClickButton={changeSelectedKeyOfButton}
        />

        <ResetFilterButton
          onClick={clearChosenButton}
          disabled={selectedTechnologyNames.length === 0 && true}
        >
          Reset Filter
        </ResetFilterButton>
      </ButtonContainer>

      <CardContainer>
        {filteredProjectConstants.map((object) => (
          <ProjectCard key={object.title} {...object} />
        ))}
      </CardContainer>

      {filteredProjectConstants.length === 0 && (
        <p className="notice-message">
          According to your selections, {filteredProjectConstants.length}
          projects were found.
        </p>
      )}
    </Container>
  );
};
export default Project;
