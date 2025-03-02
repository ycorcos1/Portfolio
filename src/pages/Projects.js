import React, { useEffect } from "react";
import Project from "../components/Project";
import { ProjectList } from "../components/ProjectList";
import "../styles/Projects.css";
import { ClassProjectsList } from "../components/ClassProjectsList";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        <h3>Class Projects Source Codes</h3>
        {ClassProjectsList.map((classproject) => {
          return (
            <a href={classproject.sourcecode} target="_blank" rel="noreferrer">
              {classproject.name}
            </a>
          );
        })}
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
}

export default Projects;
