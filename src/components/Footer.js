import React from "react";
import "../styles/Footer.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
        <a
          rel="noopener noreferrer"
          href="http://github.com/ycorcos1"
          target="_blank"
        >
          <GitHub />
        </a>
        <a
          rel="noopener noreferrer"
          href="http://linkedin.com/in/yahav-corcos"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </div>
      <p> &copy; 2023 yahavcorcos.com</p>
      <p>
        Designed by <b>Yahav Corcos.</b>
      </p>
    </div>
  );
}

export default Footer;
