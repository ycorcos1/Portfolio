import React from "react";
import Project from "../components/Project";
import { ProjectList } from "../components/ProjectList";
import "../styles/Projects.css";
import { ClassProjectsList } from "../components/ClassProjectsList";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <Project
              key={project.slug}
              id={project.slug}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
      <div className="classprojects">
        <h3>Class Projects Sources</h3>
        {ClassProjectsList.map((classproject) => {
          return (
            <a href={classproject.sourcecode} target="_blank" rel="noreferrer">
              {classproject.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
