import React from "react";

import CSSIcon from ".//IconComponents/CSSIcon";
import JSIcon from ".//IconComponents/JSIcon";
import VSCodeIcon from ".//IconComponents/VSCodeIcon";
import APIIcon from ".//IconComponents/APIIcon.js";
import GitIcon from ".//IconComponents/GitIcon.js";
import BootstrapIcon from ".//IconComponents/BootstrapIcon.js";
import HostingIcon from ".//IconComponents/HostingIcon.js";
import ReactIcon from ".//IconComponents/ReactIcon.js";
import "./Dictionary.css";

const icons = [
  { component: <CSSIcon />, name: "CSS" },
  { component: <JSIcon />, name: "JavaScript" },
  { component: <VSCodeIcon />, name: "VSCode" },
  { component: <APIIcon />, name: "API" },
  { component: <GitIcon />, name: "Git" },
  { component: <BootstrapIcon />, name: "Bootstrap" },
  { component: <HostingIcon />, name: "Hosting" },
  { component: <ReactIcon />, name: "React" },
];

export default function Dictionary() {
  return (
    <div>
      <h2
        style={{
          marginBottom: "5px",
        }}
      >
        Dictionary app
      </h2>
      <p
        style={{
          marginLeft: "20px",
        }}
      >
        Languages used in this project:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          fontsize: "12px",
        }}
      >
        {icons.map((icon, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            {icon.component}
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="content">
          <p className="dictionary-para">
            This project was dedicated to developing Advanced React Development
            Skills. The task was to build a dictionary app using two APIs, that
            would allow the user to receive information based on their search.
            This project allowed for a more advanced knowledge of React and
            built up my confidence to create a more seamless project.
          </p>
        </div>
        <div className="button-container">
          <button className="icon-button">
            <a
              href="https://github.com/rae8108/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </button>
          <button className="icon-button">
            <a
              href="https://dictionary-project-sun.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
