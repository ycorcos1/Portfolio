import React from "react";

function IDE({ name, image, years }) {
  return (
    <li className="ide">
      {name}
      <img src={image} alt={name} />
      {years}
    </li>
  );
}

export default IDE;
