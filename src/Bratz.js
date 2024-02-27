import React, { useState, useEffect } from "react";
import HTMLIcon from ".//IconComponents/HTMLIcon";
import CSSIcon from ".//IconComponents/CSSIcon";
import VSCodeIcon from ".//IconComponents/VSCodeIcon";
import GitIcon from ".//IconComponents/GitIcon.js";
import BootstrapIcon from ".//IconComponents/BootstrapIcon.js";
import ResponsiveIcon from ".//IconComponents/ResponsiveIcon";
import SEOIcon from ".//IconComponents/SEOIcon";
import HostingIcon from ".//IconComponents/HostingIcon.js";
import "./Bratz.css";

const icons = [
  { component: <HTMLIcon />, name: "HTML" },
  { component: <CSSIcon />, name: "CSS" },
  { component: <VSCodeIcon />, name: "VSCode" },
  { component: <GitIcon />, name: "Git" },
  { component: <BootstrapIcon />, name: "Bootstrap" },
  { component: <ResponsiveIcon />, name: "Responsive" },
  { component: <SEOIcon />, name: "SEO" },
  { component: <HostingIcon />, name: "Hosting" },
];

export default function Bratz() {
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
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        >
          Bratz
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
          <div className="bratz-para">
            This project was to build a responsive, multi-paged website that
            would adapt to any device. This project taught me to how to host my
            code on Github, as well as use advanced Bootstrap (Navigation,
            Utility Classes, etc), flexbox, Media Queries and more. I chose to
            build a website dedicated to my favourite dolls as a child and
            focused on building pages that introduced the dolls, showcase where
            to buy them and a page dedicated to their contact/social media
            information.
          </div>

          <div>
            <button className="bratz-git-button">
              <a
                href="https://github.com/rae8108/bratz-responsive"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div>
            <button className="bratz-web-button">
              <a
                href="https://silver-kitten-304eaf.netlify.app/"
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
          }}
        >
          <iframe
            src="https://silver-kitten-304eaf.netlify.app/"
            title="Embedded Website"
            width="700"
            height="500"
          ></iframe>
        </div>
      )}
    </div>
  );
}
