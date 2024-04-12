import React from "react";
import "../styles/Footer.css";
import { GitHub, Instagram } from "@mui/icons-material";

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
          href="http://instagram.com/ycorcos26"
          target="_blank"
        >
          <Instagram />
        </a>
      </div>
      <p> &copy; 2023 yahavcorcos.com</p>
    </div>
  );
}

export default Footer;
