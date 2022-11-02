import React, { useEffect, useState } from "react";

import { projectConstant } from "../../constants/projectConstant";
import { buttonConstant } from "../../constants/buttonConstants";

import ButtonRenderer from "../../components/ButtonRenderer";
import ProjectCard from "./ProjectCard";

import {
  Container,
  CardContainer,
  ButtonContainer,
  ResetFilterButton,
} from "./styles";

const Project = () => {
  const [filteredProjectConstants, setFilteredProjectConstants] = useState([]);
  const [buttonConstantsState, setButtonConstantsState] = useState([
    ...buttonConstant,
  ]);
  let selectedTechnologies;

  useEffect(() => {
    filterProjects();
    countSelectedTechnologies();
  }, [buttonConstantsState]);

  // buttonConstants has selected key, and we change them true if they have target technology's name.
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

  function querySelectedKeys() {
    let technologies = [];
    for (let button of buttonConstantsState) {
      let isSelected = button.selected;

      if (isSelected) {
        let technologyName = button.id;
        technologies.push(technologyName);
      }
    }

    return technologies;
  }

  function countSelectedTechnologies() {
    selectedTechnologies = [];
    buttonConstantsState.forEach((constant) => {
      constant.selected && selectedTechnologies.push(constant.id);
    });

    return selectedTechnologies.length === 0 ? true : false;
  }

  //Clear chosen button and change color with the default color.
  function clearChosenButton() {
    let modifiedButtonConstants = [...buttonConstantsState];
    let queriedTechnologies = querySelectedKeys();

    for (let technology of queriedTechnologies) {
      modifiedButtonConstants.forEach((constant) => {
        if (constant.id === technology) {
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
      let queriedTechnologies = querySelectedKeys();

      for (let technology of queriedTechnologies) {
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
      <h1 className="project-heading">My Projects</h1>

      <ButtonContainer>
        <ButtonRenderer
          buttonData={buttonConstant}
          handleClickButton={changeSelectedKeyOfButton}
        />

        <ResetFilterButton
          onClick={clearChosenButton}
          disabled={countSelectedTechnologies()}
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
          {`According to your selections, ${filteredProjectConstants.length}
          projects were found.`}
        </p>
      )}
    </Container>
  );
};
export default Project;
