import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">RB</div>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <div className="dropdown">
          <a href="#" className="nav-link">
            Projects
          </a>
          <div className="dropdown-content">
            <a
              href="https://dictionary-project-sun.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Dictionary App
            </a>
            <a
              href="https://world-clock-rae.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              World Clock
            </a>
            <a
              href="https://sanchez-responsive.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Stephen Sanchez
            </a>
            <a
              href="https://silver-kitten-304eaf.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Bratz
            </a>
            <a
              href="https://positive-quotes-generator.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Quotes Generator
            </a>
          </div>
        </div>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}
