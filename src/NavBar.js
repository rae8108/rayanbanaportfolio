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
            <a href="#">Dictionary App</a>
            <a href="#">Weather App</a>
            <a href="#">Stephen Sanchez</a>
            <a href="#">Bratz</a>
            <a href="#">Quotes Generator</a>
          </div>
        </div>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}
