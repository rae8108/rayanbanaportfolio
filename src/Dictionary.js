import React, { useState, useEffect } from "react";
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
  const [showSecondColumn, setShowSecondColumn] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setShowSecondColumn(false);
      } else {
        setShowSecondColumn(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: showSecondColumn ? "50% 50%" : "100%",
        backgroundColor: "#FAD7CE",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        >
          Dictionary App
        </h2>
        <p className="language-para">Languages used in this project:</p>
        <div id="iconContainer">
          {icons.map((icon, index) => (
            <div key={index} class="icon">
              {icon.component}
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
        <div className="grid-container">
          <div className="dictionary-para">
            This project was a dedicated to develop and enhance my proficiency
            in advanced React development skills. The primary objective involved
            crafting a dynamic dictionary application utilizing two distinct
            APIs. This innovative application empowers users to retrieve
            comprehensive information tailored to their search queries. Through
            the intricate development process, I deepened my understanding of
            React, fostering confidence in executing seamless project
            executions.
          </div>

          <div>
            <button className="git-button">
              <a
                href="https://github.com/rae8108/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div>
            <button className="web-button">
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
      {showSecondColumn && (
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <iframe
            src="https://dictionary-project-sun.netlify.app/"
            title="Embedded Website"
            width="700"
            height="500"
          ></iframe>
        </div>
      )}
    </div>
  );
}
