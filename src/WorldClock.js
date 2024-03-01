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
          <div className="worldclock-para">
            This project was dedicated effort aimed at cultivating and enhancing
            my web development skills via creating a world clock. Throughout
            this project, I honed my JavaScript skills through building
            sophisticated interactions and features into the project. The world
            clock not only displays default times for locations such as Los
            Angeles and Tokyo but also provides users with the ability to click
            on additional time zones, including London, New York, and the
            Maldives.
          </div>

          <div>
            <button className="world-git-button">
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
            <button className="world-web-button">
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
            marginBottom: "20px",
          }}
        >
          <iframe
            src="https://world-clock-rae.netlify.app/"
            title="Embedded Website"
            width="700"
            height="550"
          ></iframe>
        </div>
      )}
    </div>
  );
}
