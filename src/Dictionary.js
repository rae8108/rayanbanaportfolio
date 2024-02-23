import React from "react";
import HTMLIcon from "./HTMLIcon";
import CSSIcon from "./CSSIcon";
import JSIcon from "./JSIcon";
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
      </div>
    </div>
  );
}
