import React, { useState, useEffect } from "react";
import HTMLIcon from ".//IconComponents/HTMLIcon";
import CSSIcon from ".//IconComponents/CSSIcon";
import JSIcon from ".//IconComponents/JSIcon";
import VSCodeIcon from ".//IconComponents/VSCodeIcon";
import APIIcon from ".//IconComponents/APIIcon.js";
import GitIcon from ".//IconComponents/GitIcon.js";
import HostingIcon from ".//IconComponents/HostingIcon.js";
import "./WorldClock.css";

const icons = [
  { component: <HTMLIcon />, name: "HTML" },
  { component: <CSSIcon />, name: "CSS" },
  { component: <JSIcon />, name: "JavaScript" },
  { component: <VSCodeIcon />, name: "VSCode" },
  { component: <APIIcon />, name: "API" },
  { component: <GitIcon />, name: "Git" },
  { component: <HostingIcon />, name: "Hosting" },
];

export default function WorldClock() {
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
        marginTop: "13px",
        gridTemplateColumns: showSecondColumn ? "50% 50%" : "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        >
          World Clock
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
            This project was dedicated to develop advanced web development
            skills via creating a world clock. This course helped me advance JS
            skills through building sophisticated interactions and features into
            the project. This world clock shows the default times for Los
            Angeles and Tokyo, whilst also allows the user to click on times for
            London, New York and the Maldives.
          </div>

          <div>
            <button className="git-button">
              <a
                href="https://github.com/rae8108/world-clock/blob/main/index.html"
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
                href="https://world-clock-rae.netlify.app/"
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
            marginTop: "10px",
            width: "100%",
          }}
        >
          <iframe
            src="https://world-clock-rae.netlify.app/"
            title="Embedded Website"
            width="800"
            height="500"
          ></iframe>
        </div>
      )}
    </div>
  );
}