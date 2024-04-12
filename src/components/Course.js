import React from "react";
import "../styles/Course.css";

function Course({ name, image, topics, sourcecode }) {
  return (
    <div className="course">
      <div>
        <h5>Key Topics:</h5>
        <p>{topics}</p>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <span>COURSE</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Course;
