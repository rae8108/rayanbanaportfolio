import React from "react";
import HTMLIcon from "./HTMLIcon";
import CSSIcon from "./CSSIcon";
import JSIcon from "./JSIcon";
import VSCodeIcon from "./VSCodeIcon";
import APIIcon from "./APIIcon.js";
import GitIcon from "./GitIcon.js";
import BootstrapIcon from "./BootstrapIcon.js";
import HostingIcon from "./HostingIcon.js";
import ReactIcon from "./ReactIcon.js";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div>
      <h2>Dictionary app</h2>
      <p>Languages used in this project:</p>
      <div className="dictionary-container">
        <div className="icon-container">
          <HTMLIcon />
        </div>
        <div className="icon-container">
          <CSSIcon />
        </div>
        <div className="icon-container">
          <JSIcon />
        </div>
        <div className="icon-container">
          <VSCodeIcon />
        </div>
        <div className="icon-container">
          <APIIcon />
        </div>
        <div className="icon-container">
          <GitIcon />
        </div>
        <div className="icon-container">
          <BootstrapIcon />
        </div>
        <div>
          <HostingIcon />
        </div>
        <div>
          <ReactIcon />
        </div>
      </div>
    </div>
  );
}
