import React from "react";
import { useNavigate } from "react-router-dom";

function Project({ id, name, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="project"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}
export default Project;
