import React from "react";

function Language({ name, image, years }) {
  return (
    <li className="language">
      {name}
      <img src={image} alt={name} />
      {years}
    </li>
  );
}

export default Language;
