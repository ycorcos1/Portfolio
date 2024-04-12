import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../components/ProjectList";
import "../styles/DisplayProject.css";

function DisplayProject() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="displayproject">
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <a href={project.sourcecode} target="_blank" rel="noreferrer">
        Source Code
      </a>
      {project.website !== "" ? (
        <a href={project.website} target="_blank" rel="noreferrer">
          Check It Out!
        </a>
      ) : undefined}
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <p>{project.description}</p>
    </div>
  );
}

export default DisplayProject;
