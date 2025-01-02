import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../components/ProjectList";
import "../styles/DisplayProject.css";

function DisplayProject() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { slug } = useParams();
  const navigate = useNavigate();
  const project = ProjectList.find((p) => p.slug === slug);

  const handleBackToProjects = () => {
    navigate("/projects");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="displayproject">
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <a href={project.sourcecode} target="_blank" rel="noreferrer">
        Click To View Source Code
      </a>
      {project.website && (
        <a href={project.website} target="_blank" rel="noreferrer">
          Click To Check It Out!
        </a>
      )}
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <p>{project.description}</p>
      {project.sourcecode2 && (
        <a href={project.sourcecode2} target="_blank" rel="noreferrer">
          {project.sourcecode2_name}
        </a>
      )}
      <button
        onClick={handleBackToProjects} // Call the function to navigate and scroll
        className="back-to-projects-button"
      >
        Back to Projects
      </button>
    </div>
  );
}

export default DisplayProject;
