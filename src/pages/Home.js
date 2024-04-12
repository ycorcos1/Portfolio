import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h2>Yahav Corcos</h2>
        <div className="abstract">
          <p>Software Developer and Cloud Practitioner</p>
        </div>
        <Link to="/contact">
          <button className="button">Contact Me {">"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
