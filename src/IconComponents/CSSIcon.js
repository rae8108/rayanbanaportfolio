import React from "react";
import "./CSSIcon.css";
import cssicon from "./cssicon.jpeg";

export default function CSSIcon() {
  return (
    <div>
      <img src={cssicon} alt="css-icon" className="css-icon" />
    </div>
  );
}
