import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CV from "./CV";

export default function NavBar() {
  return (
    <Link to="/cv" component={CV}>
      CV
    </Link>
  );
}

{
  /* <nav className="navbar">
<div className="logo">Portfolio</div>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li className="dropdown">
    <a href="#" className="dropbtn">
      Resume
    </a>
    <div className="dropdown-content">
      <Link to="/cv">CV</Link>
      <a href="/page2">Credentials</a>
    </div>
  </li>
  <li>
    <a href="/contact">Contact</a>
  </li>
</ul>
</nav> */
}
