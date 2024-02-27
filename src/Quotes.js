import React, { useState, useEffect } from "react";
import HTMLIcon from ".//IconComponents/HTMLIcon";
import CSSIcon from ".//IconComponents/CSSIcon";
import JSIcon from ".//IconComponents/JSIcon";
import VSCodeIcon from ".//IconComponents/VSCodeIcon";
import GitIcon from ".//IconComponents/GitIcon.js";
import APIIcon from ".//IconComponents/APIIcon.js";
import AIIcon from "./IconComponents/AIIcon";
import HostingIcon from ".//IconComponents/HostingIcon.js";
import "./Quotes.css";

const icons = [
  { component: <HTMLIcon />, name: "HTML" },
  { component: <CSSIcon />, name: "CSS" },
  { component: <JSIcon />, name: "JavaScript" },
  { component: <VSCodeIcon />, name: "VSCode" },
  { component: <GitIcon />, name: "Git" },
  { component: <APIIcon />, name: "API" },
  { component: <AIIcon />, name: "AI" },
  { component: <HostingIcon />, name: "Hosting" },
];

export default function Quotes() {
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
      id="sanchez-section"
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
          AI Quotes Generator
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
          <div className="ai-para">
            This project was the first web application built using artificial
            intelligence. Our primary focus encompassed learning to craft
            prompts and provide instructions to AI tools, how to integrate an
            API into the code, how to build interactive text generator with AI
            and how to integrate CSS in JavaScript. I chose to build a positive
            quotes generator that would allow the user to write a word and the
            AI would give the user a positive quote.
          </div>

          <div>
            <button className="ai-git-button">
              <a
                href="https://github.com/rae8108/positive-quotes-generator"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div>
            <button className="ai-web-button">
              <a
                href="https://positive-quotes-generator.netlify.app/"
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
            src="https://positive-quotes-generator.netlify.app/"
            title="Embedded Website"
            width="700"
            height="500"
          ></iframe>
        </div>
      )}
    </div>
  );
}
