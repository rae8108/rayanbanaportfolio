import React, { useState, useEffect } from "react";
import HTMLIcon from ".//IconComponents/HTMLIcon";
import CSSIcon from ".//IconComponents/CSSIcon";
import VSCodeIcon from ".//IconComponents/VSCodeIcon";
import FlexBoxIcon from ".//IconComponents/FlexBoxIcon";
import ResponsiveIcon from ".//IconComponents/ResponsiveIcon";
import SEOIcon from ".//IconComponents/SEOIcon";
import GitIcon from ".//IconComponents/GitIcon.js";
import HostingIcon from ".//IconComponents/HostingIcon.js";
import "./Sanchez.css";

const icons = [
  { component: <HTMLIcon />, name: "HTML" },
  { component: <CSSIcon />, name: "CSS" },
  { component: <VSCodeIcon />, name: "VSCode" },
  { component: <FlexBoxIcon />, name: "Flexbox" },
  { component: <ResponsiveIcon />, name: "Responsive" },
  { component: <SEOIcon />, name: "SEO" },
  { component: <GitIcon />, name: "Git" },
  { component: <HostingIcon />, name: "Hosting" },
];

export default function Sanchez() {
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
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        >
          Stephen Sanchez
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
          <div className="sanchez-para">
            This project was dedicated to build up more advance knowledge of
            responsive development via building a multiple pages website. This
            project showcased an artist, Stephen Sanchez, and his music. This
            project taught me to embed Spotify and use more advanced CSS
            techniques.
          </div>

          <div>
            <button className="sanchez-git-button">
              <a
                href="https://github.com/rae8108/sanchez-responsive"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div>
            <button className="sanchez-web-button">
              <a
                href="https://sanchez-responsive.netlify.app/"
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
            src="https://sanchez-responsive.netlify.app/"
            title="Embedded Website"
            width="700"
            height="500"
          ></iframe>
        </div>
      )}
    </div>
  );
}
