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
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [buttonsData, setButtonsData] = useState(buttonConstant);
  let selectedTechnologies;

  useEffect(() => {
    filterProjects();
    countSelectedTechnologies();
  }, [buttonsData]);

  // buttonConstants has selected key, and we change them true if they have target technology's name.
  function changeSelectedKeyOfButton(event) {
    let technologyName = event.target.id;
    let copyButtonData = [...buttonsData];
    copyButtonData.forEach((constant) => {
      if (constant.id === technologyName) {
        constant.selected = !constant.selected;
      } else {
        constant.selected = false;
      }
    });
    setButtonsData(copyButtonData);
  }

  function countSelectedTechnologies() {
    selectedTechnologies = [];
    buttonsData.forEach((constant) => {
      constant.selected && selectedTechnologies.push(constant.id);
    });

    return selectedTechnologies.length === 0;
  }

  //Clear chosen button and change color with the default color.
  function clearChosenButton() {
    let modifiedButtonConstants = [...buttonsData];

    modifiedButtonConstants.forEach((item) => (item.selected = false));

    setButtonsData(modifiedButtonConstants);
  }

  function filterProjects() {
    const selectedTech = buttonsData.find((data) => data.selected === true);

    if (selectedTech) {
      let filteredProjects = projectConstant.filter(
        (project) => project.technology === selectedTech.id
      );
      setFilteredProjects([...filteredProjects]);
    } else {
      setFilteredProjects(projectConstant);
    }
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
        {filteredProjects.map((object) => (
          <ProjectCard key={object.title} {...object} />
        ))}
      </CardContainer>

      {filteredProjects.length === 0 && (
        <p className="notice-message">
          {`According to your selections, ${filteredProjects.length}
          projects were found.`}
        </p>
      )}
    </Container>
  );
};
export default Project;
