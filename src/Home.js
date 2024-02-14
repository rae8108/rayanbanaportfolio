import React from "react";
import "./Home.css";

export default function home() {
  return (
    <div className="Home">
      {/* <div>
        <p className="portfolio-list">Portfolio</p>
      </div> */}
      <div class="grid-container">
        <div className="grid-item">
          <h4>Dictonary App</h4>
          <div class="container">
            <iframe
              src="https://dictionary-project-sun.netlify.app/"
              title="dictionary-project"
            />
          </div>
          <a
            href="https://dictionary-project-sun.netlify.app/"
            class="contact-button"
            target="_blank"
            rel="noreferrer"
          >
            Click for Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
