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
      <h2>Dictionary app</h2>
      <p>Languages used in this project:</p>
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
    </div>
  );
}
