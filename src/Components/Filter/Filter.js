import { projectConstant } from "../../pages/projectPage/projectConstant";
import React, { useState } from "react";
import ProjectPage from "../../pages/projectPage/Index";

const Filter = ({technologyName}) => {
  const [technologies, setTechnologies] = useState([""]);
  console.log("test2")

  let filteredProjectConstant = projectConstant.map((project) => {
    if (project.technologies.includes(technologyName)) {
      setTechnologies((previous) => [ ...previous, project ]);
      console.log("filteredProjectConstant: ", filteredProjectConstant)
    }
  });

  return <ProjectPage props = {filteredProjectConstant}/>;
};

export default Filter;
