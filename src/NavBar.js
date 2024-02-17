import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="topnav">
      <a href="#name" className="name">
        RB
      </a>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
